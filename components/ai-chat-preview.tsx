"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/LanguageContext"

interface AIChatPreviewProps {
  className?: string
  primaryColor?: string
  secondaryColor?: string
  companyName?: string
  userName?: string
  question?: string
  animate?: boolean
}

export default function AIChatPreview({
  className,
  primaryColor = "#3A86FF",
  secondaryColor = "#9B5DE5",
  companyName = "KENSA AI",
  userName = "User",
  question,
  animate = true
}: AIChatPreviewProps) {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  const defaultQuestion = t('hero.chatQuestion') || "I need help implementing AI for my e-commerce business. Can you help me find the right experts?"

  const messages = [
    {
      type: "user",
      content: question || defaultQuestion,
      time: "2:14 PM"
    },
    {
      type: "ai",
      content: t('hero.chatResponse') || "Absolutely! I can connect you with specialized AI experts for e-commerce. Let me find the best matches for your specific needs. What's your primary focus - customer personalization, inventory optimization, or chatbot integration?",
      time: "2:14 PM"
    },
    {
      type: "user", 
      content: t('hero.chatFollowUp') || "Customer personalization and recommendation engines",
      time: "2:15 PM"
    },
    {
      type: "ai",
      content: t('hero.chatFinalResponse') || "Perfect! I've found 3 AI experts who specialize in e-commerce personalization. Here are their profiles with 98% client satisfaction rates...",
      time: "2:15 PM"
    }
  ]

  useEffect(() => {
    if (!animate) return

    const timer = setInterval(() => {
      if (currentStep < messages.length - 1) {
        setIsTyping(true)
        setTimeout(() => {
          setCurrentStep(prev => prev + 1)
          setIsTyping(false)
        }, 1500)
      } else {
        // Reset animation
        setTimeout(() => {
          setCurrentStep(0)
        }, 3000)
      }
    }, 3000)

    return () => clearInterval(timer)
  }, [currentStep, animate, messages.length])

  return (
    <div className={cn("bg-white dark:bg-gray-900 rounded-lg p-4 h-full overflow-hidden", className)}>
      <div className="flex flex-col h-full">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.slice(0, currentStep + 1).map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex",
                message.type === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                  message.type === "user"
                    ? "text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                )}
                style={{
                  backgroundColor: message.type === "user" ? primaryColor : undefined
                }}
              >
                <p>{message.content}</p>
                <span className="text-xs opacity-70 mt-1 block">{message.time}</span>
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {t('hero.chatPlaceholder') || "Type your message..."}
              </span>
            </div>
            <button
              className="rounded-full p-2 text-white"
              style={{ backgroundColor: primaryColor }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
