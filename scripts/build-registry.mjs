import { writeFileSync, mkdirSync, readFileSync } from "fs"
import { join } from "path"

// ─── Config ───────────────────────────────────────────────────────────────────

const BASE_URL = "https://ui.radiumcoders.com"
const SRC_DIR = join(process.cwd(), "src/components/xcn")
const OUT_DIR = join(process.cwd(), "public/r")

const components = [
  {
    name: "animated-cards",
    title: "Animated Cards",
    description: "Overlapping animated cards with subtle hover zoom and per-card rotation.",
    dependencies: ["motion"],
  },
  {
    name: "motion-btn",
    title: "Motion Button",
    description: "A button component with a motion effect.",
    dependencies: ["motion"],
  },
  {
    name: "scroll-bars",
    title: "Scroll Bars",
    description: "Animated scroll bars component.",
    dependencies: ["motion"],
  },
  {
    name: "animated-testimonials",
    title: "Animated Testimonials",
    description: "Animated testimonials with blur effect.",
    dependencies: ["motion"],
  },
  {
    name: "skeuomorphic-buttons",
    title: "Skeuomorphic Buttons",
    description: "A set of skeuomorphic buttons with realistic shadows and press effects.",
    dependencies: [],
  },
  {
    name: "stamp",
    title: "Stamp",
    description: "A perforated edge stamp component with customizable colors.",
    dependencies: [],
  },
]

// ─── Setup ────────────────────────────────────────────────────────────────────

mkdirSync(join(OUT_DIR, "xcn"), { recursive: true })
mkdirSync(join(OUT_DIR, "styles"), { recursive: true })

function write(path, data) {
  writeFileSync(path, JSON.stringify(data, null, 2))
  console.log(`  ✔ ${path.replace(process.cwd(), "")}`)
}

// ─── 1. Index ─────────────────────────────────────────────────────────────────

write(join(OUT_DIR, "index.json"), {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "radiumcoders",
  homepage: BASE_URL,
  description: "Hand-crafted, beautiful, and minimal UI components built with Tailwind CSS and Framer Motion.",
  items: components.map((c) => ({
    name: c.name,
    type: "registry:component",
    title: c.title,
    description: c.description,
    dependencies: c.dependencies ?? [],
    registryDependencies: [],
    files: [
      {
        path: `${BASE_URL}/r/xcn/${c.name}.json`,
        type: "registry:page",
      },
    ],
  })),
})

// ─── 2. Component Items ───────────────────────────────────────────────────────

for (const c of components) {
  write(join(OUT_DIR, "xcn", `${c.name}.json`), {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: c.name,
    type: "registry:component",
    title: c.title,
    description: c.description,
    dependencies: c.dependencies ?? [],
    registryDependencies: [],
    files: [
      {
        path: `components/xcn/${c.name}.tsx`,
        content: readFileSync(join(SRC_DIR, `${c.name}.tsx`), "utf8"),
        type: "registry:component",
        target: `components/xcn/${c.name}.tsx`,
      },
    ],
  })
}

// ─── 3. Style ─────────────────────────────────────────────────────────────────

write(join(OUT_DIR, "styles", "xcn.json"), {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "xcn",
  type: "registry:style",
  title: "XCN Style",
  description: "Base style configuration for XCN components.",
  dependencies: [],
  registryDependencies: [],
  files: [],
  cssVars: { light: {}, dark: {} },
})

console.log(`\n✅ Done — ${components.length + 2} files written to public/r/\n`)