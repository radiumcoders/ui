import { createFileRoute } from "@tanstack/react-router"

import Stamp from "@/components/xcn/stamp"

export const Route = createFileRoute("/playground")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-[calc(100vh-64px)] w-full items-center justify-center">
      <Stamp stampColor="#DAD8AB">
        <div className="flex h-full flex-col items-center justify-center p-6 text-center">
          <div className="mb-2 text-4xl font-bold text-black">STAMP</div>
          <div className="text-sm text-black">
            Perforated edge component
          </div>
          <div className="mt-4 text-xs text-black/70">
            Customizable
          </div>
        </div>
      </Stamp>
    </div>
  )
}
