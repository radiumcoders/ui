import {  motion, useSpring, useTransform } from "motion/react"
import type {MotionValue} from "motion/react";
import { cn } from "@/lib/utils"

const INDICATOR_WIDTH = 4
const INDICATOR_HEIGHT = 4

export function ScrollBars({
  scrollYProgress,
  rounded,
  accentColor
}: {
  scrollYProgress: MotionValue<number>
  rounded?: boolean
  accentColor?: string
}) {
  const bars = new Array(51).fill(0).map((_, i) => i)
  const rawX = useTransform(scrollYProgress, [0, 1], [0, 251 - INDICATOR_WIDTH])
  const x = useSpring(rawX, { stiffness: 200, damping: 20 })

  return (
    <div>
      <motion.div className={cn("relative flex items-center justify-center gap-1 border-2 border-border bg-background p-4", rounded ? "rounded-3xl" : "rounded-none")}>
        <motion.div
          className={cn("absolute left-4 w-1 rounded-full", accentColor ? `bg-${accentColor}` : "bg-accent-foreground")}
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

// ---------------------------------------------------------------------------
// Vertical variant
// ---------------------------------------------------------------------------

export function ScrollBarsVertical({
  scrollYProgress,
  rounded,
  accentColor,
}: {
  scrollYProgress: MotionValue<number>
  rounded?: boolean
  accentColor?: string
}) {
  const bars = new Array(51).fill(0).map((_, i) => i)
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 251 - INDICATOR_HEIGHT])
  const y = useSpring(rawY, { stiffness: 200, damping: 20 })

  return (
    <div>
      <motion.div
        className={cn(
          "relative flex flex-col items-center justify-center gap-1 border-2 border-border bg-background p-4",
          rounded ? "rounded-3xl" : "rounded-none"
        )}
      >
        <motion.div
          className={cn(
            "absolute top-4 h-1 rounded-full",
            accentColor ? `bg-${accentColor}` : "bg-accent-foreground"
          )}
          initial={{ width: "0px" }}
          animate={{ width: "40px" }}
          style={{ y }}
          transition={{
            type: "spring",
            damping: 12,
            stiffness: 120,
          }}
        />
        {bars.map((bar, idx) => (
          <BarHorizontal key={`bar-h-${bar.toString()}`} isLarger={idx % 5 === 0} />
        ))}
      </motion.div>
    </div>
  )
}

function BarHorizontal({ isLarger }: { isLarger: boolean }) {
  return (
    <motion.div
      layout
      initial={{ width: "0px" }}
      animate={{ width: isLarger ? "36px" : "24px" }}
      transition={{
        type: "spring",
        damping: 12,
        stiffness: 120,
      }}
      className={cn("h-px bg-primary", isLarger ? "w-9" : "w-6")}
    />
  )
}
