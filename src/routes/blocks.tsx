import { createFileRoute } from "@tanstack/react-router"
import Container from "@/components/container"

export const Route = createFileRoute("/blocks")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container className="h-screen">
      <div className="p-4">
        <h1 className="font-heading text-4xl font-bold">Blocks</h1>
        <p className="text-lg text-muted-foreground">COMING SOON</p>
      </div>
    </Container>
  )
}
