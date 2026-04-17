import { createFileRoute, Link, redirect, Router } from "@tanstack/react-router"
import Container from "@/components/container"
import { Button } from "@/components/ui/button"
import { easeInOut, motion, scale } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { CubeIcon } from "@phosphor-icons/react"

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
    <div className="mt-16 h-88 sm:mt-0">
      <Container className="relative flex h-full flex-col items-start justify-end gap-6 p-2">
        <div>
          <Badge className="rounded-lg border border-border bg-background p-4 text-primary shadow-[inset_0px_0px_6px_2px_#e5e5e5]">
            <CubeIcon size={32} weight="duotone" />
            MORE COMPONENTS IN COMING
          </Badge>
          <h1 className="text-start text-4xl leading-tight font-bold sm:text-6xl">
            Ship beautiful Websites <br /> Faster Then Ever.
          </h1>
          <p className="max-w-2xl pl-1 text-start leading-tight text-primary/60">
            Production-ready components, blocks and templates that make your
            site feel like Premium.Just Copy, paste, customize.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:flex-row">
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
