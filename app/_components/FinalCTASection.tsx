"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from '@/contexts/LanguageContext'
import { Rocket, ArrowUpRight, Sparkles } from "lucide-react"

interface FinalCTASectionProps {
  onSectionClick: (sectionId: string) => void
}

export function FinalCTASection({ onSectionClick }: FinalCTASectionProps) {
  const { t } = useLanguage()
  
  return (
    <section className="relative py-32 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] text-white overflow-hidden">
      {/* AI Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Floating AI Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-3xl rotate-45 animate-spin opacity-30" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-pulse opacity-40" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
        {/* AI Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-white font-medium text-[14px]">
            Ready for AI Transformation?
          </span>
        </div>
        
        {/* Main Headline */}
        <h2 className="text-[48px] lg:text-[64px] font-light tracking-[-0.01em] text-white mb-8 leading-[0.9]">
          {t('finalCta.title') || (
            <>
              Start your <span className="font-medium">AI journey</span><br />
              <span className="text-white/80">today</span>
            </>
          )}
        </h2>
        
        {/* Subtitle */}
        <p className="text-[20px] lg:text-[24px] text-white/90 mb-12 max-w-3xl mx-auto leading-[1.4] font-light">
          {t('finalCta.subtitle') || "Join 500+ enterprises already transforming their business with our AI solutions. Get a free consultation and discover your AI opportunities."}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            onClick={() => onSectionClick("contact")}
            className="group bg-white hover:bg-gray-100 text-[#1e90e8] font-semibold px-10 py-4 rounded-xl text-[18px] transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <span className="flex items-center gap-3">
              <Rocket className="w-5 h-5" />
              {t('finalCta.primary') || "Book Free AI Consultation"}
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </Button>
          
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 font-medium px-10 py-4 rounded-xl text-[18px] transition-all duration-300 bg-transparent backdrop-blur-sm"
          >
            {t('finalCta.secondary') || "View AI Case Studies"}
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-8 mt-16 pt-12 border-t border-white/20">
          <div className="text-center">
            <div className="text-[24px] font-light text-white">500+</div>
            <div className="text-[12px] text-white/70 font-medium tracking-wide uppercase">{t('additional.finalCta.stats.projects') || 'AI Projects'}</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-[24px] font-light text-white">98%</div>
            <div className="text-[12px] text-white/70 font-medium tracking-wide uppercase">{t('additional.finalCta.stats.successRate') || 'Success Rate'}</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-[24px] font-light text-white">24/7</div>
            <div className="text-[12px] text-white/70 font-medium tracking-wide uppercase">{t('additional.finalCta.stats.support') || 'AI Support'}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
