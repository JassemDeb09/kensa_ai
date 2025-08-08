"use client"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface AnimatedCardProps {
  children: React.ReactNode
  hoverEffect?: "glow" | "lift" | "scale"
  className?: string
}

export default function AnimatedCard({
  children,
  hoverEffect = "lift",
  className
}: AnimatedCardProps) {
  const getHoverClasses = () => {
    switch (hoverEffect) {
      case "glow":
        return "hover:shadow-[0_0_30px_rgba(58,134,255,0.3)] dark:hover:shadow-[0_0_30px_rgba(155,93,229,0.3)]"
      case "lift":
        return "hover:shadow-xl hover:-translate-y-2"
      case "scale":
        return "hover:scale-105"
      default:
        return "hover:shadow-xl hover:-translate-y-2"
    }
  }

  return (
    <Card
      className={cn(
        "transition-all duration-300 transform",
        getHoverClasses(),
        className
      )}
    >
      {children}
    </Card>
  )
}
