import { AnimatedTestimonials } from "@/components/xcn/animated-testimonials"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/animated-testimonials/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-screen w-full items-center justify-center max-w-3xl mx-auto">
      <AnimatedTestimonials />
    </div>
  )
}
