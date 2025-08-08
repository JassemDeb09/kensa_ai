"use client"

import { useState, useEffect } from "react"
import { Header } from "./_components/Header"
import { HeroSection } from "./_components/HeroSection"
import { WhyChooseUsSection } from "./_components/WhyChooseUsSection"
import { ServicesSection } from "./_components/ServicesSection"
import { ProcessSection } from "./_components/ProcessSection"
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
    <>
      {/* Background pattern elements */}
      <div className="fixed inset-0 z-[-1] opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#3A86FF]/5 blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-[#9B5DE5]/5 blur-3xl animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="flex flex-col overflow-x-hidden relative">
        {/* Wrapper div with proper max-width and centering */}
        <div className="w-full mx-auto relative">
          <Header scrollY={mounted ? scrollY : 0} onSectionClick={scrollToSection} />
          <HeroSection onSectionClick={scrollToSection} />
          <StatsSection />
          <WhyChooseUsSection />
          <ServicesSection />
          <ProcessSection />
          <IndustriesSection />
          <TestimonialsSection />
          <ClientOnly>
            <FAQSection />
          </ClientOnly>
          <AboutSection />
          <DemoSection />
          <FinalCTASection onSectionClick={scrollToSection} />
          <Footer />
        </div>
      </div>
    </>
  )
}
