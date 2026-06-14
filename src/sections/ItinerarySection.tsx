import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// lucide-react icons not needed

gsap.registerPlugin(ScrollTrigger)

interface ItineraryItem {
  time: string
  activity: string
  description: string
}

interface PackageItinerary {
  id: string
  name: string
  items: ItineraryItem[]
}

const itineraries: PackageItinerary[] = [
  {
    id: 'suryanagari',
    name: 'Suryanagari',
    items: [
      {
        time: '08.00',
        activity: 'Berkumpul di Graha Pawitra',
        description:
          'Peserta berkumpul di Graha Pawitra untuk briefing dan sarapan pagi tradisional.',
      },
      {
        time: '09.00',
        activity: 'Eksplorasi Candi Tikus',
        description:
          'Mengunjungi Candi Tikus yang unik dengan arsitektur bawah tanahnya.',
      },
      {
        time: '10.30',
        activity: 'Tur Museum Trowulan',
        description:
          'Melihat koleksi artefak Kerajaan Majapahit dengan pemandu profesional.',
      },
      {
        time: '12.00',
        activity: 'Makan Siang Tradisional',
        description: 'Menikmati hidangan khas Jawa di restoran lokal.',
      },
      {
        time: '13.30',
        activity: 'Kolam Segaran & Bajang Ratu',
        description:
          'Mengunjungi kolam purba dan gapura Bajang Ratu yang megah.',
      },
      {
        time: '15.00',
        activity: 'Wringin Lawang & Meditasi',
        description:
          'Sesi meditasi singkat di Wringin Lawang sebelum perjalanan pulang.',
      },
    ],
  },
  {
    id: 'sandyakala',
    name: 'Sandyakala',
    items: [
      {
        time: '15.00',
        activity: 'Berkumpul di Graha Pawitra',
        description:
          'Peserta berkumpul untuk briefing sore dan welcome drink.',
      },
      {
        time: '16.00',
        activity: 'Eksplorasi Wringin Lawang',
        description:
          'Menikmati suasana sore di gapura terbesar Trowulan.',
      },
      {
        time: '17.30',
        activity: 'Sunset di Bajang Ratu',
        description:
          'Menyaksikan matahari terbenam di Candi Bajang Ratu.',
      },
      {
        time: '18.30',
        activity: 'Storytelling Sejarah',
        description:
          'Duduk bersama mendengarkan kisah-kisah Majapahit.',
      },
      {
        time: '19.30',
        activity: 'Makan Malam & Lampion',
        description:
          'Jamuan malam dengan melepas lampion ke udara.',
      },
      {
        time: '20.30',
        activity: 'Night Tour Candi Tikus',
        description:
          'Pengalaman unik mengunjungi Candi Tikus di malam hari.',
      },
    ],
  },
  {
    id: 'candramawa',
    name: 'Candramawa',
    items: [
      {
        time: '15.00',
        activity: 'Check-in Graha Pawitra',
        description: 'Tiba dan check-in di Graha Pawitra, welcome ceremony.',
      },
      {
        time: '16.00',
        activity: 'Tur Kompleks Candi',
        description: 'Eksplorasi seluruh kompleks candi dengan pemandu.',
      },
      {
        time: '18.00',
        activity: 'Jamuan Malam Kerajaan',
        description: 'Makan malam dengan hidangan ala kerajaan Majapahit.',
      },
      {
        time: '20.00',
        activity: 'Ritual Purnama',
        description:
          'Mengikuti ritual purnama yang dipimpin oleh pemangku adat.',
      },
      {
        time: '22.00',
        activity: 'Stargazing',
        description: 'Mengamati bintang dengan pemandu astronomi lokal.',
      },
      {
        time: '06.00',
        activity: 'Sunrise Meditation',
        description: 'Meditasi pagi eksklusif menyambut fajar.',
      },
      {
        time: '08.00',
        activity: 'Sarapan & Check-out',
        description: 'Sarapan pagi tradisional dan proses check-out.',
      },
    ],
  },
]

const ItinerarySection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [openPackage, setOpenPackage] = useState<string>('suryanagari')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.itinerary-header', {
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

      gsap.from('.itinerary-tabs', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
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

  const activeItinerary = itineraries.find((i) => i.id === openPackage)

  return (
    <section
      ref={sectionRef}
      id="itinerary"
      className="relative py-24 md:py-40"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      <div className="max-w-[900px] mx-auto px-[5%]">
        {/* Header */}
        <div className="itinerary-header text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[rgba(251,249,241,0.5)] mb-6 font-body italic">
            Rencana Perjalanan
          </p>
          <h2
            className="font-display text-[#FBF9F1] leading-[1.2]"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            Detail Itinerary
          </h2>
        </div>

        {/* Package Tabs */}
        <div className="itinerary-tabs flex justify-center gap-4 md:gap-8 mb-12">
          {itineraries.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setOpenPackage(pkg.id)}
              className={`text-sm font-body tracking-wider pb-2 border-b-2 transition-all duration-300 ${
                openPackage === pkg.id
                  ? 'text-[#A8894B] border-[#A8894B]'
                  : 'text-[#FBF9F1]/40 border-transparent hover:text-[#FBF9F1]/70'
              }`}
            >
              {pkg.name}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-[#A8894B]/20" />

          {activeItinerary?.items.map((item, index) => (
            <div
              key={index}
              className="relative flex gap-4 md:gap-6 mb-8 last:mb-0 group"
            >
              {/* Time dot */}
              <div className="relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#050401] border border-[#A8894B]/40 flex items-center justify-center group-hover:border-[#A8894B] transition-colors duration-300">
                <span className="text-xs text-[#A8894B] font-body font-medium">
                  {item.time.split('.')[0]}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <p className="text-xs text-[#A8894B]/70 font-body mb-1">
                  {item.time} WIB
                </p>
                <h4 className="text-base md:text-lg font-display text-[#FBF9F1] mb-1 italic">
                  {item.activity}
                </h4>
                <p className="text-sm text-[#FBF9F1]/50 font-body font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ItinerarySection
