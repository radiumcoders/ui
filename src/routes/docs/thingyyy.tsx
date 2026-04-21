import {
  BookIcon,
  CaretRightIcon,
  CubeIcon,
  FolderIcon,
  HouseIcon,
  Info,
  List,
} from "@phosphor-icons/react"
import { Link, createFileRoute } from "@tanstack/react-router"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { getComponentDocsRegistry } from "@/lib/docs-component-registry"
import { getDocsPreviewRegistry } from "@/lib/docs-preview-registry"
import { cn } from "@/lib/utils"
import {
  CodeBlockCommand,
  convertNpmCommand,
} from "@/components/code-block-command"
import ThemeToggle from "@/components/theme-toggel"

export const Route = createFileRoute("/docs/thingyyy")({
  component: ThingyyyDocsPage,
})

const appLinks = [
  { title: "Home", href: "/", icon: <HouseIcon /> },
  { title: "Blocks", href: "/blocks", icon: <CubeIcon /> },
  { title: "Templates", href: "/templates", icon: <FolderIcon /> },
  { title: "Docs", href: "/docs/thingyyy", icon: <BookIcon /> },
] as const

function renderMdxBody(rawBody: string) {
  const lines = rawBody
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)

  if (!lines.length) return null

  return (
    <div className="space-y-2 text-sm text-muted-foreground">
      {lines.map((line, idx) =>
        line.startsWith("- ") ? (
          <p key={`${line}-${idx}`} className="flex items-start gap-2">
            <CaretRightIcon
              size={14}
              className="mt-1 shrink-0 text-foreground"
            />
            <span>{line.replace(/^- /, "")}</span>
          </p>
        ) : (
          <p key={`${line}-${idx}`}>{line}</p>
        )
      )}
    </div>
  )
}

function ThingyyyDocsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const componentDocs = useMemo(() => getComponentDocsRegistry(), [])
  const previewMap = useMemo(() => getDocsPreviewRegistry(), [])
  const [activeComponentId, setActiveComponentId] = useState(
    componentDocs[0]?.id ?? "animated-cards"
  )

  const activeComponent = componentDocs.find(
    (item) => item.id === activeComponentId
  )
  const activePreview = previewMap[activeComponentId]

  return (
    <div className="-mx-4 h-svh overflow-hidden bg-background text-foreground">
      <div className="flex h-full">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-30 w-80 border-r border-border bg-card/95 backdrop-blur transition-transform duration-200",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex h-full flex-col p-4 px-0">
            <div className="flex items-center justify-between gap-4 border-b border-border px-4 pb-3 [--pattern:var(--color-neutral-200)] dark:[--pattern:var(--color-neutral-800)]">
              <div className="h-full w-full rounded border border-border bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px]" />
              <Button
                variant="ghost"
                size="sm"
                className="px-4"
                onClick={() => setIsSidebarOpen(false)}
              >
                Close
              </Button>
            </div>

            <div className="mt-4 flex-1 space-y-6 overflow-y-auto px-4 pr-1 pb-4">
              <div>
                <p className="mb-2 text-xs tracking-wide text-muted-foreground uppercase">
                  App Links
                </p>
                <div className="space-y-1">
                  {appLinks.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="inline-flex h-9 w-full items-center justify-start gap-2 rounded-md px-3 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {item.icon} {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs tracking-wide text-muted-foreground uppercase">
                  Components Docs
                </p>
                <div className="space-y-1 pr-4">
                  {componentDocs.map((item) => (
                    <Button
                      key={item.id}
                      variant={
                        item.id === activeComponentId ? "default" : "ghost"
                      }
                      className="w-full justify-start"
                      onClick={() => {
                        setActiveComponentId(item.id)
                        setIsSidebarOpen(false)
                      }}
                    >
                      {item.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {isSidebarOpen ? (
          <button
            type="button"
            className="fixed inset-0 z-20 bg-black/30"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar"
          />
        ) : null}

        <main className="min-w-0 flex-1 overflow-hidden">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/95 p-3 backdrop-blur">
            <Button
              variant="outline"
              onClick={() => setIsSidebarOpen(true)}
              className="gap-2"
            >
              <List size={18} />
              Menu
            </Button>
            <div />
            <div className="flex items-center justify-center gap-4 pr-4">
              <Button
                variant="outline"
                onClick={() => setIsDrawerOpen(true)}
                className="gap-2"
                disabled={!activeComponent}
              >
                <Info size={18} />
                Details
              </Button>
              <ThemeToggle />
            </div>
          </div>

          <section className="flex h-[calc(100svh)] items-center justify-center overflow-hidden">
            <div className="mx-auto w-full max-w-6xl">
              {activePreview ?? (
                <div className="rounded-lg border border-dashed border-border p-8 text-center text-muted-foreground">
                  No preview renderer found for this component yet.
                </div>
              )}
            </div>
          </section>
        </main>
      </div>

      <Drawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        direction="bottom"
      >
        <DrawerContent className="w-full overflow-hidden">
          <DrawerHeader>
            <DrawerTitle>
              {activeComponent?.name ?? "Missing Component Doc"}
            </DrawerTitle>
            <DrawerDescription>
              {activeComponent?.description ??
                "This component is missing metadata. Add an MDX file in src/content/docs-components."}
            </DrawerDescription>
          </DrawerHeader>
          <div className="max-h-[72vh] space-y-4 overflow-y-auto px-4 pb-6">
            <div className="rounded-lg border border-border bg-muted/50 p-3">
              <p className="mb-1 text-xs text-muted-foreground uppercase">
                Command
              </p>
              <CodeBlockCommand
                {...convertNpmCommand(
                  activeComponent?.command ??
                    "npx shadcn@latest add your-component"
                )}
              />
            </div>
            <div>
              <p className="mb-2 text-xs text-muted-foreground uppercase">
                Props
              </p>
              <div className="space-y-2">
                {(activeComponent?.props ?? []).map((prop) => (
                  <div
                    key={prop.name}
                    className="rounded-lg border border-border p-3"
                  >
                    <p className="font-medium">
                      {prop.name}
                      <span className="ml-2 text-xs text-muted-foreground">
                        {prop.type}
                      </span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {prop.details}
                    </p>
                  </div>
                ))}
                {!activeComponent?.props.length ? (
                  <div className="rounded-lg border border-dashed border-border p-3 text-sm text-muted-foreground">
                    No props documented yet.
                  </div>
                ) : null}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs text-muted-foreground uppercase">
                Notes
              </p>
              <div className="rounded-lg border border-border p-3">
                {activeComponent ? renderMdxBody(activeComponent.body) : null}
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
