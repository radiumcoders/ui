import { cn } from "@/lib/utils"

function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "h-full w-full max-w-6xl mx-auto font-body",
        className
      )}
    >
      {children}
    </div>
  )
}
export default Container
