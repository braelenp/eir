interface DappHeaderProps {
  onBuyClick?: () => void
}

export default function DappHeader({ onBuyClick }: DappHeaderProps) {
  return (
    <header className="relative z-30 border-b border-emerald-500/20 bg-gradient-to-r from-slate-950/80 to-slate-900/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Eir branding */}
        <div className="flex items-center gap-2">
          <div className="text-3xl">ᛒ</div>
          <div>
            <div className="text-lg font-bold text-emerald-300">EIR</div>
            <div className="text-xs text-emerald-400/70 font-mono">Healthcare Asset Tokenization</div>
          </div>
        </div>

        {/* Right: Buy button */}
        <button
          onClick={onBuyClick}
          className="px-4 py-2 border border-emerald-400/50 rounded text-emerald-300 text-sm font-mono hover:bg-emerald-500/10 hover:border-emerald-400 transition-all"
        >
          Buy $ABRA
        </button>
      </div>
    </header>
  )
}
