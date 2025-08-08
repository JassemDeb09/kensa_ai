"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  type?: "fade" | "slide" | "scale"
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  className?: string
}

export default function AnimatedSection({
  children,
  type = "fade",
  direction = "up",
  delay = 0,
  duration = 800,
  className
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getInitialTransform = () => {
    switch (type) {
      case "slide":
        switch (direction) {
          case "up":
            return "translateY(50px)"
          case "down":
            return "translateY(-50px)"
          case "left":
            return "translateX(50px)"
          case "right":
            return "translateX(-50px)"
          default:
            return "translateY(50px)"
        }
      case "scale":
        return "scale(0.8)"
      default:
        return "none"
    }
  }

  const getVisibleTransform = () => {
    switch (type) {
      case "slide":
        return "translate(0, 0)"
      case "scale":
        return "scale(1)"
      default:
        return "none"
    }
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? getVisibleTransform() : getInitialTransform(),
        transition: `all ${duration}ms ease-out`,
      }}
    >
      {children}
    </div>
  )
}
