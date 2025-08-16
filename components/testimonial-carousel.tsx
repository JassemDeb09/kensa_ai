"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

export interface TestimonialItem {
  id: string
  name: string
  role: string
  company: string
  quote: string
  image: string
  avatar: string
  hasVideo?: boolean
  rating?: number
}

interface TestimonialCarouselProps {
  items: TestimonialItem[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showNavigation?: boolean
  showIndicators?: boolean
  className?: string
  onVideoPlay?: (item: TestimonialItem) => void
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 8000,
  showNavigation = true,
  showIndicators = true,
  className = "",
  onVideoPlay
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length)
      }, autoPlayInterval)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoPlay, autoPlayInterval, items.length, currentIndex])

  // Reset auto-play on manual navigation
  const resetAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    if (autoPlay && items.length > 1) {
      setTimeout(() => {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % items.length)
        }, autoPlayInterval)
      }, 1000)
    }
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
    resetAutoPlay()
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    resetAutoPlay()
  }

  const handleIndicatorClick = (index: number) => {
    if (index === currentIndex) return
    setCurrentIndex(index)
    resetAutoPlay()
  }

  const handleVideoPlay = (item: TestimonialItem) => {
    if (onVideoPlay) {
      onVideoPlay(item)
    }
  }

  if (items.length === 0) {
    return <div className="text-center text-gray-500">No testimonials to display</div>
  }

  const currentItem = items[currentIndex]

  return (
    <div className={`relative w-full max-w-5xl mx-auto ${className}`}>
      {/* Main Testimonial Card */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Card className="testimonial-card bg-white dark:bg-gray-900 border-0 rounded-2xl overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="flex h-full min-h-[400px]">
                  {/* Left Section - Image/Video */}
                  <div className="w-[30%] relative overflow-hidden">
                    <div className="relative w-full h-full">
                      <motion.div
                        initial={{ scale: 1.2, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 1,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        className="w-full h-full"
                      >
                        <Image
                          src={currentItem.image}
                          alt={currentItem.name}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          priority
                        />
                      </motion.div>
                      

                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10"></div>
                    </div>
                  </div>
                  
                  {/* Right Section - Content */}
                  <div className="w-[70%] p-8 lg:p-12 flex flex-col justify-center bg-white dark:bg-gray-900">
                    {/* Quote Text */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="mb-8"
                    >
                      <div className="relative">
                        <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 dark:text-gray-200 font-light italic">
                          <span className="text-4xl text-[#1e90e8] font-serif leading-none">"</span>
                          {currentItem.quote}
                          <span className="text-4xl text-[#1e90e8] font-serif leading-none">"</span>
                        </p>
                      </div>
                    </motion.div>
                    
                    {/* Author Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="flex items-center gap-4"
                    >
                      {/* Author Avatar */}
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#1e90e8]/20">
                          <Image
                            src={currentItem.avatar}
                            alt={currentItem.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Author Details */}
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {currentItem.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                          {currentItem.role}
                        </p>
                        <p className="text-xs text-[#1e90e8] font-semibold mt-1">
                          {currentItem.company}
                        </p>
                      </div>
                      
                      {/* Rating Stars */}
                      {currentItem.rating && (
                        <div className="flex gap-1">
                          {[...Array(currentItem.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.6 + i * 0.1,
                                type: "spring",
                                bounce: 0.6
                              }}
                            >
                              <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                              </svg>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation Arrows */}
      {showNavigation && items.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1e90e8] hover:bg-[#3d50e3] border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1e90e8] hover:bg-[#3d50e3] border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            onClick={handleNext}
          >
            <ChevronRight className="w-6 h-6 text-white" />
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
                rounded-full transition-all duration-300 hover:scale-110
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

export default TestimonialCarousel
