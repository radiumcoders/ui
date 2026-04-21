import { createFileRoute } from "@tanstack/react-router"
import SkeuomorphicButtons from "@/components/xcn/skeuomorphic-buttons"

export const Route = createFileRoute("/playground")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="h-[calc(100vh-64px)] w-full flex items-center justify-center">
      <SkeuomorphicButtons />
    </div>
  )
}
