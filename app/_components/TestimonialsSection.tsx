"use client"

import { Users } from "lucide-react"
import { useLanguage } from '@/contexts/LanguageContext'
import { TestimonialCarousel, TestimonialItem } from '@/components/testimonial-carousel'

export function TestimonialsSection() {
  const { t } = useLanguage()
  
  const testimonials: TestimonialItem[] = [
    {
      id: "testimonial-1",
      name: t('testimonials.items.0.author') || "Sarah Chen",
      role: t('testimonials.items.0.title') || "Chief Technology Officer",
      company: t('testimonials.items.0.company') || "Global Manufacturing Corp",
      quote: t('testimonials.items.0.quote') || "KENSA AI transformed our operations completely. Their AI solutions delivered 40% cost savings and 60% efficiency gains within 6 months. The ROI exceeded all expectations.",
      image: "/success1.jpg",
      avatar: "/success1.jpg",
      hasVideo: true,
      rating: 5
    },
    {
      id: "testimonial-2", 
      name: t('testimonials.items.1.author') || "Michael Rodriguez",
      role: t('testimonials.items.1.title') || "Head of Digital Innovation",
      company: t('testimonials.items.1.company') || "Financial Services Leader",
      quote: t('testimonials.items.1.quote') || "The AI implementation was seamless and the results were immediate. Our customer satisfaction increased by 35% while reducing operational costs significantly.",
      image: "/success2.jpg",
      avatar: "/success2.jpg",
      hasVideo: true,
      rating: 5
    },
    {
      id: "testimonial-3",
      name: t('testimonials.items.2.author') || "Dr. Amanda Foster",
      role: t('testimonials.items.2.title') || "VP of Operations",
      company: t('testimonials.items.2.company') || "Healthcare Enterprise",
      quote: t('testimonials.items.2.quote') || "KENSA AI's expertise in healthcare AI is unmatched. They delivered a solution that improved patient outcomes by 25% while ensuring full HIPAA compliance.",
      image: "/success3.jpg",
      avatar: "/success3.jpg",
      hasVideo: true,
      rating: 5
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
{t('additional.testimonials.trustedTitle') || 'Trusted by industry leaders'}
          </h2>
          <p className="text-[18px] text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-[1.5]">
            {t('testimonials.subtitle') || "Explore the tangible impact we've delivered to our partners and see what success looks like."}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="mt-16">
          <TestimonialCarousel
            items={testimonials}
            autoPlay={true}
            autoPlayInterval={8000}
            showNavigation={true}
            showIndicators={true}
            onVideoPlay={(item) => {
              // Handle video play - could open modal or video player
              console.log('Video play clicked for:', item.name)
            }}
            className="testimonials-carousel"
          />
        </div>
      </div>
    </section>
  )
}
