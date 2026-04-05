interface CTASectionProps {
  onEnter?: () => void
}

export default function CTASection({ onEnter }: CTASectionProps) {
  return (
    <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button
        onClick={onEnter}
        className="px-8 py-3 rounded-lg border border-emerald-400/60 bg-gradient-to-r from-emerald-500/20 to-teal-500/15 text-emerald-300 font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:border-emerald-400 transition-all duration-300"
      >
        Enter Eir Dapp →
      </button>

      <button
        onClick={() => window.open('https://bags.fm/5c1FHZj36pkA3cpXcyZxDhRmQyxzUqMNQn8K5neDBAGS', '_blank')}
        className="px-8 py-3 rounded-lg border border-emerald-400/40 bg-slate-900/50 text-emerald-400 font-bold uppercase tracking-wider hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:border-emerald-400/60 transition-all duration-300"
      >
        Buy $ABRA on Bags
      </button>
    </div>
  )
}
