import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
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
  )
}
