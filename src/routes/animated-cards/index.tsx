import { createFileRoute } from "@tanstack/react-router"
import { AnimatedCards } from "@/components/xcn/animated-cards"
import { animatedCardsDemo } from "@/content/docs/animated-cards-demo"

export const Route = createFileRoute("/animated-cards/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <div className="flex min-h-svh items-center justify-center bg-white dark:bg-neutral-950">
        <AnimatedCards cards={animatedCardsDemo} />
      </div>
      <div className="flex min-h-svh items-center justify-center bg-white dark:bg-neutral-950">
        <AnimatedCards cards={animatedCardsDemo} rounded />
      </div>
    </div>
  )
}
