import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="relative pt-24 pb-8 overflow-hidden"
      style={{ backgroundColor: '#7A3218' }}
    >
      {/* Top border */}
      <div className="absolute top-0 left-[5%] right-[5%] h-px bg-white/15" />

      <div className="max-w-[1200px] mx-auto px-[5%]">
        {/* Logo */}
        <div className="text-center mb-16">
          <h2
            className="font-display text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            MAJAVENT
          </h2>
          <p className="text-sm text-white/50 font-body font-light mt-3 tracking-wider">
            WISATA TROWULAN — MAJAPAHIT EXPERIENCE
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Quick Links */}
          <div>
            <h3 className="text-xs tracking-[0.18em] uppercase text-white/90 font-body mb-6 font-medium">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Beranda', id: '' },
                { label: 'Tentang', id: 'tentang' },
                { label: 'Galeri', id: 'galeri' },
                { label: 'Paket Wisata', id: 'paket' },
                { label: 'QR Experience', id: 'qr-scan' },
                { label: 'Booking', id: 'booking' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() =>
                      item.id
                        ? scrollTo(item.id)
                        : window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                    className="text-sm text-white/65 font-body font-light hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[0.18em] uppercase text-white/90 font-body mb-6 font-medium">
              Kontak
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-white/80 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/65 font-body font-light">
                  Kawasan Cagar Budaya Trowulan,
                  <br />
                  Mojokerto, Jawa Timur
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-white/80 flex-shrink-0" />
                <a
                  href="tel:+6287723319080"
                  className="text-sm text-white/65 font-body font-light hover:text-white transition-colors duration-300"
                >
                  +62 877-2331-9080
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-white/80 flex-shrink-0" />
                <a
                  href="mailto:majaventtour@gmail.com"
                  className="text-sm text-white/65 font-body font-light hover:text-white transition-colors duration-300"
                >
                  majaventtour@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Map */}
          <div>
            <h3 className="text-xs tracking-[0.18em] uppercase text-white/90 font-body mb-6 font-medium">
              Media Sosial
            </h3>
            <div className="flex items-center gap-4 mb-8">
              {[
                { href: 'https://www.instagram.com/majavent.culturetour', icon: Instagram },
                { href: 'https://www.facebook.com/share/1LsUWJcFd9/', icon: Facebook },
                { href: 'https://x.com/majavent', icon: Twitter },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
              <a
                href="https://www.tiktok.com/@majavent.culturetour"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>

            {/* Mini Map */}
            <div className="w-full h-32 rounded-xl border border-white/15 overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31629.!2d112.3998!3d-7.5469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e3a645f7e929%3A0xba2f45e851a91a03!2sTrowulan%2C%20Mojokerto%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(60%) contrast(0.9)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Trowulan Mojokerto"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-body">
            &copy; 2026 Majavent. Wisata Trowulan. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/40 font-body hover:text-white transition-colors duration-300"
            >
              Syarat & Ketentuan
            </a>
            <a
              href="#"
              className="text-xs text-white/40 font-body hover:text-white transition-colors duration-300"
            >
              Kebijakan Privasi
            </a>
          </div>
        </div>

        {/* Sound credit */}
        <p className="mt-5 text-center font-body" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)' }}>
          ♪ Sound by Music provided by Donkgedank
        </p>
      </div>
    </footer>
  )
}

export default Footer
