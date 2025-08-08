"use client"

import { cn } from "@/lib/utils"

interface AnimatedGradientTextProps {
  text: string
  className?: string
  gradientColors?: string[]
  duration?: number
}

export default function AnimatedGradientText({
  text,
  className,
  gradientColors = ["#3A86FF", "#9B5DE5", "#3A86FF"],
  duration = 3000
}: AnimatedGradientTextProps) {
  const gradientStyle = {
    background: `linear-gradient(-45deg, ${gradientColors.join(", ")})`,
    backgroundSize: "400% 400%",
    animation: `gradient-shift ${duration}ms ease infinite`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text"
  }

  return (
    <>
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <h1 className={cn(className)} style={gradientStyle}>
        {text}
      </h1>
    </>
  )
}
