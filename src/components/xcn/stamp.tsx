import { useId } from "react"
import { cn } from "@/lib/utils"

export default function Stamp({
  children,
  holeRadius = 5,
  pitch = 14,
  width = 196,
  height = 252,
  className,
  stampColor,
  borderColor,
}: {
  children?: React.ReactNode
  holeRadius?: number
  pitch?: number
  width?: number
  height?: number
  className?: string
  stampColor?: string
  borderColor?: string
}) {
  const maskId = useId()

  const holes: { cx: number; cy: number }[] = []

  // Top + Bottom (skip first and last)
  for (
    let x = holeRadius + pitch;
    x <= width - holeRadius - pitch;
    x += pitch
  ) {
    holes.push({ cx: x, cy: 0 }) // top
    holes.push({ cx: x, cy: height }) // bottom
  }

  // Left + Right (skip first and last)
  for (
    let y = holeRadius + pitch;
    y <= height - holeRadius - pitch;
    y += pitch
  ) {
    holes.push({ cx: 0, cy: y }) // left
    holes.push({ cx: width, cy: y }) // right
  }

  return (
    <div className={cn("relative", className)} style={{ width, height }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: "absolute", inset: 0 }}
      >
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse">
            {/* visible area */}
            <rect width={width} height={height} fill="white" />

            {/* holes */}
            {holes.map((h, i) => (
              <circle key={i} cx={h.cx} cy={h.cy} r={holeRadius} fill="black" />
            ))}
          </mask>
        </defs>

        {/* border with clean holes */}
        <rect
          width={width}
          height={height}
          fill={stampColor || "currentColor"}
          mask={`url(#${maskId})`}
        />
      </svg>

      {/* inner content */}
      <div
        className="absolute border"
        style={{
          inset: pitch,
          borderRadius: 0,
          background: stampColor || "var(--background)",
          borderColor: borderColor || "#c0be96",
        }}
      >
        {children}
      </div>
    </div>
  )
}
