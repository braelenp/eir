import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ParticleBackground from '../components/ParticleBackground'
import LandingHeader from '../components/LandingHeader'
import RuneDisplay from '../components/RuneDisplay'
import LoreSection from '../components/LoreSection'
import CTASection from '../components/CTASection'

function TypingReveal({ text, delay = 0, speed = 50 }: { text: string; delay?: number; speed?: number }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let idx = 0
    const startTime = setTimeout(() => {
      const interval = setInterval(() => {
        if (idx < text.length) {
          setDisplayed(text.slice(0, ++idx))
        } else {
          setDone(true)
          clearInterval(interval)
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(startTime)
    }
  }, [text, delay, speed])

  return (
    <span>
      {displayed}
      {!done && <span className="animate-pulse ml-0.5">▊</span>}
    </span>
  )
}

export default function LandingPage() {
  const navigate = useNavigate()
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Stagger content reveal
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleEnterDapp = () => {
    navigate('/dapp')
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-y-auto relative">
      <ParticleBackground />
      <div className="scanlines-overlay" />

      {/* Header with Buy $ABRA button */}
      <LandingHeader
        onBuyClick={() =>
          window.open('https://bags.fm/5c1FHZj36pkA3cpXcyZxDhRmQyxzUqMNQn8K5neDBAGS', '_blank')
        }
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        {/* Rune Display */}
        <div
          className={`transition-all duration-1000 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <RuneDisplay />
        </div>

        {/* Title and Subtitle */}
        <div
          className={`text-center mb-12 transition-all duration-1000 delay-200 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-emerald-300">Welcome to</span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-emerald-300 typing-text">
              <TypingReveal text="the next degree." delay={200} speed={60} />
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-emerald-400 font-serif mb-4">
            Eir — Healer of the Species
          </p>
        </div>

        {/* Lore description */}
        <div
          className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-1000 delay-300 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg text-emerald-300/80 font-mono leading-relaxed">
            Patient-Owned Medical Assets. On-Chain Wellness Equity. Regenerative Health Finance.
          </p>
        </div>

        {/* Lore Section */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <LoreSection />
        </div>

        {/* CTA Section */}
        <div
          className={`transition-all duration-1000 delay-500 mb-8 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <CTASection onEnter={handleEnterDapp} />
        </div>
      </div>

      {/* Ambient orbs */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-emerald-500 rounded-full filter blur-3xl opacity-5 animate-float" />
      <div
        className="absolute bottom-40 left-20 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-5 animate-float"
        style={{ animationDelay: '2s' }}
      />
    </div>
  )
}
