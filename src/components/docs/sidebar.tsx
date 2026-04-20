import { Link } from "@tanstack/react-router"
import { cn } from "@/lib/utils"

export type SidebarItem = {
  title: string
  href: string
  description?: string
}

export function Sidebar({ items }: { items: SidebarItem[] }) {
  return (
    <aside className="w-64 space-y-4 border-r border-border">
      <nav className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "group flex h-10 items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
              "hover:bg-muted hover:text-foreground",
              "dark:hover:bg-muted/80 dark:hover:text-muted-foreground"
            )}
          >
            <span className="flex-0 w-5 h-5 shrink-0">
              {/* You can add an icon here if needed */}
              <span className="block h-full w-full bg-muted/50 rounded flex items-center justify-center">
                {/* Placeholder for icon */}
              </span>
            </span>
            <span className="flex-1 truncate">{item.title}</span>
            {item.description && (
              <span className="flex-0 w-20 text-xs text-muted-foreground group-hover:text-muted-foreground/80">
                {item.description}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  )
}