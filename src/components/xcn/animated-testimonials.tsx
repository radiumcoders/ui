import { motion } from "motion/react"
import { useState } from "react"

export function AnimatedTestimonials() {
  const testimonials = [
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  return (
    <>
      <div className="text-3xl text-balance">
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
                <img src={testimonial.image} alt={testimonial.content} />
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
