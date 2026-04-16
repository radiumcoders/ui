import { createFileRoute } from "@tanstack/react-router"
import Container from "@/components/container"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container className="h-screen p-4">
      COMMING SOON EXPLORE CURRENT COMPONENTS ON /COMPONENTS by clicking on navbar :D landing page soon sorry,
    </Container>
  )
}
