import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Clock, MapPin, ChevronRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

gsap.registerPlugin(ScrollTrigger)

interface PackageData {
  id: string
  name: string
  time: string
  duration: string
  price: string
  image: string
  description: string
  destinations: string[]
  highlights: string[]
}

const packages: PackageData[] = [
  {
    id: 'suryanagari',
    name: 'SURYANAGARI',
    time: '08.00 – 15.00 WIB',
    duration: '7 Jam',
    price: 'Rp 270.000',
    image: '/images/package-suryanagari.jpg',
    description:
      'Nikmati pesona Trowulan dalam cahaya mentari pagi. Paket Suryanagari membawa Anda menjelajahi destinasi utama saat udara masih segar dan cahaya matahari memberikan pencahayaan terbaik untuk fotografi.',
    destinations: [
      'Penginapan Graha Pawitra',
      'Candi Brahu',
      'Candi Kedaton',
      'Cak Mat Sambel Wader',
      'Kampung Batik Trowulan',
      'Sentra Pembuat Patung',
    ],
    highlights: [
      'Titik kumpul pagi di Graha Pawitra',
      'Eksplorasi sejarah Candi Brahu & Kedaton',
      'Kuliner makan siang Sambel Wader khas Trowulan',
      'Edukasi membatik di Kampung Batik',
      'Melihat proses pembuatan karya di Sentra Patung',
    ],
  },
  {
    id: 'sandyakala',
    name: 'SANDYAKALA',
    time: '15.00 – 21.00 WIB',
    duration: '6 Jam',
    price: 'Rp 350.000',
    image: '/images/package-sandyakala.jpg',
    description:
      'Rasakan magisnya senja dan malam di kompleks candi. Sandyakala menawarkan pengalaman unik saat matahari terbenam mempersembahkan warna-warna spektakuler di langit Trowulan.',
    destinations: [
      'Penginapan Graha Pawitra',
      'Kampung Batik Trowulan',
      'Candi Tribuana Tungga Dewi',
      'Cak Mat Sambel Wader',
      'Candi Bajang Ratu',
    ],
    highlights: [
      'Edukasi kerajinan di Kampung Batik',
      'Kunjungan sore ke Candi Tribuana Tungga Dewi',
      'Kuliner makan malam Sambel Wader',
      'Menyaksikan pementasan spesial di Candi Bajang Ratu',
      'Menikmati suasana lighting malam di area Candi',
    ],
  },
  {
    id: 'candramawa',
    name: 'CANDRAMAWA',
    time: '15.00 – 09.00 WIB (Keesokan harinya)',
    duration: '18 Jam',
    price: 'Rp 650.000',
    image: '/images/package-candramawa.jpg',
    description:
      'Pengalaman paling istimewa — menginap dan merasakan ritual purnama di tengah keagungan candi-candi bersejarah. Candramawa adalah perjalanan spiritual mendalam yang tidak terlupakan.',
    destinations: [
      'Penginapan Graha Pawitra',
      'Kawasan Jatisumber',
      'Rumah Penduduk',
      'Candi Tengah Sawah',
      'Wringin Lawang',
    ],
    highlights: [
      'Eksplorasi sore di Kawasan Jatisumber',
      'Pengalaman budaya menyiapkan sesaji bersama warga',
      'Mengikuti Ritual Bulan Purnama yang sakral',
      'Relaksasi Yoga pagi di Wringin Lawang',
      'Aktivitas merangkai bunga di pagi hari',
    ],
  },
]

const PackagesSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [selectedPackage, setSelectedPackage] = useState<PackageData | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.package-card')
      if (!cards) return

      gsap.from(cards, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
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
      id="paket"
      className="relative py-24 md:py-36"
      style={{ backgroundColor: '#F5EFE4' }}
    >
      <div className="max-w-[1200px] mx-auto px-[5%]">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="font-accent text-sm md:text-base italic text-[#7A3218]/70 mb-5 tracking-wide">
            Pilihan Paket
          </p>
          <h2
            className="font-display text-[#2C1A0E] leading-[1.2] mb-5"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            Katalog Paket Wisata
          </h2>
          <p className="text-sm text-[#5C3A22]/70 font-body font-light max-w-lg mx-auto">
            Pilih pengalaman yang sesuai dengan keinginan Anda. Setiap paket
            dirancang untuk memberikan momen tak terlupakan.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7"
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="package-card relative h-[540px] md:h-[620px] cursor-pointer group rounded-xl overflow-hidden"
              onClick={() => setSelectedPackage(pkg)}
            >
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="package-card__img w-full h-full object-cover"
                />
              </div>

              {/* Overlay */}
              <div className="package-card__overlay absolute inset-0" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7 z-10">
                <div className="flex items-center gap-2 mb-2.5">
                  <Clock size={13} className="text-[#EDE4D6]/80" />
                  <span className="text-xs text-white/65 font-body">
                    {pkg.time}
                  </span>
                </div>

                <h3
                  className="font-display text-white mb-2"
                  style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)' }}
                >
                  {pkg.name}
                </h3>

                <p className="text-[13px] text-white/60 font-body font-light mb-4 leading-relaxed line-clamp-3">
                  {pkg.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-display text-[#EDE4D6]">
                    {pkg.price}
                    <span className="text-xs text-white/45 font-body ml-1">
                      /orang
                    </span>
                  </span>
                  <div className="flex items-center gap-1 text-[#EDE4D6] text-xs font-body tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                    <span>DETAIL</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog
        open={!!selectedPackage}
        onOpenChange={() => setSelectedPackage(null)}
      >
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-[#FAF7F2] border border-[#EDE4D6] text-[#2C1A0E] rounded-2xl">
          {selectedPackage && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-3xl text-[#2C1A0E]">
                  {selectedPackage.name}
                </DialogTitle>
              </DialogHeader>

              <div className="relative h-48 md:h-60 mb-5 overflow-hidden rounded-xl">
                <img
                  src={selectedPackage.image}
                  alt={selectedPackage.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2]/80 to-transparent" />
              </div>

              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#5C3A22] font-body">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#7A3218]" />
                    <span>{selectedPackage.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#7A3218]" />
                    <span>{selectedPackage.duration}</span>
                  </div>
                </div>

                <p className="text-sm text-[#5C3A22] font-body font-light leading-relaxed">
                  {selectedPackage.description}
                </p>

                <div>
                  <h4 className="text-sm font-body font-medium text-[#7A3218] tracking-wider mb-3">
                    DESTINASI
                  </h4>
                  <ul className="space-y-2">
                    {selectedPackage.destinations.map((dest, i) => (
                      <li
                        key={i}
                        className="text-sm text-[#5C3A22] font-body flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7A3218]" />
                        {dest}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-body font-medium text-[#7A3218] tracking-wider mb-3">
                    HIGHLIGHTS
                  </h4>
                  <ul className="space-y-2">
                    {selectedPackage.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-sm text-[#5C3A22] font-body flex items-center gap-2"
                      >
                        <span className="text-[#7A3218] font-medium">+</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#EDE4D6]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#5C3A22]/50 font-body">
                        Harga per orang
                      </p>
                      <p className="text-2xl font-display text-[#7A3218]">
                        {selectedPackage.price}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedPackage(null)
                        setTimeout(() => {
                          document
                            .getElementById('booking')
                            ?.scrollIntoView({ behavior: 'smooth' })
                        }, 300)
                      }}
                      className="px-6 py-2.5 bg-[#7A3218] text-white text-sm tracking-wider font-body font-medium rounded-lg hover:bg-[#5e2612] transition-colors duration-300"
                    >
                      BOOKING SEKARANG
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default PackagesSection
