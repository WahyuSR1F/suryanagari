import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CandiTemplate from './CandiTemplate';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const paragraphs = [
  "Gapura Wringin Lawang, yang secara harfiah diterjemahkan sebagai 'Pintu Beringin', adalah gerbang monumetal (Gapura Bentar) terbesar yang masih berdiri dari era Majapahit. Struktur batu bata merah raksasa ini menjulang setinggi belasan meter dengan desain simetris sempurna seolah membelah sebuah piramida menjadi dua bagian yang berhadapan.",
  "Arsitektur Gapura Bentar memiliki filosofi yang mendalam dalam kepercayaan Hindu Jawa. Bentuknya yang tidak beratap melambangkan batas transisi dari dunia luar (profan) menuju kawasan yang lebih suci (sakral). Tidak adanya atap juga diinterpretasikan sebagai keterbukaan Majapahit dalam menerima tamu, budaya, dan kepercayaan dari berbagai penjuru dunia nusantara maupun mancanegara.",
  "Teknik pembangunan gapura ini sangat mengagumkan. Struktur batu batanya disusun menggunakan teknik gosok tanpa menggunakan spesi semen modern, melainkan getah tumbuhan pelik untuk menyatukannya. Keakuratan presisi dari tumpukan bata ini menunjukkan tingginya keahlian arsitektur geometris para undagi (arsitek kuno) Majapahit pada abad ke-14.",
  "Banyak sejarawan meyakini bahwa Wringin Lawang adalah pintu masuk utama menuju pusat keraton atau kawasan permukiman penting para bangsawan dan mahapatih, mungkin kediaman Gajah Mada sendiri. Konon, dahulu terdapat dua pohon beringin (wringin) besar yang mengapit gerbang ini, memberikan keteduhan sekaligus kesan magis yang kuat bagi siapa saja yang melewatinya.",
  "Hari ini, Gapura Wringin Lawang berdiri kokoh di tengah lapangan hijau yang asri, menjadi spot foto ikonik dan saksi bisu kemegahan tata kota Trowulan. Menyentuh dinding bata merahnya seakan menyentuh urat nadi kemaharajaan terbesar di Nusantara, menginspirasi rasa bangga dan penghormatan akan tingginya peradaban nenek moyang kita."
];

const images = [
  "/images/Gapura Wringin Lawang/IMG-20260622-WA0041.jpg",
  "/images/Gapura Wringin Lawang/IMG-20260623-WA0171.jpg",
  "/images/Gapura Wringin Lawang/IMG-20260623-WA0172.jpg"
];

const timelineEvents = [
  {
    year: "Abad ke-14",
    title: "Masa Pembangunan",
    description: "Gapura Wringin Lawang dibangun sebagai gerbang utama menuju kompleks keraton Majapahit."
  },
  {
    year: "1350-1389",
    title: "Pemerintahan Hayam Wuruk",
    description: "Gapura menjadi simbol kemegahan dan keterbukaan Kerajaan Majapahit."
  },
  {
    year: "1478",
    title: "Keruntuhan Majapahit",
    description: "Gapura ditinggalkan setelah keruntuhan Kerajaan Majapahit."
  },
  {
    year: "1914",
    title: "Penemuan Kembali",
    description: "Arkeolog Belanda menemukan Gapura Wringin Lawang dan mempelajarinya."
  },
  {
    year: "Modern",
    title: "Objek Wisata Sejarah",
    description: "Gapura Wringin Lawang menjadi destinasi wisata dan simbol Trowulan."
  }
];

const GapuraWringinLawang = () => {
  useEffect(() => {
    // Create floating animated elements
    const floatAnimation1 = gsap.to(".float-element-9", {
      y: [0, -25, 0],
      x: [0, 20, 0],
      scale: [1, 1.05, 1],
      rotation: [0, 10, 0],
      duration: 8,
      repeat: -1,
      ease: "sine.inOut"
    });

    const floatAnimation2 = gsap.to(".float-element-10", {
      y: [0, 22, 0],
      x: [0, -18, 0],
      scale: [1, 0.95, 1],
      rotation: [0, -8, 0],
      duration: 7,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Animation for the gateway info box - REMOVED since we're removing footer animation
    /*gsap.from(".gateway-info", {
      scrollTrigger: {
        trigger: ".gateway-info",
        start: "top 90%",
      },
      opacity: 0,
      y: 50,
      skewX: -15,
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
        <div className="float-element-9 absolute top-1/3 right-1/5 w-44 h-44 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgPHBhdGggZD0iTTQwIDBMODAgMjBWNDBMODAgNjBMMzIgODBIMDBGNDIgNjBIMjBMMCA0MFYyMEw0MCAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGQ9Ik0yMCAxMEw0MCAyMEw2MCAxMEw4MCAyMFY0MEw2MCA1MEw4MCA2MFY4MEw2MCA3MEw0MCA4MEwyMCA3MEwwIDgwVjYwTDAgNDBMMCAyMEwyMCAxMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGQ9Ik0yMCAzMEEyIDIgMCAwIDEgMjQgMzRBMiAyIDAgMCAxIDIwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCAzMEEyIDIgMCAwIDEgNjQgMzRBMiAyIDAgMCAxIDYwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik0yMCA1MEEyIDIgMCAwIDEgMjQgNTRBMiAyIDAgMCAxIDIwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCA1MEEyIDIgMCAwIDEgNjQgNTRBMiAyIDAgMCAxIDYwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICA8L3BhdHRlcm4+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNiYXRpaykiLz4KPC9zdmc+')]"></div>
        <div className="float-element-10 absolute bottom-1/4 left-1/4 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrMiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0zMCAxMEw0NSAyMEwzMCAzMEwxNSAyMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8cGF0aCBkPSJNMTUgNDVMNDAgNjBMMjUgNDVIMTV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHBhdGggZD0iTTQ1IDQ1TDYwIDYwTDQ1IDQ1TDQ1IDM1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvcGF0dGVybj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2JhdGlrMikiLz4KPC9zdmc+')]"></div>
      </div>

      <CandiTemplate
        title="Gapura Wringin Lawang"
        images={images}
        paragraphs={paragraphs}
        timelineEvents={timelineEvents}
      />

      {/* Footer with batik-inspired design - no animation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#D4B896] to-[#C5A880] text-white p-4 z-50 border-t-2 border-[#2C1A0E]/20">
        <div className="container mx-auto text-center">
          <h3 className="font-bold text-sm">Pintu Menuju Keraton</h3>
          <p className="text-xs mt-1">Gerbang terbesar era Majapahit</p>
        </div>
      </footer>
    </div>
  );
};

export default GapuraWringinLawang;