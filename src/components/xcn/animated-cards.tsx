import { motion } from "motion/react"
import type { ReactElement, ReactNode } from "react"
import { cn } from "@/lib/utils"

export type CardMotionConfig = {
  x: number
  y: number
  zIndex: number
}

export type CardItem = {
  title: string
  description: string
  className?: string
  skeleton: ReactElement
  config: CardMotionConfig
  rotation: number
}

type AnimatedCardsProps = {
  cards: Array<CardItem>
  rounded?: boolean
  className?: string
  mobileContainerClassName?: string
  desktopContainerClassName?: string
  cardClassName?: string
  initialBlur?: number
  initialScale?: number
  desktopHoverScale?: number
  renderCardFooter?: (card: CardItem) => ReactNode
}

export function AnimatedCards({
  cards,
  rounded = false,
  className,
  mobileContainerClassName,
  desktopContainerClassName,
  cardClassName,
  initialBlur = 3,
  initialScale = 0.8,
  desktopHoverScale = 1.02,
  renderCardFooter,
}: AnimatedCardsProps) {
  const cardShapeClass = rounded ? "rounded-4xl" : "rounded-none"

  const defaultFooter = (card: CardItem) => (
    <div className="items-baseline p-2">
      <h1 className="text-start">{card.title}</h1>
      <p className="text-start text-sm">{card.description}</p>
    </div>
  )

  const renderFooter = renderCardFooter ?? defaultFooter

  return (
    <div
      className={cn(
        "mx-auto flex h-screen w-full items-center justify-center overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-6 py-10 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden",
          mobileContainerClassName
        )}
      >
        {cards.map((card) => (
          <div
            key={`${card.title}-mobile`}
            className={cn(
              "flex h-84 w-64 shrink-0 snap-center flex-col justify-between border-2 p-2 text-2xl font-bold",
              cardShapeClass,
              cardClassName,
              card.className
            )}
          >
            {card.skeleton}
            {renderFooter(card)}
          </div>
        ))}
      </div>

      <div
        className={cn(
          "relative hidden h-84 w-264 shrink-0 origin-center md:block md:scale-[0.65] lg:scale-90 xl:scale-100",
          desktopContainerClassName
        )}
      >
        {cards.map((card) => (
          <motion.div
            key={`${card.title}-desktop`}
            className="absolute top-0 left-0"
            initial={{
              x: 400,
              y: 200,
              zIndex: 1,
              filter: `blur(${initialBlur}px)`,
              scale: initialScale,
              rotate: 0,
            }}
            animate={{
              x: card.config.x,
              y: card.config.y,
              zIndex: card.config.zIndex,
              filter: "blur(0px)",
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
              type="button"
              whileHover={{ scale: desktopHoverScale }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              className={cn(
                "flex h-84 w-64 origin-center flex-col justify-between border-2 p-2 text-2xl font-bold",
                "[outline:1px_solid_transparent] backface-hidden transform-3d",
                cardShapeClass,
                cardClassName,
                card.className
              )}
            >
              {card.skeleton}
              {renderFooter(card)}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
