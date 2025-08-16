"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from '@/contexts/LanguageContext'
import { useState, useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { Header } from "@/app/_components/Header"
import { Footer } from "@/app/_components/Footer"
import { ClientOnly } from "@/components/client-only"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowUpRight, 
  Lightbulb, 
  DollarSign, 
  Globe, 
  Rocket, 
  GraduationCap, 
  Cog, 
  Users, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Shield, 
  Zap, 
  Crown, 
  Star,
  Calendar,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  Play,
  Award,
  Brain,
  Database,
  Cloud,
  Bot,
  Cpu,
  Network,
  Lock
} from "lucide-react"

export default function PortfolioPage() {
  const { t, isRTL } = useLanguage()
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('company')
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [currentMetric, setCurrentMetric] = useState(0)
  
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const resultsRef = useRef<HTMLElement>(null)
  const profileRef = useRef<HTMLElement>(null)

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

  // Mouse tracking and scroll effects
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

  // Intersection Observer for animations
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

    const sections = [heroRef, servicesRef, resultsRef, profileRef]
    sections.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  // Auto-cycle metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric(prev => (prev + 1) % 8)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Helper function to get array from translations
  const getTranslationArray = (key: string): string[] => {
    const value = t(key)
    return Array.isArray(value) ? value : []
  }

  const services = [
    {
      icon: Target,
      title: t('portfolio_2.services.items.0.title'),
      description: t('portfolio_2.services.items.0.description'),
      features: getTranslationArray('portfolio_2.services.items.0.features'),
      color: "from-[#1e90e8] to-[#3d50e3]"
    },
    {
      icon: GraduationCap,
      title: t('portfolio_2.services.items.1.title'),
      description: t('portfolio_2.services.items.1.description'),
      features: getTranslationArray('portfolio_2.services.items.1.features'),
      color: "from-[#3d50e3] to-[#1e90e8]"
    },
    {
      icon: Cog,
      title: t('portfolio_2.services.items.2.title'),
      description: t('portfolio_2.services.items.2.description'),
      features: getTranslationArray('portfolio_2.services.items.2.features'),
      color: "from-[#1e90e8] to-[#3d50e3]"
    },
    {
      icon: Users,
      title: t('portfolio_2.services.items.3.title'),
      description: t('portfolio_2.services.items.3.description'),
      features: getTranslationArray('portfolio_2.services.items.3.features'),
      color: "from-[#3d50e3] to-[#1e90e8]"
    }
  ]

  const transformativeResults = [
    { metric: t('portfolio_2.results.metrics.0.value'), description: t('portfolio_2.results.metrics.0.description'), icon: Brain },
    { metric: t('portfolio_2.results.metrics.1.value'), description: t('portfolio_2.results.metrics.1.description'), icon: Bot },
    { metric: t('portfolio_2.results.metrics.2.value'), description: t('portfolio_2.results.metrics.2.description'), icon: Shield },
    { metric: t('portfolio_2.results.metrics.3.value'), description: t('portfolio_2.results.metrics.3.description'), icon: Target },
    { metric: t('portfolio_2.results.metrics.4.value'), description: t('portfolio_2.results.metrics.4.description'), icon: TrendingUp },
    { metric: t('portfolio_2.results.metrics.5.value'), description: t('portfolio_2.results.metrics.5.description'), icon: Network },
    { metric: t('portfolio_2.results.metrics.6.value'), description: t('portfolio_2.results.metrics.6.description'), icon: Users },
    { metric: t('portfolio_2.results.metrics.7.value'), description: t('portfolio_2.results.metrics.7.description'), icon: DollarSign }
  ]

  return (
    <div className={`min-h-screen overflow-hidden transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-black text-white' 
        : 'bg-white text-gray-900'
    } ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <Header scrollY={scrollY} onSectionClick={handleSectionClick} />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Ultra-Premium Background */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className={`absolute inset-0 transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-black via-gray-900 to-black' 
              : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
          }`}></div>
          
          <ClientOnly>
            {/* Animated mesh gradient */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: `
                  radial-gradient(circle at ${20 + mousePosition.x * 0.01}% ${30 + mousePosition.y * 0.01}%, #1e90e8 0%, transparent 50%),
                  radial-gradient(circle at ${80 - mousePosition.x * 0.008}% ${70 - mousePosition.y * 0.008}%, #3d50e3 0%, transparent 50%),
                  radial-gradient(circle at 50% 50%, #0f172a 0%, transparent 50%)
                `,
                filter: 'blur(40px)'
              }}
            ></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-pulse"
                  style={{
                    left: `${(i * 8.33) % 100}%`,
                    top: `${(i * 13.7) % 100}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + (i % 3)}s`
                  }}
                >
                  <div className={`w-2 h-2 ${i % 3 === 0 ? 'bg-[#1e90e8]' : i % 3 === 1 ? 'bg-[#3d50e3]' : 'bg-white'} rounded-full opacity-20`}></div>
                </div>
              ))}
            </div>

            {/* Dynamic grid */}
            <div 
              className="absolute inset-0 bg-[linear-gradient(rgba(30,144,232,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.1)_1px,transparent_1px)] bg-[size:60px_60px] transition-transform duration-1000"
              style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.05}deg)` }}
            ></div>
          </ClientOnly>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <div className={`space-y-12 transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            
            {/* Tab Switcher */}
            <div className="flex justify-center mb-16">
              <div className={`relative backdrop-blur-2xl rounded-full p-2 border transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-black/5 border-black/10'
              }`}>
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('company')}
                    className={`relative px-8 py-4 rounded-full font-medium transition-all duration-500 ${
                      activeTab === 'company' 
                        ? theme === 'dark' ? 'text-white' : 'text-white'
                        : theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {activeTab === 'company' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full transition-all duration-500"></div>
                    )}
                    <span className={`relative flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Crown className="w-5 h-5" />
                      {t('portfolio_2.tabs.company')}
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`relative px-8 py-4 rounded-full font-medium transition-all duration-500 ${
                      activeTab === 'profile' 
                        ? theme === 'dark' ? 'text-white' : 'text-white'
                        : theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {activeTab === 'profile' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3d50e3] to-[#1e90e8] rounded-full transition-all duration-500"></div>
                    )}
                    <span className={`relative flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Star className="w-5 h-5" />
                      {t('portfolio_2.tabs.profile')}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Company Portfolio Content */}
            {activeTab === 'company' && (
              <div className="space-y-12">
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#1e90e8]/20 via-[#3d50e3]/10 to-[#1e90e8]/20 border-2 border-[#1e90e8]/50 backdrop-blur-2xl hover:scale-105 transition-all duration-500 group shadow-2xl shadow-[#1e90e8]/20">
                  <Sparkles className="w-6 h-6 text-[#1e90e8] group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-[#1e90e8] font-bold tracking-wider text-lg">{t('portfolio_2.company.badge')}</span>
                  <Rocket className="w-6 h-6 text-[#1e90e8] group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Main Title */}
                <div className="space-y-8">
                  <h1 className="text-[64px] lg:text-[96px] font-extralight tracking-[-0.05em] leading-[0.8]">
                    <span className={`block bg-gradient-to-r bg-clip-text text-transparent transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'from-white via-gray-100 to-white' 
                        : 'from-gray-900 via-gray-700 to-gray-900'
                    }`}>
                      {t('portfolio_2.company.title')}
                    </span>
                    <span className="block bg-gradient-to-r from-[#1e90e8] via-[#3d50e3] to-[#1e90e8] bg-clip-text text-transparent font-light"
                          style={{ 
                            backgroundSize: '400% 400%',
                            animation: 'gradient-wave 6s ease-in-out infinite'
                          }}>
                      {t('portfolio_2.company.subtitle')}
                    </span>
                  </h1>
                  
                  <p className={`text-[24px] lg:text-[32px] font-light max-w-4xl mx-auto leading-relaxed transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {t('portfolio_2.company.description').split('AI Transformation')[0]}
                    <span className="text-[#1e90e8] font-medium">AI Transformation</span>
                    {t('portfolio_2.company.description').split('AI Transformation')[1] || ''}
                  </p>
                  
                  <p className={`text-[18px] max-w-3xl mx-auto transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {t('portfolio_2.company.tagline')}
                  </p>
                </div>

                {/* Key Stats */}
                <div className="flex flex-wrap justify-center gap-8 text-center">
                  <div className="group">
                    <div className="text-[#1e90e8] text-3xl font-bold">💰</div>
                    <div className={`font-semibold transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{t('portfolio_2.company.stats.solutions')}</div>
                  </div>
                  <div className="group">
                    <div className="text-[#3d50e3] text-3xl font-bold">🌐</div>
                    <div className={`font-semibold transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{t('portfolio_2.company.stats.reach')}</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button
                    onClick={() => handleSectionClick('services')}
                    className="group relative px-12 py-6 text-lg font-semibold bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] hover:from-[#1e90e8]/90 hover:to-[#3d50e3]/90 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#1e90e8]/30 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className={`relative flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Calendar className="w-6 h-6" />
                      {t('portfolio_2.company.cta.primary')}
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </Button>
                  
                  <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-[#1e90e8] transition-colors duration-300">
                      <Globe className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#1e90e8] transition-colors duration-300">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* CEO Profile Content */}
            {activeTab === 'profile' && (
              <div className="space-y-12">
                {/* Profile Badge */}
                <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#3d50e3]/20 via-[#1e90e8]/10 to-[#3d50e3]/20 border-2 border-[#3d50e3]/50 backdrop-blur-2xl hover:scale-105 transition-all duration-500 group shadow-2xl shadow-[#3d50e3]/20">
                  <Crown className="w-6 h-6 text-[#3d50e3] group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-[#3d50e3] font-bold tracking-wider text-lg">{t('portfolio_2.profile.badge')}</span>
                  <Star className="w-6 h-6 text-[#3d50e3] group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Profile Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Left: Content */}
                  <div className={`space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div>
                      <h1 className="text-[48px] lg:text-[64px] font-extralight tracking-[-0.04em] leading-[0.8] mb-4">
                        <span className={`block transition-colors duration-300 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{t('portfolio_2.profile.name')}</span>
                        <span className="block bg-gradient-to-r from-[#3d50e3] to-[#1e90e8] bg-clip-text text-transparent font-light">{t('portfolio_2.profile.surname')}</span>
                      </h1>
                      <p className="text-[20px] text-[#3d50e3] font-medium mb-6">
                        {t('portfolio_2.profile.title')}
                      </p>
                      <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {t('portfolio_2.profile.tagline')}
                      </p>
                    </div>

                    <p className={`leading-relaxed transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {t('portfolio_2.profile.description')}
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-4">
                      <div className={`flex items-center gap-3 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      } ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Mail className="w-5 h-5 text-[#3d50e3]" />
                        <span>{t('portfolio_2.profile.contact.email')}</span>
                      </div>
                      <div className={`flex items-center gap-3 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      } ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Phone className="w-5 h-5 text-[#3d50e3]" />
                        <span>{t('portfolio_2.profile.contact.phone')}</span>
                      </div>
                      <div className={`flex items-center gap-3 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      } ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Globe className="w-5 h-5 text-[#3d50e3]" />
                        <span>{t('portfolio_2.profile.contact.website')}</span>
                      </div>
                    </div>
                  </div>

                                     {/* Right: Luxury Animated Image */}
                   <div className="relative group">
                     {/* Luxury Background Glow */}
                     <div className="absolute -inset-8 bg-gradient-to-br from-[#3d50e3]/20 via-[#1e90e8]/10 to-[#3d50e3]/20 rounded-full blur-2xl animate-pulse"></div>
                     
                     {/* Main Image Container with 3D Effects */}
                     <Card className="relative aspect-[3/4] max-w-sm mx-auto bg-transparent border-0 overflow-visible">
                       {/* 3D Tilt Container */}
                       <div className="relative h-full transform-gpu transition-all duration-500 ease-out hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-[#3d50e3]/40 group-hover:z-10">
                         {/* Luxury Border Frame */}
                         <div className="absolute -inset-1 bg-gradient-to-br from-[#3d50e3]/30 via-transparent to-[#1e90e8]/30 rounded-3xl blur-sm"></div>
                         
                         {/* Image Frame */}
                         <div className="relative h-full overflow-hidden rounded-3xl border border-white/20 bg-black/5 backdrop-blur-sm">
                           {/* Luxury Shimmer Effect */}
                           <div className="absolute inset-0 overflow-hidden rounded-3xl">
                             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-pulse"></div>
                           </div>
                           
                           {/* CEO Image */}
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
                           
                           {/* Luxury Corner Accents */}
                           <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#3d50e3]/40 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                           <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#1e90e8]/40 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                           <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#1e90e8]/40 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                           <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#3d50e3]/40 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                         </div>
                         
                         {/* Luxury Depth Shadow */}
                         <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-black/20 group-hover:shadow-3xl group-hover:shadow-[#3d50e3]/30 transition-all duration-500 -z-10"></div>
                       </div>
                       
                       {/* Floating Luxury Particles */}
                       <div className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                         <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#3d50e3] rounded-full animate-bounce"></div>
                         <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#1e90e8] rounded-full animate-pulse"></div>
                         <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-ping"></div>
                         <div className="absolute top-1/3 left-1/2 w-0.5 h-0.5 bg-[#3d50e3]/60 rounded-full animate-spin"></div>
                       </div>
                     </Card>
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section - Only show for company tab */}
      {activeTab === 'company' && (
        <section 
          ref={servicesRef}
          id="services"
          className={`relative py-32 transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-gradient-to-b from-black via-gray-900/50 to-black' 
              : 'bg-gradient-to-b from-gray-50 via-white/50 to-gray-50'
          }`}
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections.has('services') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1e90e8]/10 border border-[#1e90e8]/30 mb-8">
                <Rocket className="w-5 h-5 text-[#1e90e8]" />
                <span className="text-[#1e90e8] font-semibold">{t('portfolio_2.services.badge')}</span>
              </div>
              
              <h2 className={`text-[48px] lg:text-[64px] font-extralight tracking-[-0.03em] mb-6 leading-tight transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {t('portfolio_2.services.title').split('AI Solutions')[0]}
                <span className="bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] bg-clip-text text-transparent">AI Solutions</span>
                {t('portfolio_2.services.title').split('AI Solutions')[1] || ''}
              </h2>
              
              <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {t('portfolio_2.services.subtitle')}
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    visibleSections.has('services') 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <Card className={`relative h-full backdrop-blur-xl rounded-3xl p-8 hover:border-[#1e90e8]/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#1e90e8]/20 overflow-hidden ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10' 
                      : 'bg-gradient-to-br from-black/5 to-black/[0.02] border border-black/10'
                  }`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,#1e90e8_1px,transparent_1px),linear-gradient(-45deg,#3d50e3_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    </div>
                    
                    <CardContent className="relative space-y-6 p-0">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className={`text-2xl font-semibold group-hover:text-[#1e90e8] transition-colors duration-300 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {service.title}
                        </h3>
                        <p className={`leading-relaxed transition-colors duration-300 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Features */}
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-full"></div>
                            <span className={`text-sm transition-colors duration-300 ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Hover Arrow */}
                      <div className="flex justify-end">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <ChevronRight className="w-5 h-5 text-[#1e90e8]" />
                        </div>
                      </div>
                    </CardContent>
                    
                    {/* Hover Glow */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#1e90e8]/10 via-[#3d50e3]/10 to-[#1e90e8]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results Section - Show for both tabs but with different content */}
      <section 
        ref={resultsRef}
        id="results"
        className={`relative py-32 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-black' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections.has('results') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#3d50e3]/10 border border-[#3d50e3]/30 mb-8">
              <TrendingUp className="w-5 h-5 text-[#3d50e3]" />
              <span className="text-[#3d50e3] font-semibold">{t('portfolio_2.results.badge')}</span>
            </div>
            
            <h2 className={`text-[48px] lg:text-[64px] font-extralight tracking-[-0.03em] mb-6 leading-tight transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t('portfolio_2.results.title').split('Impact')[0]}
              <span className="bg-gradient-to-r from-[#3d50e3] to-[#1e90e8] bg-clip-text text-transparent">Impact</span>
              {t('portfolio_2.results.title').split('Impact')[1] || ''}
            </h2>
            
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {activeTab === 'company' 
                ? t('portfolio_2.results.subtitle.company')
                : t('portfolio_2.results.subtitle.profile')
              }
            </p>
          </div>

          {/* Dynamic Results Display */}
          <div className="relative">
            {/* Main Featured Result */}
            <div className="text-center mb-16">
              <Card className={`relative max-w-4xl mx-auto backdrop-blur-2xl rounded-3xl p-12 hover:border-[#3d50e3]/50 transition-all duration-500 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20' 
                  : 'bg-gradient-to-br from-black/10 to-black/5 border border-black/20'
              }`}>
                <CardContent className="space-y-6 p-0">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#3d50e3] to-[#1e90e8] flex items-center justify-center">
                      {transformativeResults[currentMetric] && 
                        React.createElement(transformativeResults[currentMetric].icon, { className: "w-10 h-10 text-white" })
                      }
                    </div>
                  </div>
                  
                  <div className="text-[64px] lg:text-[80px] font-extralight bg-gradient-to-r from-[#3d50e3] to-[#1e90e8] bg-clip-text text-transparent leading-none">
                    {transformativeResults[currentMetric]?.metric}
                  </div>
                  
                  <p className={`text-xl leading-relaxed max-w-2xl mx-auto transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {transformativeResults[currentMetric]?.description}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {transformativeResults.map((result, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 ${
                    index === currentMetric ? 'scale-105' : 'hover:scale-105'
                  } ${
                    visibleSections.has('results') 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onClick={() => setCurrentMetric(index)}
                >
                  <Card className={`relative h-48 backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-white/5 to-white/[0.02]' 
                      : 'bg-gradient-to-br from-black/5 to-black/[0.02]'
                  } ${
                    index === currentMetric 
                      ? 'border-[#3d50e3]/50 shadow-lg shadow-[#3d50e3]/20' 
                      : theme === 'dark' 
                        ? 'border-white/10 hover:border-[#3d50e3]/30' 
                        : 'border-black/10 hover:border-[#3d50e3]/30'
                  }`}>
                    <CardContent className="relative h-full flex flex-col justify-between p-0">
                      <div className="flex justify-between items-start">
                        <result.icon className={`w-6 h-6 transition-colors duration-300 ${
                          index === currentMetric ? 'text-[#3d50e3]' : 'text-gray-400'
                        }`} />
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentMetric ? 'bg-[#3d50e3]' : 'bg-gray-600'
                        }`}></div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className={`text-2xl font-bold transition-colors duration-300 ${
                          index === currentMetric 
                            ? 'text-[#3d50e3]' 
                            : theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {result.metric}
                        </div>
                        <p className={`text-sm leading-tight line-clamp-3 transition-colors duration-300 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {result.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Show for both tabs */}
      <section className={`relative py-32 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-black via-gray-900/30 to-black' 
          : 'bg-gradient-to-b from-gray-50 via-white/30 to-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1e90e8]/10 border border-[#1e90e8]/30 mb-8">
                <Award className="w-5 h-5 text-[#1e90e8]" />
                <span className="text-[#1e90e8] font-semibold">
                  {activeTab === 'company' 
                    ? t('portfolio_2.whyChoose.badge.company')
                    : t('portfolio_2.whyChoose.badge.profile')
                  }
                </span>
              </div>
              
              <h2 className={`text-[48px] lg:text-[64px] font-extralight tracking-[-0.03em] mb-8 leading-tight transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {activeTab === 'company' ? (
                  <>
                    {t('portfolio_2.whyChoose.title.company').split('Excellence')[0]}
                    <span className="bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] bg-clip-text text-transparent">Excellence</span>
                    {t('portfolio_2.whyChoose.title.company').split('Excellence')[1] || ''}
                  </>
                ) : (
                  <>
                    {t('portfolio_2.whyChoose.title.profile').split('Leadership')[0]}
                    <span className="bg-gradient-to-r from-[#3d50e3] to-[#1e90e8] bg-clip-text text-transparent">Leadership</span>
                    {t('portfolio_2.whyChoose.title.profile').split('Leadership')[1] || ''}
                  </>
                )}
              </h2>
              
              <p className={`text-xl max-w-4xl mx-auto leading-relaxed transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {activeTab === 'company' 
                  ? t('portfolio_2.whyChoose.description.company')
                  : t('portfolio_2.whyChoose.description.profile')
                }
              </p>
            </div>

            {/* Final CTA */}
            <div className="space-y-8">
              <p className={`text-2xl font-light transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {activeTab === 'company' 
                  ? t('portfolio_2.whyChoose.cta.company')
                  : t('portfolio_2.whyChoose.cta.profile')
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  className="group relative px-12 py-6 text-lg font-semibold bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] hover:from-[#1e90e8]/90 hover:to-[#3d50e3]/90 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#1e90e8]/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className={`relative flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Mail className="w-6 h-6" />
                    {activeTab === 'company' 
                      ? t('portfolio_2.company.cta.start')
                      : t('portfolio_2.profile.cta.connect')
                    }
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Button>
                
                <Button
                  variant="outline"
                  className={`px-12 py-6 text-lg font-semibold border-2 rounded-full transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'border-white/20 text-white hover:bg-white/10' 
                      : 'border-black/20 text-gray-900 hover:bg-black/10'
                  }`}
                >
                  <span className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Play className="w-5 h-5" />
                    {t('portfolio_2.company.cta.secondary')}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-wave {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Professional Image Animations */
        .image-container.animate-in .image-main-container {
          animation: imageSlideIn 1.2s ease-out forwards;
        }
        
        .image-main-container {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        .image-container.animate-in .animate-fade-in-delayed {
          animation: fadeInDelayed 1.5s ease-out 0.3s forwards;
        }

        .image-container.animate-in .animate-glow-pulse {
          animation: glowPulse 2s ease-out 0.5s forwards;
        }

        .image-container.animate-in .animate-glow-secondary {
          animation: glowSecondary 1.8s ease-out 0.7s forwards;
        }



        @keyframes imageSlideIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(50px);
          }
          60% {
            opacity: 0.8;
            transform: scale(1.05) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes fadeInDelayed {
          0% { opacity: 0; }
          100% { opacity: 0.6; }
        }

        @keyframes glowPulse {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.2);
          }
          100% {
            opacity: 0.7;
            transform: scale(1);
          }
        }

        @keyframes glowSecondary {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
        }



        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes spinReverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes floatParticle1 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
        }

        @keyframes floatParticle2 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-15px) translateX(-8px); opacity: 0.7; }
        }

        @keyframes floatParticle3 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          50% { transform: translateY(-10px) translateX(5px); opacity: 0.6; }
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spinReverse 15s linear infinite;
        }

        .animate-spin-slow-delayed {
          animation: spinSlow 25s linear infinite 2s;
        }

        .animate-float-particle-1 {
          animation: floatParticle1 4s ease-in-out infinite;
        }

        .animate-float-particle-2 {
          animation: floatParticle2 5s ease-in-out infinite 1s;
        }

        .animate-float-particle-3 {
          animation: floatParticle3 6s ease-in-out infinite 2s;
        }
        
        /* Luxury Image Animations - Accessibility Support */
        .perspective-1000 {
          perspective: 1000px;
        }
        
        /* Custom 3D shadow for luxury effect */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in,
          .animate-float-y,
          .animate-luxury-glow,
          .animate-shimmer-luxury,
          .animate-parallax-tilt {
            animation: none !important;
          }
          
          .perspective-1000 {
            perspective: none !important;
          }
          
          .hover\\:animate-parallax-tilt:hover {
            animation: none !important;
            transform: scale(1.02) !important;
          }
          
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  )
}