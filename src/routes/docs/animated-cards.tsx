import { MDXProvider } from "@mdx-js/react"
import { createFileRoute } from "@tanstack/react-router"
import AnimatedCardsDoc from "@/content/docs/animated-cards.mdx"
import { DocsPage } from "@/components/docs/docs-page"
import { getDocsMdxComponents } from "@/components/docs/docs-mdx-components"

const mdxComponents = getDocsMdxComponents()

export const Route = createFileRoute("/docs/animated-cards")({
  component: AnimatedCardsDocsRoute,
})

function AnimatedCardsDocsRoute() {
  return (
    <DocsPage>
      <MDXProvider components={mdxComponents}>
        <AnimatedCardsDoc />
      </MDXProvider>
    </DocsPage>
  )
}
