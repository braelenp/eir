type BrandLogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  showWordmark?: boolean;
  className?: string;
};

const sizeClasses: Record<NonNullable<BrandLogoProps['size']>, string> = {
  sm: 'h-8 w-8',
  md: 'h-12 w-12',
  lg: 'h-24 w-24',
  xl: 'h-28 w-28',
  '2xl': 'h-36 w-36',
  '3xl': 'h-52 w-52',
};

const primaryLogoPath = '/assets/abraxas-logo-graphic.jpg';
const fallbackLogoPath = '/assets/abraxas-wordmark.svg';

export function BrandLogo({ size = 'sm', showWordmark = true, className = '' }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`.trim()}>
      <div className={`overflow-hidden bg-slate-950/70 ${sizeClasses[size]}`}>
        <img
          src={primaryLogoPath}
          alt="Abraxas logo"
          className="h-full w-full object-cover object-center"
          onError={(event) => {
            event.currentTarget.src = fallbackLogoPath;
          }}
        />
      </div>
      {showWordmark ? <span className="gold-accent-text text-lg font-semibold tracking-wide">ABRAXAS</span> : null}
    </div>
  );
}
