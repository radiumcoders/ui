import { createFileRoute } from "@tanstack/react-router"
import { ScrollBars, ScrollBarsVertical } from "@/components/xcn/scroll-bars"
import { useScroll } from "motion/react"

export const Route = createFileRoute("/scroll-bars/")({
  component: RouteComponent,
})

function RouteComponent() {
  const { scrollYProgress } = useScroll()
  return (
    <div className="h-[600vh]">
      <div className="fixed flex-col sm:flex-row flex h-full w-full items-center justify-center gap-4">
        <ScrollBars scrollYProgress={scrollYProgress}></ScrollBars>

        <ScrollBarsVertical scrollYProgress={scrollYProgress}></ScrollBarsVertical>
      </div>
    </div>
  )
}
