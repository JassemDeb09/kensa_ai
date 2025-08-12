"use client"

import Image from "next/image"
import { useLanguage } from '@/contexts/LanguageContext'
import { Trophy, Award, Star, Sparkles, Zap, ArrowUpRight } from "lucide-react"
import { useState } from "react"

export function ExperienceSection() {
  const { t } = useLanguage()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
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
      title: t('experience.items.3.title') || "Research & Development",
      description: t('experience.items.3.description') || "Advanced AI research presentation",
      category: "Research",
      year: "2023"
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

  // Premium masonry-style layout configuration
  const getImageLayout = (index: number) => {
    const layouts = [
      "row-span-2", // Large
      "row-span-1", // Small
      "row-span-2", // Large
      "row-span-1", // Small
      "row-span-2", // Large
      "row-span-1", // Small
      "row-span-1"  // Small
    ]
    return layouts[index] || "row-span-1"
  }

  return (
    <section id="experience" className="relative py-40 bg-white dark:bg-black overflow-hidden">
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

        {/* Premium Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[200px]">
          {experienceImages.map((image, index) => (
            <div 
              key={index} 
              className={`group relative ${getImageLayout(index)} cursor-pointer`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Premium Glass Container */}
              <div className="relative w-full h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100/50 to-gray-50/30 dark:from-white/5 dark:to-white/[0.02] backdrop-blur-xl border border-gray-200/50 dark:border-white/10 transition-all duration-700 hover:border-[#1e90e8]/50">
                
                {/* Luxury Glow Effects */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${
                  index % 2 === 0 
                    ? "from-[#1e90e8]/30 via-[#3d50e3]/20 to-[#1e90e8]/30" 
                    : "from-[#3d50e3]/30 via-[#1e90e8]/20 to-[#3d50e3]/30"
                } rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>
                
                {/* Premium Image Container */}
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-all duration-1000 group-hover:scale-110 rounded-3xl"
                  />
                  
                  {/* Luxury Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent dark:from-black/80 dark:via-black/20 opacity-40 dark:opacity-60 group-hover:opacity-70 dark:group-hover:opacity-90 transition-all duration-500 rounded-3xl"></div>
                  <div className={`absolute inset-0 bg-gradient-to-tr ${
                    index % 2 === 0 ? "from-[#1e90e8]/20 to-[#3d50e3]/20" : "from-[#3d50e3]/20 to-[#1e90e8]/20"
                  } opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-3xl`}></div>
                  

                  
                  {/* Luxury Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className={`transform transition-all duration-700 ${
                      hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                      <h3 className="text-white text-[20px] lg:text-[24px] font-light mb-3 leading-tight">
                        {image.title}
                      </h3>
                      <p className="text-gray-300 text-[14px] leading-relaxed mb-4">
                        {image.description}
                      </p>
                      
                      {/* Premium CTA */}
                      <div className="flex items-center gap-2 text-[#1e90e8] text-[13px] font-medium group-hover:text-white transition-colors">
                        <span>Explore</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Premium Hover Border */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-transparent ${
                    hoveredIndex === index 
                      ? index % 2 === 0 
                        ? 'border-[#1e90e8]/50' 
                        : 'border-[#3d50e3]/50'
                      : ''
                  } transition-all duration-500`}></div>
                </div>
                
                {/* Premium Award Accent */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                  hoveredIndex === index 
                    ? index % 2 === 0 
                      ? 'bg-[#1e90e8] shadow-lg shadow-[#1e90e8]/50' 
                      : 'bg-[#3d50e3] shadow-lg shadow-[#3d50e3]/50'
                    : 'bg-white/80 dark:bg-white/20 backdrop-blur-xl'
                }`}>
                  <Award className={`w-4 h-4 transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-white' : 'text-gray-600 dark:text-gray-400'
                  }`} />
                </div>
              </div>
            </div>
          ))}
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
