"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useLanguage } from '@/contexts/LanguageContext'

export function TestimonialsSection() {
  const { t } = useLanguage()
  
  const testimonials = [
    {
      name: t('testimonials.items.0.author'),
      role: t('testimonials.items.0.title'),
      company: t('testimonials.items.0.company'),
      content: t('testimonials.items.0.quote'),
      rating: 5,
      image: "/success1.jpg"
    },
    {
      name: t('testimonials.items.1.author'),
      role: t('testimonials.items.1.title'),
      company: t('testimonials.items.1.company'),
      content: t('testimonials.items.1.quote'),
      rating: 5,
      image: "/success2.jpg"
    },
    {
      name: t('testimonials.items.2.author'),
      role: t('testimonials.items.2.title'),
      company: t('testimonials.items.2.company'),
      content: t('testimonials.items.2.quote'),
      rating: 5,
      image: "/success3.jpg"
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-4 py-1.5 mb-4 text-sm font-medium bg-white dark:bg-gray-900 shadow-sm">
            <Quote className="h-4 w-4 text-[#3A86FF] mr-2" />
            <span className="text-[#3A86FF]">{t('testimonials.title')}</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('testimonials.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group h-full transition-all duration-300 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/70 hover:shadow-xl hover:-translate-y-0.5">
              <CardContent className="p-8 relative flex flex-col h-full">
                {/* top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${index % 2 === 0 ? 'bg-[#3A86FF]' : 'bg-[#9B5DE5]'}`} />
                <div className="mb-4">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4 opacity-80" />
                  <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
                </div>
                <div className="mt-auto flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#3A86FF] to-[#9B5DE5] p-[2px]"></div>
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white dark:bg-gray-900">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
