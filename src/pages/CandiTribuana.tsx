import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CandiTemplate from './CandiTemplate';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const paragraphs = [
  "Candi Tribuana Tunggadewi, atau yang dalam konteks lebih luas sering dikaitkan dengan Candi Rimbi, merupakan salah satu peninggalan bersejarah yang didedikasikan untuk menghormati Ratu Tribuana Tunggadewi. Beliau adalah penguasa perempuan Majapahit yang tangguh, ibunda dari Hayam Wuruk, dan sosok kunci yang membuka jalan menuju puncak kejayaan kerajaan melalui Sumpah Palapa Gajah Mada.",
  "Secara arsitektur, situs-situs yang didedikasikan untuk Tribuana Tunggadewi memiliki corak seni Hindu Siwa yang sangat kental. Fondasi bangunan didesain dengan bentuk bujur sangkar yang stabil, melambangkan kekuatan dan keteguhan sang Ratu. Relief-relief yang menghiasi kaki candi sering kali memuat ajaran moral dan cerita epik, yang dipahat dengan gaya pewayangan (dua dimensi) yang menjadi ciri transisi seni klasik Jawa Timur.",
  "Lebih dari sekadar struktur fisik, arsitektur peninggalan ini adalah representasi dari konsep 'Dewa Raja', di mana sang ratu setelah wafat dianggap bersatu dengan dewa sesembahannya. Arca Parwati yang ditemukan dalam kaitannya dengan Tribuana Tunggadewi menyimbolkan sang ratu sebagai manifestasi dewi kesuburan dan kekuatan feminin semesta (Shakti).",
  "Seni ukir dan ornamen pada candi ini juga memperlihatkan perpaduan elemen Hindu-Buddha yang harmonis. Kala-makara di atas pintu masuk tidak lagi dibuat menyeramkan seperti pada periode Jawa Tengah, melainkan lebih dekoratif dengan sulur-sulur daun yang melambangkan kehidupan dan pertumbuhan kerajaan Majapahit di bawah kepemimpinan ratu.",
  "Kunjungan ke situs ini bukan sekadar wisata sejarah biasa. Tempat ini menjadi wisata rohani yang mengingatkan kita pada kekuatan kepemimpinan perempuan di Nusantara. Di tengah suasana situs yang hening dan dilingkupi pepohonan, kita diajak untuk merefleksikan keberanian, kebijaksanaan, serta cinta kasih seorang ibu sekaligus pemimpin besar sejarah Indonesia."
];

const images = [
  "/images/Candi Tribuana Tunggadewi/IMG-20260622-WA0039.jpg",
  "/images/Candi Tribuana Tunggadewi/IMG-20260623-WA0166.jpg",
  "/images/Candi Tribuana Tunggadewi/IMG-20260623-WA0167.jpg"
];

const timelineEvents = [
  {
    year: "1329-1350",
    title: "Masa Pemerintahan Tribuana Tunggadewi",
    description: "Ratu Tribuana Tunggadewi memerintah Majapahit dan meletakkan dasar untuk masa kejayaan kerajaan."
  },
  {
    year: "1350",
    title: "Transisi Kepemimpinan",
    description: "Tribuana Tunggadewi menyerahkan kekuasaan kepada putranya, Hayam Wuruk, dan memperkenalkan Gajah Mada."
  },
  {
    year: "Abad ke-14",
    title: "Pembangunan Candi",
    description: "Candi Tribuana Tunggadewi dibangun sebagai penghargaan terhadap sang ratu yang hebat."
  },
  {
    year: "1478",
    title: "Keruntuhan Majapahit",
    description: "Candi ditinggalkan setelah keruntuhan Kerajaan Majapahit."
  },
  {
    year: "Modern",
    title: "Objek Wisata Sejarah",
    description: "Candi Tribuana Tunggadewi menjadi destinasi wisata dan penelitian sejarah."
  }
];

const CandiTribuana = () => {
  useEffect(() => {
    // Create floating animated elements
    const floatAnimation1 = gsap.to(".float-element-7", {
      y: [0, -20, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
      duration: 7,
      repeat: -1,
      ease: "sine.inOut"
    });

    const floatAnimation2 = gsap.to(".float-element-8", {
      y: [0, 18, 0],
      x: [0, -12, 0],
      scale: [1, 0.9, 1],
      duration: 6,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Animation for the queen tribute info box - REMOVED since we're removing footer animation
    /*gsap.from(".queen-info", {
      scrollTrigger: {
        trigger: ".queen-info",
        start: "top 90%",
      },
      opacity: 0,
      x: 70,
      rotationY: -90,
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
        <div className="float-element-7 absolute top-1/4 left-1/5 w-40 h-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgPHBhdGggZD0iTTQwIDBMODAgMjBWNDBMODAgNjBMMzIgODBIMDBGNDIgNjBIMjBMMCA0MFYyMEw0MCAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGQ9Ik0yMCAxMEw0MCAyMEw2MCAxMEw4MCAyMFY0MEw2MCA1MEw4MCA2MFY4MEw2MCA3MEw0MCA4MEwyMCA3MEwwIDgwVjYwTDAgNDBMMCAyMEwyMCAxMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGQ9Ik0yMCAzMEEyIDIgMCAwIDEgMjQgMzRBMiAyIDAgMCAxIDIwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCAzMEEyIDIgMCAwIDEgNjQgMzRBMiAyIDAgMCAxIDYwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik0yMCA1MEEyIDIgMCAwIDEgMjQgNTRBMiAyIDAgMCAxIDIwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCA1MEEyIDIgMCAwIDEgNjQgNTRBMiAyIDAgMCAxIDYwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICA8L3BhdHRlcm4+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNiYXRpaykiLz4KPC9zdmc+')]"></div>
        <div className="float-element-8 absolute bottom-1/3 right-1/4 w-36 h-36 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrMiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0zMCAxMEw0NSAyMEwzMCAzMEwxNSAyMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8cGF0aCBkPSJNMTUgNDVMNDAgNjBMMjUgNDVIMTV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHBhdGggZD0iTTQ1IDQ1TDYwIDYwTDQ1IDQ1TDQ1IDM1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvcGF0dGVybj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2JhdGlrMikiLz4KPC9zdmc+')]"></div>
      </div>
      
      <CandiTemplate
        title="Candi Tribuana Tunggadewi"
        images={images}
        paragraphs={paragraphs}
        timelineEvents={timelineEvents}
      />
      
      {/* Footer with batik-inspired design - no animation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#D4B896] to-[#C5A880] text-white p-4 z-50 border-t-2 border-[#2C1A0E]/20">
        <div className="container mx-auto text-center">
          <h3 className="font-bold text-sm">Ratu Perempuan Hebat</h3>
          <p className="text-xs">Ibunda Hayam Wuruk & pemimpin bijaksana</p>
        </div>
      </footer>
    </div>
  );
};

export default CandiTribuana;