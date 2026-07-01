import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to(textRef.current, {
        yPercent: -50,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '50% top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full"
        style={{ height: '130%', top: '-15%' }}
      >
        <img
          src="/images/hero-bg.jpg"
          alt="Candi Bajang Ratu Trowulan"
          // Object-position gerbang: desktop center, mobile dikunci ke 49% 45%
          // (sudah dikonfirmasi pas lewat tuning).
          className="w-full h-full object-cover object-center max-md:object-[49%_45%]"
        />
        {/* Dark overlay — softer */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(44,26,14,0.25) 0%, rgba(44,26,14,0.55) 65%, rgba(44,26,14,0.85) 100%)',
          }}
        />

        {/* Batik pattern overlay */}

      </div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center max-w-2xl mx-auto"
      >
        <p className="font-accent text-sm md:text-base italic text-white/50 mb-5 tracking-wider relative">
          Est. 2026 — Trowulan, Mojokerto
        </p>

        <h1
          className="font-display text-white leading-[1.15] mb-5 relative"
          style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}
        >
          Rasakan Keagungan Majapahit
        </h1>

        <p className="text-sm md:text-[15px] text-white/65 font-body font-light leading-relaxed mb-9 max-w-md relative">
          Perjalanan sejarah, budaya, dan spiritual yang tak terlupakan di
          jantung Kerajaan Majapahit.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 relative">
          <button
            onClick={() => scrollTo('paket')}
            className="px-7 py-2.5 bg-[#7A3218] text-white text-sm tracking-wider uppercase font-body font-medium rounded-lg hover:bg-[#5e2612] transition-colors duration-400 relative z-10"
          >
            Lihat Paket Wisata
            <div className="absolute inset-0 rounded-lg border border-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxwYXRoIGQ9Ik0wIDBMNDAgMTBMMjAgMjBMMC4wMDEgMTBaIE0wIDMwTDIwIDQwTDQwIDMwTDIwIDIwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8L3N2Zz4K')] border-dashed opacity-20 pointer-events-none"></div>
          </button>
          <button
            onClick={() => scrollTo('tentang')}
            className="px-7 py-2.5 border border-white/30 text-white text-sm tracking-wider uppercase font-body rounded-lg hover:border-white/60 hover:bg-white/5 transition-all duration-400 relative z-10"
          >
            Jelajahi
            <div className="absolute inset-0 rounded-lg border border-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxwYXRoIGQ9Ik0wIDBMNDAgMTBMMjAgMjBMMC4wMDEgMTBaIE0wIDMwTDIwIDQwTDQwIDMwTDIwIDIwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8L3N2Zz4K')] border-dashed opacity-20 pointer-events-none"></div>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('tentang')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator text-white/40 hover:text-white/70 transition-colors duration-300 relative"
      >
        <ChevronDown size={26} />
        <div className="absolute -inset-2 rounded-full border border-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxwYXRoIGQ9Ik0wIDBMNDAgMTBMMjAgMjBMMC4wMDEgMTBaIE0wIDMwTDIwIDQwTDQwIDMwTDIwIDIwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8L3N2Zz4K')] border-dashed opacity-10 pointer-events-none"></div>
      </button>
    </section>
  )
}

export default HeroSection;