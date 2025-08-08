"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { SimpleLanguageSwitcher } from "@/components/simple-language-switcher"
import { ClientOnly } from "@/components/client-only"

interface HeaderProps {
  scrollY: number
  onSectionClick: (sectionId: string) => void
}

export function Header({ scrollY, onSectionClick }: HeaderProps) {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        mounted && scrollY > 100 
          ? "bg-white/98 dark:bg-gray-900/98 backdrop-blur-md shadow-lg" 
          : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md"
      }`}
    >
      {/* Top info bar */}
      <div className="hidden sm:block border-b border-gray-200/70 dark:border-gray-800/80 bg-[#3A86FF]/5 dark:bg-[#3A86FF]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-8 flex items-center justify-between text-[13px] text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[#3A86FF]" />{t('footer.contact.phone')}</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#3A86FF]" />{t('footer.contact.email')}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-[#3A86FF]" />
            <span className="truncate max-w-[260px] sm:max-w-xs">{t('footer.contact.location')}</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="KENSA AI" 
              width={120} 
              height={40} 
              className="h-10 w-auto dark:brightness-0 dark:invert"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onSectionClick("services")}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => onSectionClick("process")}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
            >
              {t('nav.process')}
            </button>
            <button
              onClick={() => onSectionClick("testimonials")}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
            >
              {t('nav.testimonials')}
            </button>
            <button
              onClick={() => onSectionClick("about")}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => onSectionClick("contact")}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
            >
              {t('nav.contact')}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <ClientOnly>
              <SimpleLanguageSwitcher />
              <ThemeToggle />
            </ClientOnly>
            <Button
              onClick={() => onSectionClick("contact")}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {t('nav.getStarted')}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
