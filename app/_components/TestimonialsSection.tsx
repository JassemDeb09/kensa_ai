"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Users } from "lucide-react"
import { useLanguage } from '@/contexts/LanguageContext'

export function TestimonialsSection() {
  const { t } = useLanguage()
  
  const testimonials = [
    {
      name: t('testimonials.items.0.author') || "Sarah Chen",
      role: t('testimonials.items.0.title') || "Chief Technology Officer",
      company: t('testimonials.items.0.company') || "Global Manufacturing Corp",
      content: t('testimonials.items.0.quote') || "KENSA AI transformed our operations completely. Their AI solutions delivered 40% cost savings and 60% efficiency gains within 6 months. The ROI exceeded all expectations.",
      rating: 5,
      image: "/success1.jpg",
      color: "#1e90e8"
    },
    {
      name: t('testimonials.items.1.author') || "Michael Rodriguez",
      role: t('testimonials.items.1.title') || "Head of Digital Innovation",
      company: t('testimonials.items.1.company') || "Financial Services Leader",
      content: t('testimonials.items.1.quote') || "The AI implementation was seamless and the results were immediate. Our customer satisfaction increased by 35% while reducing operational costs significantly.",
      rating: 5,
      image: "/success2.jpg",
      color: "#3d50e3"
    },
    {
      name: t('testimonials.items.2.author') || "Dr. Amanda Foster",
      role: t('testimonials.items.2.title') || "VP of Operations",
      company: t('testimonials.items.2.company') || "Healthcare Enterprise",
      content: t('testimonials.items.2.quote') || "KENSA AI's expertise in healthcare AI is unmatched. They delivered a solution that improved patient outcomes by 25% while ensuring full HIPAA compliance.",
      rating: 5,
      image: "/success3.jpg",
      color: "#1e90e8"
    },
  ]

  return (
    <section id="testimonials" className="relative py-32 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      {/* AI Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,144,232,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.01)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(30,144,232,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.02)_1px,transparent_1px)]"></div>
      
      {/* AI Gradient Overlays */}
      <div className="absolute top-32 left-20 w-80 h-80 bg-gradient-to-r from-[#1e90e8]/5 to-[#3d50e3]/5 rounded-full blur-3xl dark:from-[#1e90e8]/10 dark:to-[#3d50e3]/10"></div>
      <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-[#3d50e3]/5 to-[#1e90e8]/5 rounded-full blur-3xl dark:from-[#3d50e3]/10 dark:to-[#1e90e8]/10"></div>
      
      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#1e90e8]/10 to-[#3d50e3]/10 border border-[#1e90e8]/20 backdrop-blur-sm mb-8">
            <Users className="w-4 h-4 text-[#1e90e8]" />
            <span className="text-[#1e90e8] font-medium text-[14px]">
              {t('testimonials.title') || "Client Success Stories"}
            </span>
          </div>
          <h2 className="text-[40px] lg:text-[48px] font-light tracking-[-0.01em] text-gray-900 dark:text-white mb-6">
            Trusted by <span className="bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] bg-clip-text text-transparent font-medium">industry leaders</span>
          </h2>
          <p className="text-[18px] text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-[1.5]">
            {t('testimonials.subtitle') || "See how we've helped Fortune 500 companies transform their operations with AI solutions that deliver measurable results."}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group h-full transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 bg-white dark:bg-gray-900 hover:shadow-2xl hover:-translate-y-2 hover:border-[#1e90e8]/30 dark:hover:border-[#1e90e8]/30">
              <CardContent className="p-0 relative flex flex-col h-full">
                {/* AI Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                  testimonial.color === "#1e90e8" 
                    ? 'bg-gradient-to-r from-[#1e90e8] to-[#3d50e3]' 
                    : 'bg-gradient-to-r from-[#3d50e3] to-[#1e90e8]'
                }`} />
                
                <div className="p-8 flex flex-col h-full">
                  {/* Rating & Quote */}
                  <div className="mb-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 fill-current ${
                          testimonial.color === "#1e90e8" ? "text-[#1e90e8]" : "text-[#3d50e3]"
                        }`} />
                      ))}
                    </div>
                    
                    {/* Quote Icon */}
                    <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${
                      testimonial.color === "#1e90e8" 
                        ? "bg-[#1e90e8]/10" 
                        : "bg-[#3d50e3]/10"
                    }`}>
                      <Quote className={`w-6 h-6 ${
                        testimonial.color === "#1e90e8" ? "text-[#1e90e8]" : "text-[#3d50e3]"
                      }`} />
                    </div>
                    
                    <p className="text-[16px] text-gray-700 dark:text-gray-300 leading-[1.6] italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  {/* Author Info */}
                  <div className="mt-auto flex items-center gap-4">
                    <div className="relative">
                      {/* AI Gradient Border */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${
                        testimonial.color === "#1e90e8" 
                          ? "from-[#1e90e8] to-[#3d50e3]" 
                          : "from-[#3d50e3] to-[#1e90e8]"
                      } p-[2px]`}></div>
                      
                      <div className="relative w-14 h-14 rounded-full overflow-hidden bg-white dark:bg-gray-900">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white text-[16px] mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.4]">
                        {testimonial.role}
                      </p>
                      <p className={`text-[12px] font-medium mt-1 ${
                        testimonial.color === "#1e90e8" ? "text-[#1e90e8]" : "text-[#3d50e3]"
                      }`}>
                        {testimonial.company}
                      </p>
                    </div>
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
