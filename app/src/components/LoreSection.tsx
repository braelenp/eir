export default function LoreSection() {
  const features = [
    {
      title: 'Fractional Healthcare Assets',
      description: 'Tokenize medical data, clinic equity, and biotech IP into accessible fractions'
    },
    {
      title: 'Yield & Governance',
      description: 'Earn passive income from healthcare yields and participate in asset governance'
    },
    {
      title: 'La Casa NFTs',
      description: 'Cryptographic certificates of ownership for ultimate healthcare asset provenance'
    }
  ]

  return (
    <div className="mb-12">
      <p className="text-center text-gray-400 mb-8 font-mono text-sm">/// THE HEALING VISION ///</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className="card group hover:border-emerald-400 transition-all duration-300 border-emerald-500/30"
          >
            <h3 className="text-xl font-bold mb-3 text-emerald-300 group-hover:text-emerald-200 transition-all">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
