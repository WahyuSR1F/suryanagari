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
      'Graha Pawitra',
      'Candi Tikus',
      'Museum Trowulan',
      'Kolam Segaran',
      'Bajang Ratu',
      'Wringin Lawang',
      'Taman Sari',
    ],
    highlights: [
      'Sunrise di Candi Tikus',
      'Tur museum dengan pemandu',
      'Meditasi pagi di Taman Sari',
      'Foto dengan pencahayaan golden hour',
      'Makan siang tradisional',
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
      'Graha Pawitra',
      'Wringin Lawang',
      'Bajang Ratu',
      'Kolam Segaran',
      'Taman Sari',
      'Candi Tikus (night tour)',
    ],
    highlights: [
      'Sunset di Wringin Lawang',
      'Night tour Candi Tikus',
      'Storytelling sejarah Majapahit',
      'Makan malam tradisional',
      'Lampion ceremony',
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
      'Graha Pawitra',
      'Semua destinasi utama',
      'Area camping eksklusif',
      'Pura ritual purnama',
    ],
    highlights: [
      'Menginap di area eksklusif',
      'Ritual purnama malam hari',
      'Stargazing dengan pemandu astronomi',
      'Jamuan malam kerajaan',
      'Sunrise meditation eksklusif',
      'Sarapan pagi tradisional',
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
      className="relative py-24 md:py-40"
      style={{ backgroundColor: '#050401' }}
    >
      <div className="max-w-[1440px] mx-auto px-[5%]">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[rgba(251,249,241,0.5)] mb-6 font-body italic">
            Pilihan Paket
          </p>
          <h2
            className="font-display text-[#FBF9F1] leading-[1.2] mb-6"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            Katalog Paket Wisata
          </h2>
          <p className="text-sm text-[#FBF9F1]/50 font-body font-light max-w-lg mx-auto">
            Pilih pengalaman yang sesuai dengan keinginan Anda. Setiap paket
            dirancang untuk memberikan momen tak terlupakan.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="package-card relative h-[500px] md:h-[600px] cursor-pointer group"
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
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={14} className="text-[#A8894B]" />
                  <span className="text-xs text-[#FBF9F1]/70 font-body">
                    {pkg.time}
                  </span>
                </div>

                <h3
                  className="font-display text-[#FBF9F1] mb-3"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
                >
                  {pkg.name}
                </h3>

                <p className="text-sm text-[#FBF9F1]/60 font-body font-light mb-4 line-clamp-2">
                  {pkg.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-display text-[#A8894B]">
                    {pkg.price}
                    <span className="text-xs text-[#FBF9F1]/40 font-body ml-1">
                      /orang
                    </span>
                  </span>
                  <div className="flex items-center gap-1 text-[#A8894B] text-xs font-body tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                    <span>DETAIL</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>

              {/* Border accent */}
              <div className="absolute inset-0 border border-[#A8894B]/20 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog
        open={!!selectedPackage}
        onOpenChange={() => setSelectedPackage(null)}
      >
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0A0A0A] border border-[#A8894B]/20 text-[#FBF9F1]">
          {selectedPackage && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-3xl text-[#FBF9F1] italic">
                  {selectedPackage.name}
                </DialogTitle>
              </DialogHeader>

              <div className="relative h-48 md:h-64 mb-6 overflow-hidden">
                <img
                  src={selectedPackage.image}
                  alt={selectedPackage.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#FBF9F1]/70 font-body">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#A8894B]" />
                    <span>{selectedPackage.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#A8894B]" />
                    <span>{selectedPackage.duration}</span>
                  </div>
                </div>

                <p className="text-sm text-[#FBF9F1]/80 font-body font-light leading-relaxed">
                  {selectedPackage.description}
                </p>

                <div>
                  <h4 className="text-sm font-body font-medium text-[#A8894B] tracking-wider mb-3">
                    DESTINASI
                  </h4>
                  <ul className="space-y-2">
                    {selectedPackage.destinations.map((dest, i) => (
                      <li
                        key={i}
                        className="text-sm text-[#FBF9F1]/70 font-body flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#A8894B]" />
                        {dest}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-body font-medium text-[#A8894B] tracking-wider mb-3">
                    HIGHLIGHTS
                  </h4>
                  <ul className="space-y-2">
                    {selectedPackage.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-sm text-[#FBF9F1]/70 font-body flex items-center gap-2"
                      >
                        <span className="text-[#A8894B]">+</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#A8894B]/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#FBF9F1]/40 font-body">
                        Harga per orang
                      </p>
                      <p className="text-2xl font-display text-[#A8894B]">
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
                      className="px-6 py-3 bg-[#A8894B] text-[#050401] text-sm tracking-wider font-body font-medium hover:bg-[#FBF9F1] transition-colors duration-300"
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
