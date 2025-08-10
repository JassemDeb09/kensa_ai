"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowRight, Play, Star, Brain, Sparkles, Zap, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface HeroSectionProps {
  onSectionClick: (sectionId: string) => void
}

export function HeroSection({ onSectionClick }: HeroSectionProps) {
  const { t } = useLanguage()


  
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/AI_Powered_transformation.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
        </video>
        
        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        
        {/* Brand Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e90e8]/20 via-transparent to-[#3d50e3]/20"></div>
      </div>
      
      {/* Additional AI Gradient Overlays for depth */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-[#1e90e8]/10 to-transparent rounded-full blur-3xl z-10"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#3d50e3]/10 to-transparent rounded-full blur-3xl z-10"></div>
      
      {/* Floating AI Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-white/30 rounded-3xl rotate-45 animate-spin opacity-50 z-20" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-32 left-32 w-24 h-24 border border-white/30 rounded-full animate-pulse opacity-60 z-20" style={{ animationDuration: '3s' }}></div>
      
      <div className="relative max-w-[1200px] mx-auto px-8 lg:px-12 pt-40 pb-24 z-20">
        <div className="flex flex-col items-center text-center space-y-12">
            {/* AI Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <div className="w-2 h-2 bg-[#1e90e8] rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-[14px]">
                {t("hero.badge") || "AI-Powered Solutions"}
              </span>
            </div>
            
          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-[56px] lg:text-[72px] xl:text-[84px] font-light tracking-[-0.02em] leading-[0.9] text-white">
              <span className="block font-medium bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] bg-clip-text text-transparent">
                {t("hero.title") || "AI-Powered Transformation"}
              </span>
              <span className="block text-white/80 text-[32px] lg:text-[40px] xl:text-[48px] mt-4">
                by KENSA AI
              </span>
            </h1>
            
            {/* AI Accent Line */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-16 h-px bg-gradient-to-r from-[#1e90e8] to-[#3d50e3]"></div>
              <Sparkles className="w-5 h-5 text-white" />
              <div className="w-16 h-px bg-gradient-to-r from-[#3d50e3] to-[#1e90e8]"></div>
            </div>
          </div>
            
          {/* Subtitle */}
          <p className="text-[20px] lg:text-[24px] text-white/90 leading-[1.4] max-w-[800px] font-light">
            {t("hero.subtitle") || "KENSA AI: Your future, engineered. Your growth, accelerated. 🚀"}
          </p>
          
          {/* CTA Section */}
          <div className="flex justify-center pt-8">
              <Button
                onClick={() => onSectionClick('services')}
                className="group bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] hover:from-[#1e90e8]/90 hover:to-[#3d50e3]/90 text-white font-medium px-10 py-5 rounded-xl text-[18px] transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-[#1e90e8]/25"
              >
                <span className="flex items-center gap-3">
                  <Brain className="w-6 h-6" />
                  {t("hero.cta.primary") || "Start Your Transformation"}
                  {/* Alternative CTA text: "Transform My Business" */}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
          </div>
          
          {/* AI Social Proof */}
          <div className="flex items-center justify-center gap-8 pt-12">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#1e90e8] fill-current" />
                ))}
              </div>
              <span className="text-white/80 text-[14px] font-medium ml-2">
                4.9/5 from 500+ AI implementations
              </span>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  )
}