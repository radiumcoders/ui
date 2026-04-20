import type { Testimonial } from "@/components/xcn/animated-testimonials"
import { AnimatedTestimonials } from "@/components/xcn/animated-testimonials"

const testimonialsData: Array<Testimonial> = [
  {
    content:
      "Better than a course, it feels like an interactive handbook for design quality.",
    image: "",
  },
  {
    content:
      "Useful for landing pages where you need attention-grabbing social proof.",
    image: "",
  },
  {
    content:
      "Hover states and blur transitions make long testimonials easier to scan.",
    image: "",
  },
]

export function AnimatedTestimonialsPreview() {
  return <AnimatedTestimonials testimonials={testimonialsData} />
}
