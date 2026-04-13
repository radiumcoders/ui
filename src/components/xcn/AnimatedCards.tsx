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
}

export function AnimatedCards({ cards }: { cards: CardItem[] }) {
  const rotations = [-5, 3, -3, 5, -2]

  return (
    <div className="mx-auto flex h-screen w-full items-center justify-center">
      <div className="relative h-[28rem] w-264 max-w-full overflow-visible">
        {cards.map((card, i) => (
          <motion.div
            key={card.title + i}
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
              rotate: rotations[i % rotations.length],
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
                "flex h-84 w-64 origin-center flex-col justify-between rounded-4xl border border-transparent p-2 text-2xl font-bold ring-1 ring-black/10 ring-inset"
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
