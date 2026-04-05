import { useState, useRef } from 'react'
import { Upload, CheckCircle, FileText } from 'lucide-react'

export default function TokenizationFlow() {
  const [files, setFiles] = useState<File[]>([])
  const [currentStep, setCurrentStep] = useState(1)
  const [attested, setAttested] = useState(false)
  const [minted, setMinted] = useState(false)
  const [isMinting, setIsMinting] = useState(false)

  const fileRef = useRef<HTMLInputElement>(null)

  const handleFiles = (picked: FileList | null) => {
    if (!picked) return
    setFiles(Array.from(picked))
    if (currentStep === 1) setCurrentStep(2)
  }

  const handleAttest = () => {
    setAttested(true)
    setCurrentStep(3)
  }

  const handleMint = () => {
    setIsMinting(true)
    setTimeout(() => {
      setIsMinting(false)
      setMinted(true)
      setCurrentStep(4)
    }, 2200)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Tokenization Flow Steps */}
      <div className="border-l-4 border-emerald-400/50 pl-6 mb-8">
        <h3 className="text-lg font-bold text-emerald-300 tracking-widest uppercase font-mono">&gt; [TOKENIZATION_FLOW]</h3>
        <p className="text-xs text-emerald-300/60 font-mono uppercase tracking-wider mt-1">Transform healthcare assets into liquid on-chain instruments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            step: 1,
            label: 'Upload Medical Assets',
            desc: 'Submit healthcare contracts, biotech IP, and clinic documentation',
            icon: '📋',
          },
          {
            step: 2,
            label: 'Mint La Casa NFT',
            desc: 'On-chain tokenization with immutable medical provenance',
            icon: '🏥',
          },
          {
            step: 3,
            label: 'Deploy Wellness Yield',
            desc: 'Auto-compound treatment revenues, clinic profits, and biotech innovations',
            icon: '🏆',
          },
        ].map((item) => (
          <div
            key={item.step}
            className="group relative overflow-hidden rounded-xl border border-emerald-300/25 bg-gradient-to-br from-emerald-500/8 via-slate-900/60 to-slate-900/40 p-6 transition hover:border-emerald-300/50 hover:from-emerald-500/12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-start justify-between">
                <span className="text-4xl">{item.icon}</span>
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-emerald-400/40 bg-emerald-500/15 text-xs font-bold text-emerald-300 font-mono">
                  {item.step}
                </span>
              </div>
              <h3 className="text-sm font-bold text-emerald-200 tracking-widest uppercase">{item.label}</h3>
              <p className="text-xs text-slate-400/90 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Workflow */}
      <div className="border-t border-emerald-500/30 pt-8">
        <div className="border-l-4 border-emerald-400/50 pl-6 mb-8">
          <h3 className="text-lg font-bold text-emerald-300 tracking-widest uppercase font-mono">&gt; [INITIATE_TOKENIZATION]</h3>
          <p className="text-xs text-emerald-300/60 font-mono uppercase tracking-wider mt-1">Upload your healthcare assets to begin minting La Casa NFTs</p>
        </div>

        <div className="space-y-6">
          {/* File Upload */}
          <div className="glow-panel rounded-2xl border border-emerald-300/25 bg-slate-900/60 p-6 backdrop-blur">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200/70">Asset Documentation</p>
            <input
              ref={fileRef}
              type="file"
              multiple
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
            {files.length === 0 ? (
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex w-full flex-col items-center gap-2 rounded-xl border border-dashed border-emerald-600/60 bg-emerald-950/40 px-4 py-6 text-xs text-emerald-500 transition hover:border-emerald-300/40 hover:text-slate-400"
              >
                <Upload size={22} className="text-emerald-600" />
                <span className="font-mono text-emerald-400">[PROOF_UPLOAD]</span>
                <span className="text-[10px] text-emerald-600">PDF, JPG, PNG — multiple files accepted</span>
              </button>
            ) : (
              <div className="space-y-2">
                {files.map((f) => (
                  <div key={f.name} className="flex items-center gap-2 rounded-lg border border-emerald-700/40 bg-emerald-950/50 px-3 py-2">
                    <FileText size={13} className="shrink-0 text-emerald-300/70" />
                    <span className="truncate text-xs text-slate-300">{f.name}</span>
                    <span className="ml-auto shrink-0 text-[10px] text-slate-500">{(f.size / 1024).toFixed(0)} KB</span>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="mt-1 text-[10px] text-emerald-500 underline underline-offset-2 hover:text-emerald-400"
                >
                  Add more files
                </button>
              </div>
            )}
          </div>

          {/* Attestation */}
          {files.length > 0 && currentStep >= 2 && !attested && (
            <div className="glow-panel rounded-2xl border border-emerald-300/25 bg-slate-900/60 p-4 backdrop-blur">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200/70">Self-Attestation</p>
              <p className="text-[10px] leading-relaxed text-slate-400/70 mb-4 uppercase tracking-[0.05em] font-mono">
                &gt; I confirm lawful ownership of these healthcare assets. Initiating on-chain tokenization.
              </p>
              <button
                type="button"
                onClick={handleAttest}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-300/40 bg-emerald-400/10 px-4 py-2.5 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/20"
              >
                <CheckCircle size={14} />
                I Confirm Ownership
              </button>
            </div>
          )}

          {/* Mint Button */}
          {attested && !minted && (
            <div className="glow-panel rounded-2xl border border-emerald-300/25 bg-slate-900/60 p-4 backdrop-blur">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200/70">La Casa Minting</p>
              <p className="text-[10px] leading-relaxed text-slate-400/70 mb-4 uppercase tracking-[0.05em] font-mono">
                &gt; Ready to mint your healthcare assets as on-chain La Casa NFTs.
              </p>
              <button
                type="button"
                onClick={handleMint}
                disabled={isMinting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-300/40 bg-gradient-to-r from-emerald-500/20 to-teal-500/15 px-4 py-2.5 text-sm font-semibold uppercase text-emerald-200 transition hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] disabled:opacity-50"
              >
                {isMinting ? '⏳ Minting...' : '✨ Mint La Casa NFT'}
              </button>
            </div>
          )}

          {/* Success */}
          {minted && (
            <div className="glow-panel rounded-2xl border border-emerald-300/40 bg-emerald-950/30 p-6 backdrop-blur text-center">
              <p className="text-2xl mb-2">🎉</p>
              <p className="text-sm font-bold text-emerald-200 uppercase tracking-wider mb-2">La Casa NFT Minted Successfully</p>
              <p className="text-xs text-slate-400/70">Your healthcare assets are now tokenized and earning yield on-chain.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
