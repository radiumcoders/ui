import { MDXProvider } from "@mdx-js/react"
import { createFileRoute } from "@tanstack/react-router"
import { getDocsMdxComponents } from "@/components/docs/docs-mdx-components"
import { DocsPage } from "@/components/docs/docs-page"
import AnimatedTestimonialsDoc from "@/content/docs/animated-testimonials.mdx"

const mdxComponents = getDocsMdxComponents()

export const Route = createFileRoute("/docs/animated-testimonials")({
  component: AnimatedTestimonialsDocsRoute,
})

function AnimatedTestimonialsDocsRoute() {
  return (
    <DocsPage>
      <MDXProvider components={mdxComponents}>
        <AnimatedTestimonialsDoc />
      </MDXProvider>
    </DocsPage>
  )
}
