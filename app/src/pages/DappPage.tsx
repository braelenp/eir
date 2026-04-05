import { useState, useEffect } from 'react'
import ParticleBackground from '../components/ParticleBackground'
import DappHeader from '../components/DappHeader'
import BottomNav from '../components/BottomNav'
import TokenizationFlow from '../components/TokenizationFlow'
import HealthcareAssetCard from '../components/HealthcareAssetCard'

type DappTab = 'tokenize' | 'portfolio' | 'markets'

export default function DappPage() {
  const [activeTab, setActiveTab] = useState<DappTab>('tokenize')

  // Reset tab on page load and scroll to top
  useEffect(() => {
    setActiveTab('tokenize')
    window.scrollTo(0, 0)
  }, [])

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeTab])

  const exampleAssets = [
    {
      id: 1,
      name: 'Metro Clinic Holdings',
      type: 'Clinic Equity',
      value: 15000000,
      fractions: 10000,
      tokenized: 7500,
      yield: 12.5,
      description: 'Fractional ownership of 5-clinic network with 200+ practitioners'
    },
    {
      id: 2,
      name: 'BioVenture IX',
      type: 'Biotech IP',
      value: 42500000,
      fractions: 10000,
      tokenized: 8200,
      yield: 15.8,
      description: 'Pharmaceutical patents and regenerative health protocols'
    },
    {
      id: 3,
      name: 'Wellness Cooperative',
      type: 'Health Services',
      value: 8500000,
      fractions: 5000,
      tokenized: 3500,
      yield: 18.2,
      description: 'Preventative care and longevity program network'
    }
  ]

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-y-auto relative">
      <ParticleBackground />
      <div className="scanlines-overlay" />

      {/* Header */}
      <DappHeader onBuyClick={() => window.open('https://bags.fm/5c1FHZj36pkA3cpXcyZxDhRmQyxzUqMNQn8K5neDBAGS', '_blank')} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 pb-32">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-emerald-300">EIR</span>
          </h1>
          <p className="text-emerald-400 text-lg font-mono">
            Tokenize healthcare assets. Fractional ownership. Wellness yields. La Casa NFTs.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(['tokenize', 'portfolio', 'markets'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg border font-mono text-sm uppercase transition-all ${
                activeTab === tab
                  ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300'
                  : 'border-emerald-400/30 text-emerald-400/60 hover:border-emerald-400/60'
              }`}
            >
              {tab === 'tokenize' && 'Tokenize'}
              {tab === 'portfolio' && 'Portfolio'}
              {tab === 'markets' && 'Markets'}
            </button>
          ))}
        </div>

        {/* Content Areas */}
        {activeTab === 'tokenize' && (
          <div className="animate-fadeIn">
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-400/10 border border-emerald-400/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">🏥 Tokenize Healthcare Assets</h3>
              <p className="text-gray-300 mb-3">
                Convert your medical data, clinic equity, biotech IP, and wellness protocols into divisible fractions and create a La Casa NFT certificate. Follow these steps:
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>1️⃣ <span className="text-emerald-400 font-semibold">Upload</span> - Provide healthcare asset details, valuation, and documentation</li>
                <li>2️⃣ <span className="text-cyan-300 font-semibold">Attest</span> - Confirm ownership and authorize fractional tokenization</li>
                <li>3️⃣ <span className="text-orange-300 font-semibold">Mint</span> - Deploy La Casa NFT and create fractions on the blockchain</li>
              </ul>
            </div>
            <TokenizationFlow />
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="animate-fadeIn">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-emerald-300">Your Portfolio</span>
              </h2>
              <p className="text-emerald-400/70 text-sm mb-8">Healthcare assets you own and manage</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exampleAssets.map((asset) => (
                <HealthcareAssetCard key={asset.id} {...asset} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'markets' && (
          <div className="animate-fadeIn">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-emerald-300">Healthcare Markets</span>
              </h2>
              <p className="text-emerald-400/70 text-sm mb-8">Discover and invest in tokenized wellness assets</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exampleAssets.map((asset) => (
                <HealthcareAssetCard key={asset.id} {...asset} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
