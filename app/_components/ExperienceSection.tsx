"use client"

import Image from "next/image"
import { useLanguage } from '@/contexts/LanguageContext'
import { Trophy, Award, Star, Sparkles, Zap, ArrowUpRight, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function ExperienceSection() {
  const { t, isRTL } = useLanguage()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Initialize slide position based on direction
  useEffect(() => {
    if (isRTL) {
      setCurrentSlide(5) // Start from second to last for better centering
    } else {
      setCurrentSlide(1) // Start from second slide for better centering
    }
  }, [isRTL])
  
  const experienceImages = [
    {
      src: "/exp1.jpeg",
      alt: "KENSA AI Team Experience 1",
      title: t('experience.items.0.title') || "Global AI Conference",
      description: t('experience.items.0.description') || "Speaking at international AI summit",
      category: "Speaking",
      year: "2024"
    },
    {
      src: "/exp2.jpeg", 
      alt: "KENSA AI Team Experience 2",
      title: t('experience.items.1.title') || "Industry Recognition",
      description: t('experience.items.1.description') || "Receiving AI innovation award",
      category: "Awards",
      year: "2024"
    },
    {
      src: "/exp3.jpg",
      alt: "KENSA AI Team Experience 3", 
      title: t('experience.items.2.title') || "Client Partnership",
      description: t('experience.items.2.description') || "Strategic AI implementation meeting",
      category: "Partnership",
      year: "2024"
    },
    {
      src: "/exp4.jpeg",
      alt: "KENSA AI Team Experience 4",
      title: t('experience.items.3.title') || "Government Partnership",
      description: t('experience.items.3.description') || "Meeting with The Honourable Edith Dumont, 30th Lieutenant Governor of Ontario",
      category: "Partnership",
      year: "2024"
    },
    {
      src: "/exp5.jpeg",
      alt: "KENSA AI Team Experience 5", 
      title: t('experience.items.4.title') || "Team Excellence",
      description: t('experience.items.4.description') || "Celebrating project milestones",
      category: "Achievement",
      year: "2023"
    },
    {
      src: "/exp6.jpeg",
      alt: "KENSA AI Team Experience 6",
      title: t('experience.items.5.title') || "Global Expansion", 
      description: t('experience.items.5.description') || "Opening new international office",
      category: "Expansion",
      year: "2023"
    },
    {
      src: "/exp7.jpeg",
      alt: "KENSA AI Team Experience 7",
      title: t('experience.items.6.title') || "Innovation Hub",
      description: t('experience.items.6.description') || "Collaborative AI workspace",
      category: "Innovation",
      year: "2024"
    }
  ]

  // Auto-slideshow functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      if (isRTL) {
        setCurrentSlide((prev) => (prev - 1 + experienceImages.length) % experienceImages.length)
      } else {
        setCurrentSlide((prev) => (prev + 1) % experienceImages.length)
      }
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, experienceImages.length, isRTL])

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Luxury carousel navigation
  const nextSlide = () => {
    if (isRTL) {
      setCurrentSlide((prev) => (prev - 1 + experienceImages.length) % experienceImages.length)
    } else {
      setCurrentSlide((prev) => (prev + 1) % experienceImages.length)
    }
  }

  const prevSlide = () => {
    if (isRTL) {
      setCurrentSlide((prev) => (prev + 1) % experienceImages.length)
    } else {
      setCurrentSlide((prev) => (prev - 1 + experienceImages.length) % experienceImages.length)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Enhanced hover effects
  const handleCarouselHover = () => {
    setIsAutoPlaying(false)
  }

  const handleCarouselLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="relative py-40 bg-white dark:bg-black overflow-hidden"
    >
      {/* Luxury Background Effects */}
      <div className="absolute inset-0">
        {/* Premium AI Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,144,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.03)_1px,transparent_1px)] bg-[size:120px_120px]"></div>
        
        {/* Floating Luxury Elements */}
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-gradient-to-r from-[#1e90e8]/5 via-[#3d50e3]/5 to-transparent dark:from-[#1e90e8]/10 dark:via-[#3d50e3]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-[800px] h-[800px] bg-gradient-to-l from-[#3d50e3]/5 via-[#1e90e8]/5 to-transparent dark:from-[#3d50e3]/10 dark:via-[#1e90e8]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }}></div>
        
        {/* Premium Accent Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#1e90e8]/10 dark:via-[#1e90e8]/20 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#3d50e3]/10 dark:via-[#3d50e3]/20 to-transparent"></div>
      </div>
      
      <div className="relative max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Luxury Header */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#1e90e8]/10 to-[#3d50e3]/10 border border-[#1e90e8]/20 backdrop-blur-sm mb-8">
            <Trophy className="w-4 h-4 text-[#1e90e8]" />
            <span className="text-[#1e90e8] font-medium text-[14px]">
              {t('experience.title') || "The Experience"}
            </span>
          </div>
          
          <h2 className="text-[56px] lg:text-[72px] font-extralight tracking-[-0.02em] text-gray-900 dark:text-white mb-8 leading-[0.9]">
            <span className="block">
              {t('experience.headline') || 'Our AI Journey'}
            </span>
            <span className="block bg-gradient-to-r from-[#1e90e8] via-gray-900 dark:via-white to-[#3d50e3] bg-clip-text text-transparent font-light">
              {t('experience.inAction') || 'in Action'}
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#1e90e8]"></div>
            <Zap className="w-6 h-6 text-[#1e90e8]" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#3d50e3]"></div>
          </div>
          
          <p className="text-[22px] text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-[1.6] font-light">
            {t('experience.subtitle') || "Explore the moments that define our expertise - from global conferences to breakthrough innovations, see how our team leads the AI transformation."}
          </p>
        </div>

        {/* Compact Vertical Carousel Container */}
        <div 
          className="relative max-w-[1200px] mx-auto px-8"
          onMouseEnter={handleCarouselHover}
          onMouseLeave={handleCarouselLeave}
        >
          {/* Carousel Track - Multiple Cards Visible */}
          <div className="relative overflow-hidden py-4" style={{ width: '964px', margin: '0 auto' }}>
            <div 
              className="flex gap-8 px-4 transition-transform duration-700 ease-out"
              style={{ 
                transform: isRTL 
                  ? `translateX(${(currentSlide - 1) * 308}px)` 
                  : `translateX(-${(currentSlide - 1) * 308}px)`
              }}
            >
              {experienceImages.map((image, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 group cursor-pointer"
                  style={{ width: '300px' }}
                  onClick={() => goToSlide(index)}
                >
                  {/* Vertical Card Container */}
                  <div className={`relative h-[500px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50/50 to-white/30 dark:from-white/5 dark:to-white/[0.02] backdrop-blur-xl border border-gray-200/30 dark:border-white/10 transition-all duration-500 ${
                    index === currentSlide 
                      ? 'ring-2 ring-[#1e90e8]/50 ring-offset-2 ring-offset-white dark:ring-offset-black transform scale-102' 
                      : 'hover:shadow-xl hover:shadow-[#1e90e8]/20 hover:border-[#1e90e8]/30'
                  }`}>
                    
                    {/* Card Glow Effect */}
                    <div className={`absolute -inset-2 bg-gradient-to-r ${
                      index % 2 === 0 
                        ? "from-[#1e90e8]/20 via-[#3d50e3]/10 to-[#1e90e8]/20" 
                        : "from-[#3d50e3]/20 via-[#1e90e8]/10 to-[#3d50e3]/20"
                    } rounded-2xl blur-xl transition-all duration-500 ${
                      index === currentSlide ? 'opacity-60' : 'opacity-0 group-hover:opacity-40'
                    }`}></div>
                    
                    {/* Image Container - Top 60% */}
                    <div className="relative h-3/5 overflow-hidden rounded-t-2xl">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="320px"
                        className="object-cover object-top transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${
                        index % 2 === 0 ? "from-[#1e90e8]/20 to-[#3d50e3]/20" : "from-[#3d50e3]/20 to-[#1e90e8]/20"
                      } opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                                                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
                            <Award className="w-3 h-3 text-white" />
                            <span className="text-white/90 text-xs font-medium">
                              {t(`experience.categories.${image.category.toLowerCase()}`) || image.category}
                            </span>
                            <span className="text-white/60 text-xs">•</span>
                            <span className="text-white/60 text-xs">{image.year}</span>
                          </div>
                      </div>
                      
                      {/* Current Slide Indicator */}
                      {index === currentSlide && (
                        <div className="absolute top-4 right-4">
                          <div className="w-3 h-3 rounded-full bg-[#1e90e8] animate-pulse"></div>
                        </div>
                      )}
                    </div>
                    
                    {/* Content Container - Bottom 40% */}
                    <div className="relative h-2/5 p-6 flex flex-col justify-between">
                      
                      {/* Title */}
                      <h3 className="text-gray-900 dark:text-white text-lg font-light mb-2 leading-tight line-clamp-2">
                        {image.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                        {image.description}
                      </p>
                      
                      {/* CTA */}
                      <div className="flex items-center gap-2 text-[#1e90e8] text-sm font-medium group-hover:text-[#3d50e3] transition-colors">
                        <span>{t('experience.viewDetails') || 'View Details'}</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
            
            {/* Compact Navigation Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black/90 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 flex items-center justify-center transition-all duration-300 group z-10 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-white transition-transform group-hover:-translate-x-0.5" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black/90 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 flex items-center justify-center transition-all duration-300 group z-10 shadow-lg"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-white transition-transform group-hover:translate-x-0.5" />
            </button>
            
          </div>
          
          {/* Compact Carousel Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            
            {/* Play/Pause Control */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-[#1e90e8]/10 text-[#1e90e8] border border-[#1e90e8]/20 hover:bg-[#1e90e8]/20' 
                  : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10'
              }`}
            >
              {isAutoPlaying ? (
                <Pause className="w-3 h-3 transition-transform group-hover:scale-110" />
              ) : (
                <Play className="w-3 h-3 transition-transform group-hover:scale-110" />
              )}
              <span className="text-xs font-medium">
                {isAutoPlaying ? (t('experience.pause') || 'Pause') : (t('experience.play') || 'Play')}
              </span>
            </button>
            
            {/* Compact Slide Indicators */}
            <div className="flex items-center gap-2">
              {experienceImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-8 h-2' 
                      : 'w-2 h-2 hover:w-4'
                  }`}
                >
                  <div className={`w-full h-full rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-[#1e90e8] to-[#3d50e3]' 
                      : 'bg-gray-300 dark:bg-white/20 hover:bg-[#1e90e8]/50'
                  }`}></div>
                  {index === currentSlide && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] animate-pulse opacity-50"></div>
                  )}
                </button>
              ))}
            </div>
            
          </div>
          
          {/* Explore More Button */}
          <div className="flex justify-center mt-16">
            <a
              href="/expertise"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] hover:from-[#1e90e8]/90 hover:to-[#3d50e3]/90 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1e90e8]/25"
            >
              <span>{t('experience.exploreMore') || 'Explore More'}</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
          
        </div>
        
        {/* Premium Bottom Section */}
        <div className="mt-32 pt-16 border-t border-gray-200/50 dark:border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Luxury Stats */}
            <div className="flex items-center gap-16">
              <div className="text-center group">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#1e90e8] fill-current transition-all duration-300 group-hover:scale-110" />
                  ))}
                </div>
                <div className="text-gray-900 dark:text-white text-[16px] font-light">
                  {t('experience.stats.rating') || 'Industry Recognition'}
                </div>
              </div>
              
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300/50 dark:via-white/20 to-transparent"></div>
              
              <div className="text-center group cursor-pointer">
                <div className="text-[32px] font-extralight text-[#1e90e8] mb-2 transition-all duration-300 group-hover:scale-110">25+</div>
                <div className="text-gray-600 dark:text-gray-300 text-[14px] font-light tracking-wide">
                  {t('experience.stats.countries') || 'Global Presence'}
                </div>
              </div>
              
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300/50 dark:via-white/20 to-transparent"></div>
              
              <div className="text-center group cursor-pointer">
                <div className="text-[32px] font-extralight text-[#3d50e3] mb-2 transition-all duration-300 group-hover:scale-110">500+</div>
                <div className="text-gray-600 dark:text-gray-300 text-[14px] font-light tracking-wide">
                  {t('experience.stats.events') || 'Events & Conferences'}
                </div>
              </div>
            </div>
            
            {/* Premium Accent */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-[#1e90e8] to-[#3d50e3]"></div>
              <Sparkles className="w-6 h-6 text-gray-900 dark:text-white animate-pulse" />
              <div className="text-gray-600 dark:text-white/60 text-[14px] font-light">{t('experience.excellenceInMotion') || 'Excellence in Motion'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
