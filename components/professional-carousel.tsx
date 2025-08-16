"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'


export interface CarouselItem {
  id: string
  image: string
  title: string
  description: string
  author?: {
    name: string
    role: string
    avatar?: string
  }
  badge?: string
  features?: string[]
}

interface ProfessionalCarouselProps {
  items: CarouselItem[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showNavigation?: boolean
  showIndicators?: boolean
  cardWidth?: number
  className?: string
  onItemClick?: (item: CarouselItem, index: number) => void
  exploreMoreText?: string
}

export const ProfessionalCarousel: React.FC<ProfessionalCarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 30000,
  showNavigation = true,
  showIndicators = true,
  cardWidth = 450,
  className = "",
  onItemClick,
  exploreMoreText = "Explore More"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && items.length > 1) {
      intervalRef.current = setInterval(() => {
        handleNext()
      }, autoPlayInterval)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoPlay, autoPlayInterval, items.length])

  // Reset auto-play on manual navigation
  const resetAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    if (autoPlay && items.length > 1) {
      setTimeout(() => {
        intervalRef.current = setInterval(() => {
          handleNext()
        }, autoPlayInterval)
      }, 1000)
    }
  }



  const handleNext = () => {
    // Immediate transition - no animation blocking
    setCurrentIndex((prev) => (prev + 1) % items.length)
    resetAutoPlay()
  }

  const handlePrev = () => {
    // Immediate transition - no animation blocking
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    resetAutoPlay()
  }

  const handleIndicatorClick = (index: number) => {
    if (index === currentIndex) return
    // Immediate transition - no animation blocking
    setCurrentIndex(index)
    resetAutoPlay()
  }

  const handleCardClick = (item: CarouselItem, index: number) => {
    if (onItemClick) {
      onItemClick(item, index)
    }
  }

  const getPrevIndex = () => (currentIndex - 1 + items.length) % items.length
  const getNextIndex = () => (currentIndex + 1) % items.length

  const renderCard = (item: CarouselItem, index: number, position: 'prev' | 'current' | 'next') => {
    const isCenter = position === 'current'
    const isPrev = position === 'prev'
    const isNext = position === 'next'

    return (
      <motion.div
        key={`${item.id}-${index}-${position}`}
        className={`
          relative
          ${isPrev ? 'translate-x-4' : ''}
          ${isNext ? '-translate-x-4' : ''}
        `}
                 style={{ 
           width: isCenter ? cardWidth + (cardWidth * 0.25) : (cardWidth + (cardWidth * 0.25)) * 0.85,
           height: isCenter ? 420 : 360
         }}
      >
        <AnimatePresence mode="wait">
          {isCenter && (
            <motion.div
              key={`card-${currentIndex}`}
              initial={{ 
                opacity: 0, 
                scale: 0.8, 
                y: 40,
                rotateX: 15 
              }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                rotateX: 0 
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.9, 
                y: -20,
                rotateX: -10 
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                scale: { type: "spring", damping: 20, stiffness: 300 },
              }}
              className="w-full h-full"
            >
              <Card
                className="w-full h-full bg-white dark:bg-gray-800 border-0 rounded-3xl overflow-hidden shadow-2xl group"
              >
                 <CardContent className="p-0 h-full relative overflow-hidden">
           <div className="flex h-full relative">
             {/* Image Section with Diagonal Cut */}
             <div className="relative w-3/5 overflow-hidden">
               <div className="relative w-full h-full">
                 <motion.div
                   initial={{ scale: 1.4, filter: "brightness(0.5) saturate(0.6)" }}
                   animate={{ scale: 1.1, filter: "brightness(1) saturate(1.1)" }}
                   transition={{
                     duration: 1.2,
                     delay: 0.3,
                     ease: [0.25, 0.46, 0.45, 0.94]
                   }}
                   className="w-full h-full"
                   style={{
                     clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)"
                   }}
                 >
                   <Image
                     src={item.image}
                     alt={item.title}
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                 </motion.div>
                 
                 {/* Image Overlays */}
                 <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 0.5, delay: 0.6 }}
                   className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-black/30"
                   style={{
                     clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)"
                   }}
                 />
                 <div 
                   className="absolute inset-0 bg-gradient-to-br from-[#1e90e8]/5 via-transparent to-[#3d50e3]/10 opacity-0 group-hover:opacity-100 transition-all duration-700"
                   style={{
                     clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)"
                   }}
                 ></div>
                 
                 {/* Badge - Moved to Right */}
                 {item.badge && (
                   <motion.div
                     initial={{ opacity: 0, scale: 0.2, rotate: -20 }}
                     animate={{ opacity: 1, scale: 1, rotate: 0 }}
                     transition={{
                       duration: 0.8,
                       delay: 0.4,
                       type: "spring",
                       bounce: 0.6
                     }}
                     className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full text-white text-sm font-semibold"
                   >
                     {item.badge}
                   </motion.div>
                 )}
               </div>
             </div>
             
             {/* Content Section */}
             <div className="w-2/5 p-8 flex flex-col justify-center space-y-6 relative z-10">
              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, x: -30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  type: "spring",
                  damping: 25,
                  stiffness: 300
                }}
                                 className="text-2xl font-bold text-[#1e90e8] dark:text-[#1e90e8] leading-tight group-hover:text-[#3d50e3] transition-colors duration-300"
              >
                {item.title}
              </motion.h3>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, x: -30, y: 15 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.9,
                  type: "spring",
                  damping: 25,
                  stiffness: 300
                }}
                className="text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-4"
              >
                {item.description.length > 160 
                  ? `${item.description.substring(0, 160)}...` 
                  : item.description
                }
              </motion.p>
              
              {/* Features */}
              {item.features && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.1
                  }}
                  className="space-y-2"
                >
                  <div className="flex flex-wrap gap-2">
                    {item.features.slice(0, 2).map((feature, featureIndex) => (
                      <motion.span 
                        key={featureIndex}
                        initial={{ opacity: 0, scale: 0.6, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 1.2 + featureIndex * 0.1,
                          type: "spring",
                          bounce: 0.4
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#1e90e8]/10 to-[#3d50e3]/10 rounded-full text-xs text-[#1e90e8] border border-[#1e90e8]/20 transition-all duration-300 hover:scale-105"
                      >
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-1.5 h-1.5 bg-[#1e90e8] rounded-full"
                        />
                        {feature.length > 15 ? `${feature.substring(0, 15)}...` : feature}
                      </motion.span>
                    ))}
                    {item.features.length > 2 && (
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.6, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 1.4,
                          type: "spring",
                          bounce: 0.4
                        }}
                        className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-500 dark:text-gray-400"
                      >
                        +{item.features.length - 2}
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              )}
              
                             {/* Author */}
               {item.author && (
                 <motion.div
                   initial={{ opacity: 0, x: -20, y: 10 }}
                   animate={{ opacity: 1, x: 0, y: 0 }}
                   transition={{
                     duration: 0.6,
                     delay: 1.3,
                     type: "spring",
                     damping: 25,
                     stiffness: 300
                   }}
                   className="flex items-center gap-3 pt-2"
                 >
                   {item.author.avatar && (
                     <motion.div 
                       initial={{ scale: 0 }}
                       animate={{ scale: 1 }}
                       transition={{ delay: 1.4, type: "spring", bounce: 0.6 }}
                       className="w-8 h-8 rounded-full overflow-hidden"
                     >
                       <Image
                         src={item.author.avatar}
                         alt={item.author.name}
                         width={32}
                         height={32}
                         className="object-cover"
                       />
                     </motion.div>
                   )}
                   <div>
                     <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.author.name}</p>
                     <p className="text-xs text-gray-500 dark:text-gray-400">{item.author.role}</p>
                   </div>
                 </motion.div>
               )}

               {/* Explore More Button */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{
                   duration: 0.6,
                   delay: 1.5,
                   type: "spring",
                   damping: 25,
                   stiffness: 300
                 }}
                 className="pt-4"
               >
                 <button
                   onClick={(e) => {
                     e.stopPropagation()
                     handleCardClick(item, index)
                   }}
                   className="group bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] hover:from-[#1e90e8]/90 hover:to-[#3d50e3]/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                 >
                   <span>{exploreMoreText}</span>
                   <motion.div
                     animate={{ x: [0, 4, 0] }}
                     transition={{ duration: 2, repeat: Infinity }}
                   >
                     →
                   </motion.div>
                 </button>
               </motion.div>
             </div>
          </div>
        </CardContent>
        
                {/* Enhanced Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute -inset-2 bg-gradient-to-r from-[#1e90e8]/20 via-[#3d50e3]/20 to-[#1e90e8]/20 rounded-3xl blur-xl -z-10"
                />
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Side Cards (Static) */}
        {!isCenter && (
          <Card
            className="w-full h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg opacity-60 scale-85 cursor-pointer hover:opacity-80 hover:scale-90 transition-all duration-300"
            onClick={() => {
              if (isPrev) {
                handlePrev()
              } else if (isNext) {
                handleNext()
              }
            }}
          >
            <CardContent className="p-0 h-full">
              <div className="flex h-full">
                <div className="w-2/5 relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover filter brightness-80 saturate-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30"></div>
                </div>
                <div className="w-3/5 p-4 flex flex-col justify-center space-y-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full flex items-center justify-center opacity-80">
                    <span className="text-white font-bold text-xs">{item.badge}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight opacity-80">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3 opacity-70">
                    {item.description.substring(0, 75)}...
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>
    )
  }

  if (items.length === 0) {
    return <div className="text-center text-gray-500">No items to display</div>
  }

  return (
    <div className={`relative w-full carousel-container ${className}`}>
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-center gap-6 lg:gap-12 px-4 card-transition">
          {/* Previous Card */}
          <div className="hidden lg:block">
            {renderCard(items[getPrevIndex()], getPrevIndex(), 'prev')}
          </div>
          
          {/* Current Card */}
          <div className="relative" key={`current-${currentIndex}`}>
            {renderCard(items[currentIndex], currentIndex, 'current')}
          </div>
          
          {/* Next Card */}
          <div className="hidden lg:block">
            {renderCard(items[getNextIndex()], getNextIndex(), 'next')}
          </div>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      {showNavigation && items.length > 1 && (
        <>
                     <Button
             variant="outline"
             size="icon"
             className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] border-0 shadow-lg hover:from-[#1e90e8]/90 hover:to-[#3d50e3]/90 hover:scale-110 nav-transition z-30 group"
             onClick={handlePrev}
           >
             <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-0.5 transition-transform duration-300" />
           </Button>
           
           <Button
             variant="outline"
             size="icon"
             className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] border-0 shadow-lg hover:from-[#1e90e8]/90 hover:to-[#3d50e3]/90 hover:scale-110 nav-transition z-30 group"
             onClick={handleNext}
           >
             <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
           </Button>
        </>
      )}
      
      {/* Indicators */}
      {showIndicators && items.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`
                rounded-full nav-transition hover:scale-110
                ${index === currentIndex 
                  ? 'w-8 h-3 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] shadow-lg' 
                  : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }
              `}
            />
          ))}
        </div>
      )}

    </div>
  )
}

export default ProfessionalCarousel
