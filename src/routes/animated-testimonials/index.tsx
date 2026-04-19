import { createFileRoute } from "@tanstack/react-router"
import { AnimatedTestimonials } from "@/components/xcn/animated-testimonials"
import { animatedTestimonialsDemo } from "@/content/docs/animated-testimonials-demo"

export const Route = createFileRoute("/animated-testimonials/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="mx-auto flex h-screen w-full max-w-3xl items-center justify-center">
      <AnimatedTestimonials testimonials={animatedTestimonialsDemo} />
    </div>
  )
}
