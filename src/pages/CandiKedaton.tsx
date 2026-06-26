import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CandiTemplate from './CandiTemplate';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const paragraphs = [
  "Situs Candi Kedaton dan Sumur Upas menyimpan salah satu misteri terbesar dari Kerajaan Majapahit. Tidak seperti candi-candi lain yang menjulang ke atas, struktur arkeologi di sini merupakan kompleks fondasi batu bata yang luas, lorong-lorong rahasia, dan struktur heksagonal kuno. Para ahli meyakini bahwa area ini dulunya adalah bagian sentral dari keraton atau keraton kedaton tempat tinggal keluarga kerajaan dan pusat administrasi kemaharajaan.",
  "Keunikan arsitektur Candi Kedaton terletak pada sisa-sisa fondasinya yang berbentuk geometris presisi, menunjukkan tata kota (city planning) Majapahit yang sangat maju. Sistem drainase kuno yang ditemukan di area ini membuktikan tingginya tingkat rekayasa perairan, sebuah perpaduan antara kearifan lokal dan pengaruh teknis Hindu-Buddha dalam menjaga kebersihan dan kesucian kompleks istana.",
  "Di tengah kompleks ini terdapat Sumur Upas. Dalam bahasa Jawa Kuno, 'upas' berarti racun. Menurut cerita rakyat dan legenda setempat, sumur ini memancarkan gas beracun (atau menyimpan air beracun) yang sengaja digunakan sebagai mekanisme pertahanan keraton. Konon, musuh atau penyusup yang mencoba masuk ke pusat keraton melalui jalur bawah tanah akan menemui ajalnya di sumur ini.",
  "Selain berfungsi sebagai pertahanan, Sumur Upas juga memiliki dimensi spiritual. Dalam konsep tantrisme Hindu-Buddha, air (tirta) memainkan peran sentral. Sumur ini diduga terkait dengan ritual pembersihan pusaka (jamasan) atau ritual sakral para pemangku adat keraton sebelum menghadap raja. Kedalaman dan kegelapan sumur merepresentasikan dunia bawah (Bhurloka) tempat bersemayamnya kekuatan bumi.",
  "Saat ini, kunjungan ke Candi Kedaton membawa wisatawan seolah meniti jejak-jejak reruntuhan istana kuno yang hilang ditelan bumi. Proyek ekskavasi masih terus berjalan, namun sisa fondasi dan dinding-dinding bata tua ini sudah cukup untuk menceritakan betapa megah dan terstrukturnya pusat peradaban Nusantara di masa keemasan Majapahit."
];

const images = [
  "/images/Candi kedaton (sumur upas)/7de0c800d4cc0640854858fd6d528434.jpg",
  "/images/Candi kedaton (sumur upas)/Screenshot_20260621_194931_Chrome.jpg",
  "/images/Candi kedaton (sumur upas)/Screenshot_20260621_194951_Chrome.jpg"
];

const timelineEvents = [
  {
    year: "Abad ke-14",
    title: "Masa Pembangunan",
    description: "Kompleks Candi Kedaton dibangun sebagai pusat pemerintahan dan tempat tinggal keluarga kerajaan Majapahit."
  },
  {
    year: "1350-1389",
    title: "Pemerintahan Hayam Wuruk",
    description: "Masa kejayaan Kerajaan Majapahit, Candi Kedaton menjadi pusat administrasi kerajaan."
  },
  {
    year: "1478",
    title: "Keruntuhan Majapahit",
    description: "Setelah keruntuhan Majapahit, kompleks ini ditinggalkan dan terpendam."
  },
  {
    year: "1914",
    title: "Penemuan Kembali",
    description: "Arkeolog Belanda menemukan kembali kompleks Candi Kedaton dan Sumur Upas."
  },
  {
    year: "Modern",
    title: "Objek Wisata Sejarah",
    description: "Kompleks Candi Kedaton menjadi destinasi wisata sejarah penting di Trowulan."
  }
];

const CandiKedaton = () => {
  useEffect(() => {
    // Create floating animated elements
    const floatAnimation1 = gsap.to(".float-element-5", {
      y: [5, -15, 5],
      x: [10, -10, 10],
      rotation: [0, 5, 0],
      duration: 6,
      repeat: -1,
      ease: "sine.inOut"
    });

    const floatAnimation2 = gsap.to(".float-element-6", {
      y: [-10, 15, -10],
      x: [-5, 10, -5],
      rotation: [0, -5, 0],
      duration: 8,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Animation for the mystery info box - REMOVED since we're removing footer animation
    /*gsap.from(".mystery-info", {
      scrollTrigger: {
        trigger: ".mystery-info",
        start: "top 90%",
      },
      opacity: 0,
      scale: 0.7,
      rotationX: 90,
      duration: 1,
      ease: "back.out(1.7)"
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
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="float-element-5 absolute top-1/5 right-1/4 w-44 h-44 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgPHBhdGggZD0iTTQwIDBMODAgMjBWNDBMODAgNjBMMzIgODBIMDBGNDIgNjBIMjBMMCA0MFYyMEw0MCAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGQ9Ik0yMCAxMEw0MCAyMEw2MCAxMEw4MCAyMFY0MEw2MCA1MEw4MCA2MFY4MEw2MCA3MEw0MCA4MEwyMCA3MEwwIDgwVjYwTDAgNDBMMCAyMEwyMCAxMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGQ9Ik0yMCAzMEEyIDIgMCAwIDEgMjQgMzRBMiAyIDAgMCAxIDIwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCAzMEEyIDIgMCAwIDEgNjQgMzRBMiAyIDAgMCAxIDYwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik0yMCA1MEEyIDIgMCAwIDEgMjQgNTRBMiAyIDAgMCAxIDIwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCA1MEEyIDIgMCAwIDEgNjQgNTRBMiAyIDAgMCAxIDYwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICA8L3BhdHRlcm4+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNiYXRpaykiLz4KPC9zdmc+')]"></div>
        <div className="float-element-6 absolute bottom-1/4 left-1/3 w-36 h-36 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrMiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0zMCAxMEw0NSAyMEwzMCAzMEwxNSAyMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8cGF0aCBkPSJNMTUgNDVMNDAgNjBMMjUgNDVIMTV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHBhdGggZD0iTTQ1IDQ1TDYwIDYwTDQ1IDQ1TDQ1IDM1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvcGF0dGVybj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2JhdGlrMikiLz4KPC9zdmc+')]"></div>
      </div>
      
      <CandiTemplate
        title="Candi Kedaton & Sumur Upas"
        images={images}
        paragraphs={paragraphs}
        timelineEvents={timelineEvents}
      />
      
      {/* Footer with batik-inspired design - no animation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#D4B896] to-[#C5A880] text-white p-4 z-50 border-t-2 border-[#2C1A0E]/20">
        <div className="container mx-auto text-center">
          <h3 className="font-bold text-sm">Misteri Keraton</h3>
          <p className="text-xs">Lorong bawah tanah & sistem pertahanan</p>
        </div>
      </footer>
    </div>
  );
};

export default CandiKedaton;