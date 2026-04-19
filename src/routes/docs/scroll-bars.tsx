import { MDXProvider } from "@mdx-js/react"
import { createFileRoute } from "@tanstack/react-router"
import ScrollBarsDoc from "@/content/docs/scroll-bars.mdx"
import { DocsPage } from "@/components/docs/docs-page"
import { getDocsMdxComponents } from "@/components/docs/docs-mdx-components"

const mdxComponents = getDocsMdxComponents()

export const Route = createFileRoute("/docs/scroll-bars")({
  component: ScrollBarsDocsRoute,
})

function ScrollBarsDocsRoute() {
  return (
    <DocsPage>
      <MDXProvider components={mdxComponents}>
        <ScrollBarsDoc />
      </MDXProvider>
    </DocsPage>
  )
}
