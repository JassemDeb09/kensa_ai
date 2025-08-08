"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from '@/contexts/LanguageContext'

export function FAQSection() {
  const { t } = useLanguage()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const faqs = [
    { question: t('faq.items.0.question'), answer: t('faq.items.0.answer') },
    { question: t('faq.items.1.question'), answer: t('faq.items.1.answer') },
    { question: t('faq.items.2.question'), answer: t('faq.items.2.answer') },
    { question: t('faq.items.3.question'), answer: t('faq.items.3.answer') },
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
      {/* background accents */}
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#3A86FF]/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#9B5DE5]/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-4 py-1.5 mb-4 text-sm font-medium bg-white dark:bg-gray-900 shadow-sm">
            <ChevronDown className="h-4 w-4 text-[#3A86FF] mr-2" />
            <span className="text-[#3A86FF]">{t('faq.title')}</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('faq.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} id={`faq-${index}`} className="group mb-4 border border-gray-200 dark:border-gray-800 shadow-sm bg-white/80 dark:bg-gray-800/70 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <CardContent className="p-0 relative">
                {/* top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${index % 2 === 0 ? 'bg-[#3A86FF]' : 'bg-[#9B5DE5]'}`} />
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B5DE5] rounded-md"
                  aria-expanded={mounted ? openFaq === index : false}
                  aria-controls={`faq-panel-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                  {mounted ? (
                    openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    )
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  )}
                </button>
                {mounted && openFaq === index && (
                  <div id={`faq-panel-${index}`} className="px-6 pb-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
