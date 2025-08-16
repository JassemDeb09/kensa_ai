"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import ReactCountryFlag from "react-country-flag"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
  { code: 'en' as const, name: 'English', countryCode: 'US' },
  { code: 'fr' as const, name: 'Français', countryCode: 'FR' },
  { code: 'ar' as const, name: 'Arabic', countryCode: 'SA' }
]

export function SimpleLanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const currentLanguage = languages.find(lang => lang.code === language)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-auto h-9 px-2">
          <span className="hidden sm:inline-flex items-center">
            <ReactCountryFlag
              countryCode={currentLanguage?.countryCode || 'US'}
              svg
              style={{
                width: '1.5em',
                height: '1.5em',
                marginRight: '0.5rem'
              }}
            />
            <span>{currentLanguage?.name}</span>
          </span>
          <span className="sm:hidden">
            <ReactCountryFlag
              countryCode={currentLanguage?.countryCode || 'US'}
              svg
              style={{
                width: '1.5em',
                height: '1.5em',
              }}
            />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer ${language === lang.code ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
          >
            <ReactCountryFlag
              countryCode={lang.countryCode}
              svg
              style={{
                width: '1.5em',
                height: '1.5em',
                marginRight: '0.75rem'
              }}
            />
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
