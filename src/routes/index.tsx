import { createFileRoute, Link, redirect, Router } from "@tanstack/react-router"
import Container from "@/components/container"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="h-screen w-full">
      <div className="h-88">
        <Container className="relative flex h-full flex-col items-start justify-end gap-6 p-4">
          <div>
            <h1 className="text-start text-6xl leading-tight font-bold selection:bg-red-100 selection:text-red-400">
              Ship beautiful Websites <br /> Faster Then Ever.
            </h1>
            <p className="max-w-2xl pl-1 text-start leading-tight text-primary/60 selection:bg-red-100 selection:text-red-400">
              Production-ready components, blocks and templates that make your
              site feel like Premium.Just Copy, paste, customize.
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Link to="/components">
              <Button className="h-12 p-4 px-4 shadow-[inset_0px_0px_10px_0px_#fafafa]">
                Explore Components
              </Button>
            </Link>
            <Button
              variant={"outline"}
              className="h-12 p-4 shadow-[inset_0px_0px_8px_0px_#e5e5e5]"
            >
              <Link to="/templates" className="rounded-none p-4">
                Explore Templates
              </Link>
            </Button>
          </div>
        </Container>
      </div>
    </div>
  )
}
