import path from "node:path"
import { fileURLToPath } from "node:url"
import mdx from "@mdx-js/rollup"
import { defineConfig } from "vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import viteTsConfigPaths from "vite-tsconfig-paths"
import tailwindcss from "@tailwindcss/vite"
import { nitro } from "nitro/vite"
import remarkGfm from "remark-gfm"

const projectDir = path.dirname(fileURLToPath(import.meta.url))

const config = defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(projectDir, "src"),
    },
  },
  ssr: {
    noExternal: ['@react-three/fiber', 'three'],
  },
  plugins: [
    devtools(),
    nitro(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart(),
    {
      enforce: "pre",
      ...mdx({
        jsxImportSource: "react",
        remarkPlugins: [remarkGfm],
        include: ["src/content/**/*.mdx"],
      }),
    },
    viteReact(),
  ],
})

export default config
