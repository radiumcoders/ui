import { Link, createFileRoute } from "@tanstack/react-router"
import Container from "@/components/container"

export const Route = createFileRoute("/docs/")({
  component: DocsIndex,
})

const pages = [
  {
    title: "Animated cards",
    href: "/docs/animated-cards",
    description: "Stacked animated cards with motion and depth.",
  },
  {
    title: "Scroll bars",
    href: "/docs/scroll-bars",
    description: "Scroll-linked horizontal and vertical bar indicators.",
  },
  {
    title: "Animated testimonials",
    href: "/docs/animated-testimonials",
    description: "Inline testimonial text with hover blur and focus.",
  },
]

function DocsIndex() {
  return (
    <Container className="px-4 py-10 md:px-0 md:py-14">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
          Docs
        </h1>
        <p className="mt-3 text-muted-foreground">
          Component previews, install commands, and notes—authored in MDX.
        </p>
        <ul className="mt-10 space-y-4">
          {pages.map((page) => (
            <li key={page.href}>
              <Link
                to={page.href}
                className="block rounded-xl border border-border bg-card/50 p-5 transition-colors hover:bg-muted/40"
              >
                <span className="font-heading text-lg font-medium text-foreground">
                  {page.title}
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  {page.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
