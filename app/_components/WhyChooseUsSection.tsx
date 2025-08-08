"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Zap, Shield, Globe } from "lucide-react"
import { useLanguage } from '@/contexts/LanguageContext'

export function WhyChooseUsSection() {
  const { t } = useLanguage()
  const features = [
    {
      icon: Target,
      title: t('whyChoose.features.roi'),
      description: ""
    },
    {
      icon: Zap,
      title: t('whyChoose.features.support'),
      description: ""
    },
    {
      icon: Shield,
      title: t('whyChoose.features.experts'),
      description: ""
    },
    {
      icon: Globe,
      title: t('whyChoose.features.security'),
      description: ""
    },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#f1f4f9] via-[#f6f8fb] to-[#f1f4f9] dark:from-[#121212]/95 dark:via-[#121212]/92 dark:to-[#121212]/95 overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#3A86FF]/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#9B5DE5]/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-4 py-1.5 mb-6 text-sm font-medium bg-white dark:bg-gray-900 shadow-sm">
            <Target className="h-4 w-4 text-[#3A86FF] mr-2" />
            <span className="text-[#3A86FF]">{t('whyChoose.title')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('whyChoose.subtitle')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="group relative flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${index % 2 === 0 ? 'bg-[#3A86FF]' : 'bg-[#9B5DE5]'}`} />
                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/70 to-transparent dark:from-[#3A86FF]/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#3A86FF] to-[#9B5DE5] opacity-20" />
                  <div className={`relative w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-md transition-transform duration-300 group-hover:scale-110 ${index % 2 === 0 ? 'bg-[#3A86FF]' : 'bg-[#9B5DE5]'}`}>
                    ✓
                  </div>
                </div>
                <span className="text-base md:text-lg text-gray-800 dark:text-gray-300">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
