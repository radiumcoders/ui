import { createFileRoute } from "@tanstack/react-router"

import Stamp from "@/components/xcn/stamp"

export const Route = createFileRoute("/playground")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-[calc(100vh-64px)] w-full items-center justify-center">
      <Stamp />
    </div>
  )
}
