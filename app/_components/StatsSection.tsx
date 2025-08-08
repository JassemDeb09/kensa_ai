"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import { Building2, UserPlus, BarChart3, TrendingUp, Brain, Cpu } from "lucide-react"
import AnimatedCounter from "@/components/animated-counter"

export function StatsSection() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: Building2,
      number: 500,
      suffix: "+",
      label: t("stats.companiesServed.label") || "AI Deployments",
      description: "Enterprise AI solutions successfully implemented worldwide",
      color: "#1e90e8"
    },
    {
      icon: BarChart3,
      number: 98,
      suffix: "%",
      label: t("stats.clientSatisfaction.label") || "Success Rate",
      description: "AI projects delivered on time with measurable ROI",
      color: "#3d50e3"
    },
    {
      icon: Brain,
      number: 25,
      suffix: "+",
      label: t("stats.countriesImpacted.label") || "AI Models",
      description: "Custom machine learning models trained and deployed",
      color: "#1e90e8"
    }
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* AI Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,144,232,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.01)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(30,144,232,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.02)_1px,transparent_1px)]"></div>
      
      {/* AI Gradient Overlays */}
      <div className="absolute top-32 left-20 w-72 h-72 bg-gradient-to-r from-[#1e90e8]/5 to-[#3d50e3]/5 rounded-full blur-3xl dark:from-[#1e90e8]/10 dark:to-[#3d50e3]/10"></div>
      <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-[#3d50e3]/5 to-[#1e90e8]/5 rounded-full blur-3xl dark:from-[#3d50e3]/10 dark:to-[#1e90e8]/10"></div>
      
      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#1e90e8]/10 to-[#3d50e3]/10 border border-[#1e90e8]/20 backdrop-blur-sm mb-8">
            <TrendingUp className="w-4 h-4 text-[#1e90e8]" />
            <span className="text-[#1e90e8] font-medium text-[14px]">
              {t("stats.title") || "AI Performance Metrics"}
            </span>
          </div>
          <h2 className="text-[40px] lg:text-[48px] font-light tracking-[-0.01em] text-gray-900 dark:text-white mb-6">
            Proven AI excellence
          </h2>
          <p className="text-[18px] text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-[1.5]">
            {t("stats.subtitle") || "Leading the AI transformation with measurable results and innovative solutions that drive business growth."}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative h-full p-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-200/20 dark:hover:shadow-gray-900/40 text-center">
                
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  stat.color === "#1e90e8" 
                    ? "bg-gradient-to-br from-[#1e90e8]/5 to-[#3d50e3]/5 dark:from-[#1e90e8]/10 dark:to-[#3d50e3]/10" 
                    : "bg-gradient-to-br from-[#3d50e3]/5 to-[#1e90e8]/5 dark:from-[#3d50e3]/10 dark:to-[#1e90e8]/10"
                }`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-500 group-hover:scale-110 ${
                    stat.color === "#1e90e8" 
                      ? "bg-[#1e90e8]/10 group-hover:bg-[#1e90e8]/20 dark:bg-[#1e90e8]/20 dark:group-hover:bg-[#1e90e8]/30" 
                      : "bg-[#3d50e3]/10 group-hover:bg-[#3d50e3]/20 dark:bg-[#3d50e3]/20 dark:group-hover:bg-[#3d50e3]/30"
                  }`}>
                    <stat.icon className={`w-8 h-8 transition-all duration-500 group-hover:scale-110 ${
                      stat.color === "#1e90e8" ? "text-[#1e90e8]" : "text-[#3d50e3]"
                    }`} />
                  </div>
                  
                  {/* Number */}
                  <div className="mb-4">
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix}
                      className={`text-[56px] lg:text-[64px] font-light leading-none transition-all duration-500 group-hover:scale-105 ${
                        stat.color === "#1e90e8" ? "text-[#1e90e8]" : "text-[#3d50e3]"
                      }`}
                      duration={2500} 
                    />
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-[18px] font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-100">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.5] transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                    {stat.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-current transition-all duration-500 ${
                  stat.color === "#1e90e8" ? "group-hover:text-[#1e90e8]/20" : "group-hover:text-[#3d50e3]/20"
                }`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="text-center mt-24 pt-16 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cpu className="w-5 h-5 text-[#1e90e8]" />
            <span className="text-[16px] text-gray-600 dark:text-gray-400 font-light">
              Powering AI innovation since 2019
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}