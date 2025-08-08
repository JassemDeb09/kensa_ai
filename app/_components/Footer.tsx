"use client"

import Image from "next/image"
import { Facebook, Twitter, Linkedin, ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function Footer() {
  const { t } = useLanguage()

  const services = [
    t("services.items.audit.title"),
    t("services.items.integration.title"),
    t("services.items.automation.title"),
    t("services.items.training.title"),
  ]

  const industries = [
    t("industries.items.manufacturing.title"),
    t("industries.items.finance.title"),
    t("industries.items.retail.title"),
    t("industries.items.smartCities.title"),
    t("industries.items.digital.title"),
  ]

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Image 
                src="/logo.png" 
                alt="KENSA AI" 
                width={120} 
                height={40} 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4">
              {t("footer.description")}
            </p>
            <p className="text-gray-300 mb-4">{t("footer.location")}</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors group">
                <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors group">
                <Twitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors group">
                <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">{t("nav.services")}</h3>
            <div className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <p key={index} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-purple-400" aria-hidden />
                  <span>{service}</span>
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">{t("industries.title")}</h3>
            <div className="space-y-2 text-gray-300">
              {industries.map((industry, index) => (
                <p key={index} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-purple-400" aria-hidden />
                  <span>{industry}</span>
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">{t("nav.contact")}</h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-2">
                <span>📧</span> {t("footer.contact.email")}
              </p>
              <p className="flex items-center gap-2">
                <span>📱</span> {t("footer.contact.phone")}
              </p>
              <p className="flex items-center gap-2">
                <span>🌍</span> {t("footer.contact.location")}
              </p>
              <p className="flex items-center gap-2">
                <span>⏰</span> {t("footer.contact.hours")}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            {t("footer.copyright")} | 
            <span className="hover:text-white cursor-pointer transition-colors"> {t("footer.legal.privacy")}</span> |
            <span className="hover:text-white cursor-pointer transition-colors"> {t("footer.legal.terms")}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
