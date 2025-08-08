"use client"

import { Target, Brain, Settings, TrendingUp } from "lucide-react"
import { useLanguage } from '@/contexts/LanguageContext'

export function ProcessSection() {
  const { t } = useLanguage()

  // Map translation-based steps to icon set
  const steps = [
    { number: t('process.steps.0.number') || '01', title: t('process.steps.0.title'), description: t('process.steps.0.description'), icon: Target },
    { number: t('process.steps.1.number') || '02', title: t('process.steps.1.title'), description: t('process.steps.1.description'), icon: Brain },
    { number: t('process.steps.2.number') || '03', title: t('process.steps.2.title'), description: t('process.steps.2.description'), icon: Settings },
    { number: t('process.steps.3.number') || '04', title: t('process.steps.3.title'), description: t('process.steps.3.description'), icon: TrendingUp },
  ]

  return (
    <section id="process" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-4 py-1.5 mb-4 text-sm font-medium bg-white dark:bg-gray-900 shadow-sm">
            <Target className="h-4 w-4 text-[#3A86FF] mr-2" />
            <span className="text-[#3A86FF]">{t('process.title') || 'How It Works'}</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('process.title') || 'How It Works'}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('process.subtitle') || 'From consultation to transformation in 4 simple steps'}
          </p>
        </div>

        {/* Horizontal stepper on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[56px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#3A86FF]/30 via-[#9B5DE5]/30 to-[#3A86FF]/30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="relative flex md:block items-start md:text-center">
                {/* Mobile connector */}
                {index !== 0 && (
                  <div className="md:hidden absolute -top-5 left-8 w-[2px] h-5 bg-gradient-to-b from-[#3A86FF]/30 to-[#9B5DE5]/30" />
                )}

                <div className="relative mb-4 md:mb-6 shrink-0 md:mx-auto">
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-[#3A86FF] to-[#9B5DE5] rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-md border border-gray-200 dark:border-gray-800">
                    <span className="text-xs md:text-sm font-bold text-[#3A86FF]">{step.number}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
