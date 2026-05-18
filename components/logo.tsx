type LogoProps = {
  className?: string
  showWordmark?: boolean
}

export function Logo({ className, showWordmark = false }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 text-foreground ${className ?? ""}`}>
      {/* Minimalist club flag: pole, flag, green, hole */}
      <svg
        viewBox="0 0 44 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-auto"
        aria-hidden="true"
      >
        {/* Subtle terrain horizon */}
        <path
          d="M2 44 Q 14 41 22 42 Q 32 43 42 40"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Green (elliptical) */}
        <ellipse
          cx="22"
          cy="46"
          rx="13"
          ry="2.6"
          stroke="currentColor"
          strokeWidth="0.9"
          fill="none"
        />

        {/* Flagpole */}
        <line
          x1="22"
          y1="6"
          x2="22"
          y2="46"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        {/* Pennant flag */}
        <path
          d="M22 7 L36 11.5 L22 16 Z"
          fill="currentColor"
        />

        {/* Hole at base */}
        <circle cx="22" cy="46" r="1.4" fill="currentColor" />

        {/* Top finial */}
        <circle cx="22" cy="5" r="0.9" fill="currentColor" />
      </svg>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-[15px] tracking-[0.18em] uppercase">
            Forest Hills
          </span>
          <span className="font-display text-[13px] md:text-[14px] text-foreground/60 mt-0.5">
            Golf Club
          </span>
        </span>
      )}
    </div>
  )
}
