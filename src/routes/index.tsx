import Container from "@/components/container"
import { HeroEnergyArtwork } from "@/components/hero-energy-artwork"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CubeIcon } from "@phosphor-icons/react"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full">
      <HeroSection />
    </div>
  )
}

function HeroSection() {
  const featureBadges = [
    {
      label: "Responsive",
      className:
        "left-2 top-24 -rotate-6 bg-red-100 dark:bg-red-950 text-red-400 sm:left-6 sm:top-28 md:left-10 md:top-28 lg:left-20",
    },
    {
      label: "Shadcn Compatible",
      className:
        "right-2 top-20 rotate-6 bg-blue-100 dark:bg-blue-950 text-blue-400 sm:right-6 sm:top-24 md:right-12 md:top-28 lg:right-20",
    },
    {
      label: "Theme Respective",
      className:
        "bottom-24 left-2 -rotate-3 bg-purple-100 dark:bg-purple-950 text-purple-400 sm:bottom-28 sm:left-6 md:bottom-20 md:left-12 lg:left-20",
    },
    {
      label: "Templates",
      className:
        "right-4 bottom-20 rotate-6 bg-emerald-100 dark:bg-emerald-950 text-emerald-400  sm:right-8 sm:bottom-28 md:right-16 md:bottom-20 lg:right-20",
    },
  ]

  return (
    <div className="relative min-h-[calc(100vh-120px)] overflow-hidden">
      <Container className="relative z-10 flex min-h-[calc(100vh-120px)] flex-col items-center justify-center gap-8 px-4 py-16 sm:py-20">
        <HeroEnergyArtwork className="pointer-events-none absolute inset-0 z-0 opacity-90 dark:opacity-95" />
        <div className="relative z-20 flex flex-col items-center justify-center gap-6">
          <Badge
            className={cn(
              "h-8 items-center gap-2 rounded-md",
              "border border-dashed border-primary",
              "bg-muted bg-linear-to-t from-muted to-background",
              "px-3 text-sm font-medium",
              "shadow-md shadow-zinc-950/10",
              "dark:border-primary/40",
              "text-primary"
            )}
          >
            <CubeIcon size={32} weight="duotone" />
            COOKING MORE COMPONENTS
          </Badge>
          <div className="relative flex flex-col gap-4">
            <h1 className="hero-powered-title relative z-10 leading-tighter bg-linear-to-b from-primary via-neutral-900 to-neutral-700 bg-clip-text text-center text-4xl font-bold text-transparent sm:text-6xl md:text-7xl dark:via-white dark:to-white/70">
              Ship beautiful websites <br /> faster than ever.
            </h1>

            <p className="relative z-10 max-w-xl mx-auto text-center leading-relaxed text-primary/60 sm:text-lg dark:text-primary/70">
              Production-ready components, blocks and templates that make your site feel premium.
               Just copy, paste, customize.
            </p>
          </div>
        </div>
        <div className="relative z-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/components" viewTransition className="w-full sm:w-auto">
            <Button className="h-12 w-full border-2 border-primary px-5 text-base shadow-[0_12px_30px_-14px_rgba(0,0,0,0.65)] dark:shadow-[0_16px_34px_-16px_rgba(0,0,0,0.85)] sm:w-auto">
              Explore Components
            </Button>
          </Link>
          <Link to="/templates" viewTransition className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="h-12 w-full bg-background! border-dashed px-5 shadow-[0_8px_20px_-14px_rgba(0,0,0,0.55)] dark:bg-background! dark:shadow-[0_10px_22px_-14px_rgba(0,0,0,0.75)] sm:w-auto"
            >
              Explore Templates
            </Button>
          </Link>
        </div>
        <div className="pointer-events-none absolute inset-0 z-30">
          {featureBadges.map((badge) => (
            <div
              key={badge.label}
              className={cn(
                "absolute flex h-8 items-center justify-center rounded-md border border-white/20 px-3 text-xs font-semibold shadow-sm backdrop-blur-sm dark:text-white/85 sm:text-sm",
                badge.className
              )}
            >
              {badge.label}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
