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
        description: 'Titik kumpul peserta dan briefing awal perjalanan.',
      },
      {
        time: '09.00',
        activity: 'Eksplorasi Candi Brahu',
        description: 'Mengunjungi dan mendengarkan sejarah Candi Brahu.',
      },
      {
        time: '10.00',
        activity: 'Kunjungan Candi Kedaton',
        description: 'Melihat langsung sisa peninggalan Candi Kedaton peninggalan Majapahit.',
      },
      {
        time: '11.00',
        activity: 'Makan Siang',
        description: 'Menikmati kuliner legendaris Cak Mat Sambel Wader.',
      },
      {
        time: '12.30',
        activity: 'Kampung Batik Trowulan',
        description: 'Edukasi dan melihat proses pembuatan batik khas Trowulan.',
      },
      {
        time: '13.30',
        activity: 'Sentra Pembuat Patung',
        description: 'Melihat langsung keterampilan pengrajin batu dan patung.',
      },
      {
        time: '14.30',
        activity: 'Perjalanan Pulang',
        description: 'Kembali ke Graha Pawitra atau rumah masing-masing.',
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
        description: 'Titik kumpul awal dan persiapan wisata sore.',
      },
      {
        time: '16.00',
        activity: 'Kampung Batik',
        description: 'Eksplorasi sore di sentra kerajinan batik lokal.',
      },
      {
        time: '17.00',
        activity: 'Candi Tribuana Tungga Dewi',
        description: 'Kunjungan sore menikmati suasana tenang di area candi.',
      },
      {
        time: '18.30',
        activity: 'Makan Malam',
        description: 'Istirahat dan menikmati kuliner Cak Mat Sambel Wader.',
      },
      {
        time: '19.15',
        activity: 'Pementasan Candi Bajang Ratu',
        description: 'Menyaksikan pementasan spesial dengan tata cahaya (lighting) yang indah.',
      },
      {
        time: '20.45',
        activity: 'Perjalanan Pulang',
        description: 'Kembali ke penginapan Graha Pawitra / selesai.',
      },
    ],
  },
  {
    id: 'candramawa',
    name: 'Candramawa',
    items: [
      {
        time: '15.00',
        activity: 'Penginapan Graha Pawitra',
        description: 'Titik kumpul, check-in, dan persiapan acara.',
      },
      {
        time: '15.30',
        activity: 'Kawasan Jatisumber',
        description: 'Eksplorasi sore dan menikmati suasana di kawasan Jatisumber.',
      },
      {
        time: '18.30',
        activity: 'Rumah Penduduk & Sesaji',
        description: 'Berkunjung ke rumah penduduk dan berpartisipasi menyiapkan sesaji.',
      },
      {
        time: '19.00',
        activity: 'Menuju Candi Tengah Sawah',
        description: 'Perjalanan menuju candi di tengah sawah dan mulai mengikuti ritual.',
      },
      {
        time: '20.00',
        activity: 'Ritual Bulan Purnama',
        description: 'Puncak acara mengikuti rangkaian ritual bulan purnama yang sakral hingga selesai.',
      },
      {
        time: '00.00',
        activity: 'Kembali ke Penginapan',
        description: 'Perjalanan kembali ke penginapan untuk beristirahat malam.',
      },
      {
        time: '06.30',
        activity: 'Yoga di Wringin Lawang',
        description: 'Sesi relaksasi yoga pagi yang menenangkan di area Wringin Lawang.',
      },
      {
        time: '07.30',
        activity: 'Merangkai Bunga',
        description: 'Aktivitas belajar merangkai bunga yang estetik di Wringin Lawang.',
      },
      {
        time: '08.30',
        activity: 'Perjalanan Pulang',
        description: 'Persiapan selesai dan kembali ke rumah masing-masing.',
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
