import { cn } from "@/lib/utils"

export default function SkeuomorphicButtons() {
  return (
    <div className="flex lg:flex-row flex-col h-fit w-fit gap-1 rounded border border-border bg-primary/90 p-1 dark:bg-zinc-900">
      {new Array(7).fill(0).map((_, i) => {
        return (
          <button
            key={i}
            className={cn(
              "size-16 rounded bg-neutral-300 p-1 dark:bg-zinc-700",
              i == 6 ? "bg-rose-600 dark:bg-rose-950" : ""
            )}
          >
            <div
              className={cn(
                "h-full w-full rounded-full bg-neutral-300 shadow-[inset_0px_20px_20px_1px_#737373,inset_0px_-20px_20px_1px_#e5e5e5,0px_2px_8px_6px_rgba(0,0,0,0.15)] transition-all duration-75 active:scale-95 active:shadow-[inset_0px_20px_25px_4px_#606060,inset_0px_-20px_20px_1px_#d4d4d4,0px_1px_3px_2px_rgba(0,0,0,0.1)] dark:bg-zinc-600 dark:shadow-[inset_0px_20px_20px_1px_#18181b,inset_0px_-20px_20px_1px_#71717a,0px_2px_10px_6px_rgba(0,0,0,0.4)] dark:active:shadow-[inset_0px_20px_25px_4px_#09090b,inset_0px_-20px_20px_1px_#52525b,0px_1px_4px_3px_rgba(0,0,0,0.3)]",
                i == 6
                  ? "bg-rose-600 shadow-[inset_0px_20px_20px_1px_#b91c1c,inset_0px_-20px_20px_1px_#f87171,0px_0px_5px_1px_#991b1b] active:scale-95 active:shadow-[inset_0px_20px_25px_4px_#9f1239,inset_0px_-20px_20px_1px_#fb7185,0px_0px_3px_1px_#881337] dark:bg-rose-700 dark:shadow-[inset_0px_20px_20px_1px_#4c0519,inset_0px_-20px_20px_1px_#f43f5e,0px_0px_6px_2px_#450a0a] dark:active:shadow-[inset_0px_20px_25px_4px_#3f0613,inset_0px_-20px_20px_1px_#e11d48,0px_0px_4px_2px_#3f0613]"
                  : ""
              )}
            />
          </button>
        )
      })}
    </div>
  )
}
