import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div>
        see first component at click -----{" "}
        <Link to="/animated-cards">/animated-cards</Link>
      </div>
      <div>
        see second component at click -----{" "}
        <Link to="/scroll-bars">/scroll-bars</Link>
      </div>
    </>
  )
}
