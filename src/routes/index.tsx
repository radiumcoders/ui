import { createFileRoute, Link, redirect, Router } from "@tanstack/react-router"
import Container from "@/components/container"
import { Button } from "@/components/ui/button"
import { easeInOut, motion, scale } from "motion/react"
import { Badge } from "@/components/ui/badge"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
    </div>
  )
}

function HeroSection() {
  return (
    <div className="min-h-[400px] sm:h-88">
      <Container className="relative flex h-full flex-col items-start justify-end gap-6 p-4 md:p-8">
        <div className="w-full overflow-hidden">
          <Badge className="mb-1 bg-neutral-100 p-3 text-primary/70">
            MORE COMPONENTS INCOMING
          </Badge>
          <h1 className="wrap-break-words text-start text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">
            Ship beautiful Websites <br className="hidden sm:block" /> Faster
            Then Ever.
          </h1>
          <p className="max-w-2xl pl-1 text-start leading-tight text-primary/60">
            Production-ready components, blocks and templates that make your
            site feel like Premium.Just Copy, paste, customize.
          </p>
        </div>
        <div className="flex w-full flex-col items-stretch justify-center gap-2 sm:w-auto sm:flex-row sm:items-center">
          <Link to="/components" viewTransition className="w-full sm:w-auto">
            <Button className="h-12 w-full p-4 px-4 shadow-[inset_0px_0px_10px_0px_#fafafa]">
              Explore Components
            </Button>
          </Link>
          <Link to="/templates" viewTransition className="w-full sm:w-auto">
            <Button
              variant={"outline"}
              className="h-12 w-full p-4 px-4 shadow-[inset_0px_0px_8px_0px_#e5e5e5]"
            >
              Explore Templates
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}
