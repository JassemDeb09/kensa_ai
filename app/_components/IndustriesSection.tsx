"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useLanguage } from '@/contexts/LanguageContext'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"

export function IndustriesSection() {
  const { t } = useLanguage()

  const slides = [
    { key: 'manufacturing', title: t('industries.items.manufacturing.title'), desc: t('industries.items.manufacturing.description'), img: '/industries.png' },
    { key: 'smartCities', title: t('industries.items.smartCities.title'), desc: t('industries.items.smartCities.description'), img: '/smart_city.png' },
    { key: 'retail', title: t('industries.items.retail.title'), desc: t('industries.items.retail.description'), img: '/ecommerce.png' },
    { key: 'finance', title: t('industries.items.finance.title'), desc: t('industries.items.finance.description'), img: '/finance.png' },
    { key: 'digital', title: t('industries.items.digital.title'), desc: t('industries.items.digital.description'), img: '/digital_transformation.png' },
  ]

  const [api, setApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    if (!api) return
    const id = setInterval(() => api.scrollNext(), 4500)
    return () => clearInterval(id)
  }, [api])

  return (
    <section id="industries" className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(58,134,255,0.08),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(58,134,255,0.06),transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-4 py-1.5 mb-6 text-sm font-medium bg-white dark:bg-gray-900 shadow-sm">
            <span className="inline-flex h-4 w-4 mr-2 items-center justify-center rounded-full bg-[#3A86FF]"><span className="sr-only">badge</span></span>
            <span className="text-[#3A86FF]">{t('industries.title')}</span>
          </div>
        </div>

        <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="relative">
          <CarouselContent>
            {slides.map((s, idx) => (
              <CarouselItem key={s.key} className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative h-[260px] md:h-[300px] overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
                  <Image src={s.img} alt={s.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-semibold text-lg md:text-xl">{s.title}</h3>
                    <p className="text-white/80 text-sm md:text-[15px] mt-1">{s.desc}</p>
                  </div>
                  {/* top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${idx % 2 === 0 ? 'bg-[#3A86FF]' : 'bg-[#9B5DE5]'}`} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/80 dark:bg-gray-900/60 border-0 shadow-md hover:shadow-lg" />
          <CarouselNext className="bg-white/80 dark:bg-gray-900/60 border-0 shadow-md hover:shadow-lg" />
        </Carousel>
      </div>
    </section>
  )
}
