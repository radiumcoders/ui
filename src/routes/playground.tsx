import { createFileRoute } from "@tanstack/react-router"

import { MotionBtn as MotionButton } from "@/components/xcn/motion-btn"

export const Route = createFileRoute("/playground")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-[calc(100vh-64px)] w-full items-center justify-center">
      <MotionButton>
        For The Horde
      </MotionButton>
    </div>
  )
}
