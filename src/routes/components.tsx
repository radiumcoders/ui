import { Link, createFileRoute } from "@tanstack/react-router"
import Container from "@/components/container"

export const Route = createFileRoute("/components")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container className="h-screen">
      <div className="p-4">
        <div>
          see first component at click -----{" "}
          <Link to="/animated-cards">/animated-cards</Link>
        </div>
        <div>
          see second component at click -----{" "}
          <Link to="/scroll-bars">/scroll-bars</Link>
        </div>
        <div>
          see third component at click -----{" "}
          <Link to="/animated-testimonials">/animated-testimonials</Link>
        </div>
      </div>
    </Container>
  )
}
