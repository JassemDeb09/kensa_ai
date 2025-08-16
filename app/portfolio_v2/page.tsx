"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from '@/contexts/LanguageContext'
import { Header } from "@/app/_components/Header"
import { Footer } from "@/app/_components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ProfessionalCarousel, { CarouselItem } from "@/components/professional-carousel"
import { ThemeToggle } from "@/components/theme-toggle"
import { SimpleLanguageSwitcher } from "@/components/simple-language-switcher"
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring, useInView, useAnimation } from "framer-motion"
import { 
  ArrowUpRight, 
  Calendar, 
  Mail, 
  Phone, 
  Globe, 
  ExternalLink,
  Target,
  GraduationCap,
  Cog,
  Users,
  TrendingUp,
  Shield,
  Award,
  Brain,
  Bot,
  DollarSign,
  Star,
  Clock,
  ChevronDown,
  Play,
  Quote,
  Building,
  Zap,
  Lightbulb,
  Rocket,
  CheckCircle,
  ArrowRight,
  BarChart3,
  PieChart,
  Crown,
  Sparkles,
  Network,
  Linkedin,
  Twitter,
  ChevronRight,
  Eye,
  MousePointer,
  Layers,
  Database,
  Cloud,
  Cpu,
  Lock,
  Monitor,
  Smartphone,
  Tablet,
  X
} from "lucide-react"

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true)
      const numericValue = parseFloat(value.replace(/[^\d.]/g, ''))
      
      if (isNaN(numericValue)) {
        return
      }

      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        // Elastic easing function
        const easeOutElastic = (t: number) => {
          const c4 = (2 * Math.PI) / 3
          return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1
        }
        
        const currentCount = numericValue * easeOutElastic(progress)
        setCount(currentCount)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration, isVisible])

  const formatValue = (num: number) => {
    if (value.includes('%')) {
      return `${Math.round(num)}%`
    } else if (value.includes('+')) {
      return `${Math.round(num)}+`
    } else {
      return Math.round(num).toString()
    }
  }

  return (
    <span ref={ref} className="tabular-nums">
      {isVisible ? formatValue(count) : value.replace(/[\d.]/g, '0')}
    </span>
  )
}

export default function PortfolioV2Page() {
  const { t, isRTL } = useLanguage()
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [activeTab, setActiveTab] = useState('company')
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { damping: 30, stiffness: 200 })
  const smoothMouseY = useSpring(mouseY, { damping: 30, stiffness: 200 })
  
  // Refs for sections
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const profileRef = useRef<HTMLElement>(null)
  const resultsRef = useRef<HTMLElement>(null)
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll()
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  // Section navigation handler
  const handleSectionClick = (sectionId: string) => {
    const sectionMap: { [key: string]: React.RefObject<HTMLElement | null> } = {
      'hero': heroRef,
      'services': servicesRef,
      'results': resultsRef,
      'profile': profileRef,
    }

    const targetRef = sectionMap[sectionId]
    if (targetRef?.current) {
      const headerOffset = 80
      const elementPosition = targetRef.current.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Services data formatted for ProfessionalCarousel
  const servicesData: CarouselItem[] = [
    {
      id: "strategy",
      title: t('portfolioV2.services.items.strategy.title'),
      description: t('portfolioV2.services.items.strategy.description'),
      features: Array.isArray(t('portfolioV2.services.items.strategy.features')) 
        ? t('portfolioV2.services.items.strategy.features') as unknown as string[]
        : [],
      image: "/strategy.jpg"
    },
    {
      id: "education",
      title: t('portfolioV2.services.items.education.title'),
      description: t('portfolioV2.services.items.education.description'),
      features: Array.isArray(t('portfolioV2.services.items.education.features'))
        ? t('portfolioV2.services.items.education.features') as unknown as string[]
        : [],
      image: "/education.jpg"
    },
    {
      id: "execution",
      title: t('portfolioV2.services.items.execution.title'),
      description: t('portfolioV2.services.items.execution.description'),
      features: Array.isArray(t('portfolioV2.services.items.execution.features'))
        ? t('portfolioV2.services.items.execution.features') as unknown as string[]
        : [],
      image: "/end_to_end.jpg"
    },
    {
      id: "talent",
      title: t('portfolioV2.services.items.talent.title'),
      description: t('portfolioV2.services.items.talent.description'),
      features: Array.isArray(t('portfolioV2.services.items.talent.features'))
        ? t('portfolioV2.services.items.talent.features') as unknown as string[]
        : [],
      image: "/ai_talent.jpg"
    }
  ]

  // State for selected service modal
  const [selectedServiceItem, setSelectedServiceItem] = useState<CarouselItem | null>(null)

  // CEO Results data
  const ceoResultsData = t('portfolioV2.results.profile.items')
  const ceoResults = Array.isArray(ceoResultsData) 
    ? ceoResultsData.map((item: any) => ({
        metric: item.metric,
        description: item.description
      }))
    : []

  // Transformative results
  const transformativeResultsData = t('portfolioV2.results.company.items')
  const transformativeResults = Array.isArray(transformativeResultsData)
    ? transformativeResultsData.map((item: any, index: number) => ({
        metric: "",
        title: item.title,
        description: item.description,
        icon: [Brain, Bot, Shield, Target, TrendingUp, Network, Users, DollarSign][index]
      }))
    : []

  // Parallax transform values
  const y1 = useTransform(heroScrollProgress, [0, 1], [0, -50])
  const y2 = useTransform(heroScrollProgress, [0, 1], [0, -100])
  const y3 = useTransform(heroScrollProgress, [0, 1], [0, -150])
  const opacity = useTransform(heroScrollProgress, [0, 0.5, 1], [1, 0.8, 0.3])
  const scale = useTransform(heroScrollProgress, [0, 1], [1, 0.95])

  // Optimized Mouse tracking with throttling
  useEffect(() => {
    let ticking = false
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const { clientX, clientY } = e
          const { innerWidth, innerHeight } = window
          mouseX.set((clientX - innerWidth / 2) / 100) // Reduced sensitivity
          mouseY.set((clientY - innerHeight / 2) / 100) // Reduced sensitivity
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer
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

    const sections = [heroRef, servicesRef, profileRef, resultsRef]
    sections.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  // Page load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  // Handle service click for modal
  const handleServiceClick = (item: CarouselItem, index: number) => {
    setSelectedServiceItem(item)
  }

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-['Poppins',sans-serif] ${isRTL ? 'rtl' : 'ltr'}`}>
      
      {/* Custom Portfolio Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrollY > 50 
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-[0_8px_32px_rgba(30,144,232,0.08)]" 
            : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo - Left Side */}
            <a href="/" className="flex items-center group cursor-pointer">
              <div className="relative">
                <div className="relative">
                  {/* Main Logo */}
                  <div className="w-20 h-20 relative group-hover:scale-105 transition-all duration-300">
                    <Image
                      src="/logo.png"
                      alt="KENSA AI"
                      width={80}
                      height={80}
                      className="w-full h-full object-contain dark:brightness-0 dark:invert"
                    />
                  </div>
                </div>
              </div>
            </a>

            {/* Right Side Controls */}
            <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {/* Language Switcher */}
              <div className="hidden lg:block">
                <SimpleLanguageSwitcher />
              </div>
              
              {/* Theme Toggle */}
              <div className="hidden lg:block">
                <ThemeToggle />
              </div>

              {/* Home Button */}
              <motion.a 
                href="/" 
                className="hidden lg:flex items-center gap-2 group cursor-pointer px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#1e90e8]/25 transition-all duration-300">
                  <motion.div
                    whileHover={{ rotate: -10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </motion.div>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-[#1e90e8] transition-colors duration-300">
                  {t('portfolioV2.header.home')}
                </span>
              </motion.a>
              
              {/* Book Consultation Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] hover:from-[#1e90e8]/90 hover:to-[#3d50e3]/90 text-white font-medium px-6 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#1e90e8]/25 text-[15px]"
                >
                  <Calendar className="w-4 h-4" />
                  {t('portfolioV2.header.bookConsultation')}
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-[#1e90e8] transition-colors"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></div>
                  <div className={`w-5 h-0.5 bg-current mt-1 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="lg:hidden overflow-hidden border-t border-gray-200/50 dark:border-gray-800/50"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="py-6 space-y-4">
                  {/* Mobile Language & Theme */}
                  <div className="flex items-center justify-center gap-4 pb-4 border-b border-gray-200/50 dark:border-gray-800/50">
                    <SimpleLanguageSwitcher />
                    <ThemeToggle />
                  </div>
                  
                  {/* Mobile Book Consultation */}
                  <Button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] hover:from-[#1e90e8]/90 hover:to-[#3d50e3]/90 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    {t('portfolioV2.header.bookConsultation')}
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Hero Section - Premium Background */}
      <motion.section 
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Ultra-Premium Background */}
        <div className="absolute inset-0">
          {/* Base gradient - Light/Dark Mode */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black"></div>
          
          {/* Animated mesh gradient */}
          <motion.div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(circle at ${20 + (mouseX.get() || 0) * 0.01}% ${30 + (mouseY.get() || 0) * 0.01}%, #1e90e8 0%, transparent 50%),
                radial-gradient(circle at ${80 - (mouseX.get() || 0) * 0.008}% ${70 - (mouseY.get() || 0) * 0.008}%, #3d50e3 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(15,23,42,0.1) 0%, transparent 50%)
              `,
              filter: 'blur(40px)'
            }}
          />
          
          {/* Floating geometric shapes */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${(i * 8.33) % 100}%`,
                  top: `${(i * 13.7) % 100}%`,
                }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              >
                <div className={`w-2 h-2 ${i % 3 === 0 ? 'bg-[#1e90e8]' : i % 3 === 1 ? 'bg-[#3d50e3]' : 'bg-gray-400 dark:bg-white'} rounded-full`}></div>
              </motion.div>
            ))}
          </div>

          {/* Static grid */}
          <div 
            className="absolute inset-0 bg-[linear-gradient(rgba(30,144,232,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"
          />
        </div>

        {/* Main Content Container - Horizontal Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
            {/* Horizontal Layout Container */}
            <div className={`grid lg:grid-cols-2 gap-12 items-center min-h-[60vh] ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
              
              {/* Left Side - Content */}
              <div className={`space-y-8 ${isRTL ? 'text-right lg:text-right lg:order-2' : 'text-left lg:text-left'}`}>
                
                {/* Enhanced Professional Tab Switcher */}
                <motion.div 
                  className="relative inline-flex backdrop-blur-2xl bg-white/10 dark:bg-black/10 rounded-2xl p-1.5 shadow-2xl border border-white/20 dark:border-white/10"
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 120 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Enhanced Morphing Background with Glow */}
                  <motion.div
                    className="absolute inset-1.5 rounded-xl shadow-xl"
                    animate={{
                      x: activeTab === 'company' ? 0 : (isRTL ? '-100%' : '100%'),
                      background: activeTab === 'company' 
                        ? "linear-gradient(135deg, #1e90e8 0%, #3d50e3 100%)"
                        : "linear-gradient(135deg, #3d50e3 0%, #1e90e8 100%)",
                      boxShadow: activeTab === 'company'
                        ? "0 8px 32px rgba(30, 144, 232, 0.4), 0 0 0 1px rgba(30, 144, 232, 0.2)"
                        : "0 8px 32px rgba(61, 80, 227, 0.4), 0 0 0 1px rgba(61, 80, 227, 0.2)"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 35,
                      duration: 0.5
                    }}
                    style={{ width: 'calc(50% - 3px)' }}
                  />

                  {/* Animated Background Particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${30 + i * 20}%`,
                        }}
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>
              
                  <motion.button
                    onClick={() => setActiveTab('company')}
                    className="relative z-10 group px-6 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 min-w-[120px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Button Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        background: activeTab === 'company' 
                          ? "radial-gradient(circle, rgba(30,144,232,0.2) 0%, transparent 70%)"
                          : "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)"
                      }}
                    />
                    
                    <motion.span 
                      className={`flex items-center justify-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                      animate={{
                        color: activeTab === 'company' ? '#ffffff' : '#64748b',
                        textShadow: activeTab === 'company' ? '0 0 20px rgba(255,255,255,0.5)' : 'none'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: activeTab === 'company' ? [0, 12, 0] : 0,
                          scale: activeTab === 'company' ? 1.2 : 1,
                          filter: activeTab === 'company' ? 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' : 'none'
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 20,
                          rotate: { duration: 2, repeat: activeTab === 'company' ? Infinity : 0 }
                        }}
                      >
                        <Crown className="w-5 h-5" />
                      </motion.div>
                      <motion.span
                        animate={{
                          letterSpacing: activeTab === 'company' ? '0.08em' : '0.025em',
                          fontWeight: activeTab === 'company' ? 800 : 700
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {t('portfolioV2.hero.tabs.company')}
                      </motion.span>
                    </motion.span>

                    {/* Active State Indicator */}
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                      animate={{
                        opacity: activeTab === 'company' ? 1 : 0,
                        scale: activeTab === 'company' ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
              
                  <motion.button
                    onClick={() => setActiveTab('profile')}
                    className="relative z-10 group px-6 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 min-w-[120px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Button Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        background: activeTab === 'profile' 
                          ? "radial-gradient(circle, rgba(61,80,227,0.2) 0%, transparent 70%)"
                          : "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)"
                      }}
                    />
                    
                    <motion.span 
                      className={`flex items-center justify-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                      animate={{
                        color: activeTab === 'profile' ? '#ffffff' : '#64748b',
                        textShadow: activeTab === 'profile' ? '0 0 20px rgba(255,255,255,0.5)' : 'none'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: activeTab === 'profile' ? [0, -12, 0] : 0,
                          scale: activeTab === 'profile' ? 1.2 : 1,
                          filter: activeTab === 'profile' ? 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' : 'none'
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 20,
                          rotate: { duration: 2.5, repeat: activeTab === 'profile' ? Infinity : 0 }
                        }}
                      >
                        <Star className="w-5 h-5" />
                      </motion.div>
                      <motion.span
                        animate={{
                          letterSpacing: activeTab === 'profile' ? '0.08em' : '0.025em',
                          fontWeight: activeTab === 'profile' ? 800 : 700
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {t('portfolioV2.hero.tabs.profile')}
                      </motion.span>
                    </motion.span>

                    {/* Active State Indicator */}
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                      animate={{
                        opacity: activeTab === 'profile' ? 1 : 0,
                        scale: activeTab === 'profile' ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>

                  {/* Enhanced Border Glow */}
                  <motion.div
                    className="absolute -inset-0.5 rounded-2xl opacity-50"
                    animate={{
                      background: `conic-gradient(from 0deg, ${activeTab === 'company' ? '#1e90e8' : '#3d50e3'}, transparent, ${activeTab === 'company' ? '#3d50e3' : '#1e90e8'}, transparent, ${activeTab === 'company' ? '#1e90e8' : '#3d50e3'})`
                    }}
                    style={{ filter: 'blur(1px)' }}
                  />
                </motion.div>

                {/* Company Content */}
                <AnimatePresence mode="wait">
                  {activeTab === 'company' && (
                    <motion.div 
                      key="company"
                      className="space-y-6"
                      initial={{ opacity: 0, y: 50, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -50, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      {/* Premium Badge */}
                      <motion.div 
                        className="inline-flex items-center gap-3 px-6 py-3 backdrop-blur-xl bg-gradient-to-r from-[#1e90e8]/20 to-[#3d50e3]/20 rounded-full border border-[#1e90e8]/30 shadow-xl"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 0.8,
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 20px 40px rgba(30,144,232,0.3)"
                        }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 180, 360] }}
                          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Sparkles className="w-4 h-4 text-[#1e90e8]" />
                        </motion.div>
                        <motion.span 
                          className="text-xs font-bold text-[#1e90e8] tracking-wider"
                          animate={{ 
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                          style={{
                            background: "linear-gradient(90deg, #1e90e8, #3d50e3, #1e90e8)",
                            backgroundSize: "200% 100%",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                          }}
                        >
                          {t('portfolioV2.hero.badges.company')}
                        </motion.span>
                      </motion.div>
                      
                      {/* Title */}
                      <motion.h1 
                        className="text-4xl lg:text-6xl font-black leading-tight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                      >
                        <motion.span 
                          className="block text-gray-900 dark:text-white"
                          initial={{ y: 50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: 1.2,
                            type: "spring",
                            stiffness: 100
                          }}
                        >
                          {t('portfolioV2.hero.company.title')}
                        </motion.span>
                        <motion.span 
                          className="block bg-gradient-to-r from-[#1e90e8] via-[#3d50e3] to-[#1e90e8] bg-clip-text text-transparent"
                          initial={{ y: 50, opacity: 0, scale: 0.8 }}
                          animate={{ y: 0, opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: 1.4,
                            type: "spring",
                            stiffness: 120
                          }}
                          style={{
                            backgroundSize: "200% 100%",
                            animation: "gradient-shift 4s ease-in-out infinite"
                          }}
                        >
                          {t('portfolioV2.hero.company.subtitle')}
                        </motion.span>
                      </motion.h1>
                      
                      {/* Description */}
                      <motion.p 
                        className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                      >
                        {t('portfolioV2.hero.company.description')}
                      </motion.p>
                      
                      {/* Stats */}
                      <motion.div 
                        className="flex flex-wrap gap-6 text-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                      >
                        <motion.div 
                          className={`flex items-center gap-3 px-4 py-2 backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-full border border-white/20 ${isRTL ? 'flex-row-reverse' : ''}`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <motion.div 
                            className="w-3 h-3 bg-[#1e90e8] rounded-full"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{t('portfolioV2.hero.company.stats.solutions')}</span>
                        </motion.div>
                        <motion.div 
                          className={`flex items-center gap-3 px-4 py-2 backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-full border border-white/20 ${isRTL ? 'flex-row-reverse' : ''}`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <motion.div 
                            className="w-3 h-3 bg-[#3d50e3] rounded-full"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                          />
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{t('portfolioV2.hero.company.stats.reach')}</span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Profile Content */}
                {activeTab === 'profile' && (
                  <motion.div 
                    key="profile"
                    className="space-y-6"
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {/* Premium Badge */}
                    <motion.div 
                      className="inline-flex items-center gap-3 px-6 py-3 backdrop-blur-xl bg-gradient-to-r from-[#3d50e3]/20 to-[#1e90e8]/20 rounded-full border border-[#3d50e3]/30 shadow-xl"
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.8,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(61,80,227,0.3)"
                      }}
                    >
                      <motion.div
                        animate={{ 
                          y: [-1, 1, -1],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Crown className="w-4 h-4 text-[#3d50e3]" />
                      </motion.div>
                      <motion.span 
                        className="text-xs font-bold text-[#3d50e3] tracking-wider"
                        animate={{ 
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{
                          background: "linear-gradient(90deg, #3d50e3, #1e90e8, #3d50e3)",
                          backgroundSize: "200% 100%",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent"
                        }}
                      >
                        {t('portfolioV2.hero.badges.profile')}
                      </motion.span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1 
                      className="text-4xl lg:text-6xl font-black leading-tight"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                    >
                      <motion.span 
                        className="block text-gray-900 dark:text-white"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 1.2,
                          type: "spring",
                          stiffness: 100
                        }}
                                              >
                        {t('portfolioV2.hero.profile.name')}
                      </motion.span>
                      <motion.span 
                        className="block bg-gradient-to-r from-[#3d50e3] via-[#1e90e8] to-[#3d50e3] bg-clip-text text-transparent"
                        initial={{ x: 50, opacity: 0, scale: 0.8 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 1.4,
                          type: "spring",
                          stiffness: 120
                        }}
                        style={{
                          backgroundSize: "200% 100%",
                          animation: "gradient-shift 4s ease-in-out infinite"
                        }}
                      >
                        {t('portfolioV2.hero.profile.surname')}
                      </motion.span>
                    </motion.h1>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <motion.p 
                        className="text-lg text-[#3d50e3] font-semibold tracking-wide"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                      >
                        {t('portfolioV2.hero.profile.title')}
                      </motion.p>
                      
                      <motion.p 
                        className="text-base text-gray-600 dark:text-gray-300 leading-relaxed font-medium"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                      >
                        {t('portfolioV2.hero.profile.subtitle')}
                      </motion.p>
                      
                      <motion.p 
                        className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 2.0 }}
                      >
                        {t('portfolioV2.hero.profile.description')}
                      </motion.p>
                    </div>
                    
                    {/* Contact Info */}
                    <motion.div 
                      className="flex flex-wrap gap-4 text-xs"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.2 }}
                    >
                      {[
                        { icon: Mail, text: t('portfolioV2.hero.profile.contact.email') },
                        { icon: Phone, text: t('portfolioV2.hero.profile.contact.phone') },
                        { icon: Globe, text: t('portfolioV2.hero.profile.contact.website') }
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          className={`flex items-center gap-2 px-3 py-2 backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-full border border-white/20 ${isRTL ? 'flex-row-reverse' : ''}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: 2.4 + index * 0.1,
                            type: "spring",
                            stiffness: 300
                          }}
                          whileHover={{ 
                            scale: 1.05, 
                            y: -2,
                            backgroundColor: "rgba(61,80,227,0.1)"
                          }}
                        >
                          <motion.div
                            whileHover={{ rotate: 12, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <item.icon className="w-3 h-3 text-[#3d50e3]" />
                          </motion.div>
                          <span 
                            className="text-gray-700 dark:text-gray-300 font-medium"
                            dir={item.icon === Phone ? "ltr" : undefined}
                          >
                            {item.text}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </div>

              {/* Right Side - Image/Visual */}
              <div className={`relative lg:flex justify-center items-center ${isRTL ? 'lg:order-1' : ''}`}>
                <AnimatePresence mode="wait">
                  {activeTab === 'company' && (
                    <motion.div
                      key="company-visual"
                      className="relative group"
                      initial={{ opacity: 0, scale: 0.8, x: 50 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: -50 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      {/* KENSA AI Logo */}
                      <div className="relative w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                        {/* Logo Container */}
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src="/logo.png"
                            alt="KENSA AI Logo"
                            width={320}
                            height={320}
                            className="object-contain transition-all duration-500 ease-out group-hover:scale-110 dark:brightness-0 dark:invert"
                            priority
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'profile' && (
                    <motion.div
                      key="profile-visual"
                      className="relative group"
                      initial={{ opacity: 0, scale: 0.8, x: 50 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: -50 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      {/* CEO Image */}
                      <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                        {/* Luxury Background Glow */}
                        <div className="absolute -inset-8 bg-gradient-to-br from-[#3d50e3]/20 via-[#1e90e8]/10 to-[#3d50e3]/20 rounded-full blur-2xl animate-pulse"></div>
                        
                        {/* Main Image Container */}
                        <div className="relative h-full transform-gpu transition-all duration-500 ease-out hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-[#3d50e3]/40">
                          {/* Luxury Border Frame */}
                          <div className="absolute -inset-1 bg-gradient-to-br from-[#3d50e3]/30 via-transparent to-[#1e90e8]/30 rounded-full blur-sm"></div>
                          
                          {/* Image Frame */}
                          <div className="relative h-full overflow-hidden rounded-full border border-white/20 dark:border-white/10 bg-black/5 backdrop-blur-sm">
                            <Image
                              src="/portofolio.png"
                              alt="FatimaZahra KHOUKH - Founder & CEO of KENSA AI"
                              fill
                              sizes="(min-width: 1024px) 40vw, 80vw"
                              className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                              priority
                            />
                            
                            {/* Luxury Overlay Gradients */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/10 transition-all duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#3d50e3]/5 via-transparent to-[#1e90e8]/5 group-hover:from-[#3d50e3]/10 group-hover:to-[#1e90e8]/10 transition-all duration-500"></div>
                          </div>
                          
                          {/* Animated Ring */}
                          <motion.div
                            className="absolute -inset-2 border-2 border-[#3d50e3]/30 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Luxury CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mt-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  className="group relative overflow-hidden bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] text-white px-10 py-5 rounded-2xl font-bold text-lg tracking-wide shadow-2xl border-0"
                  style={{
                    background: "linear-gradient(135deg, #1e90e8 0%, #3d50e3 100%)",
                    boxShadow: "0 20px 40px rgba(30,144,232,0.3), inset 0 1px 0 rgba(255,255,255,0.2)"
                  }}
                >
                  {/* Ripple Effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-2xl"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ 
                      scale: 1,
                      opacity: [0, 0.3, 0],
                      transition: { duration: 0.6 }
                    }}
                  />
                  
                  {/* Magnetic Glow */}
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-[#1e90e8]/50 to-[#3d50e3]/50 rounded-3xl blur-xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.span 
                    className={`relative z-10 flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}
                    whileHover={{ letterSpacing: "0.05em" }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                    >
                      <Calendar className="w-6 h-6" />
                    </motion.div>
                    {activeTab === 'company' ? t('portfolioV2.hero.cta.primary.company') : t('portfolioV2.hero.cta.primary.profile')}
                    <motion.div
                      animate={{ 
                        x: [0, 2, 0],
                        y: [0, -2, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ 
                        x: 6, 
                        y: -6,
                        rotate: 45,
                        scale: 1.1
                      }}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </motion.span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  variant="outline"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group relative overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-black/10 border-2 border-white/30 dark:border-white/20 text-gray-900 dark:text-white px-10 py-5 rounded-2xl font-bold text-lg tracking-wide shadow-xl hover:bg-white/20 dark:hover:bg-black/20"
                >
                  {/* Hover Glow */}
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-white/20 to-white/10 dark:from-white/10 dark:to-white/5 rounded-3xl blur-xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.span 
                    className={`relative z-10 flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}
                    whileHover={{ letterSpacing: "0.05em" }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                    >
                      <Play className="w-6 h-6" />
                    </motion.div>
                    {t('portfolioV2.hero.cta.secondary')}
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
        </div>
      </motion.section>

      {/* Services Section - Grid Layout */}
      {activeTab === 'company' && (
        <section 
          ref={servicesRef}
          id="services"
          className="py-20 bg-white dark:bg-gray-900"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            {/* Section Header */}
            <div className={`text-center mb-20 transition-all duration-1000 ${
              visibleSections.has('services') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } ${isRTL ? 'rtl' : 'ltr'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1e90e8]/10 to-[#3d50e3]/10 rounded-full border border-[#1e90e8]/20 mb-6">
                <Rocket className="w-4 h-4 text-[#1e90e8] animate-bounce" />
                <span className="text-sm font-medium text-[#1e90e8]">{t('portfolioV2.services.badge')}</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {t('portfolioV2.services.title')}
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('portfolioV2.services.subtitle')}
              </p>
            </div>

            {/* Professional Services Carousel */}
            <ProfessionalCarousel
              items={servicesData}
              autoPlay={true}
              autoPlayInterval={4000}
              cardWidth={700}
              onItemClick={handleServiceClick}
              className="mb-8"
              exploreMoreText={t('portfolioV2.services.modal.exploreMore')}
            />
          </div>
        </section>
      )}

      {/* Service Modal */}
      {selectedServiceItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedServiceItem(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src={selectedServiceItem?.image || ''}
                  alt={selectedServiceItem?.title || ''}
                  fill
                  className="object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r"></div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <h3 className="text-3xl font-bold text-[#1e90e8] dark:text-[#1e90e8]">
                  {selectedServiceItem?.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {selectedServiceItem?.description}
                </p>

                {selectedServiceItem?.features && selectedServiceItem.features.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{t('portfolioV2.services.modal.keyFeatures')}</h4>
                    <ul className="space-y-3">
                      {selectedServiceItem.features!.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`relative flex items-center text-[16px] text-gray-600 dark:text-gray-300 min-h-[32px] ${isRTL ? 'text-right pr-8' : 'text-left pl-8'}`}>
                          <CheckCircle className={`w-5 h-5 text-green-500 flex-shrink-0 absolute ${isRTL ? 'right-0 top-1/2 -translate-y-1/2' : 'left-0 top-1/2 -translate-y-1/2'}`} />
                          <span className="w-full">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Section - Different content for each tab */}
      <section 
        ref={resultsRef}
        id="results"
        className="py-20 bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('results') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } ${isRTL ? 'rtl' : 'ltr'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3d50e3]/10 to-[#1e90e8]/10 rounded-full border border-[#3d50e3]/20 mb-6">
              <TrendingUp className="w-4 h-4 text-[#3d50e3] animate-pulse" />
              <span className="text-sm font-medium text-[#3d50e3]">
                {activeTab === 'profile' ? t('portfolioV2.results.badges.profile') : t('portfolioV2.results.badges.company')}
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {activeTab === 'company' ? t('portfolioV2.results.titles.company') : t('portfolioV2.results.titles.profile')}
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              {activeTab === 'company' 
                ? t('portfolioV2.results.subtitles.company')
                : t('portfolioV2.results.subtitles.profile')
              }
            </p>
          </div>

          {/* Premium Company Results */}
          {activeTab === 'company' && (
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Simplified Floating Particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#1e90e8] rounded-full opacity-20"
                    style={{
                      left: `${30 + i * 20}%`,
                      top: `${40 + i * 10}%`,
                    }}
                    animate={{
                      y: [-5, 5, -5],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 6 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 1,
                    }}
                  />
                ))}
              </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {transformativeResults.map((result, index) => (
                  <div
                    key={index}
                    className="group relative"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Simplified Card */}
                    <div
                      className="relative backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                      style={{
                        height: '320px',
                        boxShadow: hoveredCard === index 
                          ? "0 20px 40px rgba(30,144,232,0.2)"
                          : "0 10px 20px rgba(0,0,0,0.1)"
                      }}
                    >
                        {/* Simplified Content */}
                        <div className="relative p-8 h-full flex flex-col items-center justify-center text-center space-y-6">
                                                    {/* Simplified Icon */}
                          <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#1e90e8] via-[#3d50e3] to-[#1e90e8] rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-12">
                              <result.icon className="w-8 h-8 text-white transition-transform duration-300 hover:scale-110" />
                            </div>
                          </div>

                          {/* Card Title */}
                          <div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] bg-clip-text text-transparent transition-all duration-300 hover:tracking-wider">
                              {result.title}
                            </h3>
                          </div>

                          {/* Description */}
                          <div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                              {result.description}
                            </p>
                          </div>

                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CEO Results */}
          {activeTab === 'profile' && (
            <div className="space-y-12">
              {/* Transformative Results List */}
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  {t('portfolioV2.results.profile.title')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ceoResults.map((result, index) => (
                    <div
                      key={index}
                      className={`group flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 ${
                        visibleSections.has('results') 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-20 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-[#3d50e3] to-[#1e90e8] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <div>
                        <span className="font-bold text-[#3d50e3] text-lg">{result.metric}</span>
                        <span className="text-gray-600 dark:text-gray-300 ml-2">{result.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Collaborate Section */}
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {t('portfolioV2.results.profile.collaborate.title')}
                </h3>
                
                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    {t('portfolioV2.results.profile.collaborate.description1')}
                  </p>
                  <p>
                    {t('portfolioV2.results.profile.collaborate.description2')}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className={`text-center mt-20 transition-all duration-1000 ${
            visibleSections.has('results') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 border border-gray-200 dark:border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {activeTab === 'company' 
                  ? t('portfolioV2.results.cta.titles.company')
                  : t('portfolioV2.results.cta.titles.profile')
                }
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                {activeTab === 'company' 
                  ? t('portfolioV2.results.cta.descriptions.company')
                  : t('portfolioV2.results.cta.descriptions.profile')
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="group bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] hover:from-[#1e90e8]/90 hover:to-[#3d50e3]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    {activeTab === 'company' ? t('portfolioV2.results.cta.buttons.primary.company') : t('portfolioV2.results.cta.buttons.primary.profile')}
                    <ArrowUpRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12" />
                  </span>
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group px-8 py-4 rounded-xl font-semibold border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  <span className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    {t('portfolioV2.results.cta.buttons.secondary')}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Certifications Section - Only for Profile Tab */}
      {activeTab === 'profile' && (
        <section className={`py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(30,144,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3d50e3]/10 to-[#1e90e8]/10 rounded-full border border-[#3d50e3]/20 mb-6">
                <Award className="w-4 h-4 text-[#3d50e3] animate-pulse" />
                <span className="text-sm font-medium text-[#3d50e3]">{t('portfolioV2.certifications.badge')}</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {t('portfolioV2.certifications.title')}
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {t('portfolioV2.certifications.description')}
              </p>
            </motion.div>

            {/* Certificates Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {Array.isArray(t('portfolioV2.certifications.certificates')) && 
                (t('portfolioV2.certifications.certificates') as unknown as any[]).map((certificate: any, index: number) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 group-hover:shadow-3xl transition-all duration-500">
                    {/* Premium Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#3d50e3]/20 to-[#1e90e8]/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative">
                      {/* Certificate Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={index === 0 ? "/certif_1.png" : "/certif_2.png"}
                          alt={certificate.title}
                          fill
                          className="object-cover transition-all duration-500 group-hover:scale-105"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Certificate Badge */}
                        <div className="absolute top-6 left-6">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
                            {index === 0 ? <Crown className="w-4 h-4 text-[#3d50e3]" /> : <Sparkles className="w-4 h-4 text-[#1e90e8]" />}
                            <span className="text-sm font-bold text-[#3d50e3] tracking-wider">{certificate.badge}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Certificate Details */}
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                              {certificate.title}
                            </h3>
                            <p className="text-[#3d50e3] font-semibold mb-1">
                              {certificate.subtitle}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {certificate.organization}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 ${index === 0 ? 'bg-green-500' : 'bg-blue-500'} rounded-full animate-pulse`}></div>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{certificate.status}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {certificate.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mission Statement & Impact */}
            <motion.div
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#3d50e3] to-[#1e90e8] rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {t('portfolioV2.certifications.mission.title')}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('portfolioV2.certifications.mission.subtitle')}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {Array.isArray(t('portfolioV2.certifications.mission.stats')) &&
                    (t('portfolioV2.certifications.mission.stats') as unknown as any[]).map((stat: any, index: number) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#3d50e3] to-[#1e90e8] bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t('portfolioV2.certifications.mission.description')}
                    <strong className="text-[#3d50e3]"> {t('portfolioV2.certifications.mission.callToAction')}</strong>
                  </p>
                  
                  <motion.div
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3d50e3] to-[#1e90e8] text-white rounded-full font-semibold shadow-lg cursor-pointer text-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(61,80,227,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Rocket className="w-5 h-5" />
                    <span>{t('portfolioV2.certifications.mission.button')}</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Video Demo Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              className="relative bg-black rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[80vh]"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm border border-white/20"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Video Container */}
              <div className="relative aspect-video w-full">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  preload="metadata"
                  poster="/demo.png"
                >
                  <source src="/demo_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Info */}
              <div className="p-6 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{t('portfolioV2.videoModal.title')}</h3>
                    <p className="text-gray-300 text-sm">{t('portfolioV2.videoModal.description')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}