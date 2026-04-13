import { createFileRoute } from "@tanstack/react-router"
import { AnimatedCards, type CardItem } from "@/components/xcn/AnimatedCards"

export const Route = createFileRoute("/")({ component: App })

const Cards: CardItem[] = [
  {
    title: "NEAT AND CLEAN",
    description:
      "Aesthetically pleasing and highly organized layouts designed for ease of use.",
    className: "bg-orange-500 text-orange-50 border-orange-600",
    skeleton: <div className="h-42 w-full rounded-3xl bg-orange-600"> </div>,
    config: {
      x: 0,
      y: 24,
      zIndex: 1,
    },
  },
  {
    title: "PIXEL PERFECT",
    description:
      "Every element is crafted with precise attention to detail and alignment.",
    className: "bg-emerald-500 text-emerald-50 border-emerald-600",
    skeleton: <div className="h-42 w-full rounded-3xl bg-emerald-600"> </div>,
    config: {
      x: 200,
      y: -24,
      zIndex: 2,
    },
  },
  {
    title: "MINIMAL",
    description:
      "Stripped down to the essentials for maximum clarity and impact.",
    className: "bg-rose-500 text-rose-50 border-rose-600",
    skeleton: <div className="h-42 w-full rounded-3xl bg-rose-600"> </div>,
    config: {
      x: 400,
      y: 24,
      zIndex: 3,
    },
  },
  {
    title: "MORDERN",
    description: "Cutting-edge design patterns utilizing the latest trends.",
    className: "bg-amber-100 [&_h1]:text-primary border-amber-200",
    skeleton: <div className="h-42 w-full rounded-3xl bg-amber-200"> </div>,
    config: {
      x: 600,
      y: -24,
      zIndex: 4,
    },
  },
  {
    title: "CLEAN",
    description: "Cutting-edge design patterns utilizing the latest trends.",
    className: "bg-purple-400 border-purple-500 text-purple-50",
    skeleton: <div className="h-42 w-full rounded-3xl bg-purple-500"> </div>,
    config: {
      x: 800,
      y: 24,
      zIndex: 4,
    },
  },
]

function App() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <AnimatedCards cards={Cards} />
    </div>
  )
}
