import { createFileRoute } from "@tanstack/react-router"
import {
  AnimatedTestimonials,
  type Testimonial,
} from "@/components/xcn/animated-testimonials"

export const Route = createFileRoute("/animated-testimonials/")({
  component: RouteComponent,
})

function RouteComponent() {
  const testimonials: Testimonial[] = [
    {
      content:
        "Better than a course, it's a reference manual to making great work full of tactical secrets I haven't seen anywhere else.",
      image: "",
    },

    {
      content:
        "Better than a course, it's a reference manual to making great work full of tactical secrets I haven't seen anywhere else.",
      image: "",
    },

    {
      content:
        "Better than a course, it's a reference manual to making great work full of tactical secrets I haven't seen anywhere else.",
      image: "",
    },

    {
      content:
        "It's kind of like reading a beautifully designed interactive Medium article.",
      image: "",
    },

    {
      content:
        "It's not often the best-of-the-best bring you along and show you how it's done.",
      image: "",
    },

    {
      content:
        "The bar he sets is ridiculous. Every company I know wants to work with him.",
      image: "",
    },
  ]
  return (
    <div className="mx-auto flex h-screen w-full max-w-3xl items-center justify-center">
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  )
}
