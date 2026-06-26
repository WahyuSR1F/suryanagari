import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CandiTemplate from './CandiTemplate';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const paragraphs = [
  "Kawasan Jatisumber di Trowulan lebih dikenal bukan karena bangunan megahnya, melainkan karena atmosfer mistis dan kekayaan alam yang dipenuhi legenda sejarah. Di pusat kawasan ini berdirilah sebuah Pohon Keramat yang telah tumbuh selama ratusan tahun, menjadi saksi bisu pasang surutnya kehidupan di bekas ibu kota Kerajaan Majapahit ini.",
  "Secara filosofis, keberadaan pohon besar di tempat yang disucikan berkaitan erat dengan konsep 'Kalpataru' atau Pohon Kehidupan dalam ajaran Hindu-Buddha. Pohon ini melambangkan poros dunia yang menghubungkan dunia bawah (akar), dunia manusia (batang), dan dunia atas atau dewa (cabang dan daun). Keberadaannya dipercaya menjaga keseimbangan alam dan spiritual kawasan Trowulan.",
  "Menurut penuturan masyarakat setempat, Kawasan Jatisumber dulunya merupakan area pertapaan atau padepokan (mandala) bagi para pemuka agama, resi, dan bhiksu pada era Majapahit. Sumber air jernih yang ada di kawasan ini kerap digunakan untuk ritual penyucian diri (ruwatan) sebelum melakukan meditasi atau memanjatkan doa kepada Sang Pencipta.",
  "Sinkretisme budaya sangat terasa di tempat ini. Penghormatan terhadap alam (animisme-dinamisme lokal) berpadu harmonis dengan ajaran karma dan pembebasan jiwa (moksa). Ritual-ritual kecil seperti pembakaran dupa atau peletakan sesaji bunga oleh penduduk sekitar masih sering dijumpai, bukan sebagai bentuk syirik, melainkan tradisi turun-temurun untuk menghormati leluhur dan menjaga kelestarian alam.",
  "Bagi wisatawan modern, Kawasan Jatisumber menawarkan oase ketenangan (retreat) di tengah hiruk-pikuk kehidupan. Suara gemerisik daun tua, hembusan angin yang sejuk, dan akar-akar raksasa yang melilit bebatuan menciptakan lanskap magis. Tempat ini sangat sempurna untuk wisata rohani, yoga, meditasi, atau sekadar menepi sejenak untuk menemukan kembali kedamaian batin."
];

const images = [
  "/images/Kawasan Jatisumber (pohon keramat)/Screenshot_20260503_215932_Google.jpg",
  "/images/Kawasan Jatisumber (pohon keramat)/Screenshot_20260621_200849_Google.jpg",
  "/images/Kawasan Jatisumber (pohon keramat)/Screenshot_20260621_200941_Google.jpg"
];

const timelineEvents = [
  {
    year: "Abad ke-14",
    title: "Masa Kejayaan Majapahit",
    description: "Kawasan Jatisumber menjadi tempat pertapaan dan ritual kerajaan Majapahit."
  },
  {
    year: "1478",
    title: "Keruntuhan Majapahit",
    description: "Kawasan ditinggalkan dan mulai ditumbuhi vegetasi."
  },
  {
    year: "1900-an",
    title: "Era Kolonial Belanda",
    description: "Arkeolog Belanda mulai meneliti kawasan ini dan menemukan situs-situs penting."
  },
  {
    year: "1980-an",
    title: "Pelestarian Situs",
    description: "Pemerintah mulai memperhatikan kawasan ini sebagai situs budaya penting."
  },
  {
    year: "Modern",
    title: "Wisata Spiritual",
    description: "Kawasan Jatisumber menjadi destinasi wisata rohani dan spiritual."
  }
];

const KawasanJatisumber = () => {
  useEffect(() => {
    // Create floating animated elements
    const floatAnimation1 = gsap.to(".float-element-13", {
      y: [0, -18, 0],
      x: [0, 15, 0],
      scale: [1, 1.05, 1],
      rotation: [0, 8, 0],
      duration: 7,
      repeat: -1,
      ease: "sine.inOut"
    });

    const floatAnimation2 = gsap.to(".float-element-14", {
      y: [0, 25, 0],
      x: [0, -20, 0],
      scale: [1, 0.95, 1],
      rotation: [0, -10, 0],
      duration: 10,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Animation for the spiritual info box - REMOVED since we're removing footer animation
    /*gsap.from(".Spiritual-info", {
      scrollTrigger: {
        trigger: ".Spiritual-info",
        start: "top 90%",
      },
      opacity: 0,
      x: -70,
      rotationY: 90,
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
        <div className="float-element-13 absolute top-1/5 left-1/4 w-40 h-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgPHBhdGggZD0iTTQwIDBMODAgMjBWNDBMODAgNjBMMzIgODBIMDBGNDIgNjBIMjBMMCA0MFYyMEw0MCAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGQ9Ik0yMCAxMEw0MCAyMEw2MCAxMEw4MCAyMFY0MEw2MCA1MEw4MCA2MFY4MEw2MCA3MEw0MCA4MEwyMCA3MEwwIDgwVjYwTDAgNDBMMCAyMEwyMCAxMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGQ9Ik0yMCAzMEEyIDIgMCAwIDEgMjQgMzRBMiAyIDAgMCAxIDIwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCAzMEEyIDIgMCAwIDEgNjQgMzRBMiAyIDAgMCAxIDYwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik0yMCA1MEEyIDIgMCAwIDEgMjQgNTRBMiAyIDAgMCAxIDIwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCA1MEEyIDIgMCAwIDEgNjQgNTRBMiAyIDAgMCAxIDYwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICA8L3BhdHRlcm4+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNiYXRpaykiLz4KPC9zdmc+')]"></div>
        <div className="float-element-14 absolute bottom-1/4 right-1/3 w-36 h-36 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrMiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0zMCAxMEw0NSAyMEwzMCAzMEwxNSAyMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8cGF0aCBkPSJNMTUgNDVMNDAgNjBMMjUgNDVIMTV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHBhdGggZD0iTTQ1IDQ1TDYwIDYwTDQ1IDQ1TDQ1IDM1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvcGF0dGVybj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2JhdGlrMikiLz4KPC9zdmc+')]"></div>
      </div>
      
      <CandiTemplate
        title="Kawasan Jatisumber"
        images={images}
        paragraphs={paragraphs}
        timelineEvents={timelineEvents}
      />
      
      {/* Footer with batik-inspired design - no animation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#D4B896] to-[#C5A880] text-white p-4 z-50 border-t-2 border-[#2C1A0E]/20">
        <div className="container mx-auto text-center">
          <h3 className="font-bold text-sm">Wisata Rohani</h3>
          <p className="text-xs">Tempat meditasi & ketenangan batin</p>
        </div>
      </footer>
    </div>
  );
};

export default KawasanJatisumber;