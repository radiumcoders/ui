import { cn } from "@/lib/utils"
import { useScroll } from "motion/react"

export function ScrollBars() {
  const bars = new Array(51).fill(0).map((_, i) => i)
  const { scrollYProgress } = useScroll()
  return (
    <div>
      <div className="flex justify-center items-center gap-1 rounded-3xl border-2 border-border bg-background p-4">
        {bars.map((bar, idx) => (
          <Bar key={`bar-${bar.toString()}`} isLarger={idx % 5 === 0}></Bar>
        ))}
      </div>
    </div>
  )
}

function Bar({ isLarger }: { isLarger: boolean }) {
  return <div className={cn("w-px bg-primary", isLarger ? "h-9" : "h-6")}></div>
}
