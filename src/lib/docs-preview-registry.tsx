import type { ReactNode } from "react"
import { AnimatedCardsPreview } from "@/components/docs-previews/animated-cards-preview"
import { AnimatedTestimonialsPreview } from "@/components/docs-previews/animated-testimonials-preview"
import { ScrollBarsPreview } from "@/components/docs-previews/scroll-bars-preview"
import SkeuomorphicButtonsPreview from "@/components/docs-previews/skeuomorphic-buttons"
import StampPreview from "@/components/docs-previews/stamp-preview"

export function getDocsPreviewRegistry(): Record<string, ReactNode> {
  return {
    "animated-cards": <AnimatedCardsPreview />,
    "animated-testimonials": <AnimatedTestimonialsPreview />,
    "scroll-bars": <ScrollBarsPreview />,
    "skeuomorphic-buttons": <SkeuomorphicButtonsPreview />,
    stamp: <StampPreview />,
  }
}
