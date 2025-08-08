"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import { Target, Shield, Clock, Users, CheckCircle } from "lucide-react"

export function WhyChooseUsSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Target,
      title: t('whyChoose.features.roi') || "Proven ROI",
      description: "Average 300% ROI within 12 months of AI implementation",
      color: "#1e90e8"
    },
    {
      icon: Clock,
      title: t('whyChoose.features.support') || "24/7 AI Support",
      description: "Round-the-clock monitoring and support for your AI systems",
      color: "#3d50e3"
    },
    {
      icon: Users,
      title: t('whyChoose.features.experts') || "AI Specialists",
      description: "World-class team of ML engineers and AI researchers",
      color: "#1e90e8"
    },
    {
      icon: Shield,
      title: t('whyChoose.features.security') || "AI Security",
      description: "Enterprise-grade security with GDPR compliance",
      color: "#3d50e3"
    }
  ]

  return (
    <section className="relative py-32 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      {/* AI Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,144,232,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.01)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(30,144,232,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.02)_1px,transparent_1px)]"></div>
      
      {/* AI Gradient Overlays */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-[#1e90e8]/5 to-[#3d50e3]/5 rounded-full blur-3xl dark:from-[#1e90e8]/10 dark:to-[#3d50e3]/10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-[#3d50e3]/5 to-[#1e90e8]/5 rounded-full blur-3xl dark:from-[#3d50e3]/10 dark:to-[#1e90e8]/10"></div>
      
      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#1e90e8]/10 to-[#3d50e3]/10 border border-[#1e90e8]/20 backdrop-blur-sm mb-8">
            <CheckCircle className="w-4 h-4 text-[#1e90e8]" />
            <span className="text-[#1e90e8] font-medium text-[14px]">
              {t('whyChoose.title') || "Why Choose KENSA AI"}
            </span>
          </div>
          <h2 className="text-[40px] lg:text-[48px] font-light tracking-[-0.01em] text-gray-900 dark:text-white mb-6">
            The <span className="bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] bg-clip-text text-transparent font-medium">AI advantage</span> you need
          </h2>
          <p className="text-[18px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-[1.5]">
            {t('whyChoose.subtitle') || "Four key differentiators that make us the preferred AI transformation partner for enterprise leaders worldwide."}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* AI Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${
                feature.color === "#1e90e8" ? "from-[#1e90e8]/20 to-[#3d50e3]/20" : "from-[#3d50e3]/20 to-[#1e90e8]/20"
              } rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 h-full transition-all duration-500 hover:border-[#1e90e8]/30 dark:hover:border-[#1e90e8]/30 group-hover:transform group-hover:scale-105 hover:shadow-[0_24px_64px_rgba(30,144,232,0.08)]">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-all duration-300 ${
                  feature.color === "#1e90e8" 
                    ? "bg-[#1e90e8]/10 group-hover:bg-[#1e90e8]/20 dark:bg-[#1e90e8]/20 dark:group-hover:bg-[#1e90e8]/30" 
                    : "bg-[#3d50e3]/10 group-hover:bg-[#3d50e3]/20 dark:bg-[#3d50e3]/20 dark:group-hover:bg-[#3d50e3]/30"
                }`}>
                  <feature.icon className={`w-7 h-7 ${
                    feature.color === "#1e90e8" ? "text-[#1e90e8]" : "text-[#3d50e3]"
                  }`} />
                </div>
                
                {/* Content */}
                <h3 className={`text-[18px] font-medium mb-3 transition-colors text-gray-900 dark:text-white group-hover:${
                  feature.color === "#1e90e8" ? "text-[#1e90e8]" : "text-[#3d50e3]"
                }`}>
                  {feature.title}
                </h3>
                <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.5]">
                  {feature.description}
                </p>
                
                {/* Success Indicator */}
                <div className={`absolute top-6 right-6 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  feature.color === "#1e90e8" ? "bg-[#1e90e8]/20" : "bg-[#3d50e3]/20"
                }`}>
                  <CheckCircle className={`w-4 h-4 ${
                    feature.color === "#1e90e8" ? "text-[#1e90e8]" : "text-[#3d50e3]"
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="text-center mt-20">
          <p className="text-[16px] text-gray-600 dark:text-gray-400 font-light">
            Trusted by 500+ companies worldwide for AI transformation excellence
          </p>
        </div>
      </div>
    </section>
  )
}