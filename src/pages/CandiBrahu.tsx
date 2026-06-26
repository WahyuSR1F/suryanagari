import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CandiTemplate from './CandiTemplate';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const paragraphs = [
  "Candi Brahu adalah salah satu struktur purbakala terbesar dan paling terkemuka di kawasan bersejarah Trowulan. Berbeda dengan candi-candi lain yang sering difungsikan sebagai makam atau tempat pemujaan Hindu, sejarah dan gaya arsitektur Candi Brahu menunjukkan bahwa ia merupakan peninggalan bercorak agama Buddha. Material utamanya menggunakan batu bata merah dengan presisi tinggi tanpa spesi semen, sebuah keahlian teknik sipil Majapahit yang sangat maju di zamannya.",
  "Bentuk Candi Brahu sangat unik; ia tidak memiliki bentuk piramida berundak tajam seperti candi Hindu, melainkan tubuh yang ramping dan meninggi, serta bagian atap yang mengesankan bentuk stupa—simbol khas dalam arsitektur Buddha. Siluet melingkar pada bagian atas candi ini melambangkan kekosongan (Sunyata) dan pencerahan, yang menjadi tujuan utama dalam ajaran Buddha Mahayana yang berkembang di Majapahit.",
  "Dalam kajian arkeologi, Candi Brahu dikaitkan erat dengan kegiatan kremasi. Menurut legenda dan beberapa prasasti, tempat ini konon difungsikan sebagai lokasi pembakaran jenazah (krematorium) raja-raja besar Majapahit, termasuk Hayam Wuruk. Meski penggalian lebih lanjut tidak menemukan bukti abu jenazah di dalamnya, mitos ini terus melekat dan memberikan nuansa magis yang kuat bagi siapa pun yang mengunjunginya.",
  "Perpaduan seni bangunan ini menunjukkan semangat toleransi dan sinkretisme pada masa Majapahit, di mana agama Hindu (Siwa) dan Buddha berkembang secara harmonis berdampingan. Ruang bilik di dalam candi yang kini kosong, dulunya diperkirakan berisi arca Buddha Akshobhya atau arca-arca suci lainnya yang menjadi pusat meditasi.",
  "Saat ini, Candi Brahu berdiri di tengah hamparan taman hijau yang asri. Saat senja tiba, rona jingga matahari memantul pada dinding bata merahnya, menciptakan pemandangan yang spektakuler. Pengunjung dapat duduk diam di pelataran candi, merasakan ketenangan angin sore, dan membayangkan kejayaan Nusantara berabad-abad silam."
];

const images = [
  "/images/Candi Brahu/IMG-20260623-WA0163.jpg",
  "/images/Candi Brahu/IMG-20260623-WA0164.jpg",
  "/images/Candi Brahu/IMG-20260623-WA0165.jpg"
];

const timelineEvents = [
  {
    year: "Abad ke-14",
    title: "Masa Pembangunan",
    description: "Candi Brahu dibangun pada masa kejayaan Kerajaan Majapahit sebagai tempat pemujaan Buddha."
  },
  {
    year: "1350-1389",
    title: "Pemerintahan Hayam Wuruk",
    description: "Dipercaya sebagai masa ketika Candi Brahu digunakan untuk kegiatan keagamaan dan kremasi raja."
  },
  {
    year: "1478",
    title: "Keruntuhan Majapahit",
    description: "Candi Brahu ditinggalkan setelah keruntuhan Kerajaan Majapahit."
  },
  {
    year: "1914",
    title: "Penemuan Kembali",
    description: "Arkeolog Belanda menemukan kembali Candi Brahu dan mempelajarinya secara ilmiah."
  },
  {
    year: "Modern",
    title: "Objek Wisata Sejarah",
    description: "Candi Brahu menjadi destinasi wisata sejarah dan objek penelitian arkeologi."
  }
];

const CandiBrahu = () => {
  useEffect(() => {
    // Create floating animated elements
    const floatAnimation1 = gsap.to(".float-element-3", {
      y: [0, -15, 0],
      x: [0, 10, 0],
      rotation: [0, 10, 0],
      duration: 7,
      repeat: -1,
      ease: "sine.inOut"
    });

    const floatAnimation2 = gsap.to(".float-element-4", {
      y: [0, 12, 0],
      x: [0, -8, 0],
      rotation: [0, -8, 0],
      duration: 5,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Animation for the timeline info box - REMOVED since we're removing footer animation
    /*gsap.from(".timeline-info", {
      scrollTrigger: {
        trigger: ".timeline-info",
        start: "top 90%",
      },
      opacity: 0,
      x: 50,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.5
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
        <div className="float-element-3 absolute top-1/3 right-20 w-40 h-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgPHBhdGggZD0iTTQwIDBMODAgMjBWNDBMODAgNjBMMzIgODBIMDBGNDIgNjBIMjBMMCA0MFYyMEw0MCAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGQ9Ik0yMCAxMEw0MCAyMEw2MCAxMEw4MCAyMFY0MEw2MCA1MEw4MCA2MFY4MEw2MCA3MEw0MCA4MEwyMCA3MEwwIDgwVjYwTDAgNDBMMCAyMEwyMCAxMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGQ9Ik0yMCAzMEEyIDIgMCAwIDEgMjQgMzRBMiAyIDAgMCAxIDIwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCAzMEEyIDIgMCAwIDEgNjQgMzRBMiAyIDAgMCAxIDYwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik0yMCA1MEEyIDIgMCAwIDEgMjQgNTRBMiAyIDAgMCAxIDIwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCA1MEEyIDIgMCAwIDEgNjQgNTRBMiAyIDAgMCAxIDYwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICA8L3BhdHRlcm4+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNiYXRpaykiLz4KPC9zdmc+')]"></div>
        <div className="float-element-4 absolute bottom-1/4 left-1/4 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrMiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0zMCAxMEw0NSAyMEwzMCAzMEwxNSAyMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8cGF0aCBkPSJNMTUgNDVMNDAgNjBMMjUgNDVIMTV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHBhdGggZD0iTTQ1IDQ1TDYwIDYwTDQ1IDQ1TDQ1IDM1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvcGF0dGVybj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2JhdGlrMikiLz4KPC9zdmc+')]"></div>
      </div>
      
      <CandiTemplate
        title="Candi Brahu"
        images={images}
        paragraphs={paragraphs}
        timelineEvents={timelineEvents}
      />
      
      {/* Footer with batik-inspired design - no animation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#D4B896] to-[#C5A880] text-white p-4 z-50 border-t-2 border-[#2C1A0E]/20">
        <div className="container mx-auto text-center">
          <h3 className="font-bold text-sm">Periode Pembangunan</h3>
          <p className="text-xs">Abad ke-14 M, Kerajaan Majapahit</p>
        </div>
      </footer>
    </div>
  );
};

export default CandiBrahu;