"use client"

import { Button } from "@/components/ui/button"
import { Brain, Users, Cpu, Clock, Building, ArrowUpRight } from "lucide-react"
import { useLanguage } from '@/contexts/LanguageContext'

export function AboutSection() {
  const { t } = useLanguage()
  
  const values = [
    { 
      icon: Brain, 
      title: "AI Excellence", 
      desc: "Cutting-edge AI solutions that drive measurable results",
      color: "#1e90e8"
    },
    { 
      icon: Users, 
      title: "Partnership", 
      desc: "Close collaboration throughout your AI transformation journey",
      color: "#3d50e3"
    },
    { 
      icon: Cpu, 
      title: "Innovation", 
      desc: "Leading-edge machine learning and AI technologies",
      color: "#1e90e8"
    },
  ]

  return (
    <section id="about" className="relative py-32 bg-white dark:bg-gray-900 overflow-hidden">
      {/* AI Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,144,232,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.01)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(30,144,232,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.02)_1px,transparent_1px)]"></div>
      
      {/* AI Gradient Overlays */}
      <div className="absolute -top-24 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-[#1e90e8]/10 to-[#3d50e3]/10 blur-3xl dark:from-[#1e90e8]/20 dark:to-[#3d50e3]/20" />
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#3d50e3]/10 to-[#1e90e8]/10 blur-3xl dark:from-[#3d50e3]/20 dark:to-[#1e90e8]/20" />
      
      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12 z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            {/* AI Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#1e90e8]/10 to-[#3d50e3]/10 border border-[#1e90e8]/20 backdrop-blur-sm mb-8">
              <Building className="w-4 h-4 text-[#1e90e8]" />
              <span className="text-[#1e90e8] font-medium text-[14px]">
                {t('about.title') || "About KENSA AI"}
              </span>
            </div>
            
            {/* Main Headline */}
            <h2 className="text-[40px] lg:text-[48px] font-light tracking-[-0.01em] text-gray-900 dark:text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] bg-clip-text text-transparent font-medium">AI transformation</span><br />
              {t('about.title') || "leaders"}
            </h2>
            
            {/* Company DNA */}
            <h3 className="text-[24px] font-medium text-gray-900 dark:text-white mb-6">
              {t('about.dna') || "Our AI DNA"}
            </h3>
            
            {/* Subtitle */}
            <p className="text-[20px] text-gray-700 dark:text-gray-300 mb-8 font-medium leading-[1.4]">
              {t('about.subtitle') || "We are the AI transformation experts that Fortune 500 companies trust to deliver measurable results."}
            </p>
            
            {/* Description */}
            <p className="text-[18px] text-gray-600 dark:text-gray-400 leading-[1.5] mb-12">
              {t('about.description') || "Based in Toronto with global reach, our team of AI specialists, machine learning engineers, and data scientists has successfully deployed 500+ AI solutions across 25+ countries, delivering an average ROI of 300% within 12 months."}
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="group relative">
                {/* Card */}
                <div className="relative h-full p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-200/20 dark:hover:shadow-gray-900/40 text-center">
                  
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#1e90e8]/5 to-[#3d50e3]/5 dark:from-[#1e90e8]/10 dark:to-[#3d50e3]/10"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all duration-500 group-hover:scale-110 bg-[#1e90e8]/10 group-hover:bg-[#1e90e8]/20 dark:bg-[#1e90e8]/20 dark:group-hover:bg-[#1e90e8]/30">
                      <Clock className="w-6 h-6 text-[#1e90e8] transition-all duration-500 group-hover:scale-110" />
                    </div>
                    
                    {/* Number */}
                    <p className="font-semibold text-gray-900 dark:text-white text-[20px] mb-2 transition-all duration-500 group-hover:scale-105 group-hover:text-[#1e90e8]">
                      5+ Years
                    </p>
                    
                    {/* Label */}
                    <p className="text-[14px] text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                      AI Expertise
                    </p>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-current transition-all duration-500 group-hover:text-[#1e90e8]/20"></div>
                </div>
              </div>

              <div className="group relative">
                {/* Card */}
                <div className="relative h-full p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-200/20 dark:hover:shadow-gray-900/40 text-center">
                  
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#3d50e3]/5 to-[#1e90e8]/5 dark:from-[#3d50e3]/10 dark:to-[#1e90e8]/10"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all duration-500 group-hover:scale-110 bg-[#3d50e3]/10 group-hover:bg-[#3d50e3]/20 dark:bg-[#3d50e3]/20 dark:group-hover:bg-[#3d50e3]/30">
                      <Users className="w-6 h-6 text-[#3d50e3] transition-all duration-500 group-hover:scale-110" />
                    </div>
                    
                    {/* Number */}
                    <p className="font-semibold text-gray-900 dark:text-white text-[20px] mb-2 transition-all duration-500 group-hover:scale-105 group-hover:text-[#3d50e3]">
                      50+ Experts
                    </p>
                    
                    {/* Label */}
                    <p className="text-[14px] text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                      Certified AI Specialists
                    </p>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-current transition-all duration-500 group-hover:text-[#3d50e3]/20"></div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button className="bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] hover:from-[#1e90e8]/90 hover:to-[#3d50e3]/90 text-white font-medium px-8 py-4 rounded-xl text-[16px] transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-[#1e90e8]/25">
              <span className="flex items-center gap-3">
                {t('about.cta') || "Meet Our AI Team"}
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Button>
          </div>

          {/* Right Content - Values Card */}
          <div className="relative">
            {/* AI Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#1e90e8]/20 to-[#3d50e3]/20 rounded-3xl blur-xl opacity-60"></div>
            
            {/* Main Card */}
            <div className="relative bg-white dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-12 shadow-[0_24px_64px_rgba(30,144,232,0.08)]">
              <h3 className="text-[28px] font-medium text-gray-900 dark:text-white mb-8">
                {t('about.commitment') || "Our AI Commitment"}
              </h3>
              
              <div className="space-y-8">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-6 group">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      value.color === "#1e90e8" 
                        ? "bg-[#1e90e8]/10 group-hover:bg-[#1e90e8]/20 dark:bg-[#1e90e8]/20 dark:group-hover:bg-[#1e90e8]/30" 
                        : "bg-[#3d50e3]/10 group-hover:bg-[#3d50e3]/20 dark:bg-[#3d50e3]/20 dark:group-hover:bg-[#3d50e3]/30"
                    }`}>
                      <value.icon className={`w-6 h-6 ${
                        value.color === "#1e90e8" ? "text-[#1e90e8]" : "text-[#3d50e3]"
                      }`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className={`font-semibold mb-2 text-[18px] transition-colors group-hover:${
                        value.color === "#1e90e8" ? "text-[#1e90e8]" : "text-[#3d50e3]"
                      } text-gray-900 dark:text-white`}>
                        {value.title}
                      </h4>
                      <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.5]">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
