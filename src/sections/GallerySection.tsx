import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Sunrise di Candi Trowulan' },
  { src: '/images/gallery-2.jpg', alt: 'Arca Purba di Taman' },
  { src: '/images/gallery-3.jpg', alt: 'Jalan Setapak Bersejarah' },
  { src: '/images/gallery-4.jpg', alt: 'Kompleks Candi dari Udara' },
  { src: '/images/gallery-5.jpg', alt: 'Relief Ukiran Batu' },
  { src: '/images/gallery-6.jpg', alt: 'Kolam Teratai Senja' },
]

const GallerySection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const columnsRef = useRef<HTMLDivElement>(null)
  const [lightbox, setLightbox] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      // Parallax columns - Desktop only
      let mm = gsap.matchMedia()
      
      mm.add('(min-width: 768px)', () => {
        const columnWraps = columnsRef.current?.querySelectorAll('.column-wrap')
        if (!columnWraps) return

        const firstColumn = columnWraps[0]?.querySelector('.column')
        const thirdColumn = columnWraps[2]?.querySelector('.column')

        if (firstColumn) {
          gsap.to(firstColumn, {
            y: -100, // Gentle parallax
            ease: 'none',
            scrollTrigger: {
              trigger: columnsRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          })
        }

        if (thirdColumn) {
          gsap.to(thirdColumn, {
            y: -100, // Match the first column
            ease: 'none',
            scrollTrigger: {
              trigger: columnsRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Lightbox keyboard handler
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowLeft' && lightbox !== null) {
        setLightbox(lightbox === 0 ? galleryImages.length - 1 : lightbox - 1)
      }
      if (e.key === 'ArrowRight' && lightbox !== null) {
        setLightbox(lightbox === galleryImages.length - 1 ? 0 : lightbox + 1)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox])

  return (
    <section
      ref={sectionRef}
      id="galeri"
      className="relative py-24 md:py-40 overflow-hidden"
      style={{ backgroundColor: '#050401' }}
    >
      {/* Heading */}
      <div ref={headingRef} className="text-center px-[5%] mb-16 md:mb-24">
        <h2
          className="font-display text-[#FBF9F1] leading-[1.2]"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
        >
          Temukan Pesona Trowulan
        </h2>
      </div>

      {/* Parallax Grid */}
      <div ref={columnsRef} className="columns">
        {/* Column 1 */}
        <div className="column-wrap">
          <div className="column">
            <div
              className="gallery-item"
              onClick={() => setLightbox(0)}
            >
              <div
                className="gallery-item__img"
                style={{ backgroundImage: `url(${galleryImages[0].src})` }}
              />
            </div>
            <div
              className="gallery-item"
              onClick={() => setLightbox(3)}
            >
              <div
                className="gallery-item__img"
                style={{ backgroundImage: `url(${galleryImages[3].src})` }}
              />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="column-wrap">
          <div className="column">
            <div
              className="gallery-item"
              onClick={() => setLightbox(1)}
            >
              <div
                className="gallery-item__img"
                style={{ backgroundImage: `url(${galleryImages[1].src})` }}
              />
            </div>
            <div
              className="gallery-item"
              onClick={() => setLightbox(4)}
            >
              <div
                className="gallery-item__img"
                style={{ backgroundImage: `url(${galleryImages[4].src})` }}
              />
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="column-wrap">
          <div className="column">
            <div
              className="gallery-item"
              onClick={() => setLightbox(2)}
            >
              <div
                className="gallery-item__img"
                style={{ backgroundImage: `url(${galleryImages[2].src})` }}
              />
            </div>
            <div
              className="gallery-item"
              onClick={() => setLightbox(5)}
            >
              <div
                className="gallery-item__img"
                style={{ backgroundImage: `url(${galleryImages[5].src})` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-[#050401]/95 flex items-center justify-center cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-[#FBF9F1]/70 hover:text-[#FBF9F1] text-4xl font-light transition-colors"
            onClick={() => setLightbox(null)}
          >
            &times;
          </button>
          <button
            className="absolute left-4 md:left-8 text-[#FBF9F1]/50 hover:text-[#FBF9F1] text-3xl transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox(lightbox === 0 ? galleryImages.length - 1 : lightbox - 1)
            }}
          >
            &#8249;
          </button>
          <button
            className="absolute right-4 md:right-8 text-[#FBF9F1]/50 hover:text-[#FBF9F1] text-3xl transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox(lightbox === galleryImages.length - 1 ? 0 : lightbox + 1)
            }}
          >
            &#8250;
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-sm text-[#FBF9F1]/60 font-body tracking-wider">
            {lightbox + 1} / {galleryImages.length} — {galleryImages[lightbox].alt}
          </p>
        </div>
      )}
    </section>
  )
}

export default GallerySection
