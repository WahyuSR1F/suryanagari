import { useEffect, useRef, useState } from 'react'

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(false)
  const startedRef = useRef(false)

  useEffect(() => {
    const audio = new Audio(
      '/voice/Donkgedank - BANDHAWA (Backsound Nusantara) Cinematic, Sape.mp3'
    )
    audio.loop = true
    audio.volume = 0.4
    audioRef.current = audio

    // Show button after 800ms
    const timer = setTimeout(() => setVisible(true), 800)

    // Auto-play on first user interaction (browser policy bypass)
    const tryAutoPlay = () => {
      if (startedRef.current) return
      startedRef.current = true
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {})
      // Remove listeners after first trigger
      window.removeEventListener('click', tryAutoPlay)
      window.removeEventListener('scroll', tryAutoPlay)
      window.removeEventListener('keydown', tryAutoPlay)
      window.removeEventListener('touchstart', tryAutoPlay)
    }

    window.addEventListener('click', tryAutoPlay)
    window.addEventListener('scroll', tryAutoPlay)
    window.addEventListener('keydown', tryAutoPlay)
    window.addEventListener('touchstart', tryAutoPlay)

    return () => {
      clearTimeout(timer)
      audio.pause()
      audio.src = ''
      window.removeEventListener('click', tryAutoPlay)
      window.removeEventListener('scroll', tryAutoPlay)
      window.removeEventListener('keydown', tryAutoPlay)
      window.removeEventListener('touchstart', tryAutoPlay)
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    startedRef.current = true
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().catch(() => {})
      setPlaying(true)
    }
  }

  // WA button: bottom-6 right-6 = 1.5rem, h-14 = 3.5rem
  // Music button sits directly above: bottom = 1.5rem + 3.5rem + 0.75rem gap = 5.75rem
  // Same width/height as WA: 3.5rem (w-14)

  return (
    <button
      onClick={toggle}
      aria-label={playing ? 'Pause background music' : 'Play background music'}
      title={playing ? 'Pause musik' : 'Play musik ambient'}
      style={{
        position: 'fixed',
        bottom: '5.75rem',   // tepat di atas WA button
        right: '1.5rem',     // sejajar kanan dengan WA button
        zIndex: 50,
        width: '3.5rem',     // sama dengan WA button (w-14)
        height: '3.5rem',
        borderRadius: '50%',
        border: '1px solid rgba(122, 50, 24, 0.25)',
        background: 'rgba(250, 247, 242, 0.90)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.7)',
        transition: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s',
        boxShadow: playing
          ? '0 0 18px rgba(122, 50, 24, 0.2), 0 4px 16px rgba(0,0,0,0.08)'
          : '0 4px 16px rgba(0,0,0,0.08)',
      }}
      onMouseEnter={e => {
        const btn = e.currentTarget as HTMLButtonElement
        btn.style.borderColor = 'rgba(122, 50, 24, 0.5)'
        btn.style.transform = 'scale(1.1)'
      }}
      onMouseLeave={e => {
        const btn = e.currentTarget as HTMLButtonElement
        btn.style.borderColor = 'rgba(122, 50, 24, 0.25)'
        btn.style.transform = 'scale(1)'
      }}
    >
      {/* Ripple ring when playing */}
      {playing && (
        <span
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '1px solid rgba(122, 50, 24, 0.35)',
            animation: 'musicPulse 2s ease-out infinite',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Icon */}
      {playing ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="6" y="4" width="4" height="16" rx="1" fill="#7A3218" />
          <rect x="14" y="4" width="4" height="16" rx="1" fill="#7A3218" />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(44,26,14,0.55)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      )}

      <style>{`
        @keyframes musicPulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(1.8); opacity: 0;   }
        }
      `}</style>
    </button>
  )
}

export default BackgroundMusic
