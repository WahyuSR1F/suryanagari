import { useEffect, useState } from 'react'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const links = [
    { label: 'Tentang', id: 'tentang' },
    { label: 'Paket', id: 'paket' },
    { label: 'Galeri', id: 'galeri' },
    { label: 'Kegiatan', id: 'kegiatan' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF7F2] shadow-[0_1px_0_0_#EDE4D6]'
          : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-[5%] py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`font-display text-sm md:text-base tracking-[0.25em] font-medium transition-colors duration-300 ${
            scrolled ? 'text-[#2C1A0E] hover:text-[#7A3218]' : 'text-white hover:text-white/80'
          }`}
        >
          MAJAVENT
        </button>

        {/* Center links - desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-[11px] tracking-[0.18em] uppercase font-body transition-colors duration-300 ${
                scrolled
                  ? 'text-[#2C1A0E]/70 hover:text-[#7A3218]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Booking button - desktop */}
        <button
          onClick={() => scrollTo('booking')}
          className={`hidden md:inline-flex text-[11px] tracking-[0.15em] uppercase font-body font-medium px-5 py-2 rounded-lg transition-colors duration-300 ${
            scrolled
              ? 'text-white bg-[#7A3218] hover:bg-[#5e2612]'
              : 'text-white bg-[#7A3218]/80 hover:bg-[#7A3218]'
          }`}
        >
          Booking
        </button>

        {/* Mobile booking button */}
        <button
          onClick={() => scrollTo('booking')}
          className={`md:hidden text-[11px] tracking-[0.15em] uppercase font-body font-medium px-4 py-1.5 rounded-lg transition-colors duration-300 ${
            scrolled
              ? 'text-white bg-[#7A3218] hover:bg-[#5e2612]'
              : 'text-white bg-[#7A3218]/80 hover:bg-[#7A3218]'
          }`}
        >
          Booking
        </button>
      </div>
    </nav>
  )
}

export default Navigation
