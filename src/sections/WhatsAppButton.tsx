import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      'Halo Majavent! Saya ingin menanyakan informasi tentang paket wisata Trowulan.'
    )
    window.open(`https://wa.me/6287723319080?text=${message}`, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      // FIX: right-value disamakan PERSIS dengan tombol kamera scan
      // (right-4 sm:right-6) supaya kedua tombol selalu sejajar/lurus
      // secara vertikal di semua ukuran layar.
      className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-black/30 hover:scale-110 transition-transform duration-300 group"
      aria-label="Hubungi via WhatsApp"
    >
      <MessageCircle
        size={22}
        className="text-white group-hover:animate-pulse"
        fill="white"
      />
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#FAF7F2] border border-[#EDE4D6] rounded-lg text-xs text-[#2C1A0E] font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-sm">
        Chat WhatsApp
      </span>
    </button>
  )
}

export default WhatsAppButton