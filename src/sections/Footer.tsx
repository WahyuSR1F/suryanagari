import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react'

const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="relative pt-24 pb-8"
      style={{ backgroundColor: '#050401' }}
    >
      {/* Top border */}
      <div className="absolute top-0 left-[5%] right-[5%] h-px bg-[#A8894B]/20" />

      <div className="max-w-[1440px] mx-auto px-[5%]">
        {/* Logo */}
        <div className="text-center mb-16">
          <h2
            className="font-display text-[#FBF9F1] italic"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            SURYANAGARI
          </h2>
          <p className="text-sm text-[#FBF9F1]/40 font-body font-light mt-3 tracking-wider">
            WISATA TROWULAN — MAJAPAHIT EXPERIENCE
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Quick Links */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#A8894B] font-body mb-6">
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
                    className="text-sm text-[#FBF9F1]/50 font-body font-light hover:text-[#A8894B] transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#A8894B] font-body mb-6">
              Kontak
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-[#A8894B] flex-shrink-0 mt-0.5"
                />
                <span className="text-sm text-[#FBF9F1]/50 font-body font-light">
                  Kawasan Cagar Budaya Trowulan,
                  <br />
                  Mojokerto, Jawa Timur
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#A8894B] flex-shrink-0" />
                <a
                  href="tel:+6281234567890"
                  className="text-sm text-[#FBF9F1]/50 font-body font-light hover:text-[#A8894B] transition-colors duration-300"
                >
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#A8894B] flex-shrink-0" />
                <a
                  href="mailto:info@suryanagari.com"
                  className="text-sm text-[#FBF9F1]/50 font-body font-light hover:text-[#A8894B] transition-colors duration-300"
                >
                  info@suryanagari.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Map */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#A8894B] font-body mb-6">
              Media Sosial
            </h3>
            <div className="flex items-center gap-4 mb-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#A8894B]/20 flex items-center justify-center text-[#FBF9F1]/50 hover:text-[#A8894B] hover:border-[#A8894B] transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#A8894B]/20 flex items-center justify-center text-[#FBF9F1]/50 hover:text-[#A8894B] hover:border-[#A8894B] transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#A8894B]/20 flex items-center justify-center text-[#FBF9F1]/50 hover:text-[#A8894B] hover:border-[#A8894B] transition-all duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>

            {/* Mini Map Placeholder */}
            <div className="w-full h-32 rounded-lg border border-[#A8894B]/10 overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31629.!2d112.3998!3d-7.5469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e3a645f7e929%3A0xba2f45e851a91a03!2sTrowulan%2C%20Mojokerto%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Trowulan Mojokerto"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#A8894B]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#FBF9F1]/30 font-body">
            &copy; 2026 Suryanagari. Wisata Trowulan. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-[#FBF9F1]/30 font-body hover:text-[#A8894B] transition-colors duration-300"
            >
              Syarat & Ketentuan
            </a>
            <a
              href="#"
              className="text-xs text-[#FBF9F1]/30 font-body hover:text-[#A8894B] transition-colors duration-300"
            >
              Kebijakan Privasi
            </a>
          </div>
        </div>

        {/* Sound credit — subtle, minimal */}
        <p className="mt-5 text-center font-body" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(251,249,241,0.18)' }}>
          ♪ Sound by Music provided by Donkgedank
        </p>
      </div>
    </footer>
  )
}

export default Footer
