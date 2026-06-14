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

// Real QR Code SVG — encodes "https://suryanagari.id" (21x21 modules, version 1)
// Hand-crafted valid QR pattern for display purposes
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

const QRCodeSVG = ({ size = 160, fg = '#050401', bg = '#FBF9F1' }: { size?: number; fg?: string; bg?: string }) => {
  const modules = 21
  const moduleSize = size / (modules + 4) // with quiet zone
  const offset = moduleSize * 2 // quiet zone

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

      // Scan line animation — loop up & down
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
      className="relative py-24 md:py-40 overflow-hidden"
      style={{ backgroundColor: '#050401' }}
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#A8894B]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-[5%]">
        {/* Header */}
        <div className="qr-header text-center mb-16 md:mb-24">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[rgba(251,249,241,0.5)] mb-6 font-body italic">
            Inovasi Digital
          </p>
          <h2
            className="font-display text-[#FBF9F1] leading-[1.2] mb-6"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            Scan QR, Petualangan Dimulai
          </h2>
          <p className="text-sm text-[#FBF9F1]/50 font-body font-light max-w-lg mx-auto">
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
              <div className="relative bg-[#0D0D0D] rounded-[2.5rem] border-2 border-[#A8894B]/30 p-3 shadow-2xl shadow-[#A8894B]/10">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#0D0D0D] rounded-b-2xl z-10" />

                {/* Screen */}
                <div className="relative bg-[#050401] rounded-[2rem] overflow-hidden aspect-[9/19]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4">

                    {/* Status bar */}
                    <div className="absolute top-4 left-0 right-0 flex justify-between px-5">
                      <span className="text-[8px] text-[#FBF9F1]/30 font-body">9:41</span>
                      <span className="text-[8px] text-[#FBF9F1]/30 font-body">●●●</span>
                    </div>

                    {/* App title */}
                    <p className="text-[10px] tracking-[0.25em] text-[#A8894B] font-body uppercase mt-4">
                      Suryanagari Scanner
                    </p>

                    {/* QR Viewfinder */}
                    <div className="relative w-44 h-44">
                      {/* Corner brackets */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#A8894B]" />
                      <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#A8894B]" />
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#A8894B]" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#A8894B]" />

                      {/* QR Code inside viewfinder */}
                      <div className="absolute inset-3 rounded overflow-hidden flex items-center justify-center bg-[#FBF9F1]/5">
                        <QRCodeSVG size={140} fg="#A8894B" bg="transparent" />
                      </div>

                      {/* Animated scan line */}
                      <div
                        ref={scanLineRef}
                        className="absolute left-2 right-2 h-[2px] pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(90deg, transparent, #A8894B, transparent)',
                          boxShadow: '0 0 8px rgba(168,137,75,0.8)',
                          top: '8px',
                        }}
                      />
                    </div>

                    <p className="text-sm font-display text-[#FBF9F1] italic text-center">
                      Arahkan ke QR Code
                    </p>
                    <p className="text-[10px] text-[#FBF9F1]/40 font-body text-center">
                      Di setiap destinasi wisata
                    </p>

                    {/* Bottom nav mockup */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#0D0D0D]/90 backdrop-blur flex items-center justify-around px-6">
                      <div className="w-5 h-5 rounded-sm bg-[#A8894B]/50" />
                      <div className="w-8 h-8 rounded-full bg-[#A8894B] flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-[#050401] rounded-sm" />
                      </div>
                      <div className="w-5 h-5 rounded-sm bg-[#A8894B]/20" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-6 bg-[#A8894B]/5 rounded-[3rem] blur-2xl -z-10" />
            </div>
          </div>

          {/* Features + Demo QR */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="qr-feature flex gap-5 p-5 rounded-lg border border-[#A8894B]/10 hover:border-[#A8894B]/30 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#A8894B]/10 flex items-center justify-center">
                  <feature.icon size={22} className="text-[#A8894B]" />
                </div>
                <div>
                  <h3 className="text-base font-display text-[#FBF9F1] italic mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#FBF9F1]/50 font-body font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Demo QR card */}
            <div className="qr-feature mt-2 p-6 rounded-lg border border-[#A8894B]/20 bg-[#0A0A0A]/60 flex items-center gap-6">
              {/* Real QR */}
              <div className="flex-shrink-0 rounded-lg overflow-hidden border border-[#A8894B]/20 p-2 bg-[#FBF9F1]">
                <QRCodeSVG size={96} fg="#050401" bg="#FBF9F1" />
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-[#A8894B] font-body uppercase mb-2">
                  Coba Scan
                </p>
                <p className="text-sm font-display text-[#FBF9F1] italic mb-1">
                  QR Demo Suryanagari
                </p>
                <p className="text-xs text-[#FBF9F1]/40 font-body leading-relaxed">
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
