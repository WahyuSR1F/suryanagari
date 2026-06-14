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
import BackgroundMusic from './components/BackgroundMusic'

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
    requestAnimationFrame(scrollFn)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative" style={{ backgroundColor: '#050401' }}>
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
      <BackgroundMusic />
    </div>
  )
}

export default App
