import { motion } from "motion/react"
import type { ReactElement } from "react"
import { cn } from "@/lib/utils"

export type CardItem = {
  title: string
  description: string
  className?: string
  skeleton: ReactElement
  config: {
    x: number
    y: number
    zIndex: number
  }
  rotation: number
}

export function AnimatedCards({
  cards,
  rounded,
  className,
}: {
  cards: Array<CardItem>
  rounded?: boolean
  className?: string
}) {
  return (
    <div className={cn("mx-auto flex h-screen w-full items-center justify-center overflow-hidden", className)}>
      {/* Mobile Swipe UI */}
      <div className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-6 py-10 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
        {cards.map((card) => (
          <div
            key={card.title + "-mobile"}
            className={cn(
              card.className,
              "flex h-84 w-64 shrink-0 snap-center flex-col justify-between border-2 p-2 text-2xl font-bold",
              rounded ? "rounded-4xl" : "rounded-none"
            )}
          >
            {card.skeleton}
            <div className="items-baseline p-2">
              <h1 className="text-start">{card.title}</h1>
              <p className="text-start text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

        {/* Desktop Animated UI */}
        <div className="relative hidden h-84 w-264 shrink-0 origin-center md:block md:scale-[0.65] lg:scale-90 xl:scale-100">
        {cards.map((card) => (
          <motion.div
            key={card.title + "-desktop"}
            className="absolute top-0 left-0"
            initial={{
              x: 400,
              y: 200,
              zIndex: 1,
              filter: `blur(3px)`,
              scale: 0.8,
              rotate: 0,
            }}
            animate={{
              x: card.config.x,
              y: card.config.y,
              zIndex: card.config.zIndex,
              filter: `blur(0px)`,
              scale: 1,
              rotate: card.rotation,
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 120,
            }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              className={cn(
                card.className,
                "flex h-84 w-64 origin-center flex-col justify-between border-2 p-2 text-2xl font-bold",
                "[outline:1px_solid_transparent] backface-hidden transform-3d",
                rounded ? "rounded-4xl" : "rounded-none"
              )}
            >
              {card.skeleton}
              <div className="items-baseline p-2">
                <h1 className="text-start">{card.title}</h1>
                <p className="text-start text-sm">{card.description}</p>
              </div>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
