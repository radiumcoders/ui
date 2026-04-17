import { createFileRoute, Link, redirect, Router } from "@tanstack/react-router"
import Container from "@/components/container"
import { Button } from "@/components/ui/button"
import { easeInOut, motion, scale } from "motion/react"

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
    <div className="h-88 mt-32 sm:mt-0">
      <Container className="relative flex h-full flex-col items-start justify-end gap-6 p-4">
        <div>
          <h1 className="text-start text-5xl sm:text-6xl leading-tight font-bold">
            Ship beautiful Websites <br /> Faster Then Ever.
          </h1>
          <p className="max-w-2xl pl-1 text-start leading-tight text-primary/60">
            Production-ready components, blocks and templates that make your
            site feel like Premium.Just Copy, paste, customize.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Link to="/components" viewTransition>
            <Button
              className="h-12 p-4 px-4 shadow-[inset_0px_0px_10px_0px_#fafafa]"
            >
              Explore Components
            </Button>
          </Link>
          <Link to="/templates" viewTransition>
            <Button
              variant={"outline"}
              className="h-12 p-4 px-4 shadow-[inset_0px_0px_8px_0px_#e5e5e5]"
            >
              Explore Templates
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}
