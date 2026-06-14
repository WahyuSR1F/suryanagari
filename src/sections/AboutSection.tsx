import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="tentang"
      className="relative py-24 md:py-40"
      style={{ backgroundColor: '#050401' }}
    >
      <div
        ref={contentRef}
        className="max-w-[700px] mx-auto px-[5%] text-center"
      >
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[rgba(251,249,241,0.5)] mb-8 font-body italic">
          Mengenal Trowulan
        </p>

        <h2
          className="font-display text-[#FBF9F1] leading-[1.2] mb-10"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
        >
          Wisata Rohani, Sejarah, dan Budaya Trowulan
        </h2>

        <p className="text-sm md:text-base text-[#FBF9F1]/80 font-body font-light leading-[1.8] mb-6">
          Wisata Trowulan merupakan salah satu objek wisata rohani, sejarah, dan
          budaya yang berada di Trowulan, Cibarusah, Bekasi. Trowulan juga
          memiliki tujuh destinasi wisata yang siap untuk dieksplorasi bersama
          keluarga, sahabat, dan rekan-rekan.
        </p>

        <p className="text-sm md:text-base text-[#FBF9F1]/60 font-body font-light leading-[1.8]">
          Kami menawarkan tiga paket wisata unik — Suryanagari, Sandyakala, dan
          Candramawa — masing-masing dirancang untuk memberikan pengalaman
          mendalam tentang kejayaan Kerajaan Majapahit, mulai dari matahari
          terbit hingga ritual purnama yang sakral.
        </p>

        <div className="mt-16 grid grid-cols-3 gap-8">
          <div className="text-center">
            <p
              className="font-display text-[#A8894B] mb-2"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              7
            </p>
            <p className="text-xs tracking-[0.15em] uppercase text-[#FBF9F1]/50 font-body">
              Destinasi
            </p>
          </div>
          <div className="text-center">
            <p
              className="font-display text-[#A8894B] mb-2"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              3
            </p>
            <p className="text-xs tracking-[0.15em] uppercase text-[#FBF9F1]/50 font-body">
              Paket Wisata
            </p>
          </div>
          <div className="text-center">
            <p
              className="font-display text-[#A8894B] mb-2"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              1K+
            </p>
            <p className="text-xs tracking-[0.15em] uppercase text-[#FBF9F1]/50 font-body">
              Pengunjung
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
