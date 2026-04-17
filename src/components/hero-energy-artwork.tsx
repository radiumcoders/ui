type HeroEnergyArtworkProps = {
  className?: string
}

const desktopPaths = [
  { d: "M126 96 C132 136 154 185 196 214 C226 236 254 246 286 248", color: "#f87171", delay: "0s" },
  { d: "M834 94 C832 138 814 192 774 220 C744 242 716 252 680 252", color: "#60a5fa", delay: "0.7s" },
  { d: "M166 466 C172 422 194 374 236 340 C258 322 274 314 286 312", color: "#a78bfa", delay: "1.1s" },
  { d: "M794 466 C788 420 766 372 726 342 C704 326 690 318 680 316", color: "#34d399", delay: "0.35s" },
]

const mobilePaths = [
  { d: "M84 80 C94 122 114 158 144 182 C164 198 182 206 194 208", color: "#f87171", delay: "0s" },
  { d: "M336 82 C328 122 310 158 282 182 C262 198 242 208 228 210", color: "#60a5fa", delay: "0.7s" },
  { d: "M96 518 C104 478 124 442 152 410 C168 392 182 380 194 372", color: "#a78bfa", delay: "1.1s" },
  { d: "M324 516 C316 476 296 440 270 408 C254 392 242 382 228 374", color: "#34d399", delay: "0.35s" },
]

function EnergySvg({
  paths,
  viewBox,
}: {
  paths: { d: string; color: string; delay: string }[]
  viewBox: string
}) {
  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Animated energy paths flowing into the hero headline"
      className="h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        {paths.map((path, index) => (
          <linearGradient
            key={path.color}
            id={`hero-energy-gradient-${index}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={path.color} stopOpacity="0.95" />
            <stop offset="55%" stopColor={path.color} stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.88" />
          </linearGradient>
        ))}
        <radialGradient id="center-fade-mask" cx="50%" cy="50%" r="30%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="40%" stopColor="white" stopOpacity="0.7" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </radialGradient>
        <mask id="center-fade">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#center-fade-mask)" />
        </mask>
      </defs>

      <g opacity="0.36" mask="url(#center-fade)">
        {paths.map((path, index) => (
          <path
            key={`${path.color}-ambient`}
            d={path.d}
            fill="none"
            stroke={`url(#hero-energy-gradient-${index})`}
            strokeWidth="3"
            strokeLinecap="round"
            className="hero-energy-base"
          />
        ))}
      </g>

      <g mask="url(#center-fade)">
        {paths.map((path, index) => (
          <path
            key={path.color}
            d={path.d}
            fill="none"
            stroke={`url(#hero-energy-gradient-${index})`}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="100"
            className="hero-energy-trace"
            style={{ animationDelay: path.delay }}
          />
        ))}
      </g>
    </svg>
  )
}

export function HeroEnergyArtwork({ className }: HeroEnergyArtworkProps) {
  return (
    <div className={className} aria-hidden="true">
      <div className="hidden h-full w-full md:block">
        <EnergySvg paths={desktopPaths} viewBox="0 0 960 560" />
      </div>
      <div className="h-full w-full md:hidden">
        <EnergySvg paths={mobilePaths} viewBox="0 0 420 620" />
      </div>
    </div>
  )
}
