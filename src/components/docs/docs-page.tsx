import type { ReactNode } from "react"
import Container from "@/components/container"
import { Sidebar } from "./sidebar"
import { cn } from "@/lib/utils"

export function DocsPage({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <Container className={cn(className, "px-6 py-6 md:px-8 md:py-12")}>
      <div className="docs-prose w-full">{children}</div>
    </Container>
  )
}
