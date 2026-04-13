import { createFileRoute } from "@tanstack/react-router"
import { AnimatedCards, type CardItem } from "@/components/xcn/animated-cards"

export const Route = createFileRoute("/animated-cards/")({
  component: RouteComponent,
})

const Cards: CardItem[] = [
  {
    title: "NEAT AND CLEAN",
    description:
      "Aesthetically pleasing and highly organized layouts designed for ease of use.",
    className:
      "bg-orange-500 text-orange-50 border-orange-600 shadow-xl shadow-orange-500/40",
    skeleton: <div className="h-42 w-full rounded-3xl bg-orange-600"> </div>,
    config: {
      x: 0,
      y: 24,
      zIndex: 1,
    },
    rotation: -5,
  },
  {
    title: "PIXEL PERFECT",
    description:
      "Every element is crafted with precise attention to detail and alignment.",
    className:
      "bg-emerald-500 text-emerald-50 border-emerald-600 shadow-xl shadow-emerald-500/40",
    skeleton: <div className="h-42 w-full rounded-3xl bg-emerald-600"> </div>,
    config: {
      x: 200,
      y: -24,
      zIndex: 2,
    },
    rotation: 3,
  },
  {
    title: "MINIMAL",
    description:
      "Stripped down to the essentials for maximum clarity and impact.",
    className:
      "bg-rose-500 text-rose-50 border-rose-600 shadow-xl shadow-rose-500/40",
    skeleton: <div className="h-42 w-full rounded-3xl bg-rose-600"> </div>,
    config: {
      x: 400,
      y: 24,
      zIndex: 3,
    },
    rotation: -3,
  },
  {
    title: "MORDERN",
    description: "Cutting-edge design patterns utilizing the latest trends.",
    className:
      "bg-amber-100 [&_h1]:text-neutral-900 [&_p]:text-neutral-800 border-amber-200 shadow-xl shadow-amber-500/20",
    skeleton: <div className="h-42 w-full rounded-3xl bg-amber-200"> </div>,
    config: {
      x: 600,
      y: -24,
      zIndex: 4,
    },
    rotation: 5,
  },
  {
    title: "CLEAN",
    description: "Cutting-edge design patterns utilizing the latest trends.",
    className:
      "bg-purple-400 border-purple-500 text-purple-50 shadow-xl shadow-purple-500/40",
    skeleton: <div className="h-42 w-full rounded-3xl bg-purple-500"> </div>,
    config: {
      x: 800,
      y: 24,
      zIndex: 4,
    },
    rotation: -2,
  },
]

function RouteComponent() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-white dark:bg-neutral-950">
      <AnimatedCards cards={Cards} />
    </div>
  )
}
