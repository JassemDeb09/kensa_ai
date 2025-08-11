"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import { Brain, Cpu, Settings, GraduationCap, ArrowUpRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const { t, isRTL } = useLanguage()

  // Helper function to get features array based on translation
  const getFeatures = (key: string, fallback: string[]) => {
    const translated = t(key)
    // If translation exists and is an array, use it, otherwise use fallback
    return Array.isArray(translated) ? translated : fallback
  }

  const services = [
    {
      icon: Brain,
      title: t("services.items.audit.title") || "AI Strategy & Consulting",
      description: t("services.items.audit.description") || "Comprehensive AI readiness assessment and strategic roadmap development tailored to your business objectives.",
      features: getFeatures("additional.services.features.audit", ["AI opportunity analysis", "Technology assessment", "Strategic roadmap", "ROI modeling"]),
      color: "#1e90e8"
    },
    {
      icon: Cpu,
      title: t("services.items.integration.title") || "Custom AI Development",
      description: t("services.items.integration.description") || "Bespoke AI solutions built from the ground up to solve your unique business challenges.",
      features: getFeatures("additional.services.features.integration", ["Machine learning models", "Deep learning systems", "Computer vision", "Natural language processing"]),
      color: "#3d50e3"
    },
    {
      icon: Settings,
      title: t("services.items.automation.title") || "AI Integration & Deployment",
      description: t("services.items.automation.description") || "Seamless integration of AI solutions into your existing infrastructure with minimal disruption.",
      features: getFeatures("additional.services.features.automation", ["System integration", "Cloud deployment", "API development", "Performance optimization"]),
      color: "#1e90e8"
    },
    {
      icon: GraduationCap,
      title: t("services.items.training.title") || "AI Training & Support",
      description: t("services.items.training.description") || "Comprehensive training programs and ongoing support to maximize your AI investment.",
      features: getFeatures("additional.services.features.training", ["Team training", "Change management", "Best practices", "24/7 support"]),
      color: "#3d50e3"
    }
  ]

  return (
    <section id="services" className="relative py-32 bg-white dark:bg-gray-900 overflow-hidden">
      {/* AI Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,144,232,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.01)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(30,144,232,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.02)_1px,transparent_1px)]"></div>
      
      {/* AI Gradient Overlays */}
      <div className="absolute top-40 left-32 w-80 h-80 bg-gradient-to-r from-[#1e90e8]/5 to-[#3d50e3]/5 rounded-full blur-3xl dark:from-[#1e90e8]/10 dark:to-[#3d50e3]/10"></div>
      <div className="absolute bottom-40 right-32 w-96 h-96 bg-gradient-to-r from-[#3d50e3]/5 to-[#1e90e8]/5 rounded-full blur-3xl dark:from-[#3d50e3]/10 dark:to-[#1e90e8]/10"></div>
      
      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#1e90e8]/10 to-[#3d50e3]/10 border border-[#1e90e8]/20 backdrop-blur-sm mb-8">
            <Zap className="w-4 h-4 text-[#1e90e8]" />
            <span className="text-[#1e90e8] font-medium text-[14px]">
              {t("services.badge") || "AI Solutions Portfolio"}
            </span>
          </div>
          <h2 className="text-[40px] lg:text-[48px] font-light tracking-[-0.01em] text-gray-900 dark:text-white mb-6">
            {t('services.title') || 'AI Solutions, Simplified'}
          </h2>
          <p className="text-[18px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-[1.5]">
            {t("services.subtitle") || "We build custom AI solutions that seamlessly integrate into your operations. Delivering real results for startups and enterprises alike."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* AI Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${
                service.color === "#1e90e8" ? "from-[#1e90e8]/20 to-[#3d50e3]/20" : "from-[#3d50e3]/20 to-[#1e90e8]/20"
              } rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-12 h-full transition-all duration-500 hover:border-[#1e90e8]/30 dark:hover:border-[#1e90e8]/30 hover:shadow-[0_24px_64px_rgba(30,144,232,0.08)]">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8 transition-all duration-300 ${
                  service.color === "#1e90e8" 
                    ? "bg-[#1e90e8]/10 group-hover:bg-[#1e90e8]/20 dark:bg-[#1e90e8]/20 dark:group-hover:bg-[#1e90e8]/30" 
                    : "bg-[#3d50e3]/10 group-hover:bg-[#3d50e3]/20 dark:bg-[#3d50e3]/20 dark:group-hover:bg-[#3d50e3]/30"
                }`}>
                  <service.icon className={`w-8 h-8 ${
                    service.color === "#1e90e8" ? "text-[#1e90e8]" : "text-[#3d50e3]"
                  }`} />
                </div>
                
                {/* Content */}
                <h3 className="text-[24px] font-medium text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-[#1e90e8] dark:group-hover:text-[#1e90e8] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[16px] text-gray-600 dark:text-gray-300 leading-[1.5] mb-8">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-[14px] text-gray-600 dark:text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        service.color === "#1e90e8" ? "bg-[#1e90e8]" : "bg-[#3d50e3]"
                      }`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Learn More Link */}
                <div className={`flex items-center gap-2 text-[14px] font-medium group-hover:gap-3 transition-all duration-300 cursor-pointer ${
                  service.color === "#1e90e8" ? "text-[#1e90e8]" : "text-[#3d50e3]"
                }`}>
                  <span>{t("additional.services.cta.explore") || "Explore solution"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                
                {/* Decorative Number */}
                <div className={`absolute top-8 ${isRTL ? 'left-8' : 'right-8'} text-[96px] font-light leading-none select-none opacity-10 ${
                  service.color === "#1e90e8" ? "text-[#1e90e8]" : "text-[#3d50e3]"
                }`}>
                  {(index + 1).toString().padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button className="bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] hover:from-[#1e90e8]/90 hover:to-[#3d50e3]/90 text-white font-medium px-8 py-4 rounded-xl text-[16px] transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-[#1e90e8]/25">
              <span className="flex items-center gap-3">
                <Brain className="w-5 h-5" />
{t("additional.services.cta.primary") || "Start AI Transformation"}
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Button>
            <Button variant="outline" className="border-[#1e90e8]/30 text-[#1e90e8] hover:bg-[#1e90e8]/5 dark:border-[#1e90e8]/50 dark:text-[#1e90e8] font-medium px-8 py-4 rounded-xl text-[16px] transition-all duration-300">
{t("additional.services.cta.secondary") || "View AI Case Studies"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}