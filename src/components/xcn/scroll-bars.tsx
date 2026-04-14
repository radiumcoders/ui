import { type MotionValue, motion, useSpring, useTransform } from "motion/react"
import { cn } from "@/lib/utils"

const INDICATOR_WIDTH = 4

export function ScrollBars({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>
}) {
  const bars = new Array(51).fill(0).map((_, i) => i)
  const rawX = useTransform(scrollYProgress, [0, 1], [0, 251 - INDICATOR_WIDTH])
  const x = useSpring(rawX, { stiffness: 200, damping: 20 })

  return (
    <div>
      <motion.div className="relative flex items-center justify-center gap-1 rounded-3xl border-2 border-border bg-background p-4">
        <motion.div
          className="absolute left-4 w-1 rounded-full bg-orange-400"
          initial={{ height: "0px" }}
          animate={{ height: "40px" }}
          style={{ x }}
          transition={{
            type: "spring",
            damping: 12,
            stiffness: 120,
          }}
        />
        {bars.map((bar, idx) => (
          <Bar key={`bar-${bar.toString()}`} isLarger={idx % 5 === 0} />
        ))}
      </motion.div>
    </div>
  )
}
function Bar({ isLarger }: { isLarger: boolean }) {
  return (
    <motion.div
      layout
      // style={{ height }}
      initial={{ height: isLarger ? "0px" : "0px" }}
      animate={{ height: isLarger ? "36px" : "24px" }}
      transition={{
        type: "spring",
        damping: 12,
        stiffness: 120,
      }}
      className={cn("w-px bg-primary", isLarger ? "h-9" : "h-6")}
    />
  )
}
