"use client"

import { useState, useEffect } from "react"
import { Header } from "./_components/Header"
import { HeroSection } from "./_components/HeroSection"
import { WhyChooseUsSection } from "./_components/WhyChooseUsSection"
import { ServicesSection } from "./_components/ServicesSection"
// import { ProcessSection } from "./_components/ProcessSection"
import { IndustriesSection } from "./_components/IndustriesSection"
import { TestimonialsSection } from "./_components/TestimonialsSection"
import { StatsSection } from "./_components/StatsSection"
import { FAQSection } from "./_components/FAQSection"
import { AboutSection } from "./_components/AboutSection"
import { DemoSection } from "./_components/DemoSection"
import { FinalCTASection } from "./_components/FinalCTASection"
import { Footer } from "./_components/Footer"
import { ClientOnly } from "@/components/client-only"

export default function KensaAILanding() {
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col overflow-x-hidden relative">
      <Header scrollY={mounted ? scrollY : 0} onSectionClick={scrollToSection} />
      
      {/* Hero - White/Dark with gradient fade */}
      <div className="relative bg-white dark:bg-gray-900">
        <HeroSection onSectionClick={scrollToSection} />
        {/* Bottom gradient separator */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-gray-50/80 dark:to-gray-800/80 pointer-events-none"></div>
      </div>
      
      {/* Stats - Light Gray/Dark Gray with enhanced borders */}
      <div className="relative bg-gray-50 dark:bg-gray-800 border-y border-gray-200/60 dark:border-gray-700/60">
        <StatsSection />
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e90e8]/30 to-transparent"></div>
        {/* Bottom gradient separator */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white/80 dark:to-gray-900/80 pointer-events-none"></div>
      </div>
      
      {/* Why Choose Us - White/Dark with shadow separation */}
      <div className="relative bg-white dark:bg-gray-900">
        <WhyChooseUsSection />
        {/* Subtle shadow separator */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-gray-100/60 dark:to-gray-800/60 pointer-events-none"></div>
      </div>
      
      {/* Services - Light Gray/Dark Gray with enhanced visual separation */}
      <div className="relative bg-gray-100 dark:bg-gray-800 border-y border-gray-200/60 dark:border-gray-700/60">
        <ServicesSection />
        {/* Top AI-themed accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3d50e3]/30 to-transparent"></div>
        {/* Enhanced bottom separator */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent via-gray-100/40 dark:via-gray-800/40 to-white dark:to-gray-900 pointer-events-none"></div>
      </div>
      
      {/* Industries - White/Dark with premium separation */}
      <div className="relative bg-white dark:bg-gray-900">
        <IndustriesSection />
        {/* Sophisticated separator */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-gray-50/70 dark:to-gray-800/70 pointer-events-none"></div>
      </div>
      
      {/* Testimonials - Enhanced Light Gray/Dark Gray */}
      <div className="relative bg-gray-50 dark:bg-gray-800 border-y border-gray-200/60 dark:border-gray-700/60">
        <TestimonialsSection />
        {/* AI brand accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e90e8]/40 to-transparent"></div>
        {/* Professional bottom separator */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white/90 dark:to-gray-900/90 pointer-events-none"></div>
      </div>
      
      {/* Demo - White/Dark with glow separator */}
      <div className="relative bg-white dark:bg-gray-900">
        <DemoSection />
        {/* Glowing separator for demo section */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-gray-50/80 dark:to-gray-800/80 pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#3d50e3]/20 to-transparent"></div>
      </div>
      
      {/* FAQ - Enhanced Gray with stronger borders */}
      <div className="relative bg-gray-50 dark:bg-gray-800 border-y-2 border-gray-200/80 dark:border-gray-700/80">
        <ClientOnly>
          <FAQSection />
        </ClientOnly>
        {/* Distinctive top accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1e90e8]/20 via-[#3d50e3]/30 to-[#1e90e8]/20"></div>
        {/* Strong bottom separator */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent via-gray-50/60 dark:via-gray-800/60 to-white dark:to-gray-900 pointer-events-none"></div>
      </div>
      
      {/* About - White/Dark with elevated separation */}
      <div className="relative bg-white dark:bg-gray-900 shadow-inner">
        <AboutSection />
        {/* Elevated separator before CTA */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-gray-100/30 dark:via-gray-800/30 to-gray-700/20 dark:to-gray-800/60 pointer-events-none"></div>
      </div>
      
      {/* Final CTA - Premium Gradient with glow */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-900 dark:via-black dark:to-gray-900 border-t-2 border-[#1e90e8]/20">
        <FinalCTASection onSectionClick={scrollToSection} />
        {/* Premium glow effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#1e90e8]/0 via-[#1e90e8]/50 to-[#3d50e3]/50 via-[#3d50e3]/0"></div>
        {/* Smooth transition to footer */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-gray-900/60 dark:to-black/60 pointer-events-none"></div>
      </div>
      
      {/* Footer - Enhanced Dark with premium border */}
      <div className="relative bg-gray-900 dark:bg-black border-t border-gray-700/60 dark:border-gray-800/60">
        <Footer />
        {/* Top AI accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e90e8]/30 via-[#3d50e3]/30 to-transparent"></div>
      </div>
    </div>
  )
}
