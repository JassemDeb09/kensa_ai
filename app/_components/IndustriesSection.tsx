"use client"

import Image from "next/image"
import { useLanguage } from '@/contexts/LanguageContext'
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Building2, Zap } from "lucide-react"

export function IndustriesSection() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const industries = [
    { 
      key: 'manufacturing', 
      title: t('industries.items.manufacturing.title') || 'Manufacturing', 
      desc: t('industries.items.manufacturing.description') || 'AI-powered production optimization', 
      img: '/industries.jpg',
      stats: '40% efficiency gain',
      color: '#1e90e8'
    },
    { 
      key: 'smartCities', 
      title: t('industries.items.smartCities.title') || 'Smart Cities', 
      desc: t('industries.items.smartCities.description') || 'Intelligent urban infrastructure', 
      img: '/smart_city.jpg',
      stats: '60% cost reduction',
      color: '#3d50e3'
    },
    { 
      key: 'retail', 
      title: t('industries.items.retail.title') || 'E-Commerce', 
      desc: t('industries.items.retail.description') || 'Personalized shopping experiences', 
      img: '/ecommerce.jpg',
      stats: '25% revenue boost',
      color: '#1e90e8'
    },
    { 
      key: 'finance', 
      title: t('industries.items.finance.title') || 'Financial Services', 
      desc: t('industries.items.finance.description') || 'Fraud detection and risk management', 
      img: '/finance.jpg',
      stats: '90% fraud prevention',
      color: '#3d50e3'
    },
    { 
      key: 'digital', 
      title: t('industries.items.digital.title') || 'Digital Transformation', 
      desc: t('industries.items.digital.description') || 'End-to-end business digitization', 
      img: '/digital_transformation.jpg',
      stats: '300% ROI achieved',
      color: '#1e90e8'
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % industries.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, industries.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % industries.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + industries.length) % industries.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="industries" className="relative py-32 overflow-hidden">
      {/* AI Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,144,232,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.01)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(30,144,232,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.02)_1px,transparent_1px)]"></div>
      
      {/* AI Gradient Overlays */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-[#1e90e8]/5 to-[#3d50e3]/5 rounded-full blur-3xl dark:from-[#1e90e8]/10 dark:to-[#3d50e3]/10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-[#3d50e3]/5 to-[#1e90e8]/5 rounded-full blur-3xl dark:from-[#3d50e3]/10 dark:to-[#1e90e8]/10"></div>
      
      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#1e90e8]/10 to-[#3d50e3]/10 border border-[#1e90e8]/20 backdrop-blur-sm mb-8">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#1e90e8]" />
              <div className="w-1 h-1 bg-[#1e90e8] rounded-full animate-pulse"></div>
              <Zap className="w-3 h-3 text-[#3d50e3]" />
            </div>
            <span className="text-[#1e90e8] font-medium text-[14px]">
              {t('industries.title') || "AI Industry Solutions"}
            </span>
          </div>
          <h2 className="text-[40px] lg:text-[48px] font-light tracking-[-0.01em] text-gray-900 dark:text-white mb-6">
            AI solutions for <span className="bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] bg-clip-text text-transparent font-medium">every industry</span>
          </h2>
          <p className="text-[18px] text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-[1.5]">
            From manufacturing to finance, we deliver tailored AI implementations that drive measurable results across diverse business sectors.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-16">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {industries.map((industry, index) => (
              <div key={industry.key} className="w-full flex-shrink-0">
                <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className={`space-y-8 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="space-y-6">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                          industry.color === '#1e90e8' 
                            ? 'bg-[#1e90e8]/10 text-[#1e90e8]' 
                            : 'bg-[#3d50e3]/10 text-[#3d50e3]'
                        }`}>
                          <Building2 className="w-4 h-4" />
                          <span className="text-[12px] font-medium uppercase tracking-wide">
                            {industry.key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                        </div>
                        
                        <h3 className="text-[32px] lg:text-[40px] font-light tracking-[-0.01em] text-gray-900 dark:text-white leading-tight">
                          {industry.title}
                        </h3>
                        
                        <p className="text-[18px] text-gray-600 dark:text-gray-300 leading-[1.6]">
                          {industry.desc}
                        </p>
                        
                        <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl ${
                          industry.color === '#1e90e8' 
                            ? 'bg-[#1e90e8]/5 border border-[#1e90e8]/20' 
                            : 'bg-[#3d50e3]/5 border border-[#3d50e3]/20'
                        }`}>
                          <Zap className={`w-4 h-4 ${
                            industry.color === '#1e90e8' ? 'text-[#1e90e8]' : 'text-[#3d50e3]'
                          }`} />
                          <span className="text-gray-900 dark:text-white font-medium text-[14px]">
                            {industry.stats}
                          </span>
                        </div>
          </div>
        </div>

                    {/* Image */}
                    <div className={`relative ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative group">
                        {/* AI Glow Effect */}
                        <div className={`absolute -inset-6 rounded-3xl blur-2xl opacity-40 ${
                          industry.color === '#1e90e8' 
                            ? 'bg-gradient-to-r from-[#1e90e8]/20 to-[#3d50e3]/20' 
                            : 'bg-gradient-to-r from-[#3d50e3]/20 to-[#1e90e8]/20'
                        }`}></div>
                        
                        <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                          <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                            <Image 
                              src={industry.img} 
                              alt={industry.title} 
                              fill 
                              sizes="(min-width: 1024px) 50vw, 100vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
                  </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-[#1e90e8] dark:hover:text-[#1e90e8] transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-[#1e90e8] dark:hover:text-[#1e90e8] transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
                </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 h-2 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full'
                  : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-[#1e90e8] dark:hover:bg-[#1e90e8]'
              }`}
            />
          ))}
        </div>


      </div>
    </section>
  )
}
