type HeroEnergyArtworkProps = {
  className?: string
}

const desktopPaths = [
  { d: "m148 92c52 8 112 42 172 118 57 73 135 129 232 154", color: "#f87171", delay: "0s" },
  { d: "m818 106c-42 18-91 56-140 115-47 58-108 108-188 143", color: "#60a5fa", delay: "0.9s" },
  { d: "m198 474c53-9 109-36 165-85 65-58 132-106 220-133", color: "#a78bfa", delay: "1.4s" },
  { d: "m780 472c-46-13-97-40-147-84-58-52-124-100-213-129", color: "#34d399", delay: "0.45s" },
]

const mobilePaths = [
  { d: "m104 78c41 25 85 55 112 102 17 28 28 59 39 97", color: "#f87171", delay: "0s" },
  { d: "m328 86c-40 24-82 55-108 101-15 27-25 57-35 93", color: "#60a5fa", delay: "0.8s" },
  { d: "m116 504c35-29 71-64 96-109 15-28 24-59 31-95", color: "#a78bfa", delay: "1.35s" },
  { d: "m316 502c-33-28-69-63-93-106-16-29-26-61-34-99", color: "#34d399", delay: "0.5s" },
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

      <g opacity="0.2" mask="url(#center-fade)">
        {paths.map((path, index) => (
          <path
            key={`${path.color}-ambient`}
            d={path.d}
            fill="none"
            stroke={`url(#hero-energy-gradient-${index})`}
            strokeWidth="9"
            strokeLinecap="round"
            pathLength="100"
            className="hero-energy-ambient"
            style={{ animationDelay: path.delay }}
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
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="100"
            className="hero-energy-path"
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
