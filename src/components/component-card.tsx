import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export default function CardsComponentPage({
  children,
  className,
}: {
  children: ReactNode
  className: string
}) {
  return <div className={cn("h-64 w-96 bg-red-500", className)}>{children}</div>
}
