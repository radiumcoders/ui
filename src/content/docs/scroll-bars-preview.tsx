import { useScroll } from "motion/react"
import { useRef } from "react"
import { ScrollBars, ScrollBarsVertical } from "@/components/xcn/scroll-bars"

/** Contained scroll so `useScroll({ container })` drives the bars (same idea as the full-page demo). */
export function ScrollBarsDocPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: ref })

  return (
    <div ref={ref} className="h-100 w-full overflow-y-auto bg-background">
      <div className="sticky top-0 z-10 flex min-h-65 items-center justify-center gap-4 bg-background/95 py-6 backdrop-blur-sm">
        <ScrollBars scrollYProgress={scrollYProgress} />
        <ScrollBarsVertical scrollYProgress={scrollYProgress} />
      </div>  
      <div className="h-180" aria-hidden />
    </div>
  )
}
