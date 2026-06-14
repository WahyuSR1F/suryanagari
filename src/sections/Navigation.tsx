import { useEffect, useState } from 'react'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#050401]/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-[5%] py-5 flex items-center justify-between">
        {/* Left nav links - desktop */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo('tentang')}
            className="text-xs tracking-[0.2em] uppercase text-[#FBF9F1]/60 hover:text-[#A8894B] transition-colors duration-300"
          >
            Tentang
          </button>
          <button
            onClick={() => scrollTo('galeri')}
            className="text-xs tracking-[0.2em] uppercase text-[#FBF9F1]/60 hover:text-[#A8894B] transition-colors duration-300"
          >
            Galeri
          </button>
          <button
            onClick={() => scrollTo('paket')}
            className="text-xs tracking-[0.2em] uppercase text-[#FBF9F1]/60 hover:text-[#A8894B] transition-colors duration-300"
          >
            Paket
          </button>
        </div>

        {/* Center logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-body text-base md:text-lg tracking-[0.3em] font-medium text-[#FBF9F1] hover:text-[#A8894B] transition-colors duration-300"
        >
          MAJAVENT
        </button>

        {/* Right nav links - desktop */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo('qr-scan')}
            className="text-xs tracking-[0.2em] uppercase text-[#FBF9F1]/60 hover:text-[#A8894B] transition-colors duration-300"
          >
            QR Experience
          </button>
          <button
            onClick={() => scrollTo('kegiatan')}
            className="text-xs tracking-[0.2em] uppercase text-[#FBF9F1]/60 hover:text-[#A8894B] transition-colors duration-300"
          >
            Kegiatan
          </button>
          <button
            onClick={() => scrollTo('booking')}
            className="text-xs tracking-[0.2em] uppercase text-[#FBF9F1]/60 hover:text-[#A8894B] transition-colors duration-300"
          >
            Booking
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => scrollTo('booking')}
          className="md:hidden text-xs tracking-[0.15em] uppercase text-[#A8894B] border border-[#A8894B]/40 px-4 py-2 hover:bg-[#A8894B]/10 transition-all duration-300"
        >
          Booking
        </button>
      </div>
    </nav>
  )
}

export default Navigation
