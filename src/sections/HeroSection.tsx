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
      // Background parallax
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

      // Text fade out on scroll
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

  const scrollToPackages = () => {
    const el = document.getElementById('paket')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    const el = document.getElementById('tentang')
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
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(5,4,1,0.3) 0%, rgba(5,4,1,0.6) 70%, rgba(5,4,1,0.9) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
      >
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#FBF9F1]/60 mb-6 font-body">
          Est. 2026
        </p>

        <h1
          className="font-display text-[#FBF9F1] leading-[1.1] mb-6"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
        >
          Rasakan Keagungan
          <br />
          Majapahit
        </h1>

        <p className="text-sm md:text-base text-[#FBF9F1]/70 max-w-lg mb-10 font-body font-light leading-relaxed">
          Perjalanan Sejarah, Budaya, & Spiritual yang Tak Terlupakan di
          Trowulan, Mojokerto
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={scrollToPackages}
            className="px-8 py-3 bg-[#A8894B] text-[#050401] text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-[#FBF9F1] transition-colors duration-500"
          >
            Lihat Paket Wisata
          </button>
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 border border-[#FBF9F1]/30 text-[#FBF9F1] text-sm tracking-[0.15em] uppercase font-body hover:border-[#A8894B] hover:text-[#A8894B] transition-all duration-500"
          >
            Jelajahi
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator text-[#FBF9F1]/50 hover:text-[#A8894B] transition-colors duration-300"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}

export default HeroSection
