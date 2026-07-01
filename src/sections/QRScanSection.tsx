import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BookOpen, Trophy, CreditCard, Camera, X } from 'lucide-react'
import CameraScanner from '../components/CameraScanner'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: BookOpen,
    title: 'Informasi Tempat',
    description:
      'Saat scan QR di lokasi, muncul cerita sejarah, fakta unik, legenda lokal, dan foto 360 derajat.',
  },
  {
    icon: Trophy,
    title: 'Quiz Interaktif',
    description:
      'Jawab pertanyaan edukasi tentang Majapahit, kumpulkan poin, dan dapatkan souvenir eksklusif.',
  },
  {
    icon: CreditCard,
    title: 'Digital Passport',
    description:
      'Kumpulkan stamp digital di setiap tempat yang dikunjungi. Lengkapi semua untuk hadiah spesial!',
  },
]

const quizPackets = [
  {
    id: 'candramawa',
    title: 'Candramawa',
    description: 'Quiz seputar candi-candi peninggalan Majapahit',
    link: 'https://forms.gle/TDozQYStTg6fai9w9',
    color: '#D4A373',
  },
  {
    id: 'sandyakala',
    title: 'Sandyakala',
    description: 'Quiz tentang senja dan kisah di balik peninggalan sejarah',
    link: 'https://forms.gle/sEhdLMkVhTzwMgWF8',
    color: '#A67C52',
  },
  {
    id: 'suryanagari',
    title: 'Suryanagari',
    description: 'Quiz mengenai kota-kota kerajaan Majapahit',
    link: 'https://forms.gle/Ho567oLwcj6NJ6j57',
    color: '#7A3218',
  },
]

const QuizModal = ({ onClose }: { onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
      gsap.fromTo(
        modalRef.current,
        { scale: 0.85, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* max-h + overflow-y-auto: mencegah modal kepotong di layar pendek (HP landscape / keyboard muncul) */}
      <div
        ref={modalRef}
        className="relative w-full max-w-md max-h-[85vh] overflow-y-auto rounded-2xl bg-[#FAF7F2] border border-[#EDE4D6] shadow-2xl"
      >
        <div className="sticky top-0 z-10 p-6 pb-4 border-b border-[#EDE4D6] bg-[#FAF7F2]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#EDE4D6] flex items-center justify-center hover:bg-[#D4C9B8] transition-colors"
          >
            <X size={16} className="text-[#2C1A0E]" />
          </button>
          <h3 className="font-display text-xl text-[#2C1A0E] mb-1 pr-10">Pilih Packet Quiz</h3>
          <p className="text-sm text-[#5C3A22]/70 font-body font-light">
            Pilih salah satu quiz interaktif di bawah ini
          </p>
        </div>
        <div className="p-4 space-y-3">
          {quizPackets.map((packet, index) => (
            <a
              key={packet.id}
              href={packet.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-[#EDE4D6] hover:border-[#7A3218]/40 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-display text-lg font-bold"
                style={{ backgroundColor: packet.color }}
              >
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-display text-base text-[#2C1A0E] group-hover:text-[#7A3218] transition-colors">
                  {packet.title}
                </h4>
                <p className="text-xs text-[#5C3A22]/60 font-body mt-0.5">
                  {packet.description}
                </p>
              </div>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EDE4D6] flex items-center justify-center group-hover:bg-[#7A3218] transition-colors">
                <svg className="w-4 h-4 text-[#2C1A0E] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

const QR_MODULES = [
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
  [0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0],
]

const QRCodeSVG = ({ size = 160, fg = '#2C1A0E', bg = '#FAF7F2' }: { size?: number; fg?: string; bg?: string }) => {
  const modules = 21
  const moduleSize = size / (modules + 4)
  const offset = moduleSize * 2

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <rect width={size} height={size} fill={bg} />
      {QR_MODULES.map((row, r) =>
        row.map((cell, c) =>
          cell === 1 ? (
            <rect
              key={`${r}-${c}`}
              x={offset + c * moduleSize}
              y={offset + r * moduleSize}
              width={moduleSize}
              height={moduleSize}
              fill={fg}
            />
          ) : null
        )
      )}
    </svg>
  )
}

const QRScanSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const scanLineRef = useRef<HTMLDivElement>(null)
  const quizCardRef = useRef<HTMLDivElement>(null)
  const [showScanner, setShowScanner] = useState(false)
  const [showQuizModal, setShowQuizModal] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.qr-header', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.qr-phone', {
        x: -60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.qr-feature', {
        x: 60,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
      })

      if (scanLineRef.current) {
        gsap.fromTo(
          scanLineRef.current,
          { top: '8px' },
          {
            top: 'calc(100% - 8px)',
            duration: 2,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          }
        )
      }

      // FIX: sebelumnya pakai `scale` (transform) yang bikin bounding box kartu
      // berubah-ubah dan bentrok dengan animasi stagger masuk (x: 60 -> 0) di
      // kartu yang sama, hasilnya kartu Quiz kelihatan lebih sempit/geser dari
      // 2 kartu lain. Diganti ke box-shadow pulse: efek "hidup" tetap dapat,
      // tapi ukuran/posisi kartu tidak pernah berubah -> selalu rata dengan kartu lain.
      if (quizCardRef.current) {
        gsap.to(quizCardRef.current, {
          boxShadow: '0 12px 28px -8px rgba(122,50,24,0.35)',
          duration: 1.2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="qr-scan"
      className="relative py-16 sm:py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: '#F5EFE4' }}
    >
      {/* Background accent: dikecilkan di mobile biar nggak nyebabin jank/overflow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[600px] sm:h-[600px] rounded-full bg-[#7A3218]/5 blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-[5%]">
        {/* Header */}
        <div className="qr-header text-center mb-10 sm:mb-14 md:mb-20">
          <p className="font-accent text-sm md:text-base italic text-[#7A3218]/70 mb-4 sm:mb-5 tracking-wide">
            Inovasi Digital
          </p>
          <h2
            className="font-display text-[#2C1A0E] leading-[1.2] mb-4 sm:mb-5"
            style={{ fontSize: 'clamp(1.6rem, 5vw, 3rem)' }}
          >
            Scan QR, Petualangan Dimulai
          </h2>
          <p className="text-sm text-[#5C3A22]/70 font-body font-light max-w-lg mx-auto px-2">
            Pengalaman wisata modern bertemu sejarah kuno. Scan QR code di
            setiap destinasi untuk membuka kisah-kisah tersembunyi.
          </p>
        </div>

        {/*
          FIX: tombol ini idealnya dipindah ke App.tsx / root layout supaya cuma
          ada 1 instance untuk seluruh halaman (bukan re-render tiap kali section
          ini mounted). Kalau tetap di sini, minimal beri jarak aman dari
          notch/gesture-bar HP dan pastikan nggak tabrakan sama floating button lain.
        */}
        <button
          onClick={() => setShowScanner(true)}
          className="fixed right-4 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#7A3218] rounded-full flex items-center justify-center shadow-lg shadow-black/30 hover:scale-110 transition-transform duration-300 group"
          style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 5.5rem)' }}
          aria-label="Scan QR Code"
        >
          <Camera size={22} className="text-white group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline-block absolute right-full mr-3 px-3 py-1.5 bg-[#FAF7F2] border border-[#EDE4D6] rounded-lg text-xs text-[#2C1A0E] font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-sm">
            Scan QR
          </span>
        </button>
        {showScanner && <CameraScanner onClose={() => setShowScanner(false)} />}
        {showQuizModal && <QuizModal onClose={() => setShowQuizModal(false)} />}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* Phone Mockup */}
          <div className="qr-phone flex justify-center order-1">
            <div className="relative w-[220px] xs:w-[240px] sm:w-[260px] md:w-[300px] max-w-full">
              {/* Phone frame */}
              <div className="relative bg-[#2C1A0E] rounded-[2.5rem] border-2 border-[#7A3218]/30 p-3 shadow-2xl shadow-[#7A3218]/10">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#2C1A0E] rounded-b-2xl z-10" />

                {/* Screen */}
                <div className="relative bg-[#1a0f06] rounded-[2rem] overflow-hidden aspect-[9/19]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4 px-3 sm:px-4">

                    {/* Status bar */}
                    <div className="absolute top-4 left-0 right-0 flex justify-between px-5">
                      <span className="text-[8px] text-white/30 font-body">9:41</span>
                      <span className="text-[8px] text-white/30 font-body">●●●</span>
                    </div>

                    {/* App title */}
                    <p className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-[#EDE4D6] font-body uppercase mt-4 text-center">
                      Majavent Scanner
                    </p>

                    {/* QR Viewfinder: pakai % dari lebar layar biar proporsional di semua ukuran telepon */}
                    <div className="relative w-[70%] aspect-square">
                      <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#7A3218]" />
                      <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#7A3218]" />
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#7A3218]" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#7A3218]" />

                      <div className="absolute inset-3 rounded-lg overflow-hidden flex items-center justify-center bg-white/5">
                        <QRCodeSVG size={140} fg="#EDE4D6" bg="transparent" />
                      </div>

                      {/* Animated scan line */}
                      <div
                        ref={scanLineRef}
                        className="absolute left-2 right-2 h-[2px] pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(90deg, transparent, #7A3218, transparent)',
                          boxShadow: '0 0 8px rgba(122,50,24,0.8)',
                          top: '8px',
                        }}
                      />
                    </div>

                    <p className="text-xs sm:text-sm font-display text-white italic text-center px-2">
                      Arahkan ke QR Code
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-white/40 font-body text-center px-2">
                      Di setiap destinasi wisata
                    </p>

                    {/* Bottom nav mockup */}
                    <div className="absolute bottom-0 left-0 right-0 h-11 sm:h-12 bg-[#2C1A0E]/90 backdrop-blur flex items-center justify-around px-4 sm:px-6">
                      <div className="w-5 h-5 rounded-sm bg-[#7A3218]/50" />
                      <div className="w-8 h-8 rounded-full bg-[#7A3218] flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-[#2C1A0E] rounded-sm" />
                      </div>
                      <div className="w-5 h-5 rounded-sm bg-[#7A3218]/20" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-6 bg-[#7A3218]/5 rounded-[3rem] blur-2xl -z-10" />
            </div>
          </div>

          {/* Features + Demo QR */}
          <div className="space-y-4 sm:space-y-5 order-2 w-full">
            {features.map((feature, index) => {
              const isQuiz = feature.title === 'Quiz Interaktif'
              return (
                <div
                  key={index}
                  ref={isQuiz ? quizCardRef : null}
                  onClick={isQuiz ? () => setShowQuizModal(true) : undefined}
                  // FIX: w-full + box-border eksplisit di semua kartu supaya lebar
                  // selalu identik dan konsisten, tidak peduli state animasi/hover.
                  className={`qr-feature w-full box-border flex gap-4 sm:gap-5 p-4 sm:p-5 rounded-xl bg-[#FAF7F2] border transition-shadow duration-300 ${isQuiz
                      ? 'border-[#7A3218]/40 cursor-pointer hover:border-[#7A3218]'
                      : 'border-[#EDE4D6] hover:border-[#7A3218]/30'
                    }`}
                >
                  <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#7A3218]/10 flex items-center justify-center">
                    <feature.icon size={20} className="text-[#7A3218]" />
                  </div>
                  {/* FIX: min-w-0 supaya teks bisa wrap dan nggak dorong lebar card */}
                  <div className="min-w-0">
                    <h3 className="text-base font-display text-[#2C1A0E] mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#5C3A22]/75 font-body font-light leading-relaxed break-words">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}

            {/* Demo QR card: FIX flex-col di mobile biar nggak berdempetan/overflow */}
            <div className="qr-feature w-full box-border mt-2 p-5 sm:p-6 rounded-xl bg-[#FAF7F2] border border-[#EDE4D6] flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <div className="flex-shrink-0 rounded-lg overflow-hidden border border-[#EDE4D6] p-2 bg-white">
                <QRCodeSVG size={88} fg="#2C1A0E" bg="white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs tracking-[0.18em] text-[#7A3218] font-body uppercase mb-1.5 font-medium">
                  Coba Scan
                </p>
                <p className="text-sm font-display text-[#2C1A0E] mb-1">
                  QR Demo Majavent
                </p>
                <p className="text-xs text-[#5C3A22]/60 font-body leading-relaxed">
                  Arahkan kamera Anda ke QR ini untuk melihat tampilan pengalaman digital wisata Trowulan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QRScanSection