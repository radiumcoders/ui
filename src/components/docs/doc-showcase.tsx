import { CopyIcon } from "@phosphor-icons/react"
import { type ReactNode, useCallback, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type DocShowcaseProps = {
  /** Shell command shown under the preview (e.g. shadcn add). */
  command: string
  /** Live demo rendered above the command block. */
  preview: ReactNode
  /** Prose / MDX content shown under the command. */
  children?: ReactNode
  className?: string
}

export function DocShowcase({
  command,
  preview,
  children,
  className,
}: DocShowcaseProps) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }, [command])

  return (
    <section className={cn("not-prose w-full space-y-4", className)}>
      <div className="border border-border bg-background p-3 md:p-8">
        <div className="flex w-full items-center justify-center overflow-x-auto">
          {preview}
        </div>
      </div>

      <div className="flex items-stretch gap-2 px-2 pb-2">
        <pre className="min-w-0 flex-1 overflow-x-auto bg-muted/40 px-3 py-2.5 font-mono text-xs leading-relaxed text-foreground md:text-sm">
          {command}
        </pre>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="shrink-0"
          onClick={() => void copy()}
          aria-label="Copy command"
        >
          <CopyIcon size={18} weight="bold" />
        </Button>
      </div>
      {copied ? (
        <p className="px-2 pb-1 text-xs text-muted-foreground">
          Copied to clipboard.
        </p>
      ) : null}

      {children ? (
        <div className="docs-mdx-desc px-3 py-4 text-sm text-muted-foreground md:px-4 md:text-base">
          {children}
        </div>
      ) : null}
    </section>
  )
}
