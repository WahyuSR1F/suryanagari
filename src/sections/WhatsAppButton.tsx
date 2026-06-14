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
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-black/30 hover:scale-110 transition-transform duration-300 group"
      aria-label="Hubungi via WhatsApp"
    >
      <MessageCircle
        size={24}
        className="text-white group-hover:animate-pulse"
        fill="white"
      />
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#0A0A0A] border border-[#A8894B]/20 rounded text-xs text-[#FBF9F1] font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat WhatsApp
      </span>
    </button>
  )
}

export default WhatsAppButton
