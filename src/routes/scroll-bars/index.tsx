import { createFileRoute } from "@tanstack/react-router"
import { ScrollBars } from "@/components/xcn/scroll-bars"

export const Route = createFileRoute("/scroll-bars/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="h-[400vh]">
      <div className="h-full w-full fixed flex items-center justify-center">
        <ScrollBars></ScrollBars>
      </div>
    </div>
  )
}
