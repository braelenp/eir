import { useEffect, useState, useRef } from 'react';
import { ArrowRight, TrendingUp, Upload, CheckCircle, FileText } from 'lucide-react';

function TypingReveal({ text, delay = 0, speed = 50 }: { text: string; delay?: number; speed?: number }) {
	const [displayed, setDisplayed] = useState('');
	const [done, setDone] = useState(false);

	useEffect(() => {
		let idx = 0;
		const startTime = setTimeout(() => {
			const interval = setInterval(() => {
				if (idx < text.length) {
					setDisplayed(text.slice(0, ++idx));
				} else {
					setDone(true);
					clearInterval(interval);
				}
			}, speed);
		}, delay);

		return () => {
			clearTimeout(startTime);
		};
	}, [text, delay, speed]);

	return (
		<span>
			{displayed}
			{!done && <span className="animate-pulse ml-0.5">▊</span>}
		</span>
	);
}

export function EirPage() {
	const [files, setFiles] = useState<File[]>([]);
	const [currentStep, setCurrentStep] = useState(1);
	const [attested, setAttested] = useState(false);
	const [minted, setMinted] = useState(false);
	const [isMinting, setIsMinting] = useState(false);

	const fileRef = useRef<HTMLInputElement>(null);

	const handleFiles = (picked: FileList | null) => {
		if (!picked) return;
		setFiles(Array.from(picked));
		if (currentStep === 1) setCurrentStep(2);
	};

	const handleAttest = () => {
		setAttested(true);
		setCurrentStep(3);
	};

	const handleMint = () => {
		setIsMinting(true);
		setTimeout(() => {
			setIsMinting(false);
			setMinted(true);
			setCurrentStep(4);
		}, 2200);
	};

	const handleBuyAbra = () => {
		console.log('Buy $ABRA clicked');
	};

	return (
		<div className="min-h-screen bg-slate-950 text-slate-100 overflow-y-auto">
			{/* Animated background */}
			<div className="fixed inset-0 -z-10">
				<div className="absolute inset-0 bg-slate-950" />
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
				<div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
				<div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
				<div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen [background:repeating-linear-gradient(180deg,rgba(148,163,184,0.07)_0px,rgba(148,163,184,0.07)_1px,transparent_2px,transparent_5px)]" />
			</div>

			{/* Header */}
			<div className="sticky top-0 z-40 border-b border-emerald-500/20 bg-slate-950/80 backdrop-blur-sm">
				<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<span className="text-3xl drop-shadow-[0_0_20px_rgba(52,211,153,0.6)]">ᛒ</span>
						<div>
							<h1 className="text-xl font-bold text-emerald-300 tracking-wider uppercase font-mono">Eir</h1>
							<p className="text-xs text-emerald-400/70 font-mono">Healthcare & Biotech Tokenization</p>
						</div>
					</div>
					<button
						type="button"
						onClick={handleBuyAbra}
						className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-400/40 bg-gradient-to-r from-emerald-500/20 to-teal-500/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.15)] transition hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:border-emerald-400/60"
					>
						<TrendingUp size={16} />
						Buy $ABRA
					</button>
				</div>
			</div>

			{/* Main Content */}
			<div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
				{/* Hero Section */}
				<section className="mb-16">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold font-mono text-emerald-200 tracking-wider uppercase leading-tight mb-6">
							<TypingReveal text="Welcome to the next degree." delay={400} speed={60} />
						</h2>
						<p className="text-xl font-semibold font-mono text-emerald-300 tracking-widest uppercase mb-3 animate-fadeIn" style={{ animationDelay: '1.8s' }}>
							Eir — Healer of the Species
						</p>
						<p className="text-base font-mono text-emerald-300/80 tracking-wider uppercase animate-fadeIn" style={{ animationDelay: '2.2s' }}>
							Patient-Owned Medical Assets. On-Chain Wellness Equity. Regenerative Health Finance.
						</p>
					</div>

					{/* Hero Icon */}
					<div className="flex justify-center mb-12 animate-fadeIn" style={{ animationDelay: '2.6s' }}>
						<div className="relative">
							<div className="absolute inset-0 rounded-full bg-emerald-500/40 blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
							<div className="relative z-10 bg-gradient-to-br from-emerald-500/30 to-teal-500/20 border border-emerald-300/40 rounded-full p-12">
								<span className="text-6xl drop-shadow-[0_0_30px_rgba(52,211,153,0.8)]">ᛒ</span>
							</div>
						</div>
					</div>

					{/* Lore */}
					<div
						className="max-w-3xl mx-auto rounded-xl border border-emerald-300/25 bg-gradient-to-br from-emerald-500/8 via-emerald-500/6 to-slate-900/40 p-8 backdrop-blur-sm animate-fadeIn"
						style={{ animationDelay: '2.8s' }}
					>
						<p className="text-xs font-bold font-mono text-emerald-300 uppercase tracking-widest mb-3">&gt; [LORE_INITIATION]</p>
						<p className="text-sm leading-relaxed text-slate-300/90 font-mono">
							Eir tokenizes healthcare assets, medical data sovereignty, wellness protocols, and biotech innovations. Patient-owned records, tokenized treatments, fractional ownership of clinics, and regenerative health become on-chain La Casa NFTs. The species now claims the body, the healing arts, and the future of medicine.
						</p>
					</div>
				</section>

				{/* Primary CTA */}
				<div className="flex justify-center mb-16 animate-fadeIn" style={{ animationDelay: '3.2s' }}>
					<button
						type="button"
						onClick={handleBuyAbra}
						className="inline-flex items-center justify-center gap-3 rounded-xl border border-emerald-400/40 bg-gradient-to-r from-emerald-500/20 to-teal-500/15 px-8 py-4 text-base font-bold uppercase tracking-wider text-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.35)] transition hover:shadow-[0_0_40px_rgba(52,211,153,0.5)] hover:border-emerald-400/60"
					>
						<TrendingUp size={18} />
						Buy $ABRA Tokens
						<ArrowRight size={16} />
					</button>
				</div>

				{/* Tokenization Flow */}
				<section className="mb-16">
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
							<div key={item.step} className="group relative overflow-hidden rounded-xl border border-emerald-300/25 bg-gradient-to-br from-emerald-500/8 via-slate-900/60 to-slate-900/40 p-6 transition hover:border-emerald-300/50 hover:from-emerald-500/12">
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
				</section>

				{/* Key Capabilities */}
				<section className="mb-16">
					<div className="border-l-4 border-emerald-400/50 pl-6 mb-8">
						<h3 className="text-lg font-bold text-emerald-300 tracking-widest uppercase font-mono">&gt; [CAPABILITIES]</h3>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{[
							{
								title: 'Patient Data Sovereignty',
								description: 'Own and monetize your medical records on-chain',
								icon: '📊',
							},
							{
								title: 'Clinic Fractionalization',
								description: 'Tokenize ownership of healthcare providers and facilities',
								icon: '🏥',
							},
							{
								title: 'Biotech Innovation Equity',
								description: 'Invest in pharmaceutical and wellness protocols',
								icon: '🧬',
							},
							{
								title: 'Regenerative Health',
								description: 'Earn yields from wellness and longevity services',
								icon: '💚',
							},
						].map((feature, idx) => (
							<div key={idx} className="rounded-lg border border-emerald-300/15 bg-emerald-950/20 p-4">
								<div className="flex gap-3">
									<span className="text-2xl shrink-0">{feature.icon}</span>
									<div>
										<h3 className="text-sm font-bold text-emerald-200 mb-1">{feature.title}</h3>
										<p className="text-xs text-slate-400/80 leading-relaxed">{feature.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Asset Classes */}
				<section className="mb-16">
					<div className="border-l-4 border-emerald-400/50 pl-6 mb-8">
						<h3 className="text-lg font-bold text-emerald-300 tracking-widest uppercase font-mono">&gt; [ASSET_CLASSES]</h3>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{[
							{ name: 'Medical Data', desc: 'Patient records and health identity', icon: '📋' },
							{ name: 'Clinic Equity', desc: 'Fractional ownership of healthcare facilities', icon: '🏥' },
							{ name: 'Treatment Protocols', desc: 'Approved medical procedures and therapies', icon: '⚕️' },
							{ name: 'Biotech IP', desc: 'Pharmaceutical and regenerative health patents', icon: '🧬' },
							{ name: 'Insurance Pools', desc: 'Decentralized health insurance products', icon: '🛡️' },
							{ name: 'Wellness Services', desc: 'Preventative care and longevity programs', icon: '🧘' },
						].map((asset, idx) => (
							<div key={idx} className="rounded-lg border border-emerald-300/15 bg-emerald-950/20 p-4 flex items-center gap-3">
								<span className="text-2xl">{asset.icon}</span>
								<div>
									<p className="text-sm font-bold text-emerald-200">{asset.name}</p>
									<p className="text-xs text-slate-400/70">{asset.desc}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Upload Section */}
				<section className="border-t border-emerald-500/30 pt-16 mb-16">
					<div className="max-w-3xl mx-auto">
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
				</section>

				{/* Bottom CTA */}
				<section className="border-t border-emerald-500/30 pt-16 pb-12">
					<div className="max-w-xl mx-auto text-center space-y-6">
						<div>
							<p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono">&gt; Ready to participate?</p>
							<h3 className="text-2xl font-bold text-emerald-200 tracking-wider uppercase">Get $ABRA Tokens</h3>
						</div>
						<p className="text-sm text-slate-300/80">Acquire ABRA governance tokens for exclusive access to Eir protocols and yield opportunities.</p>
						<button
							type="button"
							onClick={handleBuyAbra}
							className="w-full inline-flex items-center justify-center gap-3 rounded-xl border border-emerald-400/40 bg-gradient-to-r from-emerald-500/20 to-teal-500/15 px-8 py-4 text-base font-bold uppercase tracking-wider text-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.35)] transition hover:shadow-[0_0_40px_rgba(52,211,153,0.5)] hover:border-emerald-400/60"
						>
							<TrendingUp size={18} />
							Buy $ABRA Now
							<ArrowRight size={16} />
						</button>
					</div>
				</section>
			</div>
		</div>
	);
}
