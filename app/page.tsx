"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
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
import { ExperienceSection } from "./_components/ExperienceSection"
import { DemoSection } from "./_components/DemoSection"
import { FinalCTASection } from "./_components/FinalCTASection"
import { Footer } from "./_components/Footer"
import { ClientOnly } from "@/components/client-only"

export default function KensaAILanding() {
  const { isRTL } = useLanguage()
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
    <div className={`flex flex-col overflow-x-hidden relative ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header scrollY={mounted ? scrollY : 0} onSectionClick={scrollToSection} />
      
      {/* Hero - White/Dark */}
      <div className="relative bg-white dark:bg-gray-900">
        <HeroSection onSectionClick={scrollToSection} />
      </div>
      
      {/* Stats - Light Gray/Dark Gray */}
      <div className="relative bg-gray-50 dark:bg-gray-800">
        <StatsSection />
      </div>
      
      {/* Why Choose Us - White/Dark */}
      <div className="relative bg-white dark:bg-gray-900">
        <WhyChooseUsSection />
      </div>
      
      {/* Services - Light Gray/Dark Gray */}
      <div className="relative bg-gray-100 dark:bg-gray-800">
        <ServicesSection />
      </div>
      
      {/* Industries - White/Dark */}
      <div className="relative bg-white dark:bg-gray-900">
        <IndustriesSection />
      </div>
      
      {/* Testimonials - Light Gray/Dark Gray */}
      <div className="relative bg-gray-50 dark:bg-gray-800">
        <TestimonialsSection />
      </div>
      
      {/* Demo - White/Dark */}
      <div className="relative bg-white dark:bg-gray-900">
        <DemoSection />
      </div>
      
      {/* FAQ - Gray */}
      <div className="relative bg-gray-50 dark:bg-gray-800">
        <ClientOnly>
          <FAQSection />
        </ClientOnly>
      </div>
      
      {/* About - White/Dark */}
      <div className="relative bg-white dark:bg-gray-900">
        <AboutSection />
      </div>
      
      {/* Experience - Luxury Black */}
      <div className="relative">
        <ExperienceSection />
      </div>
      
      {/* Final CTA - Premium Gradient */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-900 dark:via-black dark:to-gray-900">
        <FinalCTASection onSectionClick={scrollToSection} />
      </div>
      
      {/* Footer - Enhanced Dark */}
      <div className="relative bg-gray-50 dark:bg-gray-900">
        <Footer />
      </div>
    </div>
  )
}
