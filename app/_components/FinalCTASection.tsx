"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from '@/contexts/LanguageContext'

interface FinalCTASectionProps {
  onSectionClick: (sectionId: string) => void
}

export function FinalCTASection({ onSectionClick }: FinalCTASectionProps) {
  const { t } = useLanguage()
  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('finalCta.title')}</h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">{t('finalCta.subtitle')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => onSectionClick("contact")}
            className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {t('finalCta.primary')}
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-purple-600 px-10 py-4 rounded-full font-semibold text-xl transition-all duration-300 bg-transparent"
          >
            {t('finalCta.secondary')}
          </Button>
        </div>
      </div>
    </section>
  )
}
