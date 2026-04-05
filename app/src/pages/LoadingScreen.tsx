import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ParticleBackground from '../components/ParticleBackground'

export default function LoadingScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    // Auto-navigate to landing after 2 seconds
    const timer = setTimeout(() => {
      navigate('/landing')
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      <div className="scanlines-overlay" />

      <div className="relative z-10 text-center space-y-8">
        {/* Berkano Rune */}
        <div className="flex justify-center mb-8 animate-pulse">
          <div className="text-7xl text-emerald-300 drop-shadow-[0_0_30px_rgba(16,185,129,0.6)]">ᛒ</div>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-300 tracking-wider mb-2 font-mono">
            EIR PROTOCOL
          </h1>
          <p className="text-emerald-400/70 font-mono text-sm tracking-widest uppercase">
            Healthcare Asset Tokenization
          </p>
        </div>

        {/* Loading indicator */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>

        <p className="text-emerald-300/60 text-sm font-mono">Initializing healing protocols...</p>
      </div>

      {/* Ambient orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl opacity-20 animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: '2s' }}
      />
    </div>
  )
}
