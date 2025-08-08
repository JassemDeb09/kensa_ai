"use client"

import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface AnimatedButtonProps extends ButtonProps {
  hoverEffect?: "glow" | "scale" | "bounce" | "ripple"
  clickEffect?: "ripple" | "bounce"
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, hoverEffect = "scale", clickEffect, children, ...props }, ref) => {
    const getHoverClasses = () => {
      switch (hoverEffect) {
        case "glow":
          return "hover:shadow-[0_0_20px_rgba(58,134,255,0.5)] transition-all duration-300"
        case "scale":
          return "hover:scale-105 transition-transform duration-200"
        case "bounce":
          return "hover:animate-bounce"
        case "ripple":
          return "relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
        default:
          return "hover:scale-105 transition-transform duration-200"
      }
    }

    const getClickClasses = () => {
      switch (clickEffect) {
        case "bounce":
          return "active:scale-95"
        case "ripple":
          return "active:scale-95"
        default:
          return ""
      }
    }

    return (
      <Button
        ref={ref}
        className={cn(
          getHoverClasses(),
          getClickClasses(),
          className
        )}
        {...props}
      >
        {children}
      </Button>
    )
  }
)

AnimatedButton.displayName = "AnimatedButton"

export default AnimatedButton
