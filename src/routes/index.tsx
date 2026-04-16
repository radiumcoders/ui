import { createFileRoute, Link } from "@tanstack/react-router"
import Container from "@/components/container"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="h-screen w-full">
      <div className="h-72 border-b border-border">
        <Container className="relative flex h-full flex-col items-center justify-center gap-4 p-4">
          <h1 className="relative z-10 max-w-2xl text-center text-6xl font-bold text-primary">
            MINIMAL <br /> UI COMPONENTS 
          </h1>
          <div className="relative z-10 flex items-center gap-2">
            <Button className="rounded-none p-4">
              <Link to="/components" className="rounded-none p-4">Explore Components</Link>
            </Button>
            <Button variant={"outline"} className="rounded-none p-4">
              <Link to="/templates" className="rounded-none p-4">Explore Templates</Link>
            </Button>
          </div>
        </Container>
      </div>
    </div>
  )
}
