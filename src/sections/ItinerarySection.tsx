import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
      { time: '08.00', activity: 'Berkumpul di Graha Pawitra', description: 'Titik kumpul peserta dan briefing awal perjalanan.' },
      { time: '09.00', activity: 'Eksplorasi Candi Brahu', description: 'Mengunjungi dan mendengarkan sejarah Candi Brahu.' },
      { time: '10.00', activity: 'Kunjungan Candi Kedaton', description: 'Melihat langsung sisa peninggalan Candi Kedaton peninggalan Majapahit.' },
      { time: '11.00', activity: 'Makan Siang', description: 'Menikmati kuliner legendaris Cak Mat Sambel Wader.' },
      { time: '12.30', activity: 'Kampung Batik Trowulan', description: 'Edukasi dan melihat proses pembuatan batik khas Trowulan.' },
      { time: '13.30', activity: 'Sentra Pembuat Patung', description: 'Melihat langsung keterampilan pengrajin batu dan patung.' },
      { time: '14.30', activity: 'Perjalanan Pulang', description: 'Kembali ke Graha Pawitra atau rumah masing-masing.' },
    ],
  },
  {
    id: 'sandyakala',
    name: 'Sandyakala',
    items: [
      { time: '15.00', activity: 'Berkumpul di Graha Pawitra', description: 'Titik kumpul awal dan persiapan wisata sore.' },
      { time: '16.00', activity: 'Kampung Batik', description: 'Eksplorasi sore di sentra kerajinan batik lokal.' },
      { time: '17.00', activity: 'Candi Tribuana Tungga Dewi', description: 'Kunjungan sore menikmati suasana tenang di area candi.' },
      { time: '18.30', activity: 'Makan Malam', description: 'Istirahat dan menikmati kuliner Cak Mat Sambel Wader.' },
      { time: '19.15', activity: 'Pementasan Candi Bajang Ratu', description: 'Menyaksikan pementasan spesial dengan tata cahaya (lighting) yang indah.' },
      { time: '20.45', activity: 'Perjalanan Pulang', description: 'Kembali ke penginapan Graha Pawitra / selesai.' },
    ],
  },
  {
    id: 'candramawa',
    name: 'Candramawa',
    items: [
      { time: '15.00', activity: 'Penginapan Graha Pawitra', description: 'Titik kumpul, check-in, dan persiapan acara.' },
      { time: '15.30', activity: 'Kawasan Jatisumber', description: 'Eksplorasi sore dan menikmati suasana di kawasan Jatisumber.' },
      { time: '18.30', activity: 'Rumah Penduduk & Sesaji', description: 'Berkunjung ke rumah penduduk dan berpartisipasi menyiapkan sesaji.' },
      { time: '19.00', activity: 'Menuju Candi Tengah Sawah', description: 'Perjalanan menuju candi di tengah sawah dan mulai mengikuti ritual.' },
      { time: '20.00', activity: 'Ritual Bulan Purnama', description: 'Puncak acara mengikuti rangkaian ritual bulan purnama yang sakral hingga selesai.' },
      { time: '00.00', activity: 'Kembali ke Penginapan', description: 'Perjalanan kembali ke penginapan untuk beristirahat malam.' },
      { time: '06.30', activity: 'Yoga di Wringin Lawang', description: 'Sesi relaksasi yoga pagi yang menenangkan di area Wringin Lawang.' },
      { time: '07.30', activity: 'Merangkai Bunga', description: 'Aktivitas belajar merangkai bunga yang estetik di Wringin Lawang.' },
      { time: '08.30', activity: 'Perjalanan Pulang', description: 'Persiapan selesai dan kembali ke rumah masing-masing.' },
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
      className="relative py-24 md:py-36"
      style={{ backgroundColor: '#F5EFE4' }}
    >
      <div className="max-w-[860px] mx-auto px-[5%]">
        {/* Header */}
        <div className="itinerary-header text-center mb-10 md:mb-14">
          <p className="font-accent text-sm md:text-base italic text-[#7A3218]/70 mb-5 tracking-wide">
            Rencana Perjalanan
          </p>
          <h2
            className="font-display text-[#2C1A0E] leading-[1.2]"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            Detail Itinerary
          </h2>
        </div>

        {/* Package Tabs — pill/chip style for clear affordance */}
        <div className="itinerary-tabs flex justify-center gap-2.5 md:gap-3 mb-12">
          {itineraries.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setOpenPackage(pkg.id)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium tracking-wide border transition-all duration-300 ${
                openPackage === pkg.id
                  ? 'bg-[#7A3218] text-white border-[#7A3218] shadow-sm'
                  : 'bg-[#FAF7F2] text-[#5C3A22] border-[#EDE4D6] hover:border-[#7A3218]/40 hover:text-[#7A3218]'
              }`}
            >
              {pkg.name}
            </button>
          ))}
        </div>

        {/* Timeline — small dots + vertical line */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#7A3218]/20" />

          {activeItinerary?.items.map((item, index) => (
            <div
              key={index}
              className="relative flex gap-5 md:gap-7 mb-7 last:mb-0 group"
            >
              {/* Small dot */}
              <div className="relative z-10 flex-shrink-0 mt-1.5">
                <div className="w-[15px] h-[15px] rounded-full bg-[#FAF7F2] border-2 border-[#7A3218]/40 flex items-center justify-center group-hover:border-[#7A3218] transition-colors duration-300">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#7A3218]" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-[#FAF7F2] rounded-xl p-4 md:p-5 border border-[#EDE4D6] group-hover:border-[#7A3218]/20 transition-colors duration-300">
                <p className="text-xs text-[#7A3218]/70 font-body font-medium mb-1 tracking-wide">
                  {item.time} WIB
                </p>
                <h4 className="text-base font-display text-[#2C1A0E] mb-1">
                  {item.activity}
                </h4>
                <p className="text-sm text-[#5C3A22]/80 font-body font-light leading-relaxed">
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
