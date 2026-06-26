import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CandiTemplate from './CandiTemplate';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const paragraphs = [
  "Candi Bajang Ratu merupakan salah satu mahakarya arsitektur peninggalan Kerajaan Majapahit yang berdiri megah di kawasan Trowulan. Bangunan ini sebenarnya adalah sebuah gapura berjenis 'Paduraksa', yaitu pintu gerbang yang memiliki atap menyatu. Berdiri kokoh dengan material batu bata merah yang menjadi ciri khas bangunan Majapahit, candi ini memancarkan aura kebesaran masa lalu Nusantara.",
  "Dari sisi arsitektur, atap candi ini dibuat bersusun-susun meninggi, sebuah representasi dari Gunung Meru dalam kosmologi Hindu-Buddha yang dipercaya sebagai tempat bersemayamnya para dewa. Ornamen-ornamen yang menghiasi tubuh bangunan ini sangat detail, termasuk relief ukiran daun, kala-makara di atas pintu, hingga relief-relief kecil yang mengisahkan penggalan cerita Sri Tanjung, yang melambangkan ruwatan atau penyucian jiwa.",
  "Keberadaan Candi Bajang Ratu juga mencerminkan kuatnya sinkretisme atau perpaduan seni Hindu dan Buddha pada masa Majapahit. Struktur Paduraksa yang menjulang ke langit sering kali dikaitkan dengan upaya spiritual untuk menghubungkan mikrokosmos (dunia manusia) dengan makrokosmos (dunia roh dan dewa). Relief sayap di sisi kanan dan kiri gapura menyimbolkan kemampuan melepaskan diri dari ikatan duniawi menuju kebebasan sejati.",
  "Menurut catatan sejarah dan legenda setempat, Candi Bajang Ratu diyakini memiliki kaitan erat dengan Raja Jayanegara, raja kedua Majapahit. Kata 'Bajang' berarti kerdil atau cacat, sementara 'Ratu' berarti penguasa. Dipercaya bahwa gapura ini diresmikan setelah kematian Jayanegara sebagai bentuk penghormatan dan pintu masuk suci menuju bangunan suci lainnya yang kini mungkin telah tiada.",
  "Hingga kini, setiap cahaya matahari pagi yang menembus sela-sela bata merahnya selalu berhasil menghidupkan kembali pesona mistis nan elegan dari Candi Bajang Ratu. Para pengunjung yang hadir tidak hanya disuguhi keindahan visual, tetapi juga diajak untuk menyelami kedalaman filosofi budaya Jawa Kuno yang menghargai keseimbangan antara manusia, alam, dan Sang Pencipta."
];

const images = [
  "/images/Candi Bajangratu/IMG-20260623-WA0168.jpg",
  "/images/Candi Bajangratu/IMG-20260623-WA0169.jpg",
  "/images/Candi Bajangratu/IMG-20260623-WA0170.jpg"
];

const timelineEvents = [
  {
    year: "1309-1321",
    title: "Masa Pemerintahan Jayanegara",
    description: "Dipercaya sebagai masa pembangunan Candi Bajang Ratu sebagai bentuk penghormatan terhadap Raja Jayanegara."
  },
  {
    year: "Abad ke-14",
    title: "Puncak Kekaisaran Majapahit",
    description: "Candi Bajang Ratu menjadi bagian dari kompleks keraton Majapahit yang megah dan menjadi simbol kekuasaan."
  },
  {
    year: "1478",
    title: "Keruntuhan Majapahit",
    description: "Setelah keruntuhan Majapahit, candi ini ditinggalkan dan terpendam hingga ditemukan kembali."
  },
  {
    year: "1914",
    title: "Penemuan Kembali",
    description: "Candi Bajang Ratu ditemukan kembali oleh arkeolog Belanda dan mulai dipelajari secara ilmiah."
  },
  {
    year: "Modern",
    title: "Objek Wisata Sejarah",
    description: "Candi Bajang Ratu menjadi salah satu destinasi wisata sejarah penting di Trowulan."
  }
];

const BajangRatu = () => {
  useEffect(() => {
    // Create floating animated elements
    const floatAnimation1 = gsap.to(".float-element-1", {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      duration: 6,
      repeat: -1,
      ease: "sine.inOut"
    });

    const floatAnimation2 = gsap.to(".float-element-2", {
      y: [15, -15, 15],
      x: [10, -10, 10],
      duration: 8,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Animation for the history info box
    gsap.from(".history-info", {
      scrollTrigger: {
        trigger: ".history-info",
        start: "top 90%",
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "back.out(1.7)"
    });

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
        <div className="absolute top-1/4 left-10 w-48 h-48 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgPHBhdGggZD0iTTQwIDBMODAgMjBWNDBMODAgNjBMMzIgODBIMDBGNDIgNjBIMjBMMCA0MFYyMEw0MCAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGQ9Ik0yMCAxMEw0MCAyMEw2MCAxMEw4MCAyMFY0MEw2MCA1MEw4MCA2MFY4MEw2MCA3MEw0MCA4MEwyMCA3MEwwIDgwVjYwTDAgNDBMMCAyMEwyMCAxMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGQ9Ik0yMCAzMEEyIDIgMCAwIDEgMjQgMzRBMiAyIDAgMCAxIDIwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCAzMEEyIDIgMCAwIDEgNjQgMzRBMiAyIDAgMCAxIDYwIDMwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik0yMCA1MEEyIDIgMCAwIDEgMjQgNTRBMiAyIDAgMCAxIDIwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGQ9Ik02MCA1MEEyIDIgMCAwIDEgNjQgNTRBMiAyIDAgMCAxIDYwIDUwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICA8L3BhdHRlcm4+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNiYXRpaykiLz4KPC9zdmc+')]"></div>
        <div className="absolute bottom-1/3 right-16 w-36 h-36 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdHRlcm4gaWQ9ImJhdGlrMiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0zMCAxMEw0NSAyMEwzMCAzMEwxNSAyMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8cGF0aCBkPSJNMTUgNDVMNDAgNjBMMjUgNDVIMTV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHBhdGggZD0iTTQ1IDQ1TDYwIDYwTDQ1IDQ1TDQ1IDM1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRCODk2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0Qjg5NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEI4OTYiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvcGF0dGVybj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2JhdGlrMikiLz4KPC9zdmc+')]"></div>
      </div>

      <CandiTemplate
        title="Candi Bajang Ratu"
        images={images}
        paragraphs={paragraphs}
        timelineEvents={timelineEvents}
      />

      {/* Footer with batik-inspired design */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#D4B896] to-[#C5A880] text-white p-4 z-50 border-t-2 border-[#2C1A0E]/20">
        <div className="container mx-auto text-center">
          <h3 className="font-bold text-sm">Periode Pembangunan</h3>
          <p className="text-xs">Abad ke-14 M, Kerajaan Majapahit</p>
        </div>
      </footer>
    </div>
  );
};

export default BajangRatu;