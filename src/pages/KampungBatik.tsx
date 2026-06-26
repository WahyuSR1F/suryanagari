import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CandiTemplate from './CandiTemplate';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const paragraphs = [
  "Kampung Batik Trowulan adalah jantung kebangkitan seni dan budaya kreatif peninggalan Majapahit. Di tengah gemuruh modernisasi, masyarakat lokal di kawasan ini berdedikasi untuk menghidupkan kembali wastra Nusantara kuno dengan menciptakan motif-motif batik tulis yang secara langsung diadaptasi dari ukiran, relief candi, dan simbol-simbol sejarah kemaharajaan.",
  "Motif yang paling ikonik adalah Surya Majapahit, lambang kebesaran berbentuk matahari bersudut delapan yang melambangkan dewa-dewa penjuru mata angin dalam kosmologi Hindu (Dewata Nawa Sanga). Ada juga motif sulur teratai (padma) yang dalam ajaran Buddha menyimbolkan pencerahan dan kesucian jiwa, serta pola-pola kawung dan parang kuno yang dulunya khusus dikenakan oleh kaum bangsawan.",
  "Proses pembuatan batik di sini bukan sekadar industri, melainkan prosesi seni yang sarat makna. Setiap canting yang digoreskan dan malam yang dilelehkan di atas kain katun mengandung doa dan pelestarian sejarah. Para pengrajin menggunakan pewarna alami dari ekstrak dedaunan, akar, dan kulit kayu untuk mereplikasi warna-warna membumi seperti cokelat soga (warna tanah), merah bata, dan nila pekat—warna-warna otentik dari masa lampau.",
  "Kampung Batik ini merupakan wujud nyata bagaimana seni Hindu-Buddha yang dulunya dipahat pada batu-batu candi yang kaku, kini bertransformasi menjadi mahakarya kain yang luwes dan bisa dipakai dalam keseharian. Ini adalah bukti bahwa peradaban Majapahit tidak mati bersama runtuhnya keraton, melainkan berevolusi dan hidup dalam nadi kebudayaan modern.",
  "Pengunjung yang datang ke Kampung Batik Trowulan tidak hanya bisa membeli kain batik sebagai cendera mata eksklusif, tetapi juga diajak untuk belajar membatik langsung dari para ahlinya. Pengalaman interaktif ini memberikan pemahaman mendalam tentang kesabaran, filosofi hidup, dan warisan kebudayaan yang agung."
];

const images = [
  "/images/Kampung Batik Trowulan/7e179c3f7061fdd367b7e9453793313c.jpg",
  "/images/Kampung Batik Trowulan/Screenshot_20260621_200641_Google.jpg",
  "/images/Kampung Batik Trowulan/Screenshot_20260621_200717_Google.jpg"
];

const timelineEvents = [
  {
    year: "Abad ke-14",
    title: "Masa Kejayaan Majapahit",
    description: "Motif-motif yang menjadi inspirasi batik Trowulan diciptakan dalam bentuk relief dan ukiran candi."
  },
  {
    year: "1478",
    title: "Keruntuhan Majapahit",
    description: "Tradisi seni Majapahit terpendam hingga ditemukan kembali dalam bentuk artefak."
  },
  {
    year: "1900-an",
    title: "Penemuan Kembali",
    description: "Arkeolog menemukan kembali motif-motif Majapahit dari relief candi Trowulan."
  },
  {
    year: "1980-an",
    title: "Pelestarian Budaya",
    description: "Masyarakat Trowulan mulai mengembangkan Kampung Batik sebagai bentuk pelestarian budaya."
  },
  {
    year: "Modern",
    title: "Destinasi Wisata Budaya",
    description: "Kampung Batik Trowulan menjadi destinasi wisata budaya yang menarik minat wisatawan."
  }
];

const KampungBatik = () => {
  useEffect(() => {
    // Create floating animated elements
    const floatAnimation1 = gsap.to(".float-element-11", {
      y: [0, -15, 0],
      x: [0, 10, 0],
      scale: [1, 1.1, 1],
      rotation: [0, 5, 0],
      duration: 6,
      repeat: -1,
      ease: "sine.inOut"
    });

    const floatAnimation2 = gsap.to(".float-element-12", {
      y: [0, 20, 0],
      x: [0, -12, 0],
      scale: [1, 0.9, 1],
      rotation: [0, -7, 0],
      duration: 9,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Animation for the craft info box - REMOVED since we're removing footer animation
    /*gsap.from(".craft-info", {
      scrollTrigger: {
        trigger: ".craft-info",
        start: "top 90%",
      },
      opacity: 0,
      scale: 0.5,
      rotation: 180,
      duration: 1,
      ease: "back.out(2)"
    });*/

    // Cleanup animations on unmount
    return () => {
      floatAnimation1.kill();
      floatAnimation2.kill();
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Enhanced batik pattern background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="float-element-11 absolute top-1/4 right-1/3 w-48 h-48 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgPHBhdGggZD0iTTQwIDBMODAgMjBWNDBMODAgNjBMMzIgODBIMDBGNDIgNjBIMjBMMCA0MFYyMEw0MCAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGQ9Ik0yMCAxMEw0MCAyMEw2MCAxMEw4MCAyMFY0MEw2MCA1MEw4MCA2MFY4MEw2MCA3MEw0MCA4MEwyMCA3MEwwIDgwVjYwTDAgNDBMMCAyMEwyMCAxMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGQ9Ik0yMCAzMEEyIDIgMCAwIDEgMjQgMzRBMiAyIDAgMCAxIDIwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCAzMEEyIDIgMCAwIDEgNjQgMzRBMiAyIDAgMCAxIDYwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik0yMCA1MEEyIDIgMCAwIDEgMjQgNTRBMiAyIDAgMCAxIDIwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCA1MEEyIDIgMCAwIDEgNjQgNTRBMiAyIDAgMCAxIDYwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICA8L3BhdHRlcm4+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNiYXRpaykiLz4KPC9zdmc+')]"></div>
        <div className="float-element-12 absolute bottom-1/5 left-1/4 w-40 h-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrMiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0zMCAxMEw0NSAyMEwzMCAzMEwxNSAyMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8cGF0aCBkPSJNMTUgNDVMNDAgNjBMMjUgNDVIMTV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHBhdGggZD0iTTQ1IDQ1TDYwIDYwTDQ1IDQ1TDQ1IDM1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvcGF0dGVybj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2JhdGlrMikiLz4KPC9zdmc+')]"></div>
      </div>
      
      <CandiTemplate
        title="Kampung Batik Trowulan"
        images={images}
        paragraphs={paragraphs}
        timelineEvents={timelineEvents}
      />
      
      {/* Footer with batik-inspired design - no animation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#D4B896] to-[#C5A880] text-white p-4 z-50 border-t-2 border-[#2C1A0E]/20">
        <div className="container mx-auto text-center">
          <h3 className="font-bold text-sm">Motif Warisan</h3>
          <p className="text-xs">Surya Majapahit & filosofi kain nusantara</p>
        </div>
      </footer>
    </div>
  );
};

export default KampungBatik;