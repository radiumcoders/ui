import type { Testimonial } from "@/components/xcn/animated-testimonials"
import { AnimatedTestimonials } from "@/components/xcn/animated-testimonials"

const testimonialsData: Array<Testimonial> = [
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
      "It's kind of like reading a beautifully designed interactive Medium article. It's like a guided tour of a beautiful garden.",
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

export function AnimatedTestimonialsPreview() {
  return <AnimatedTestimonials testimonials={testimonialsData} />
}
