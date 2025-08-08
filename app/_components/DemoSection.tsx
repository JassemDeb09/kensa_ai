"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useState } from "react"
import { useLanguage } from '@/contexts/LanguageContext'

export function DemoSection() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()
  return (
    <section id="demo" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-4 py-1.5 mb-4 text-sm font-medium bg-white dark:bg-gray-900 shadow-sm">
          <Play className="h-4 w-4 text-[#3A86FF] mr-2" />
          <span className="text-[#3A86FF]">{t('demo.title')}</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('demo.title')}</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">{t('demo.subtitle')}</p>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
              <div className="relative cursor-pointer group" onClick={() => setOpen(true)} role="button" aria-label="Open demo video">
                <Image
                  src="/demo.png"
                  alt="Demo Preview"
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                  <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-purple-600 ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('demo.videoTitle')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">{t('demo.videoDescription')}</p>
                <Button onClick={() => setOpen(true)} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold">
                  {t('demo.cta')}
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modal video */}
        {open && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4" onClick={() => setOpen(false)}>
            <div className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                title="KENSA AI Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close demo"
                className="absolute -top-3 -right-3 bg-white text-gray-900 rounded-full w-10 h-10 shadow-lg hover:scale-105 transition"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
