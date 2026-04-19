import type { MDXProvider } from "@mdx-js/react"
import type { ComponentProps, ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

type DocsMdxComponentMap = NonNullable<
  ComponentProps<typeof MDXProvider>["components"]
>

function proseHeading(Tag: "h1" | "h2" | "h3", className: string) {
  return function MDXHeading(props: ComponentPropsWithoutRef<typeof Tag>) {
    return <Tag {...props} className={cn(className, props.className)} />
  }
}

function proseP(props: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      {...props}
      className={cn(
        "mb-4 leading-relaxed text-foreground last:mb-0",
        props.className
      )}
    />
  )
}

function proseA(props: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...props}
      className={cn(
        "font-medium text-primary underline-offset-4 hover:underline",
        props.className
      )}
    />
  )
}

function proseCode(props: ComponentPropsWithoutRef<"code">) {
  const isBlock = String(props.children).includes("\n")
  if (isBlock) {
    return (
      <code
        {...props}
        className={cn(
          "my-4 block overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 font-mono text-sm",
          props.className
        )}
      />
    )
  }
  return (
    <code
      {...props}
      className={cn(
        "rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-[0.9em]",
        props.className
      )}
    />
  )
}

function proseUl(props: ComponentPropsWithoutRef<"ul">) {
  return (
    <ul
      {...props}
      className={cn(
        "mb-4 list-inside list-disc space-y-2 pl-1",
        props.className
      )}
    />
  )
}

function proseOl(props: ComponentPropsWithoutRef<"ol">) {
  return (
    <ol
      {...props}
      className={cn(
        "mb-4 list-inside list-decimal space-y-2 pl-1",
        props.className
      )}
    />
  )
}

function proseLi(props: ComponentPropsWithoutRef<"li">) {
  return <li {...props} className={cn("leading-relaxed", props.className)} />
}

function proseHr(props: ComponentPropsWithoutRef<"hr">) {
  return (
    <hr {...props} className={cn("my-10 border-border", props.className)} />
  )
}

function proseStrong(props: ComponentPropsWithoutRef<"strong">) {
  return (
    <strong
      {...props}
      className={cn("font-semibold text-foreground", props.className)}
    />
  )
}

/** Map passed to `MDXProvider` for docs pages. */
export function getDocsMdxComponents(): DocsMdxComponentMap {
  return {
    h1: proseHeading(
      "h1",
      "mb-6 font-heading text-3xl font-semibold tracking-tight md:text-4xl"
    ),
    h2: proseHeading(
      "h2",
      "mt-12 mb-4 font-heading text-2xl font-semibold tracking-tight md:text-3xl"
    ),
    h3: proseHeading(
      "h3",
      "mt-8 mb-3 font-heading text-xl font-semibold md:text-2xl"
    ),
    p: proseP,
    a: proseA,
    code: proseCode,
    ul: proseUl,
    ol: proseOl,
    li: proseLi,
    hr: proseHr,
    strong: proseStrong,
  }
}
