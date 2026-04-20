import { useRef } from "react"
import { useScroll } from "motion/react"
import { ScrollBars, ScrollBarsVertical } from "@/components/xcn/scroll-bars"

export function ScrollBarsPreview() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: containerRef,
  })

  return (
    <div
      ref={containerRef}
      className="relative h-[calc(100svh-60px)] w-full overflow-y-auto overscroll-contain"
    >
      <div className="relative h-[390vh] w-full">
        <div className="sticky top-0 h-svh">
          <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 sm:flex-row">
            <ScrollBars scrollYProgress={scrollYProgress} />
            <ScrollBarsVertical scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>
    </div>
  )
}
