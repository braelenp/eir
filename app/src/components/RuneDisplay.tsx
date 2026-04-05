export default function RuneDisplay() {
  return (
    <div className="flex justify-center mb-12">
      <div className="relative">
        {/* Outer glow ring - emerald */}
        <div
          className="absolute inset-0 rounded-full border border-emerald-400 border-opacity-40 animate-pulse"
          style={{ inset: '-20px' }}
        />

        {/* Middle glow ring - teal */}
        <div
          className="absolute inset-0 rounded-full border-2 border-emerald-500 border-opacity-30 animate-pulse"
          style={{ inset: '-40px', animationDelay: '0.5s' }}
        />

        {/* Inner glow ring - cyan */}
        <div
          className="absolute inset-0 rounded-full border border-cyan-400 border-opacity-20 animate-pulse"
          style={{ inset: '-60px', animationDelay: '1s' }}
        />

        {/* Healing energy gradient orb behind rune */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/20 via-cyan-400/10 to-transparent blur-2xl" style={{ inset: '-50px' }} />

        {/* Main rune - Berkano */}
        <div className="rune text-7xl md:text-8xl font-bold text-emerald-300 drop-shadow-[0_0_30px_rgba(16,185,129,0.6)]">
          ᛒ
        </div>
      </div>
    </div>
  )
}
