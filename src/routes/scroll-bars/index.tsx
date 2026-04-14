import { createFileRoute } from "@tanstack/react-router"
import { ScrollBars } from "@/components/xcn/scroll-bars"
import { useScroll } from "motion/react"

export const Route = createFileRoute("/scroll-bars/")({
  component: RouteComponent,
})

function RouteComponent() {
  const { scrollYProgress } = useScroll()
  return (
    <div className="h-[600vh]">
      <div className="fixed flex h-full w-full items-center justify-center">
        <ScrollBars scrollYProgress={scrollYProgress}></ScrollBars>
      </div>
    </div>
  )
}
