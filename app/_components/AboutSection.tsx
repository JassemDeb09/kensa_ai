"use client"

import { Button } from "@/components/ui/button"
import { Target, Users, Rocket, Clock } from "lucide-react"
import { useLanguage } from '@/contexts/LanguageContext'

export function AboutSection() {
  const { t } = useLanguage()
  const values = [
    { icon: Target, title: "Excellence", desc: "Nous visons l'excellence dans chaque projet" },
    { icon: Users, title: "Collaboration", desc: "Partenariat étroit avec nos clients" },
    { icon: Rocket, title: "Innovation", desc: "À la pointe des dernières technologies IA" },
  ]

  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-[#f1f4f9] via-[#f6f8fb] to-[#f1f4f9] dark:from-[#121212]/95 dark:via-[#121212]/92 dark:to-[#121212]/95 overflow-hidden">
      <div className="absolute -top-24 right-1/4 w-72 h-72 rounded-full bg-[#3A86FF]/10 blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 w-72 h-72 rounded-full bg-[#9B5DE5]/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-4 py-1.5 mb-4 text-sm font-medium bg-white dark:bg-gray-900 shadow-sm">
              <Users className="h-4 w-4 text-[#3A86FF] mr-2" />
              <span className="text-[#3A86FF]">{t('about.title')}</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              {t('about.title')}
            </h2>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Notre ADN</h3>
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8 font-semibold">
              {t('about.subtitle')}
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {t('about.description')}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60">
                <Clock className="w-8 h-8 mx-auto mb-2 text-[#3A86FF]" />
                <p className="font-semibold text-gray-900 dark:text-white">5+ ans</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">d'expertise IA</p>
              </div>
              <div className="text-center p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60">
                <Users className="w-8 h-8 mx-auto mb-2 text-[#9B5DE5]" />
                <p className="font-semibold text-gray-900 dark:text-white">50+ experts</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">certifiés</p>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold">
              {t('about.cta')}
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">{t('about.commitment')}</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <value.icon className="w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">{value.title}</h4>
                      <p className="text-sm opacity-90">{value.desc}</p>
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
