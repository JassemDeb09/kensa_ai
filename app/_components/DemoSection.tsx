"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Monitor, ArrowUpRight, BarChart3, Zap, Shield } from "lucide-react"
import { useState } from "react"
import { useLanguage } from '@/contexts/LanguageContext'

export function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const { t } = useLanguage()
  
  return (
    <section id="demo" className="relative py-32 bg-white dark:bg-gray-900 overflow-hidden">
      {/* AI Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,144,232,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.01)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(30,144,232,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.02)_1px,transparent_1px)]"></div>
      
      {/* AI Gradient Overlays */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-[#1e90e8]/5 to-[#3d50e3]/5 rounded-full blur-3xl dark:from-[#1e90e8]/10 dark:to-[#3d50e3]/10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#3d50e3]/5 to-[#1e90e8]/5 rounded-full blur-3xl dark:from-[#3d50e3]/10 dark:to-[#1e90e8]/10"></div>
      
      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#1e90e8]/10 to-[#3d50e3]/10 border border-[#1e90e8]/20 backdrop-blur-sm mb-8">
            <Monitor className="w-4 h-4 text-[#1e90e8]" />
            <span className="text-[#1e90e8] font-medium text-[14px]">
              {t('demo.title') || "AI in Action"}
            </span>
          </div>
          <h2 className="text-[40px] lg:text-[48px] font-light tracking-[-0.01em] text-gray-900 dark:text-white mb-6">
{t('additional.demo.seeTitle') || 'See our AI solutions in action'}
          </h2>
          <p className="text-[18px] text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto leading-[1.5]">
            {t('demo.subtitle') || "Watch a 5-minute walkthrough of our AI platform and see how we're transforming businesses across industries with intelligent automation."}
          </p>
        </div>

        {/* Demo Video Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* AI Glow Effect */}
          <div className="absolute -inset-8 bg-gradient-to-r from-[#1e90e8]/20 to-[#3d50e3]/20 rounded-3xl blur-2xl opacity-60"></div>
          
          {/* Main Container */}
          <div className="relative bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-3xl p-3 shadow-2xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
              {/* Video Preview / Player */}
              <div className="relative">
                {!isPlaying ? (
                  <div className="relative cursor-pointer group" onClick={() => setIsPlaying(true)} role="button" aria-label="Play AI demo video">
                    <Image
                      src="/demo.png"
                      alt="KENSA AI Demo Preview"
                      width={1000}
                      height={562}
                      className="w-full h-auto object-cover"
                    />
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all duration-500">
                      <div className="relative">
                        {/* Play Button */}
                        <div className="w-24 h-24 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                          <Play className="w-12 h-12 text-[#1e90e8] ml-1" />
                        </div>
                        
                        {/* Pulse Animation */}
                        <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                      </div>
                    </div>
                    
                    {/* Live Demo Badge */}
                    <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#1e90e8]/20">
                      <div className="w-2 h-2 bg-[#1e90e8] rounded-full animate-pulse"></div>
                      <span className="text-[#1e90e8] text-[12px] font-medium">Live AI Demo</span>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <video
                      className="w-full h-auto object-cover rounded-lg"
                      controls
                      autoPlay
                      muted
                      playsInline
                      onEnded={() => setIsPlaying(false)}
                    >
                      <source src="/demo_video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Back to Thumbnail Button */}
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="absolute top-4 right-4 w-10 h-10 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Back to thumbnail"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
              
              {/* Demo Content */}
              <div className="p-12">
                <h3 className="text-[28px] font-medium text-gray-900 dark:text-white mb-4 leading-tight">
                  {t('demo.videoTitle') || "5-Minute AI Transformation Walkthrough"}
                </h3>
                <p className="text-[16px] text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-[1.5]">
                  {t('demo.videoDescription') || "Discover how our AI platform identifies opportunities, automates processes, and delivers measurable ROI for enterprise clients across different industries."}
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    onClick={() => setIsPlaying(true)} 
                    className="bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] hover:from-[#1e90e8]/90 hover:to-[#3d50e3]/90 text-white font-medium px-8 py-4 rounded-xl text-[16px] transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-[#1e90e8]/25"
                  >
                    <span className="flex items-center gap-3">
                      <Play className="w-5 h-5" />
                      {t('demo.cta') || "Watch Full Demo"}
                    </span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-[#1e90e8]/30 text-[#1e90e8] hover:bg-[#1e90e8]/5 dark:border-[#1e90e8]/50 dark:text-[#1e90e8] font-medium px-8 py-4 rounded-xl text-[16px] transition-all duration-300"
                  >
                    <span className="flex items-center gap-3">
                      {t('additional.demo.scheduleLive') || 'Schedule Live Demo'}
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Innovation Elite Section */}
        <div className="mt-20">
          <h3 className="text-[32px] lg:text-[36px] font-light tracking-[-0.01em] text-gray-900 dark:text-white mb-12 text-center">
            {t('additional.demo.joinElite') || 'Join the Innovation Elite'}
          </h3>
          
          {/* Features Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { 
                title: t('additional.demo.features.realtime') || "Real-time Analytics", 
                desc: t('additional.demo.features.realtimeDesc') || "Live AI performance metrics", 
                color: "#1e90e8", 
                icon: BarChart3 
              },
              { 
                title: t('additional.demo.features.automation') || "Smart Automation", 
                desc: t('additional.demo.features.automationDesc') || "Intelligent process optimization", 
                color: "#3d50e3", 
                icon: Zap 
              },
              { 
                title: t('additional.demo.features.security') || "Enterprise Security", 
                desc: t('additional.demo.features.securityDesc') || "SOC2 compliant infrastructure", 
                color: "#1e90e8", 
                icon: Shield 
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative h-full p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-200/20 dark:hover:shadow-gray-900/40 text-center">
                  
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    feature.color === "#1e90e8" 
                      ? "bg-gradient-to-br from-[#1e90e8]/5 to-[#3d50e3]/5 dark:from-[#1e90e8]/10 dark:to-[#3d50e3]/10" 
                      : "bg-gradient-to-br from-[#3d50e3]/5 to-[#1e90e8]/5 dark:from-[#3d50e3]/10 dark:to-[#1e90e8]/10"
                  }`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl mx-auto mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                      feature.color === "#1e90e8" 
                        ? 'bg-[#1e90e8]/10 group-hover:bg-[#1e90e8]/20 dark:bg-[#1e90e8]/20 dark:group-hover:bg-[#1e90e8]/30' 
                        : 'bg-[#3d50e3]/10 group-hover:bg-[#3d50e3]/20 dark:bg-[#3d50e3]/20 dark:group-hover:bg-[#3d50e3]/30'
                    }`}>
                      <feature.icon className={`w-7 h-7 transition-all duration-500 group-hover:scale-110 ${
                        feature.color === "#1e90e8" ? 'text-[#1e90e8]' : 'text-[#3d50e3]'
                      } opacity-70 group-hover:opacity-100`} />
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-[18px] font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-100">
                      {feature.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.5] transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Hover Border Effect */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-current transition-all duration-500 ${
                    feature.color === "#1e90e8" ? "group-hover:text-[#1e90e8]/20" : "group-hover:text-[#3d50e3]/20"
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        

      </div>
    </section>
  )
}
