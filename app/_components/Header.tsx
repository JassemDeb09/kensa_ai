"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowUpRight, Bot, Zap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { SimpleLanguageSwitcher } from "@/components/simple-language-switcher"
import { ClientOnly } from "@/components/client-only"

interface HeaderProps {
  scrollY: number
  onSectionClick: (sectionId: string) => void
}

export function Header({ scrollY, onSectionClick }: HeaderProps) {
  const { t, isRTL } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { key: 'services', label: t('nav.services') || 'Services' },
    { key: 'industries', label: t('nav.industries') || 'Industries' },
    { key: 'testimonials', label: t('nav.testimonials') || 'Testimonials' },
    { key: 'experience', label: t('nav.experience') || 'Experience' },
    { key: 'about', label: t('nav.about') || 'About' },
    { key: 'contact', label: t('nav.contact') || 'Contact' }
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        mounted && scrollY > 50 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-[0_8px_32px_rgba(30,144,232,0.08)]" 
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
                           {/* Logo */}
                 <a href="/" className="flex items-center group cursor-pointer">
                   <div className="relative">
                     <div className="relative">
                       {/* Main Logo */}
                       <div className="w-20 h-20 relative group-hover:scale-105 transition-all duration-300">
                         <Image
                           src="/logo.png"
                           alt="KENSA AI"
                           width={80}
                           height={80}
                           className="w-full h-full object-contain dark:brightness-0 dark:invert"
                         />
                       </div>

                     </div>
                   </div>
                 </a>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse space-x-12' : 'space-x-12'}`}>
            {navItems.map((item) => (
              (item as any).href ? (
                <a
                  key={item.key}
                  href={(item as any).href}
                  className="group relative text-gray-700 dark:text-gray-300 hover:text-[#1e90e8] dark:hover:text-[#1e90e8] font-medium transition-colors duration-300 text-[15px]"
                >
                  <span className="relative">
                    {item.label}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] group-hover:w-full transition-all duration-300"></div>
                  </span>
                </a>
              ) : (
                <button
                  key={item.key}
                  onClick={() => onSectionClick(item.key)}
                  className="group relative text-gray-700 dark:text-gray-300 hover:text-[#1e90e8] dark:hover:text-[#1e90e8] font-medium transition-colors duration-300 text-[15px]"
                >
                  <span className="relative">
                    {item.label}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] group-hover:w-full transition-all duration-300"></div>
                  </span>
                </button>
              )
            ))}
          </div>

          {/* Right Side */}
          <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <ClientOnly>
              <div className="hidden lg:flex items-center gap-3">
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full px-3 py-2 shadow-sm hover:shadow-md transition-all duration-300">
                  <SimpleLanguageSwitcher />
                </div>
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full p-2 shadow-sm hover:shadow-md transition-all duration-300">
                  <ThemeToggle />
                </div>
              </div>
            </ClientOnly>
            
            <Button
              onClick={() => onSectionClick("contact")}
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] hover:from-[#1e90e8]/90 hover:to-[#3d50e3]/90 text-white font-medium px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1e90e8]/25 text-[15px]"
            >
              {t('nav.getStarted') || 'Book Consultation'}
              <ArrowUpRight className="w-4 h-4" />
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-[#1e90e8] transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-current mt-1 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-8 space-y-6 border-t border-gray-200/50 dark:border-gray-800/50">
            {navItems.map((item) => (
              (item as any).href ? (
                <a
                  key={item.key}
                  href={(item as any).href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-[#1e90e8] transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.key}
                  onClick={() => {
                    onSectionClick(item.key)
                    setMobileMenuOpen(false)
                  }}
                  className="block w-full text-left text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-[#1e90e8] transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
            <div className="pt-4">
              <Button
                onClick={() => {
                  onSectionClick("contact")
                  setMobileMenuOpen(false)
                }}
                className="w-full bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] hover:from-[#1e90e8]/90 hover:to-[#3d50e3]/90 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2"
              >
                {t('nav.getStarted') || 'Book Consultation'}
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
