"use client"

import Image from "next/image"
import { useLanguage } from '@/contexts/LanguageContext'
import { Trophy, Award, Star, Sparkles, Zap, ArrowUpRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function ExperienceSection() {
  const { t, isRTL } = useLanguage()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Initialize slide position
  useEffect(() => {
    setCurrentSlide(0) // Start from first slide
  }, [])
  
  const experienceImages = [
    {
      src: "/exp1.jpeg",
      alt: "KENSA AI Team Experience 1",
      title: t('experience.items.0.title') || "Global AI Conference",
      description: t('experience.items.0.description') || "Speaking at international AI summit showcasing cutting-edge AI solutions and innovations to global technology leaders",
      category: "Speaking",
      year: "2024",
      location: "Toronto, ON"
    },
    {
      src: "/exp2.jpeg", 
      alt: "KENSA AI Team Experience 2",
      title: t('experience.items.1.title') || "Industry Recognition",
      description: t('experience.items.1.description') || "Receiving AI innovation award for outstanding contributions to artificial intelligence and digital transformation",
      category: "Awards",
      year: "2024",
      location: "Ottawa, ON"
    },
    {
      src: "/exp3.jpg",
      alt: "KENSA AI Team Experience 3", 
      title: t('experience.items.2.title') || "Client Partnership",
      description: t('experience.items.2.description') || "Strategic AI implementation meeting with enterprise clients to deliver transformative business solutions",
      category: "Partnership",
      year: "2024",
      location: "Mississauga, ON"
    },
    {
      src: "/exp4.jpeg",
      alt: "KENSA AI Team Experience 4",
      title: t('experience.items.3.title') || "Government Partnership",
      description: t('experience.items.3.description') || "Meeting with The Honourable Edith Dumont, 30th Lieutenant Governor of Ontario - the first francophone to hold this position, following a distinguished career in education",
      category: "Partnership",
      year: "2024",
      location: "TORONTO, ON"
    },
    {
      src: "/exp5.jpeg",
      alt: "KENSA AI Team Experience 5", 
      title: t('experience.items.4.title') || "Team Excellence",
      description: t('experience.items.4.description') || "Celebrating project milestones and achievements with our dedicated team of AI specialists and engineers",
      category: "Achievement",
      year: "2023",
      location: "Waterloo, ON"
    },
    {
      src: "/exp6.jpeg",
      alt: "KENSA AI Team Experience 6",
      title: t('experience.items.5.title') || "Global Expansion", 
      description: t('experience.items.5.description') || "Opening new international office to expand our AI services and reach across North American markets",
      category: "Expansion",
      year: "2023",
      location: "TORONTO GLOBAL FORUM, ON"
    },
    {
      src: "/exp7.jpeg",
      alt: "KENSA AI Team Experience 7",
      title: t('experience.items.6.title') || "Innovation Hub",
      description: t('experience.items.6.description') || "Collaborative AI workspace where our team develops next-generation artificial intelligence solutions",
      category: "Innovation",
      year: "2024",
      location: "London, ON"
    }
  ]

  // Auto-slideshow functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % experienceImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, experienceImages.length])

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

  // Carousel navigation
  const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % experienceImages.length)
  }

  const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + experienceImages.length) % experienceImages.length)
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

        {/* Dynamic Mosaic Layout Container */}
        <div 
          className="relative max-w-[1400px] mx-auto px-8"
          onMouseEnter={handleCarouselHover}
          onMouseLeave={handleCarouselLeave}
        >
          {/* Mosaic Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 h-[600px]">
            
            {/* Hero Image - Left Side (60% width) */}
            <div className="lg:col-span-3 relative group cursor-pointer">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src={experienceImages[currentSlide].src}
                  alt={experienceImages[currentSlide].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20"></div>
                
                {/* Map Icon with Location - Bottom Left */}
                <div className="absolute bottom-6 left-6 z-20 group/map">
                  <div className="relative inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:px-4">
                    <MapPin className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium opacity-0 group-hover/map:opacity-100 transition-all duration-300 max-w-0 group-hover/map:max-w-xs overflow-hidden whitespace-nowrap">
                      {experienceImages[currentSlide].location}
                    </span>
                  </div>
                </div>
                
                {/* Category Badge - Top Left */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1e90e8]/20 to-[#3d50e3]/20 backdrop-blur-xl border border-white/20">
                    <Award className="w-3 h-3 text-white" />
                    <span className="text-white/90 text-xs font-medium">
                      {t(`experience.categories.${experienceImages[currentSlide].category.toLowerCase()}`) || experienceImages[currentSlide].category}
                    </span>
                    <span className="text-white/60 text-xs">•</span>
                    <span className="text-white/60 text-xs">{experienceImages[currentSlide].year}</span>
                  </div>
                </div>
                
                {/* Current Slide Indicator - Top Right */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="w-3 h-3 rounded-full bg-[#1e90e8] animate-pulse shadow-lg shadow-[#1e90e8]/50"></div>
                </div>
                
                {/* Hover Text Overlay - Center */}
                <div className={`absolute inset-0 flex items-center justify-center z-10 transition-all duration-500 ${
                  hoveredIndex === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                onMouseEnter={() => setHoveredIndex(currentSlide)}
                onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="max-w-2xl mx-auto px-8 text-center">
                    <h3 className="text-white text-3xl font-light mb-4 leading-tight">
                      {experienceImages[currentSlide].title}
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed font-light">
                      {experienceImages[currentSlide].description}
                    </p>
                  </div>
                </div>
                
                {/* Bottom Gradient for Text Readability */}
                <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-500 ${
                  hoveredIndex === currentSlide ? 'opacity-100' : 'opacity-60'
                    }`}></div>
                    
              </div>
            </div>
            
            {/* Grid Cluster - Right Side (40% width) */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {/* Show next 4 images in rotation based on current slide */}
              {Array.from({ length: 4 }, (_, i) => {
                const imageIndex = (currentSlide + i + 1) % experienceImages.length;
                const image = experienceImages[imageIndex];
                return (
                  <div 
                    key={imageIndex}
                    className="relative group cursor-pointer"
                    onClick={() => goToSlide(imageIndex)}
                    onMouseEnter={() => setHoveredIndex(imageIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className={`relative w-full h-full overflow-hidden rounded-xl transition-all duration-500 ${
                      imageIndex === currentSlide 
                        ? 'ring-2 ring-[#1e90e8]/50 ring-offset-2 ring-offset-white dark:ring-offset-black transform scale-105' 
                        : 'hover:shadow-xl hover:shadow-[#1e90e8]/20 hover:scale-102'
                    }`}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 20vw"
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                      
                      {/* Map Icon - Bottom Left */}
                      <div className="absolute bottom-2 left-2 z-20 group/map-small">
                        <div className="relative inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                          <MapPin className="w-3 h-3 text-white" />
                          <span className="text-white text-xs font-medium opacity-0 group-hover/map-small:opacity-100 transition-all duration-300 max-w-0 group-hover/map-small:max-w-xs overflow-hidden whitespace-nowrap">
                            {image.location}
                          </span>
                        </div>
                      </div>
                      
                      {/* Category Badge - Top Left */}
                      <div className="absolute top-2 left-2 z-20">
                        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-[#1e90e8]/20 to-[#3d50e3]/20 backdrop-blur-xl border border-white/20">
                          <Award className="w-2 h-2 text-white" />
                          <span className="text-white/90 text-xs font-medium">
                            {t(`experience.categories.${image.category.toLowerCase()}`) || image.category}
                          </span>
                        </div>
                    </div>
                      
                      {/* Hover Text Overlay */}
                      <div className={`absolute inset-0 flex items-center justify-center z-10 transition-all duration-500 ${
                        hoveredIndex === imageIndex ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <div className="px-3 text-center">
                          <h4 className="text-white text-sm font-light mb-1 leading-tight">
                        {image.title}
                          </h4>
                          <p className="text-white/80 text-xs leading-relaxed font-light line-clamp-3">
                        {image.description}
                      </p>
                        </div>
                      </div>
                      
                      {/* Bottom Gradient */}
                      <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-500 ${
                        hoveredIndex === imageIndex ? 'opacity-100' : 'opacity-40'
                      }`}></div>
                      
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>
          
          {/* Navigation Controls for Mobile */}
          <div className="lg:hidden flex justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 flex items-center justify-center transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-white transition-transform group-hover:-translate-x-0.5" />
            </button>
            
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 flex items-center justify-center transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-white transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex items-center justify-center gap-3 mt-12">
              {experienceImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                className={`relative transition-all duration-500 ${
                    index === currentSlide 
                    ? 'w-12 h-3' 
                    : 'w-3 h-3 hover:w-6'
                  }`}
                >
                <div className={`w-full h-full rounded-full transition-all duration-500 ${
                    index === currentSlide 
                    ? 'bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] shadow-lg shadow-[#1e90e8]/30' 
                    : 'bg-gray-300 dark:bg-white/30 hover:bg-[#1e90e8]/60'
                  }`}></div>
                  {index === currentSlide && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] animate-pulse opacity-60"></div>
                  )}
                </button>
              ))}
          </div>
          
          {/* Explore More Button */}
          <div className="flex justify-center mt-16">
            <a
              href="/portfolio_v2"
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
