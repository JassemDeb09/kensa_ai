"use client"

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import ReactCountryFlag from "react-country-flag"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
  { code: 'en', name: 'English', countryCode: 'US' },
  { code: 'fr', name: 'Français', countryCode: 'FR' },
  { code: 'ar', name: 'Arabic', countryCode: 'SA' }
]

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const currentLanguage = languages.find(lang => lang.code === locale)

  const switchLanguage = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-auto h-9 px-2">
          <span className="hidden sm:inline-flex items-center">
            <ReactCountryFlag
              countryCode={currentLanguage?.countryCode || 'US'}
              svg
              style={{
                width: '1.2em',
                height: '1.2em',
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
                width: '1.2em',
                height: '1.2em',
              }}
            />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLanguage(language.code)}
            className={`cursor-pointer ${locale === language.code ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
          >
            <ReactCountryFlag
              countryCode={language.countryCode}
              svg
              style={{
                width: '1.2em',
                height: '1.2em',
                marginRight: '0.75rem'
              }}
            />
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
