"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import { CheckCircle, Users } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import AnimatedCard from "@/components/animated-card"
import AnimatedButton from "@/components/animated-button"

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-r from-[#f1f4f9] via-[#f1f4f9] to-[#f1f4f9] dark:from-[#121212]/95 dark:via-[#121212]/95 dark:to-[#121212]/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] dark:opacity-[0.03]"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-[#3A86FF]/5 blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-40 left-[5%] w-96 h-96 rounded-full bg-[#9B5DE5]/5 blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle geometric shapes */}
        <div className="absolute top-[30%] left-[15%] w-16 h-16 border border-[#3A86FF]/20 rounded-md rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-[25%] right-[20%] w-24 h-24 border border-[#9B5DE5]/20 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[60%] right-[30%] w-12 h-12 border-2 border-[#3A86FF]/10 rounded-full animate-ping" style={{ animationDuration: '10s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection type="fade" className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-4 py-1.5 mb-6 text-sm font-medium text-[#121212] dark:text-[#F5F5F5] bg-white dark:bg-gray-900 shadow-sm">
            <Users className="h-4 w-4 text-[#3A86FF] mr-2" />
            <span className="text-[#3A86FF] font-medium">{t("services.badge") || "Our Solutions"}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto text-gray-900 dark:text-white text-center">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg text-center">
            {t("services.subtitle")}
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={400} className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {t("services.coreTitle")}
          </h3>
        </AnimatedSection>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <AnimatedSection type="slide" direction="up" delay={200}>
            <AnimatedCard 
              hoverEffect="lift" 
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center h-full relative group transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#3A86FF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3A86FF]/10 mx-auto">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#3A86FF]">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t("services.items.audit.title")}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {t("services.items.audit.description")}
              </p>
            </AnimatedCard>
          </AnimatedSection>
          
          <AnimatedSection type="slide" direction="up" delay={300}>
            <AnimatedCard 
              hoverEffect="lift" 
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center h-full relative group transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#9B5DE5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#9B5DE5]/10 mx-auto">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#9B5DE5]">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t("services.items.integration.title")}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {t("services.items.integration.description")}
              </p>
            </AnimatedCard>
          </AnimatedSection>
          
          <AnimatedSection type="slide" direction="up" delay={400}>
            <AnimatedCard 
              hoverEffect="lift" 
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center h-full relative group transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#3A86FF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3A86FF]/10 mx-auto">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#3A86FF]">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t("services.items.automation.title")}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {t("services.items.automation.description")}
              </p>
            </AnimatedCard>
          </AnimatedSection>
          
          <AnimatedSection type="slide" direction="up" delay={500}>
            <AnimatedCard 
              hoverEffect="lift" 
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center h-full relative group transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#9B5DE5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#9B5DE5]/10 mx-auto">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#9B5DE5]">
                  <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t("services.items.training.title")}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {t("services.items.training.description")}
              </p>
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}