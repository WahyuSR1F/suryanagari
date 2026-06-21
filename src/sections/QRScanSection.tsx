import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BookOpen, Trophy, CreditCard } from 'lucide-react'

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

const QR_MODULES = [
  [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1],
  [1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0],
  [1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1],
  [0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0],
  [1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1],
  [0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0],
  [1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1],
  [0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0],
  [1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1],
  [1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0],
  [1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1],
  [1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0],
  [1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1],
  [1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1],
  [1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0],
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
        opacity: 0,
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="qr-scan"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: '#F5EFE4' }}
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7A3218]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-[5%]">
        {/* Header */}
        <div className="qr-header text-center mb-14 md:mb-20">
          <p className="font-accent text-sm md:text-base italic text-[#7A3218]/70 mb-5 tracking-wide">
            Inovasi Digital
          </p>
          <h2
            className="font-display text-[#2C1A0E] leading-[1.2] mb-5"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            Scan QR, Petualangan Dimulai
          </h2>
          <p className="text-sm text-[#5C3A22]/70 font-body font-light max-w-lg mx-auto">
            Pengalaman wisata modern bertemu sejarah kuno. Scan QR code di
            setiap destinasi untuk membuka kisah-kisah tersembunyi.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Phone Mockup */}
          <div className="qr-phone flex justify-center">
            <div className="relative w-[260px] md:w-[300px]">
              {/* Phone frame */}
              <div className="relative bg-[#2C1A0E] rounded-[2.5rem] border-2 border-[#7A3218]/30 p-3 shadow-2xl shadow-[#7A3218]/10">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#2C1A0E] rounded-b-2xl z-10" />

                {/* Screen */}
                <div className="relative bg-[#1a0f06] rounded-[2rem] overflow-hidden aspect-[9/19]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4">

                    {/* Status bar */}
                    <div className="absolute top-4 left-0 right-0 flex justify-between px-5">
                      <span className="text-[8px] text-white/30 font-body">9:41</span>
                      <span className="text-[8px] text-white/30 font-body">●●●</span>
                    </div>

                    {/* App title */}
                    <p className="text-[10px] tracking-[0.25em] text-[#EDE4D6] font-body uppercase mt-4">
                      Majavent Scanner
                    </p>

                    {/* QR Viewfinder */}
                    <div className="relative w-44 h-44">
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

                    <p className="text-sm font-display text-white italic text-center">
                      Arahkan ke QR Code
                    </p>
                    <p className="text-[10px] text-white/40 font-body text-center">
                      Di setiap destinasi wisata
                    </p>

                    {/* Bottom nav mockup */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#2C1A0E]/90 backdrop-blur flex items-center justify-around px-6">
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
          <div className="space-y-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="qr-feature flex gap-5 p-5 rounded-xl bg-[#FAF7F2] border border-[#EDE4D6] hover:border-[#7A3218]/30 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7A3218]/10 flex items-center justify-center">
                  <feature.icon size={22} className="text-[#7A3218]" />
                </div>
                <div>
                  <h3 className="text-base font-display text-[#2C1A0E] mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#5C3A22]/75 font-body font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Demo QR card */}
            <div className="qr-feature mt-2 p-6 rounded-xl bg-[#FAF7F2] border border-[#EDE4D6] flex items-center gap-6">
              <div className="flex-shrink-0 rounded-lg overflow-hidden border border-[#EDE4D6] p-2 bg-white">
                <QRCodeSVG size={96} fg="#2C1A0E" bg="white" />
              </div>
              <div>
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
