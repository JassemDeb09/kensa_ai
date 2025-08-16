"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'
import enTranslations from '../translations/en.json'
import frTranslations from '../translations/fr.json'
import arTranslations from '../translations/ar.json'

type Language = 'en' | 'fr' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations loaded from JSON files
const translations = {
  en: enTranslations,
  fr: frTranslations,
  ar: arTranslations
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isRTL = language === 'ar'

  const t = (key: string): any => {
    // Return the key during SSR to avoid hydration mismatches
    if (!mounted) return key
    
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  // Update document direction when language changes
  React.useEffect(() => {
    if (mounted) {
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
      document.documentElement.lang = language
    }
  }, [language, isRTL, mounted])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
