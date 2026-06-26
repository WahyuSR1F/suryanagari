import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Navigation from './sections/Navigation'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import GallerySection from './sections/GallerySection'
import PackagesSection from './sections/PackagesSection'
import ItinerarySection from './sections/ItinerarySection'
import QRScanSection from './sections/QRScanSection'
import ActivitiesSection from './sections/ActivitiesSection'
import TestimonialsSection from './sections/TestimonialsSection'
import BookingSection from './sections/BookingSection'
import Footer from './sections/Footer'
import WhatsAppButton from './sections/WhatsAppButton'

import { Routes, Route } from 'react-router-dom'
import BajangRatu from './pages/BajangRatu'
import CandiBrahu from './pages/CandiBrahu'
import CandiTribuana from './pages/CandiTribuana'
import CandiKedaton from './pages/CandiKedaton'
import GapuraWringinLawang from './pages/GapuraWringinLawang'
import KampungBatik from './pages/KampungBatik'
import KawasanJatisumber from './pages/KawasanJatisumber'
import SentraPatung from './pages/SentraPatung'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', () => {
      ScrollTrigger.update()
    })

    const scrollFn = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(scrollFn)
    }
    requestAnimationFrame(requestAnimationFrame ? scrollFn : () => {})

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={
        <div className="relative" style={{ backgroundColor: '#F5EFE4' }}>
          <Navigation />
          <HeroSection />
          <AboutSection />
          <GallerySection />
          <PackagesSection />
          <ItinerarySection />
          <QRScanSection />
          <ActivitiesSection />
          <TestimonialsSection />
          <BookingSection />
          <Footer />
          <WhatsAppButton />
        </div>
      } />
      <Route path="/bajang-ratu" element={<BajangRatu />} />
      <Route path="/candi-brahu" element={<CandiBrahu />} />
      <Route path="/candi-tribuana" element={<CandiTribuana />} />
      <Route path="/candi-kedaton" element={<CandiKedaton />} />
      <Route path="/gapura-wringin-lawang" element={<GapuraWringinLawang />} />
      <Route path="/kampung-batik" element={<KampungBatik />} />
      <Route path="/kawasan-jatisumber" element={<KawasanJatisumber />} />
      <Route path="/sentra-patung" element={<SentraPatung />} />
    </Routes>
  )
}

export default App
