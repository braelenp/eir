# Eir Integration Architecture

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    Abraxas dApp Frontend                         │
│         (TypeScript + React + Vite + Tailwind CSS)             │
└──────────────────────────────────┬──────────────────────────────┘
                                   │
                      ┌────────────┴────────────┐
                      │                        │
        ┌─────────────▼──────────────┐  ┌─────▼────────────────┐
        │  Router (React Router)     │  │  App.tsx             │
        │  ├─ /app (Forge)           │  │  ├─ NavItems         │
        │  ├─ /app/orion (AI)        │  │  ├─ Protection       │
        │  ├─ /app/cadabra (Social)  │  │  ├─ Theme            │
        │  ├─ /app/market (Markets)  │  │  └─ Background       │
        │  └─ /app/vaults (Vaults)   │  │                      │
        └──────────────┬──────────────┘  └──────────────────────┘
                       │
        ┌──────────────▼──────────────────────────┐
        │   ForgePage Component                  │
        │   /pages/ForgePage.tsx                 │
        │                                        │
        │   State Management:                    │
        │   - selectedDaughter: string | null    │
        │   - DAUGHTER_CONFIGS: Record           │
        │   - DAUGHTERS_PHASE1-4: Array[]        │
        │                                        │
        │   ├─ Renders Daughters Grid            │
        │   │  ├─ Phase 1 (Echo, Pulse)         │
        │   │  ├─ Phase 2 (Aurelia, Vein, etc.) │
        │   │  ├─ Phase 3 [EIR + Nautica]      │ ← NEW
        │   │  └─ Phase 4 (Skaði, Freyja, Gaia)│
        │   │                                   │
        │   └─ On Click: setSelectedDaughter()  │
        │      Triggers Conditional Render       │
        └──────────────┬──────────────────────────┘
                       │
        ┌──────────────▼──────────────────────────┐
        │   Conditional Render Logic             │
        │                                        │
        │   if (selectedDaughter) {             │
        │     const config = DAUGHTER_CONFIGS    │
        │       [selectedDaughter]               │
        │     return (                           │
        │       <DaughterPage config={config} /> │
        │     )                                  │
        │   }                                    │
        │                                        │
        │   return (                             │
        │     <RuneRealm> Forge Gallery </> │
        │   )                                    │
        └──────────────┬──────────────────────────┘
                       │
        ┌──────────────▴──────────────────────────┐
        │                                        │
        │  Return to Forge          Enter Dapp  │
        │        │                       │       │
        │        └────────┬──────────────┘       │
        └─────────────────┼──────────────────────┘
                          │
        ┌─────────────────▼────────────────────────┐
        │   DaughterPage Component                │
        │   /pages/DaughterPage.tsx               │
        │                                        │
        │   Props:                               │
        │   - config: DaughterConfig             │
        │   - onClose: () => void                │
        │   - onBuyAbra: () => void              │
        │                                        │
        │   Renders Cinematic Page:              │
        │   ├─ Hero with Icon + Glow             │
        │   ├─ Typing Reveal Header              │
        │   ├─ Lore Section                      │
        │   ├─ Tokenization Flow (3 Steps)       │
        │   ├─ Features Grid                     │
        │   ├─ Asset Classes Grid                │
        │   ├─ Buy $ABRA Buttons (x2)            │
        │   ├─ Enter Dapp Button                 │
        │   ├─ Return to Forge Button            │
        │   └─ Cinematic Effects:                │
        │      ├─ Pulsing gradients              │
        │      ├─ Scanline overlay               │
        │      ├─ Glowing borders                │
        │      ├─ Fade-in animations             │
        │      └─ Hover effects                  │
        └──────────────────────────────────────────┘
```

---

## User Flow - Eir Card Interaction

```
User visits Abraxas dApp
        │
        └─► Navigate to Forge (/app)
               │
               └─► Scroll to Phase 3
                    │
                    ├─ See "Nautica" (disabled)
                    │
                    └─ See "Eir Card" (ACTIVE)
                        │
                        ├─ Icon: ᛒ (Berkano rune)
                        ├─ Title: "Eir"
                        ├─ Subtitle: "Healthcare & Biotech Assets"
                        └─ Button: "Enter Eir"
                            │
                            └─ CLICK!
                                 │
                    ┌────────────▼────────────┐
                    │ DaughterPage Mounts     │
                    │                        │
                    │ 1. Hero Section        │
                    │    Typing Reveal       │
                    │    "Welcome to the     │
                    │     next degree."      │
                    │                        │
                    │ 2. Berkano Rune Icon   │
                    │    Pulsing Glow        │
                    │    (Emerald/Teal)      │
                    │                        │
                    │ 3. Lore Blurb Fades In │
                    │                        │
                    │ 4. Tokenization Flow   │
                    │    [3 Steps Visible]   │
                    │                        │
                    │ 5. Cost-to-User CTAs   │
                    │    "Buy $ABRA" (Top)   │
                    │    "Buy $ABRA" (Bottom)│
                    │                        │
                    │ 6. Dapp Access         │
                    │    "Enter Eir Dapp"    │
                    │                        │
                    │ 7. Navigation Links    │
                    │    "Return to Forge"   │
                    │                        │
                    └────────────┬───────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                        │
                    ▼                        ▼
            Click "Enter Eir"     Click "Return"
           (External Route)       (setState null)
                 │                      │
                 │                      └─► Back to
                 │                          Forge Gallery
                 │
                 └─► Navigate to
                     Eir dApp URL
                     (External)
```

---

## Eir Configuration Dependencies

```
ForgePage.tsx (Main Component)
│
├─ RUNE_CONFIG
│  └─ Defines Forge rune (Kenaz ᚲ - Capital Forging)
│
├─ DAUGHTER_CONFIGS (Object)
│  │
│  └─ eir: {
│     ├─ name: 'Eir'
│     ├─ subtitle: 'Healer of the Species'
│     ├─ headerReveal: typing animation text
│     ├─ description: UI card text
│     ├─ lore: landing page narrative
│     ├─ accentColor: 'emerald' (teal/green glow)
│     ├─ icon: 'ᛒ' ← UPDATED from 💚
│     ├─ flowSteps: 3-step process
│     ├─ features: 4 key capabilities
│     ├─ assetClasses: 6 asset types
│     ├─ dappUrl: route to interface
│     └─ dappLabel: button text
│
├─ DAUGHTERS_PHASE1 (Echo, Pulse)
├─ DAUGHTERS_PHASE2 (Aurelia, Vein, Verdant)
├─ DAUGHTERS_PHASE3 (Nautica, Eir) ← EIR IS HERE
│  └─ eir: {
│     ├─ name: 'Eir'
│     ├─ description: 'Healthcare & Biotech Assets'
│     ├─ rune: 'ᛒ'
│     ├─ isComingSoon: false ← UPDATED from true
│     └─ isInternal: true
│
├─ DAUGHTERS_PHASE4 (Skaði, Freyja, Gaia)
│
├─ SON_CONFIGS (Genesis, Valkyr, Raido, Fenrir, Mimir)
│
└─ SONS (Infrastructure providers)

DaughterPage.tsx (Landing Page Component)
│
├─ Receives: DaughterConfig
│
├─ accentColorMap (Maps accentColor to CSS classes)
│  └─ emerald: { text, glow, border, background colors }
│
├─ TypingReveal Component
│  └─ Animates headerReveal text character-by-character
│
└─ Renders Page Sections:
   ├─ Hero with animated icon
   ├─ Typing reveal header
   ├─ Lore section
   ├─ Tokenization flow (flowSteps)
   ├─ Features (features array)
   ├─ Asset Classes (assetClasses array)
   ├─ CTAs (Buy $ABRA, Enter Dapp)
   └─ Navigation buttons
```

---

## Cinematic Effects Implementation

### 1. **Pulsing Icon with Glow**
```css
/* DaughterPage.tsx - Hero Icon Section */
animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
box-shadow: 0 0 30px rgba(52, 211, 153, 0.35); /* Emerald glow */
background: linear-gradient(to bottom-right, 
           from-emerald-500/30 
           to-slate-900/40);
```

### 2. **Scanline Overlay**
```css
/* Horizontal repeating lines for glitch effect */
background: repeating-linear-gradient(
  180deg,
  rgba(148,163,184,0.07) 0px,
  rgba(148,163,184,0.07) 1px,
  transparent 2px,
  transparent 5px
);
mix-blend-mode: screen;
opacity: 0.2;
```

### 3. **Animated Gradient Orbs**
```css
/* Behind-the-scenes glowing circles */
width: 96px;
height: 96px;
background: linear-gradient(to bottom-right, 
           from-emerald-500/8 
           via-emerald-500/6 
           to-slate-900/40);
border-radius: 50%;
filter: blur(3xl);
animation: pulse 8s ease-in-out infinite;
```

### 4. **Typing Animation**
```javascript
// Character-by-character reveal
const [displayed, setDisplayed] = useState('');

useEffect(() => {
  let idx = 0;
  const interval = setInterval(() => {
    if (idx < text.length) {
      setDisplayed(text.slice(0, ++idx));
    }
  }, speed); // 50ms default = 60ms per character for Eir
}, [text, speed]);
```

### 5. **Fade-In Animations**
```css
/* Sequential content reveals */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Applied with staggered animation-delay */
animation-delay: 0.4s;   /* Header */
animation-delay: 1.8s;   /* Subtitle */
animation-delay: 2.2s;   /* Description */
animation-delay: 2.8s;   /* Lore */
```

---

## Data Flow

```
User Action: Click Eir Card
    │
    └─► ForgePage onClick Handler
        setSelectedDaughter('eir')
    │
    └─► Component Re-renders
        selectedDaughter === 'eir' ? true : false
    │
    └─► Returns:
        <DaughterPage 
          config={DAUGHTER_CONFIGS['eir']} 
          onClose={() => setSelectedDaughter(null)}
          onBuyAbra={handleDaughterBuyAbra}
        />
    │
    └─► DaughterPage Mounts
        Destructures config:
        - name, subtitle, icon, accentColor
        - lore, flowSteps, features, assetClasses
        - headerReveal, dappUrl, dappLabel
    │
    └─► Applies Style Colors
        const colors = accentColorMap[config.accentColor]
        colors = {
          text: 'text-emerald-300',
          glow: 'rgba(52, 211, 153, 0.35)',
          ...
        }
    │
    └─► Renders with Effects
        ├─ TypingReveal(text: config.headerReveal)
        ├─ Icon with pulsing glow
        ├─ Lore section (fade-in)
        ├─ Flow steps grid
        ├─ Features grid
        ├─ Asset classes grid
        ├─ CTA buttons
        └─ Navigation buttons
```

---

## Eir in Abraxas Ecosystem

```
Sophia (Mother)
    │
    ├─ Daughters (Asset Tokenizers)
    │  │
    │  ├─ Phase 1
    │  │  ├─ Echo (Music & Media)
    │  │  └─ Pulse (Gaming)
    │  │
    │  ├─ Phase 2
    │  │  ├─ Aurelia (Real Estate)
    │  │  ├─ Vein (Minerals & Resources)
    │  │  └─ Verdant (Carbon & Environment)
    │  │
    │  ├─ Phase 3 [EIR ACTIVE]
    │  │  ├─ Nautica (Yachts & Maritime)
    │  │  └─ Eir (Healthcare & Biotech) ← YOU ARE HERE
    │  │
    │  └─ Phase 4 (Soon)
    │     ├─ Skaði (Jets & Mobility)
    │     ├─ Freyja (Luxury Collectibles)
    │     └─ Gaia (Botanical & Cannabis)
    │
    └─ Sons (Infrastructure Providers)
       ├─ Genesis (Liquidity & Capital)
       ├─ Valkyr (Governance & Security)
       ├─ Raido (Execution & Speed)
       ├─ Fenrir (Security & Monitoring)
       └─ Mimir (Oracles & Data)

Eir's Role:
- Tokenizes healthcare assets
- Patient data sovereignty
- Medical data on-chain
- Clinic fractional ownership
- Biotech innovation equity
- Wellness protocol tokenization
- Regenerative health finance
```

---

## Deployment Readiness

✅ **Code Changes:** Complete  
✅ **Build:** Successful  
✅ **TypeScript:** No errors  
✅ **Styling:** Fully integrated  
✅ **Animations:** Working  
✅ **Navigation:** Preserved  
✅ **CTAs:** Configured  
✅ **Mobile:** Responsive  

**Status: READY FOR PRODUCTION DEPLOYMENT**
