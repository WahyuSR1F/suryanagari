import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, Users, Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

gsap.registerPlugin(ScrollTrigger)

const BookingSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    nama: '',
    paket: '',
    tanggal: '',
    jumlah: '',
    catatan: '',
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.booking-header', {
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

      gsap.from('.booking-form', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { nama, paket, tanggal, jumlah, catatan } = formData
    const message = `Halo Suryanagari! Saya ingin booking wisata:%0A%0A*Nama:* ${nama}%0A*Paket:* ${paket}%0A*Tanggal:* ${tanggal}%0A*Jumlah Orang:* ${jumlah}%0A*Catatan:* ${catatan || '-'}%0A%0ATerima kasih!`
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank')
  }

  return (
    <section
      ref={sectionRef}
      id="booking"
      className="relative py-24 md:py-40"
      style={{ backgroundColor: '#050401' }}
    >
      <div className="max-w-[800px] mx-auto px-[5%]">
        {/* Header */}
        <div className="booking-header text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[rgba(251,249,241,0.5)] mb-6 font-body italic">
            Reservasi
          </p>
          <h2
            className="font-display text-[#FBF9F1] leading-[1.2] mb-6"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            Booking & Kontak
          </h2>
          <p className="text-sm text-[#FBF9F1]/50 font-body font-light max-w-lg mx-auto">
            Isi formulir di bawah ini dan kami akan segera menghubungi Anda
            melalui WhatsApp untuk konfirmasi.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="booking-form space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nama */}
            <div>
              <label className="text-xs text-[#FBF9F1]/50 font-body tracking-wider mb-2 block">
                NAMA LENGKAP
              </label>
              <Input
                type="text"
                placeholder="Masukkan nama Anda"
                value={formData.nama}
                onChange={(e) =>
                  setFormData({ ...formData, nama: e.target.value })
                }
                required
                className="bg-[#0A0A0A] border-[#A8894B]/20 text-[#FBF9F1] placeholder:text-[#FBF9F1]/20 focus:border-[#A8894B] h-12"
              />
            </div>

            {/* Paket */}
            <div>
              <label className="text-xs text-[#FBF9F1]/50 font-body tracking-wider mb-2 block">
                PILIH PAKET
              </label>
              <Select
                value={formData.paket}
                onValueChange={(value) =>
                  setFormData({ ...formData, paket: value })
                }
              >
                <SelectTrigger className="bg-[#0A0A0A] border-[#A8894B]/20 text-[#FBF9F1] h-12">
                  <SelectValue placeholder="Pilih paket wisata" />
                </SelectTrigger>
                <SelectContent className="bg-[#0A0A0A] border-[#A8894B]/20">
                  <SelectItem
                    value="Suryanagari"
                    className="text-[#FBF9F1] focus:bg-[#A8894B]/20 focus:text-[#FBF9F1]"
                  >
                    Suryanagari (08.00-15.00)
                  </SelectItem>
                  <SelectItem
                    value="Sandyakala"
                    className="text-[#FBF9F1] focus:bg-[#A8894B]/20 focus:text-[#FBF9F1]"
                  >
                    Sandyakala (15.00-21.00)
                  </SelectItem>
                  <SelectItem
                    value="Candramawa"
                    className="text-[#FBF9F1] focus:bg-[#A8894B]/20 focus:text-[#FBF9F1]"
                  >
                    Candramawa (Purnama - 18 jam)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tanggal */}
            <div>
              <label className="text-xs text-[#FBF9F1]/50 font-body tracking-wider mb-2 block">
                TANGGAL
              </label>
              <div className="relative">
                <Input
                  type="date"
                  value={formData.tanggal}
                  onChange={(e) =>
                    setFormData({ ...formData, tanggal: e.target.value })
                  }
                  required
                  className="bg-[#0A0A0A] border-[#A8894B]/20 text-[#FBF9F1] focus:border-[#A8894B] h-12 [color-scheme:dark]"
                />
                <Calendar
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8894B]/50 pointer-events-none"
                />
              </div>
            </div>

            {/* Jumlah Orang */}
            <div>
              <label className="text-xs text-[#FBF9F1]/50 font-body tracking-wider mb-2 block">
                JUMLAH ORANG
              </label>
              <div className="relative">
                <Input
                  type="number"
                  min="1"
                  placeholder="Jumlah peserta"
                  value={formData.jumlah}
                  onChange={(e) =>
                    setFormData({ ...formData, jumlah: e.target.value })
                  }
                  required
                  className="bg-[#0A0A0A] border-[#A8894B]/20 text-[#FBF9F1] placeholder:text-[#FBF9F1]/20 focus:border-[#A8894B] h-12"
                />
                <Users
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8894B]/50 pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Catatan */}
          <div>
            <label className="text-xs text-[#FBF9F1]/50 font-body tracking-wider mb-2 block">
              CATATAN (OPSIONAL)
            </label>
            <Textarea
              placeholder="Tambahan informasi atau permintaan khusus..."
              value={formData.catatan}
              onChange={(e) =>
                setFormData({ ...formData, catatan: e.target.value })
              }
              rows={4}
              className="bg-[#0A0A0A] border-[#A8894B]/20 text-[#FBF9F1] placeholder:text-[#FBF9F1]/20 focus:border-[#A8894B] resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 bg-[#A8894B] text-[#050401] text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-[#FBF9F1] transition-colors duration-500 flex items-center justify-center gap-3"
          >
            <Send size={16} />
            Booking via WhatsApp
          </button>

          <p className="text-xs text-center text-[#FBF9F1]/30 font-body">
            Dengan mengklik booking, Anda akan diarahkan ke WhatsApp untuk
            konfirmasi.
          </p>
        </form>
      </div>
    </section>
  )
}

export default BookingSection
