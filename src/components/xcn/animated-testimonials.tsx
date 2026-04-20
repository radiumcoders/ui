import { motion } from "motion/react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export type Testimonial = {
  content: string
  image?: string
}

type AnimatedTestimonialsProps = {
  testimonials: Array<Testimonial>
  className?: string
  itemClassName?: string
  avatarClassName?: string
  initialBlur?: number
  inactiveBlur?: number
  inactiveOpacity?: number
  transitionDuration?: number
  onActiveIndexChange?: (index: number | null) => void
}

export function AnimatedTestimonials({
  testimonials,
  className,
  itemClassName,
  avatarClassName,
  initialBlur = 10,
  inactiveBlur = 4,
  inactiveOpacity = 0.5,
  transitionDuration = 0.2,
  onActiveIndexChange,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const setIndex = (index: number | null) => {
    setActiveIndex(index)
    onActiveIndexChange?.(index)
  }

  return (
    <div
      className={cn(
        "p-2 text-lg text-balance sm:text-xl md:text-2xl lg:text-3xl",
        className
      )}
    >
      {testimonials.map((testimonial, idx) => (
        <motion.span
          key={testimonial.content}
          className={cn("inline", itemClassName)}
          initial={{ filter: `blur(${initialBlur}px)`, opacity: 0 }}
          animate={{
            filter:
              activeIndex === null
                ? "blur(0px)"
                : activeIndex === idx
                  ? "blur(0px)"
                  : `blur(${inactiveBlur}px)`,
            opacity:
              activeIndex === null ? 1 : activeIndex === idx ? 1 : inactiveOpacity,
          }}
          transition={{ duration: transitionDuration }}
          onMouseEnter={() => setIndex(idx)}
          onMouseLeave={() => setIndex(null)}
        >
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={testimonial.content}
              className={cn(
                "mr-2 inline-block size-9 rounded-full bg-primary align-middle",
                avatarClassName
              )}
            />
          ) : (
            <span
              className={cn(
                "mr-2 inline-block size-9 rounded-full bg-primary align-middle",
                avatarClassName
              )}
            />
          )}
          {testimonial.content}{" "}
        </motion.span>
      ))}
    </div>
  )
}
