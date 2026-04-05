interface BottomNavProps {
  activeTab: 'tokenize' | 'portfolio' | 'markets'
  onTabChange: (tab: 'tokenize' | 'portfolio' | 'markets') => void
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabItems = [
    { label: 'Tokenize', tab: 'tokenize' as const, icon: '📋' },
    { label: 'Portfolio', tab: 'portfolio' as const, icon: '💼' },
    { label: 'Markets', tab: 'markets' as const, icon: '📊' }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-emerald-500/20 bg-gradient-to-t from-slate-950/95 to-slate-900/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center gap-8">
        {tabItems.map((item) => (
          <button
            key={item.tab}
            onClick={() => onTabChange(item.tab)}
            className={`flex items-center gap-2 px-4 py-2 border rounded text-sm font-mono transition-all ${
              activeTab === item.tab
                ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300'
                : 'border-emerald-400/30 text-emerald-400/60 hover:border-emerald-400/60'
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
