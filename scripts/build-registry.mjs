import { writeFileSync, mkdirSync, readFileSync } from "fs"
import { join } from "path"

// Ensure directories exist
const publicDir = join(process.cwd(), "public")
const rDir = join(publicDir, "r")
const xcnDir = join(rDir, "xcn")
const stylesDir = join(rDir, "styles")

mkdirSync(rDir, { recursive: true })
mkdirSync(xcnDir, { recursive: true })
mkdirSync(stylesDir, { recursive: true })

// Base URLs
const BASE_URL = "https://ui.radiumcoders.com"

// 1. Registry Index
const registryIndex = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "radiumcoders",
  homepage: BASE_URL,
  description:
    "Hand-crafted, beautiful, and minimal UI components built with Tailwind CSS and Framer Motion.",
  items: [
    {
      name: "animated-cards",
      type: "registry:component",
      title: "Animated Cards",
      description:
        "Overlapping animated cards with subtle hover zoom and per-card rotation.",
      dependencies: ["motion"],
      registryDependencies: [],
      files: [
        {
          path: `${BASE_URL}/r/xcn/animated-cards.json`,
          type: "registry:page",
        },
      ],
    },
  ],
}

writeFileSync(join(rDir, "index.json"), JSON.stringify(registryIndex, null, 2))

// 2. Animated Cards Component Item
const animatedCardsItem = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "animated-cards",
  type: "registry:component",
  title: "Animated Cards",
  description:
    "Overlapping animated cards with subtle hover zoom and per-card rotation.",
  dependencies: ["motion"],
  registryDependencies: [],
  files: [
    {
      path: "components/xcn/AnimatedCards.tsx",
      content: readFileSync(
        join(process.cwd(), "src/components/xcn/AnimatedCards.tsx"),
        "utf8"
      ),
      type: "registry:component",
      target: "components/xcn/AnimatedCards.tsx",
    },
  ],
}

writeFileSync(
  join(xcnDir, "animated-cards.json"),
  JSON.stringify(animatedCardsItem, null, 2)
)

// 3. Style Definition
const styleItem = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "xcn",
  type: "registry:style",
  title: "XCN Style",
  description: "Base style configuration for XCN components",
  dependencies: [],
  registryDependencies: [],
  files: [],
  cssVars: {
    light: {},
    dark: {},
  },
}

writeFileSync(join(stylesDir, "xcn.json"), JSON.stringify(styleItem, null, 2))

console.log("✅ Registry built successfully in public/r/")
