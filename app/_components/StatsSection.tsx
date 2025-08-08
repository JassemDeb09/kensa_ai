"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import { Building2, UserPlus, Handshake, BarChart3 } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import AnimatedCounter from "@/components/animated-counter"

export function StatsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#f1f4f9] to-[#f8f9fa] dark:from-[#121212]/95 dark:to-[#121212]/90 backdrop-blur-sm border-y border-gray-200 dark:border-[#3A86FF]/20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-[url('/subtle-dots.png')] opacity-[0.02] dark:opacity-[0.05]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#3A86FF]/5 pointer-events-none"></div>
      
      {/* Animated glowing orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#3A86FF]/5 blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#9B5DE5]/5 blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
      
      {/* Subtle geometric shapes */}
      <div className="absolute top-[20%] right-[15%] w-32 h-32 border border-[#3A86FF]/10 rounded-full animate-spin-slow opacity-30"></div>
      <div className="absolute bottom-[15%] left-[10%] w-24 h-24 border border-[#9B5DE5]/10 rounded-md rotate-45 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute top-[25%] left-[30%] w-2 h-2 rounded-full bg-[#3A86FF]/20 animate-float-slow"></div>
      <div className="absolute bottom-[35%] right-[25%] w-3 h-3 rounded-full bg-[#9B5DE5]/20 animate-float-slow" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection type="fade" className="text-center mb-10">
          <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-4 py-1.5 mb-4 text-sm font-medium bg-white dark:bg-gray-900 shadow-sm">
            <BarChart3 className="h-4 w-4 text-[#3A86FF] mr-2" />
            <span className="text-[#3A86FF]">{t("stats.title") || "Platform Statistics"}</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight mb-2 text-gray-900 dark:text-white">{t("stats.title") || "Platform Statistics"}</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">{t("stats.subtitle") || "Growing ecosystem of AI experts and businesses finding their perfect match"}</p>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <AnimatedSection type="fade" delay={100}>
            <div className="relative p-6 rounded-xl bg-white dark:bg-[#121212]/90 border border-gray-200 dark:border-gray-800 shadow-lg group hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-center items-center overflow-hidden">
              {/* Inner shadow for depth */}
              <div className="absolute inset-0 rounded-xl shadow-inner pointer-events-none opacity-20 dark:opacity-40"></div>
              {/* Gradient overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent dark:from-[#3A86FF]/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#3A86FF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="mb-3 p-3 rounded-full bg-[#3A86FF]/10 dark:bg-[#3A86FF]/20 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3A86FF]/30 dark:group-hover:bg-[#3A86FF]/40 shadow-md">
                <Building2 className="h-6 w-6 text-[#3A86FF] drop-shadow-sm" />
              </div>
              <AnimatedCounter 
                end={500} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold text-[#3A86FF] transition-all duration-300 group-hover:scale-110" 
                duration={2500} 
              />
              <p className="text-sm font-medium mt-2 text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-[#3A86FF]">{t("stats.companiesServed.label")}</p>
            </div>
          </AnimatedSection>
          <AnimatedSection type="fade" delay={300}>
            <div className="relative p-6 rounded-xl bg-white dark:bg-[#121212]/90 border border-gray-200 dark:border-gray-800 shadow-md group hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-center items-center overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#9B5DE5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="mb-3 p-3 rounded-full bg-[#9B5DE5]/10 dark:bg-[#9B5DE5]/20 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#9B5DE5]/30 dark:group-hover:bg-[#9B5DE5]/40">
                <UserPlus className="h-6 w-6 text-[#9B5DE5]" />
              </div>
              <AnimatedCounter 
                end={25} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold text-[#9B5DE5] transition-all duration-300 group-hover:scale-110" 
                duration={2500} 
              />
              <p className="text-sm font-medium mt-2 text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-[#9B5DE5]">{t("stats.countriesImpacted.label")}</p>
            </div>
          </AnimatedSection>
          <AnimatedSection type="fade" delay={500}>
            <div className="relative p-6 rounded-xl bg-white dark:bg-[#121212]/90 border border-gray-200 dark:border-gray-800 shadow-lg group hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-center items-center overflow-hidden">
              {/* Inner shadow for depth */}
              <div className="absolute inset-0 rounded-xl shadow-inner pointer-events-none opacity-20 dark:opacity-40"></div>
              {/* Gradient overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent dark:from-[#3A86FF]/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#3A86FF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="mb-3 p-3 rounded-full bg-[#3A86FF]/10 dark:bg-[#3A86FF]/20 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3A86FF]/30 dark:group-hover:bg-[#3A86FF]/40 shadow-md">
                <Handshake className="h-6 w-6 text-[#3A86FF] drop-shadow-sm" />
              </div>
              <AnimatedCounter 
                end={350} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold text-[#3A86FF] transition-all duration-300 group-hover:scale-110" 
                duration={2500} 
              />
              <p className="text-sm font-medium mt-2 text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-[#3A86FF]">{t("stats.successfulMatches") || "Successful Projects"}</p>
            </div>
          </AnimatedSection>
          <AnimatedSection type="fade" delay={700}>
            <div className="relative p-6 rounded-xl bg-white dark:bg-[#121212]/90 border border-gray-200 dark:border-gray-800 shadow-lg group hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-center items-center overflow-hidden">
              {/* Inner shadow for depth */}
              <div className="absolute inset-0 rounded-xl shadow-inner pointer-events-none opacity-20 dark:opacity-40"></div>
              {/* Gradient overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent dark:from-[#9B5DE5]/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#9B5DE5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="mb-3 p-3 rounded-full bg-[#9B5DE5]/10 dark:bg-[#9B5DE5]/20 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#9B5DE5]/30 dark:group-hover:bg-[#9B5DE5]/40 shadow-md">
                <BarChart3 className="h-6 w-6 text-[#9B5DE5] drop-shadow-sm" />
              </div>
              <AnimatedCounter 
                end={98} 
                suffix="%" 
                className="text-4xl md:text-5xl font-bold text-[#9B5DE5] transition-all duration-300 group-hover:scale-110" 
                duration={2500} 
              />
              <p className="text-sm font-medium mt-2 text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-[#9B5DE5]">{t("stats.clientSatisfaction.label")}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}