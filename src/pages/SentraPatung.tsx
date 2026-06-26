import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CandiTemplate from './CandiTemplate';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const paragraphs = [
  "Trowulan tidak hanya mewariskan bangunan-bangunan candi bata merah yang megah, tetapi juga mewariskan keahlian seni memahat yang luar biasa kepada para penduduknya. Di Sentra Pembuatan Patung Trowulan, wisatawan dapat menyaksikan denyut nadi kreativitas seni pahat Nusantara yang terus bertahan dari gerusan zaman selama lebih dari tujuh abad.",
  "Kawasan ini dipenuhi oleh studio-studio terbuka dan pengrajin lokal yang dengan penuh dedikasi memahat bongkahan batu andesit atau mencetak logam kuningan. Mereka mereplikasi kembali arca-arca monumental dari era Hindu-Buddha klasik Jawa Timur. Anda akan dengan mudah menemukan pahatan arca Ganesha, Siwa Mahadewa, Parwati, hingga patung Buddha Gautama dengan mudra (sikap tangan) yang sempurna.",
  "Secara artistik, gaya pahatan patung Majapahit di Trowulan memiliki ciri khas transisional. Berbeda dengan arca Jawa Tengah yang terkesan bulat dan sangat realistis (seperti di Borobudur), arca-arca Majapahit seringkali mengadopsi gaya pewayangan—lebih kaku, ornamen perhiasan (mahkota, kelat bahu, upawita) yang sangat mendetail dan rumit, melambangkan keagungan dewa-raja.",
  "Perpaduan seni Hindu dan Buddha juga tampak nyata dari hasil pahatan para seniman lokal ini. Kadang kala, ikonografi Hindu seperti senjata Trisula atau padma digabungkan secara estetis dengan elemen Buddhis, mencerminkan era sinkretisme Tantrayana (Siwa-Buddha) yang menjadi ajaran resmi negara pada masa Raja Kertanegara hingga Majapahit.",
  "Berkunjung ke Sentra Pembuatan Patung adalah perjalanan menyaksikan roh masa lalu ditiupkan kembali ke dalam batu dan logam. Wisatawan dapat berinteraksi dengan para pemahat, melihat proses 'lost-wax casting' untuk kuningan yang otentik, serta membeli karya seni luar biasa ini untuk dibawa pulang sebagai pengingat akan kemegahan peradaban leluhur."
];

const images = [
  "/images/Sentra Pembuatan Patung Trowulan/Screenshot_20260621_200526_Google.jpg",
  "/images/Sentra Pembuatan Patung Trowulan/Screenshot_20260621_200601_Google.jpg",
  "/images/Sentra Pembuatan Patung Trowulan/d0103fddc79fd8321e40a00e8a029a5e.jpg"
];

const timelineEvents = [
  {
    year: "Abad ke-14",
    title: "Masa Kejayaan Majapahit",
    description: "Para seniman dan pemahat Majapahit menciptakan arca-arca monumental yang menjadi inspirasi saat ini."
  },
  {
    year: "1478",
    title: "Keruntuhan Majapahit",
    description: "Teknik-teknik pahat tradisional terpendam hingga ditemukan kembali."
  },
  {
    year: "1900-an",
    title: "Era Kolonial Belanda",
    description: "Arkeolog menemukan kembali arca-arca Majapahit dan mulai mempelajari teknik pahatnya."
  },
  {
    year: "1980-an",
    title: "Pelestarian Seni",
    description: "Masyarakat Trowulan mulai mempelajari dan melestarikan teknik pahat Majapahit."
  },
  {
    year: "Modern",
    title: "Sentra Kreatif",
    description: "Sentra Patung Trowulan menjadi pusat produksi replika arca Majapahit."
  }
];

const SentraPatung = () => {
  useEffect(() => {
    // Create floating animated elements
    const floatAnimation1 = gsap.to(".float-element-15", {
      y: [0, -22, 0],
      x: [0, 18, 0],
      scale: [1, 1.1, 1],
      rotation: [0, 12, 0],
      duration: 8,
      repeat: -1,
      ease: "sine.inOut"
    });

    const floatAnimation2 = gsap.to(".float-element-16", {
      y: [0, 15, 0],
      x: [0, -10, 0],
      scale: [1, 0.9, 1],
      rotation: [0, -8, 0],
      duration: 6,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Animation for the art info box - REMOVED since we're removing footer animation
    /*gsap.from(".art-info", {
      scrollTrigger: {
        trigger: ".art-info",
        start: "top 90%",
      },
      opacity: 0,
      scale: 0.3,
      rotationX: 180,
      duration: 1,
      ease: "back.out(2.5)"
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
        <div className="float-element-15 absolute top-1/4 right-1/4 w-48 h-48 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgPHBhdGggZD0iTTQwIDBMODAgMjBWNDBMODAgNjBMMzIgODBIMDBGNDIgNjBIMjBMMCA0MFYyMEw0MCAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGQ9Ik0yMCAxMEw0MCAyMEw2MCAxMEw4MCAyMFY0MEw2MCA1MEw4MCA2MFY4MEw2MCA3MEw0MCA4MEwyMCA3MEwwIDgwVjYwTDAgNDBMMCAyMEwyMCAxMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGQ9Ik0yMCAzMEEyIDIgMCAwIDEgMjQgMzRBMiAyIDAgMCAxIDIwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCAzMEEyIDIgMCAwIDEgNjQgMzRBMiAyIDAgMCAxIDYwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik0yMCA1MEEyIDIgMCAwIDEgMjQgNTRBMiAyIDAgMCAxIDIwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCA1MEEyIDIgMCAwIDEgNjQgNTRBMiAyIDAgMCAxIDYwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICA8L3BhdHRlcm4+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNiYXRpaykiLz4KPC9zdmc+')]"></div>
        <div className="float-element-16 absolute bottom-1/3 left-1/5 w-40 h-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrMiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0zMCAxMEw0NSAyMEwzMCAzMEwxNSAyMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8cGF0aCBkPSJNMTUgNDVMNDAgNjBMMjUgNDVIMTV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHBhdGggZD0iTTQ1IDQ1TDYwIDYwTDQ1IDQ1TDQ1IDM1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvcGF0dGVybj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2JhdGlrMikiLz4KPC9zdmc+')]"></div>
      </div>
      
      <CandiTemplate
        title="Sentra Pembuatan Patung"
        images={images}
        paragraphs={paragraphs}
        timelineEvents={timelineEvents}
      />
      
      {/* Footer with batik-inspired design - no animation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#D4B896] to-[#C5A880] text-white p-4 z-50 border-t-2 border-[#2C1A0E]/20">
        <div className="container mx-auto text-center">
          <h3 className="font-bold text-sm">Pusat Kreativitas</h3>
          <p className="text-xs">Replikasi arca Majapahit & seni pahat</p>
        </div>
      </footer>
    </div>
  );
};

export default SentraPatung;