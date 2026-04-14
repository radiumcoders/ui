import { motion } from "motion/react"
import { useState } from "react"

export type Testimonial = {
  content: string
  image: string
}

export function AnimatedTestimonials({
  testimonials,
}: {
  testimonials: Testimonial[]
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  return (
    <>
      <div className="p-2 text-lg text-balance sm:text-xl md:text-2xl lg:text-3xl">
        {testimonials.map((testimonial, idx) => {
          return (
            <motion.span
              key={`${testimonial.content}`}
              className="inline"
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={{
                filter:
                  activeIndex === null
                    ? "blur(0px)"
                    : activeIndex === idx
                      ? "blur(0px)"
                      : "blur(4px)",
                opacity:
                  activeIndex === null ? 1 : activeIndex === idx ? 1 : 0.5,
              }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {testimonial.image ? (
                <img
                  src={testimonial.image}
                  alt={testimonial.content}
                  className="mr-2 inline-block size-9 rounded-full bg-primary align-middle"
                />
              ) : (
                <span className="mr-2 inline-block size-9 rounded-full bg-primary align-middle" />
              )}
              {testimonial.content}{" "}
            </motion.span>
          )
        })}
      </div>
      <div></div>
    </>
  )
}
