"use client"

import Image from "next/image"
import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowUpRight, Award, Star, Users, Calendar, ExternalLink, Target, Lightbulb, Rocket, Crown, Zap, TrendingUp, Globe, Mail, Phone } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Header } from "@/app/_components/Header"
import { Footer } from "@/app/_components/Footer"
import { ClientOnly } from "@/components/client-only"

export default function ExpertisePage() {
  const { t } = useLanguage()
  const [currentChapter, setCurrentChapter] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  
  const heroRef = useRef<HTMLElement>(null)
  const storyRef = useRef<HTMLElement>(null)
  const resultsRef = useRef<HTMLElement>(null)
  const collaborateRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  // Section navigation handler
  const handleSectionClick = (sectionId: string) => {
    const sectionMap: { [key: string]: React.RefObject<HTMLElement | null> } = {
      'hero': heroRef,
      'story': storyRef,
      'results': resultsRef,
      'collaborate': collaborateRef,
      'contact': contactRef,
      // Map common navigation items to appropriate sections
      'services': resultsRef, // Map services to results section
      'industries': storyRef, // Map industries to story section
      'about': collaborateRef, // Map about to collaborate section
    }

    const targetRef = sectionMap[sectionId]
    if (targetRef?.current) {
      const headerOffset = 80 // Account for fixed header height
      const elementPosition = targetRef.current.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const sections = [heroRef, storyRef, resultsRef, collaborateRef, contactRef]
    sections.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const transformationResults = [
    { metric: "40%+", description: "Boosted learner engagement through AI-driven personalization and adaptive learning" },
    { metric: "60%", description: "Automated repetitive processes, unleashing teams to innovate and scale" },
    { metric: "5%", description: "Shortened claims processing, enhanced fraud detection, elevated client satisfaction" },
    { metric: "95%+", description: "Achieved defect detection accuracy, minimizing waste and costly recalls" },
    { metric: "30%+", description: "Delivered sales growth by powering hyper-personalized shopping experiences" },
    { metric: "Revolutionary", description: "Transformed urban mobility and energy efficiency with AI and IoT integrations" },
    { metric: "Weeks to Days", description: "Cut recruitment cycles using precision AI candidate screening" },
    { metric: "Higher ROI", description: "Optimized routes and lowered costs through AI-powered logistics" }
  ]

  const storyChapters = [
    {
      title: "The Vision",
      subtitle: "Where Innovation Meets Leadership",
      content: "AI is the decisive advantage that separates leaders from followers. Every transformation begins with a vision - the courage to see beyond the present and architect the future.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-[#1e90e8] to-[#3d50e3]"
    },
    {
      title: "The Journey",
      subtitle: "Transformative Results Across Industries",
      content: "Through strategic collaboration with visionary CEOs and executive teams, we deliver AI solutions that drive measurable growth, optimize operations, and elevate customer experiences.",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-[#3d50e3] to-[#1e90e8]"
    },
    {
      title: "The Impact",
      subtitle: "Command Market Leadership",
      content: "Our approach is strategic, collaborative, and relentlessly results-driven - empowering leaders to transform, outperform competition, and secure market dominance.",
      icon: <Crown className="w-8 h-8" />,
      color: "from-[#1e90e8] to-[#3d50e3]"
    },
    {
      title: "The Future",
      subtitle: "Your AI Success Story",
      content: "Ready to drive AI-led growth and innovation? Let's connect and architect your success story - unlocking new revenue streams, operational excellence, and unmatched competitive advantage.",
      icon: <Target className="w-8 h-8" />,
      color: "from-[#3d50e3] to-[#1e90e8]"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden transition-colors duration-300">
      {/* Header */}
      <Header scrollY={scrollY} onSectionClick={handleSectionClick} />
      
      {/* Cinematic Hero Section */}
      <section 
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Enhanced Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300"></div>
          
          <ClientOnly>
            {/* Interactive floating orbs */}
            <div 
              className="absolute w-96 h-96 bg-[#1e90e8]/20 rounded-full blur-3xl transition-all duration-1000 ease-out animate-pulse"
              style={{ 
                top: `${20 + scrollY * 0.1}%`,
                left: `${25 + mousePosition.x * 0.01}%`,
              }}
            ></div>
            <div 
              className="absolute w-80 h-80 bg-[#3d50e3]/20 rounded-full blur-3xl transition-all duration-1000 ease-out animate-pulse"
              style={{ 
                bottom: `${20 - scrollY * 0.05}%`,
                right: `${25 - mousePosition.x * 0.008}%`,
              }}
            ></div>
            
            {/* Animated grid */}
            <div 
              className="absolute inset-0 bg-[linear-gradient(rgba(30,144,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.03)_1px,transparent_1px)] bg-[size:100px_100px] transition-transform duration-1000"
              style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            ></div>
            
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#1e90e8]/30 rounded-full animate-pulse"
                style={{
                  left: `${(i * 5.26) % 100}%`,
                  top: `${(i * 7.89) % 100}%`,
                  animationDelay: `${(i * 0.15) % 3}s`,
                  animationDuration: `${2 + (i * 0.15) % 3}s`
                }}
              ></div>
            ))}
          </ClientOnly>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left: Professional Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              {/* Name */}
              <div className="space-y-2">
                <h1 className="text-[64px] lg:text-[80px] font-extralight tracking-[-0.04em] leading-[0.8]">
                  <span className={`block text-gray-900 dark:text-white transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: '0.2s' }}>
                    FatimaZahra
                  </span>
                  <span className={`block text-gray-900 dark:text-white font-light transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: '0.4s' }}>
                    KHOUKH
                  </span>
                </h1>
              </div>
              
              {/* Website */}
              <div className="space-y-6">
                <div className="text-[#1e90e8] text-xl font-medium">
                  {t('expertise.hero.website')}
                </div>
                
                {/* Social Links */}
                <div className="space-y-3 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-3">
                    <span className="text-sm">Instagram:</span>
                    <span className="font-medium">{t('expertise.hero.social.instagram')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm">LinkedIn:</span>
                    <span className="font-medium">{t('expertise.hero.social.linkedin')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm">Email:</span>
                    <span className="font-medium">{t('expertise.hero.social.email')}</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button
                  onClick={() => handleSectionClick('story')}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] hover:from-[#1e90e8]/90 hover:to-[#3d50e3]/90 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#1e90e8]/25"
                >
                  <span>{t('expertise.hero.cta.primary')}</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
                
                <button
                  onClick={() => handleSectionClick('contact')}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-gray-300/20 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100/10 dark:hover:bg-white/10 backdrop-blur-xl transition-all duration-300"
                >
                  <span>{t('expertise.hero.cta.secondary')}</span>
                </button>
              </div>
            </div>

            {/* Right: Professional Portrait */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative">
                {/* Year Badge */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 rotate-90 z-20">
                  <div className="text-[#1e90e8] text-6xl font-bold tracking-wider">
                    2025
                  </div>
                </div>
                
                {/* Portrait Container */}
                <div className="relative aspect-[3/4] max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/30 dark:from-gray-800/50 dark:to-gray-900/30 rounded-2xl"></div>
                  <div className="relative h-full overflow-hidden rounded-2xl">
                    <Image
                      src="/portofolio.png"
                      alt="FatimaZahra KHOUKH - Founder & CEO of KENSA AI"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-center transition-all duration-700 hover:scale-105"
                      priority
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-[#1e90e8] rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#1e90e8] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Chapters */}
      <section 
        ref={storyRef}
        id="story" 
        className="relative py-32"
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className={`text-center mb-32 transition-all duration-1000 ${visibleSections.has('story') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#1e90e8]/25 via-[#3d50e3]/15 to-[#1e90e8]/25 border-2 border-[#1e90e8]/50 backdrop-blur-2xl mb-8 hover:scale-105 transition-all duration-500 group shadow-lg shadow-[#1e90e8]/20">
              <div className="w-3 h-3 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full animate-pulse shadow-sm"></div>
              <span className="text-[#1e90e8] font-semibold tracking-wide text-sm">{t('expertise.story.badge')}</span>
              <div className="w-3 h-3 bg-gradient-to-r from-[#3d50e3] to-[#1e90e8] rounded-full animate-pulse shadow-sm" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <h2 className="text-[48px] lg:text-[72px] font-extralight tracking-[-0.03em] text-gray-900 dark:text-white mb-8 leading-[0.9]">
              {t('expertise.story.title').split(' ').slice(0, -2).join(' ')} <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#1e90e8] via-gray-900 dark:via-white to-[#3d50e3] bg-clip-text text-transparent font-light"
                      style={{ 
                        backgroundSize: '300% 300%',
                        animation: 'gradient-flow 4s ease-in-out infinite'
                      }}>
                  {t('expertise.story.title').split(' ').slice(-2).join(' ')}
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#1e90e8]/20 to-[#3d50e3]/20 blur-2xl rounded-lg opacity-50 animate-pulse"></div>
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-[20px] text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                {t('expertise.story.subtitle')}
              </p>
              <p className="text-[16px] text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('expertise.story.description')}
              </p>
            </div>

            {/* Floating Elements */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-8">
              <div className="flex items-center gap-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full animate-bounce"
                    style={{ 
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '2s'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Interactive Story Map */}
          <div className="relative">
            {/* Luxury Timeline Container */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-full">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1e90e8]/20 via-[#3d50e3]/20 to-[#1e90e8]/20 blur-xl rounded-full"></div>
              
              {/* Main timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#1e90e8]/40 via-[#3d50e3]/40 to-[#1e90e8]/40 rounded-full">
                {/* Animated progress */}
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#1e90e8] via-[#3d50e3] to-[#1e90e8] rounded-full shadow-lg shadow-[#1e90e8]/50" 
                     style={{ 
                       height: visibleSections.has('story') ? '100%' : '0%',
                       transition: 'height 3s cubic-bezier(0.4, 0, 0.2, 1)'
                     }}>
                  {/* Flowing particles */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full animate-ping"></div>
                </div>
              </div>
              
              {/* Timeline markers */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full border-2 border-white shadow-lg"
                  style={{ 
                    top: `${25 + i * 25}%`,
                    animation: visibleSections.has('story') ? `timeline-pulse 2s ease-in-out infinite ${i * 0.5}s` : 'none'
                  }}
                ></div>
              ))}
            </div>
            
            {storyChapters.map((chapter, index) => (
              <div
                key={index}
                className={`relative mb-32 transition-all duration-1000 ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:text-right'} ${
                  visibleSections.has('story') 
                    ? 'translate-y-0 opacity-100' 
                    : index % 2 === 0 ? 'translate-x-20 opacity-0' : '-translate-x-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Luxury Chapter Marker */}
                <div className={`absolute top-8 ${index % 2 === 0 ? 'right-0 lg:-right-8' : 'left-0 lg:-left-8'} z-20`}>
                  {/* Outer ring */}
                  <div className="w-20 h-20 rounded-full border-2 border-[#1e90e8]/20 animate-spin" style={{ animationDuration: '20s' }}>
                    {/* Inner glow */}
                    <div className="absolute inset-2 bg-gradient-to-r from-[#1e90e8]/20 to-[#3d50e3]/20 rounded-full blur-lg"></div>
                    
                    {/* Main marker */}
                    <div className={`absolute inset-3 rounded-full bg-gradient-to-r ${chapter.color} flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-500 group cursor-pointer`}>
                      <div className="relative">
                        {chapter.icon}
                        {/* Icon glow */}
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-sm animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chapter number */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black border border-[#1e90e8]/50 rounded-full flex items-center justify-center">
                    <span className="text-[#1e90e8] text-xs font-bold">{index + 1}</span>
                  </div>
                </div>
                
                {/* Enhanced Chapter Content */}
                <div className={`group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 lg:p-16 border border-gray-200 dark:border-gray-700 hover:border-[#1e90e8]/50 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#1e90e8]/20 ${index % 2 === 0 ? 'lg:mr-20' : 'lg:ml-20'}`}
                     style={{ 
                       boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                     }}>
                  <div className="space-y-8">
                    {/* Premium Chapter Badge */}
                    <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#1e90e8]/20 to-[#3d50e3]/20 border border-[#1e90e8]/40 backdrop-blur-xl group-hover:scale-105 transition-all duration-300`}>
                      <div className="w-2 h-2 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full animate-pulse"></div>
                      <span className="text-[#1e90e8] text-sm font-semibold tracking-wider">{t('expertise.story.chapterLabel')} {index + 1}</span>
                      <div className="w-2 h-2 bg-gradient-to-r from-[#3d50e3] to-[#1e90e8] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    
                    {/* Enhanced Title */}
                    <h3 className="text-[36px] lg:text-[48px] font-extralight text-gray-900 dark:text-white leading-tight tracking-[-0.02em] group-hover:text-[#1e90e8] transition-colors duration-500">
                      {t(`expertise.story.chapters.${index}.title`)}
                    </h3>
                    
                    {/* Luxury Subtitle */}
                    <h4 className="text-[20px] lg:text-[24px] font-light bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] bg-clip-text text-transparent leading-relaxed">
                      {t(`expertise.story.chapters.${index}.subtitle`)}
                    </h4>
                    
                    {/* Enhanced Content */}
                    <div className="relative">
                      <p className="text-[18px] text-gray-700 dark:text-gray-200 leading-relaxed font-light group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-500">
                        {t(`expertise.story.chapters.${index}.content`)}
                      </p>
                    </div>
                    
                    {/* Interactive Elements */}
                    <div className="flex items-center gap-4 pt-4">
                      <div className="flex items-center gap-2">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          ></div>
                        ))}
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#1e90e8]/20 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#1e90e8]/5 via-[#3d50e3]/5 to-[#1e90e8]/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformative Results */}
      <section 
        ref={resultsRef}
        id="results"
        className="relative py-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black transition-colors duration-300"
      >
        <ClientOnly>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(30,144,232,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"
               style={{ transform: `translateY(${scrollY * 0.2}px)` }}></div>
        </ClientOnly>
        
        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          <div className={`text-center mb-32 transition-all duration-1000 ${visibleSections.has('results') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Premium Impact Badge */}
            <div className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-[#1e90e8]/30 via-[#3d50e3]/20 to-[#1e90e8]/30 border-2 border-[#1e90e8]/60 backdrop-blur-2xl mb-12 hover:scale-105 transition-all duration-500 group shadow-xl shadow-[#1e90e8]/25">
              <div className="relative">
                <TrendingUp className="w-6 h-6 text-[#1e90e8] group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" />
                <div className="absolute -inset-2 bg-[#1e90e8]/30 rounded-full blur-lg animate-pulse"></div>
              </div>
              <span className="text-[#1e90e8] font-bold tracking-wider text-lg drop-shadow-sm">{t('expertise.results.badge')}</span>
              <div className="flex items-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full animate-bounce shadow-sm"
                    style={{ animationDelay: `${i * 0.2}s`, animationDuration: '1.5s' }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Title */}
            <h2 className="text-[48px] lg:text-[80px] font-extralight tracking-[-0.03em] text-gray-900 dark:text-white mb-8 leading-[0.85]">
              {t('expertise.results.title').split(' ')[0]}{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#1e90e8] via-gray-900 dark:via-white to-[#3d50e3] bg-clip-text text-transparent font-light"
                      style={{ 
                        backgroundSize: '400% 400%',
                        animation: 'gradient-wave 6s ease-in-out infinite'
                      }}>
                  {t('expertise.results.title').split(' ')[1]}
                </span>
                {/* Floating elements around the word */}
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-[#1e90e8] rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-[#3d50e3] rounded-full animate-pulse"></div>
                <div className="absolute -inset-3 bg-gradient-to-r from-[#1e90e8]/10 to-[#3d50e3]/10 blur-3xl rounded-lg opacity-50 animate-pulse"></div>
              </span>
            </h2>
            
            {/* Enhanced Description */}
            <div className="max-w-5xl mx-auto space-y-6">
              <p className="text-[22px] text-gray-700 dark:text-gray-200 leading-relaxed font-light">
                {t('expertise.results.subtitle')}
              </p>
              <p className="text-[16px] text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('expertise.results.description')}
              </p>
            </div>


          </div>

          {/* Luxury Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {transformationResults.map((result, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer transition-all duration-700 ${
                  visibleSections.has('results') 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setCurrentChapter(index)}
              >
                {/* Card Container */}
                <div className="relative h-80 rounded-3xl overflow-hidden"
                     style={{ 
                       background: `linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)`,
                       backdropFilter: 'blur(25px)',
                       border: '1px solid rgba(255,255,255,0.1)',
                       boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)'
                     }}>
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,#1e90e8_1px,transparent_1px),linear-gradient(-45deg,#3d50e3_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-between">
                    {/* Top Section */}
                    <div className="space-y-6">
                      {/* Metric Display */}
                      <div className="relative">
                        <div className="text-[40px] lg:text-[48px] font-extralight text-gray-900 dark:text-white leading-none tracking-tight group-hover:scale-110 transition-transform duration-500">
                          {t(`expertise.results.metrics.${index}.value`)}
                        </div>
                        {/* Metric Glow */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#1e90e8]/20 to-[#3d50e3]/20 blur-2xl rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed font-light group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-500">
                        {t(`expertise.results.metrics.${index}.description`)}
                      </p>
                    </div>
                    
                    {/* Bottom Section */}
                    <div className="space-y-4">
                      {/* Progress Bar */}
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: visibleSections.has('results') ? '100%' : '0%',
                            transitionDelay: `${index * 0.2 + 0.5}s`
                          }}
                        ></div>
                      </div>
                      
                      {/* Interactive Elements */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="w-2 h-2 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full opacity-40 group-hover:opacity-100 transition-all duration-300"
                              style={{ transitionDelay: `${i * 0.1}s` }}
                            ></div>
                          ))}
                        </div>
                        
                        {/* Hover Indicator */}
                        <div className="w-6 h-6 rounded-full border border-[#1e90e8]/30 flex items-center justify-center group-hover:border-[#1e90e8] group-hover:bg-[#1e90e8]/10 transition-all duration-300">
                          <div className="w-2 h-2 bg-[#1e90e8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#1e90e8]/50 transition-all duration-500"></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-[#3d50e3] to-[#1e90e8] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* External Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#1e90e8]/10 via-[#3d50e3]/10 to-[#1e90e8]/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                
                {/* Floating Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full flex items-center justify-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Collaborate Section */}
      <section 
        ref={collaborateRef}
        id="collaborate"
        className="relative py-32"
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className={`relative transition-all duration-1000 ${visibleSections.has('collaborate') ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="relative group bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur-xl border border-white/20 hover:border-[#1e90e8]/50 transition-all duration-500 hover:scale-105">
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl group-hover:rounded-xl transition-all duration-500">
                  <Image
                    src="/exp6.jpeg"
                    alt="KENSA AI Leadership and Innovation"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition-all duration-500"></div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full flex items-center justify-center animate-bounce hover:animate-spin transition-all duration-300" style={{ animationDuration: '3s' }}>
                <Zap className="w-12 h-12 text-white" />
              </div>
              
              {/* Additional floating elements */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#3d50e3] to-[#1e90e8] rounded-full flex items-center justify-center animate-pulse">
                <Crown className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-[40px] lg:text-[48px] font-extralight tracking-[-0.02em] text-gray-900 dark:text-white leading-tight">
                  {t('expertise.collaborate.title').split(' ').slice(0, -2).join(' ')} <span className="bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] bg-clip-text text-transparent">{t('expertise.collaborate.title').split(' ').slice(-2).join(' ')}</span>
                </h2>
                
                <p className="text-[18px] text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('expertise.collaborate.description')}
                </p>
                
                <p className="text-[16px] text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t('expertise.collaborate.approach')}
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                {[0, 1, 2, 3].map((index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {t(`expertise.collaborate.points.${index}`) || 
                        ["Strategic AI consultation aligned with business vision", "Collaborative approach with executive teams", "Results-driven implementation and optimization", "Market leadership through AI innovation"][index]
                      }
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section 
        ref={contactRef}
        id="contact" 
        className="relative py-32 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1e90e8]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#3d50e3]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-8 lg:px-16 text-center">
          <div className="space-y-12">
            <div className={`space-y-6 transition-all duration-1000 ${visibleSections.has('contact') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#1e90e8]/30 via-[#3d50e3]/20 to-[#1e90e8]/30 border-2 border-[#1e90e8]/60 backdrop-blur-xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#1e90e8]/20">
                <Rocket className="w-5 h-5 text-[#1e90e8] animate-bounce drop-shadow-sm" />
                <span className="text-[#1e90e8] font-bold drop-shadow-sm">{t('expertise.contact.badge')}</span>
              </div>
              
              <h2 className="text-[40px] lg:text-[56px] font-extralight tracking-[-0.02em] text-gray-900 dark:text-white leading-tight">
                {t('expertise.contact.title').split(' ').slice(0, -4).join(' ')} <span className="bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] bg-clip-text text-transparent">{t('expertise.contact.title').split(' ').slice(-4).join(' ')}</span>
              </h2>
              
              <p className="text-[18px] text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {t('expertise.contact.description')}
              </p>
            </div>

            {/* Enhanced Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { href: `mailto:${t('expertise.contact.info.email')}`, icon: Mail, title: t('expertise.contact.labels.email'), info: t('expertise.contact.info.email') },
                { href: `tel:${t('expertise.contact.info.phone').replace(/\s/g, '')}`, icon: Phone, title: t('expertise.contact.labels.phone'), info: t('expertise.contact.info.phone') },
                { href: `https://${t('expertise.contact.info.website')}`, icon: Globe, title: t('expertise.contact.labels.website'), info: t('expertise.contact.info.website'), target: "_blank" }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.target}
                  rel={contact.target ? "noopener noreferrer" : undefined}
                  className={`group flex flex-col items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-100/10 to-gray-50/5 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-gray-200/10 dark:border-white/10 hover:border-[#1e90e8]/50 hover:from-gray-100/15 dark:hover:from-white/15 hover:to-gray-50/10 dark:hover:to-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                    visibleSections.has('contact') 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                >
                  <contact.icon className="w-8 h-8 text-[#1e90e8] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse" 
                                style={{ animationDelay: `${index * 0.5}s` }} />
                  <div className="text-center">
                    <div className="text-gray-900 dark:text-white font-medium mb-1 group-hover:text-[#1e90e8] transition-colors">{contact.title}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">{contact.info}</div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#1e90e8]/20 to-[#3d50e3]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${t('expertise.contact.info.email')}`}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] hover:from-[#1e90e8]/90 hover:to-[#3d50e3]/90 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#1e90e8]/25"
              >
                <span>{t('expertise.contact.cta.primary')}</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              
              <a
                href="/"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-gray-300/20 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100/10 dark:hover:bg-white/10 backdrop-blur-xl transition-all duration-300"
              >
                <span>{t('expertise.contact.cta.secondary')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
