"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { useLanguage } from '@/contexts/LanguageContext'

export function FAQSection() {
  const { t } = useLanguage()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const faqs = [
    { 
      question: t('faq.items.0.question') || "How long does AI implementation take?", 
      answer: t('faq.items.0.answer') || "Typical AI implementation projects range from 3-12 months depending on complexity. We start with a proof of concept in 4-6 weeks to demonstrate value quickly."
    },
    { 
      question: t('faq.items.1.question') || "What's the ROI of AI transformation?", 
      answer: t('faq.items.1.answer') || "Our clients see an average ROI of 300% within 12 months. Common benefits include 40% cost reduction, 60% efficiency gains, and 25% revenue increase."
    },
    { 
      question: t('faq.items.2.question') || "Do you provide ongoing AI support?", 
      answer: t('faq.items.2.answer') || "Yes, we offer 24/7 monitoring, maintenance, and optimization services. Our support includes model retraining, performance tuning, and system updates."
    },
    { 
      question: t('faq.items.3.question') || "Is our data secure with AI solutions?", 
      answer: t('faq.items.3.answer') || "Absolutely. We follow enterprise-grade security protocols including GDPR compliance, data encryption, and secure cloud infrastructure with SOC2 certification."
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-32 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      {/* AI Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,144,232,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.01)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(30,144,232,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.02)_1px,transparent_1px)]"></div>
      
      {/* AI Gradient Overlays */}
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-gradient-to-r from-[#1e90e8]/5 to-[#3d50e3]/5 blur-3xl dark:from-[#1e90e8]/10 dark:to-[#3d50e3]/10" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-r from-[#3d50e3]/5 to-[#1e90e8]/5 blur-3xl dark:from-[#3d50e3]/10 dark:to-[#1e90e8]/10" />
      
      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#1e90e8]/10 to-[#3d50e3]/10 border border-[#1e90e8]/20 backdrop-blur-sm mb-8">
            <HelpCircle className="w-4 h-4 text-[#1e90e8]" />
            <span className="text-[#1e90e8] font-medium text-[14px]">
              {t('faq.title') || "Frequently Asked Questions"}
            </span>
          </div>
          <h2 className="text-[40px] lg:text-[48px] font-light tracking-[-0.01em] text-gray-900 dark:text-white mb-6">
            AI questions <span className="bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] bg-clip-text text-transparent font-medium">answered</span>
          </h2>
          <p className="text-[18px] text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-[1.5]">
            {t('faq.subtitle') || "Common questions about AI transformation, implementation, and our services. Can't find what you're looking for? Contact our AI experts."}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} id={`faq-${index}`} className="group border border-gray-200/50 dark:border-gray-700/50 shadow-sm bg-white dark:bg-gray-900 hover:shadow-lg hover:border-[#1e90e8]/30 dark:hover:border-[#1e90e8]/30 transition-all duration-300">
              <CardContent className="p-0 relative">
                {/* AI Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                  index % 2 === 0 ? 'bg-gradient-to-r from-[#1e90e8] to-[#3d50e3]' : 'bg-gradient-to-r from-[#3d50e3] to-[#1e90e8]'
                }`} />
                
                {/* Question Button */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e90e8] rounded-lg"
                  aria-expanded={mounted ? openFaq === index : false}
                  aria-controls={`faq-panel-${index}`}
                >
                  <h3 className="text-[18px] lg:text-[20px] font-medium text-gray-900 dark:text-white pr-8 leading-[1.4]">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    mounted && openFaq === index 
                      ? 'bg-[#1e90e8] text-white rotate-180' 
                      : 'bg-gray-100 dark:bg-gray-800 text-[#1e90e8] group-hover:bg-[#1e90e8]/10'
                  }`}>
                    <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                  </div>
                </button>
                
                {/* Answer Panel */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  mounted && openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div id={`faq-panel-${index}`} className="px-8 pb-8">
                    <div className="w-12 h-px bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] mb-4"></div>
                    <p className="text-[16px] text-gray-600 dark:text-gray-400 leading-[1.6]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200/50 dark:border-gray-700/50">
          <p className="text-[16px] text-gray-600 dark:text-gray-400 mb-4">
            Still have questions about AI implementation?
          </p>
          <button className="text-[#1e90e8] hover:text-[#3d50e3] font-medium transition-colors duration-300">
            Contact our AI specialists →
          </button>
        </div>
      </div>
    </section>
  )
}
