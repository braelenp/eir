interface HealthcareAssetCardProps {
  id: number
  name: string
  type: string
  value: number
  fractions: number
  tokenized: number
  yield: number
  description: string
}

export default function HealthcareAssetCard({
  name,
  type,
  value,
  fractions,
  tokenized,
  yield: yieldPercentage,
  description
}: HealthcareAssetCardProps) {
  const tokenizationPercent = (tokenized / fractions) * 100

  return (
    <div className="card group hover:border-emerald-400 transition-all duration-300 p-6 flex flex-col">
      {/* Header */}
      <div className="mb-4 pb-4 border-b border-emerald-500/20 group-hover:border-emerald-400/40 transition-all">
        <h3 className="text-xl font-bold text-emerald-300 group-hover:text-emerald-200 mb-1">
          {name}
        </h3>
        <p className="text-sm text-emerald-400/70 font-mono">{type}</p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400 mb-4 flex-grow">{description}</p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-gray-500 font-mono mb-1">Asset Value</p>
          <p className="text-lg font-bold text-emerald-300">${(value / 1000000).toFixed(1)}M</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-mono mb-1">Total Fractions</p>
          <p className="text-lg font-bold text-emerald-300">{fractions.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-mono mb-1">Tokenized</p>
          <p className="text-lg font-bold text-emerald-300">{tokenized.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-mono mb-1">Annual Yield</p>
          <p className="text-lg font-bold text-emerald-300">{yieldPercentage.toFixed(1)}%</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-gray-500 font-mono">Tokenization Progress</p>
          <p className="text-xs font-bold text-emerald-400">{tokenizationPercent.toFixed(0)}%</p>
        </div>
        <div className="h-2 bg-emerald-500/10 rounded border border-emerald-500/20">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded"
            style={{ width: `${tokenizationPercent}%` }}
          />
        </div>
      </div>

      {/* Action */}
      <button className="btn-primary text-sm w-full">
        View Asset Details
      </button>
    </div>
  )
}
