"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import AnimatedGradientText from "@/components/animated-gradient-text"
import AnimatedBackground from "@/components/animated-background"
import AnimatedButton from "@/components/animated-button"
import AIChatPreview from "@/components/ai-chat-preview"
import Image from "next/image"

interface HeroSectionProps {
  onSectionClick: (sectionId: string) => void
}

export function HeroSection({ onSectionClick }: HeroSectionProps) {
  const { t } = useLanguage()
  
  return (
    <AnimatedBackground 
      className="relative pt-32 pb-24 min-h-[70vh] overflow-hidden bg-gradient-to-br from-[#3A86FF]/10 via-[#3A86FF]/15 to-[#9B5DE5]/20 dark:from-[#121212]/95 dark:via-[#121212]/90 dark:to-[#121212]/95"
      dotSize={4}
      dotCount={60}
      speed={0.7}
      dotColor="rgba(155, 93, 229, 0.25)"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <AnimatedSection type="slide" direction="right" duration={800}>
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-[#3A86FF]/30 bg-[#3A86FF]/5 px-3 py-1 text-sm font-medium text-[#3A86FF] backdrop-blur-sm dark:border-[#3A86FF]/20 dark:bg-[#3A86FF]/10 dark:text-[#3A86FF]/90">
                <span className="mr-1 h-2 w-2 rounded-full bg-[#3A86FF]"></span>
                {t("hero.badge") || "Strategic AI Solutions"}
              </div>
              <AnimatedGradientText
                text={t("hero.title")}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                gradientColors={["#3A86FF", "#9B5DE5", "#3A86FF"]}
                duration={5000}
              />
              <AnimatedSection delay={300} duration={800}>
                <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">{t("hero.subtitle")}</p>
              </AnimatedSection>
              <AnimatedSection delay={600} duration={800}>
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <AnimatedButton
                    size="lg"
                    className="bg-gradient-to-r from-[#3A86FF] to-[#9B5DE5] hover:from-[#3A86FF]/90 hover:to-[#9B5DE5]/90 text-[#F5F5F5] shadow-lg rounded-full px-8"
                    hoverEffect="glow"
                    clickEffect="ripple"
                    onClick={() => onSectionClick('services')}
                  >
                    <span className="flex items-center gap-2">
                      {t("hero.cta.primary")} <ArrowRight className="h-4 w-4" />
                    </span>
                  </AnimatedButton>
                  <AnimatedButton 
                    size="lg" 
                    variant="outline" 
                    className="border-[#9B5DE5]/50 text-[#9B5DE5] hover:bg-[#9B5DE5]/5 rounded-full px-8"
                    hoverEffect="scale" 
                    clickEffect="bounce"
                    onClick={() => onSectionClick('demo')}
                  >
                    <span>{t("hero.cta.secondary")}</span>
                  </AnimatedButton>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={800} duration={800}>
                <div className="flex items-center gap-4 mt-8 text-sm text-muted-foreground">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-background overflow-hidden">
                        <Image
                          src={`/${i}.png`}
                          alt={`User ${i}`}
                          width={32}
                          height={32}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span>{t("hero.trustedBy")}</span>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
          <AnimatedSection type="fade" delay={400} duration={1000} className="relative z-10">
            <div className="relative group perspective-1000">
              {/* Animated floating elements */}
              <div className="absolute -top-8 -left-8 h-16 w-16 rounded-full bg-[#3A86FF]/20 blur-xl animate-float-slow"></div>
              <div className="absolute -bottom-8 -right-8 h-16 w-16 rounded-full bg-[#9B5DE5]/20 blur-xl animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/4 -right-6 h-12 w-12 rounded-full bg-[#3A86FF]/15 blur-lg animate-float" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute bottom-1/4 -left-6 h-12 w-12 rounded-full bg-[#9B5DE5]/15 blur-lg animate-float" style={{ animationDelay: '2.1s' }}></div>
              
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#3A86FF] to-[#9B5DE5] opacity-30 blur-xl animate-pulse-slow"></div>
              
              {/* Main chat container with 3D hover effect */}
              <div className="relative overflow-hidden rounded-2xl border border-[#3A86FF]/20 bg-background/90 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(58,134,255,0.3)] transform group-hover:rotate-y-3 group-hover:rotate-x-2">
                {/* Background patterns */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#3A86FF]/5 via-transparent to-[#9B5DE5]/5"></div>
                
                {/* Chat header with glowing effect */}
                <div className="relative p-3 border-b border-[#3A86FF]/10 bg-gradient-to-r from-[#3A86FF]/5 to-[#9B5DE5]/5 flex items-center">
                  <div className="h-3 w-3 rounded-full bg-[#FF5F56] mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-[#FFBD2E] mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-[#27C93F] mr-3"></div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("hero.aiAssistant") || "KENSA AI Assistant"}</div>
                  <div className="ml-auto flex items-center space-x-1">
                    <div className="h-2 w-2 rounded-full bg-[#3A86FF] animate-pulse"></div>
                    <span className="text-xs text-[#3A86FF] font-medium">{t("hero.online") || "Online"}</span>
                  </div>
                </div>
                
                {/* Chat content */}
                <div className="p-1 rounded-xl overflow-hidden">
                  <div className="w-full h-[420px]">
                    <AIChatPreview 
                      className="w-full h-full" 
                      primaryColor="#3A86FF"
                      secondaryColor="#9B5DE5"
                      companyName="KENSA AI"
                      userName="Client"
                      animate={true}
                    />
                  </div>
                </div>
              </div>
              
              {/* Animated glow effects */}
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[#3A86FF]/20 blur-2xl animate-pulse-slow"></div>
              <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-[#9B5DE5]/20 blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              
              {/* Particle effects */}
              <div className="absolute top-0 left-1/4 w-1 h-1 rounded-full bg-[#3A86FF] animate-float-particle"></div>
              <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-[#9B5DE5] animate-float-particle" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-[#3A86FF] animate-float-particle" style={{ animationDelay: '1.2s' }}></div>
              <div className="absolute bottom-0 right-1/3 w-1 h-1 rounded-full bg-[#9B5DE5] animate-float-particle" style={{ animationDelay: '1.7s' }}></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedBackground>
  )
}