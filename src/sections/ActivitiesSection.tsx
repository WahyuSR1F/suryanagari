import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const activities = [
  {
    image: '/images/activity-1.jpg',
    title: 'Tur Bersejarah',
    description: 'Jelajahi situs-situs bersejarah dengan pemandu profesional',
    index: '01',
  },
  {
    image: '/images/activity-2.jpg',
    title: 'Meditasi & Yoga',
    description: 'Temukan kedamaian di tengah keagungan candi-candi purba',
    index: '02',
  },
  {
    image: '/images/activity-3.jpg',
    title: 'Wisata Keluarga',
    description: 'Pengalaman edukatif dan menyenangkan untuk seluruh keluarga',
    index: '03',
  },
]

const ActivitiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.activities-header', {
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

      gsap.from('.activity-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: carouselRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="kegiatan"
      className="relative py-24 md:py-36"
      style={{ backgroundColor: '#F5EFE4' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="activities-header px-[5%] mb-10 md:mb-14">
          <p className="font-accent text-sm md:text-base italic text-[#7A3218]/70 mb-5 tracking-wide">
            Aktivitas
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="font-display text-[#2C1A0E] leading-[1.2]"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
            >
              Kegiatan Wisata
            </h2>
            <p className="text-sm text-[#5C3A22]/70 font-body font-light max-w-md">
              Berbagai aktivitas menarik yang bisa Anda lakukan selama
              berwisata di Trowulan.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={carouselRef}
          className="grid grid-cols-1 md:flex md:flex-row gap-4 md:gap-6 md:overflow-x-auto md:hide-scrollbar md:pb-4 px-[5%]"
        >
          {activities.map((activity, index) => (
            <div
              key={index}
              className="activity-card md:flex-shrink-0"
              style={{ minWidth: 0 }}
            >
              <div
                className="relative rounded-xl overflow-hidden group w-full md:w-[340px]"
                style={{ height: 'clamp(260px, 60vw, 450px)' }}
              >
                {/* Image */}
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/90 via-[#2C1A0E]/25 to-transparent" />

                {/* Index number */}
                <div className="absolute top-4 left-5">
                  <span className="text-5xl font-display text-white/10">
                    {activity.index}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-display text-white mb-1.5">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-white/60 font-body font-light leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 rounded-xl border border-[#7A3218]/0 group-hover:border-[#7A3218]/30 transition-colors duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ActivitiesSection
