import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    image: '/images/testimonial-1.jpg',
    name: 'Rina Wulandari',
    role: 'Travel Blogger',
    quote:
      'Pengalaman yang sangat mendalam. Majavent membawa saya menyusuri jejak sejarah Majapahit dengan cara yang begitu hidup dan autentik. Pemandu yang berpengetahuan luas membuat setiap destinasi terasa istimewa.',
  },
  {
    image: '/images/testimonial-2.jpg',
    name: 'Budi Santoso',
    role: 'Fotografer',
    quote:
      'Sebagai fotografer, saya sangat terkesan dengan pencahayaan dan komposisi setiap lokasi. Paket Sandyakala memberikan golden hour yang sempurna untuk fotografi. Hasil foto-foto saya dari Trowulan benar-benar luar biasa.',
  },
  {
    image: '/images/testimonial-3.jpg',
    name: 'Dewi & Andi',
    role: 'Pengunjung',
    quote:
      'Kami memilih paket Candramawa untuk bulan madu dan itu adalah keputusan terbaik. Ritual purnama di tengah candi-candi purba adalah pengalaman spiritual yang tidak akan pernah kami lupakan. Sangat direkomendasikan!',
  },
]

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonials-header', {
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[current]

  return (
    <section
      ref={sectionRef}
      id="testimoni"
      className="relative py-24 md:py-36"
      style={{ backgroundColor: '#EDE4D6' }}
    >
      <div className="max-w-[1000px] mx-auto px-[5%]">
        {/* Header */}
        <div className="testimonials-header text-center mb-14 md:mb-18">
          <p className="font-accent text-sm md:text-base italic text-[#7A3218]/70 mb-5 tracking-wide">
            Testimoni
          </p>
          <h2
            className="font-display text-[#2C1A0E] leading-[1.2]"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            Apa Kata Mereka
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Image */}
            <div className="flex-shrink-0 w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-[#7A3218]/20">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <Quote
                size={32}
                className="text-[#7A3218]/20 mb-4 mx-auto md:mx-0"
              />
              <p
                key={current}
                className="text-base md:text-lg text-[#5C3A22] font-body font-light leading-[1.8] mb-6 italic"
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-base font-display text-[#2C1A0E]">{t.name}</p>
              <p className="text-sm text-[#7A3218] font-body">{t.role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center md:justify-start gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#7A3218]/25 flex items-center justify-center text-[#5C3A22]/60 hover:text-[#7A3218] hover:border-[#7A3218]/50 transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'bg-[#7A3218] w-6'
                      : 'bg-[#5C3A22]/25 hover:bg-[#5C3A22]/40 w-2'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#7A3218]/25 flex items-center justify-center text-[#5C3A22]/60 hover:text-[#7A3218] hover:border-[#7A3218]/50 transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
