type ComponentPropDoc = {
  name: string
  type: string
  details: string
}

export type ComponentDocMeta = {
  id: string
  name: string
  command: string
  description: string
  props: Array<ComponentPropDoc>
  body: string
}

const docsModules: Record<string, string> = import.meta.glob(
  "/src/content/docs-components/*.mdx",
  {
    eager: true,
    query: "?raw",
    import: "default",
  }
)

function parseFrontmatter(raw: string): Omit<ComponentDocMeta, "body"> | null {
  const match = raw.match(/^---\s*([\s\S]*?)\s*---/)
  if (!match) return null

  try {
    const parsed = JSON.parse(match[1]) as Partial<ComponentDocMeta>
    const hasRequiredFields =
      typeof parsed.id === "string" &&
      typeof parsed.name === "string" &&
      typeof parsed.command === "string" &&
      typeof parsed.description === "string" &&
      Array.isArray(parsed.props)

    if (!hasRequiredFields) return null

    const id = parsed.id
    const name = parsed.name
    const command = parsed.command
    const description = parsed.description
    if (!id || !name || !command || !description) return null

    const typedProps = parsed.props as Array<Partial<ComponentPropDoc>>

    return {
      id,
      name,
      command,
      description,
      props: typedProps.filter(
        (item): item is ComponentPropDoc =>
          typeof item.name === "string" &&
          typeof item.type === "string" &&
          typeof item.details === "string"
      ),
    }
  } catch {
    return null
  }
}

export function getComponentDocsRegistry(): Array<ComponentDocMeta> {
  return Object.entries(docsModules)
    .map(([, raw]) => {
      const frontmatter = parseFrontmatter(raw)
      if (!frontmatter) return null

      const body = raw.replace(/^---\s*[\s\S]*?\s*---/, "").trim()
      return {
        ...frontmatter,
        body,
      }
    })
    .filter((item): item is ComponentDocMeta => item !== null)
    .sort((a, b) => a.name.localeCompare(b.name))
}
