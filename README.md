# RadiumCoders UI

> **Hand-crafted, beautiful, and minimal UI components built with Tailwind CSS and Framer Motion.**

ui/radiumcoders or xcn is a curated collection of highly polished, animated, and customizable React components. Built on top of the [shadcn/ui](https://ui.shadcn.com/) architecture, these components are designed to be copied directly into your project via the CLI, giving you full ownership and control over the code.

---

## ✨ Features

- **Beautifully Animated:** Fluid, physics-based animations powered by Framer Motion.
- **Minimal & Modern:** Clean aesthetics with pixel-perfect attention to detail.
- **CLI Ready:** Install components instantly using the standard `shadcn` CLI.
- **Zero Lock-in:** The code lives in your repository. Customize it however you want.
- **Accessible & Typed:** Built with TypeScript and accessibility in mind.

---

## 🚀 Quick Start

You don't need to install any heavy npm packages. Just use the `shadcn` CLI to add components directly to your project!

### 1. Install a Component

Run the following command in your terminal to add a RadiumCoders UI component to your project:

```bash
npx shadcn@latest add https://ui.radiumcoders.com/r/xcn/animated-cards.json
```

*The CLI will automatically download the component, place it in your `components/xcn` folder, and install any required dependencies (like `motion`).*

### 2. Use the Component

Import and use the component in your app:

```tsx
import { AnimatedCards } from "@/components/xcn/AnimatedCards";

const cardsData = [
  {
    title: "NEAT AND CLEAN",
    description: "Aesthetically pleasing and highly organized layouts.",
    className: "bg-orange-500 text-white shadow-xl shadow-orange-500/40",
    skeleton: <div className="h-42 w-full rounded-3xl bg-orange-600"></div>,
    config: { x: 0, y: 24, zIndex: 1 },
    rotation: -5,
  },
  // Add more cards...
];

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <AnimatedCards cards={cardsData} />
    </div>
  );
}
```

---

## 📦 Available Components

### `AnimatedCards`
A beautiful deck of overlapping, animated cards. Features subtle hover scaling, unique per-card rotations, and smooth re-stacking animations. 
- **Command:** `npx shadcn@latest add https://ui.radiumcoders.com/r/xcn/animated-cards.json`
- **Dependencies:** `motion`

*(More components coming soon!)*

---

## 🛠️ Tech Stack

This project and its components are built using:
- **[React](https://react.dev/)** & **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)** (Styling & Layouts)
- **[Framer Motion](https://motion.dev/)** (Spring physics and animations)
- **[shadcn/ui](https://ui.shadcn.com/)** (Component distribution registry)
- **[TanStack Start](https://tanstack.com/start)** (Framework for the documentation/showcase site)

---

## 🤝 Contributing

We welcome contributions! If you have a beautiful component you'd like to add or an improvement to an existing one:
1. Fork the repository.
2. Create your feature branch.
3. Add your component to `src/components/xcn/`.
4. Update the registry generator in `scripts/build-registry.mjs`.
5. Submit a pull request.

---

## 📄 License

Created by **RadiumCoders**.
Released under the [Apache 2.0 License](LICENSE).