"use client"

import Image from "next/image"
import { Facebook, Twitter, Linkedin, ChevronRight, Bot, Mail, Phone, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function Footer() {
  const { t, isRTL } = useLanguage()

  const services = [
    t("services.items.audit.title") || "AI Strategy & Consulting",
    t("services.items.integration.title") || "Custom AI Development", 
    t("services.items.automation.title") || "AI Integration & Deployment",
    t("services.items.training.title") || "AI Training & Support",
  ]

  const industries = [
    t("industries.items.manufacturing.title") || "Manufacturing",
    t("industries.items.finance.title") || "Financial Services",
    t("industries.items.retail.title") || "Retail & E-commerce",
    t("industries.items.smartCities.title") || "Smart Cities",
    t("industries.items.digital.title") || "Digital Transformation",
  ]

  return (
    <footer id="contact" className={`relative bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-20 overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* AI Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,144,232,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* AI Gradient Overlays */}
      <div className={`absolute top-0 w-96 h-96 rounded-full blur-3xl ${
        isRTL 
          ? 'right-0 bg-gradient-to-l from-[#1e90e8]/10 to-[#3d50e3]/10 dark:from-[#1e90e8]/5 dark:to-[#3d50e3]/5' 
          : 'left-0 bg-gradient-to-r from-[#1e90e8]/10 to-[#3d50e3]/10 dark:from-[#1e90e8]/5 dark:to-[#3d50e3]/5'
      }`}></div>
      <div className={`absolute bottom-0 w-80 h-80 rounded-full blur-3xl ${
        isRTL 
          ? 'left-0 bg-gradient-to-l from-[#3d50e3]/10 to-[#1e90e8]/10 dark:from-[#3d50e3]/5 dark:to-[#1e90e8]/5' 
          : 'right-0 bg-gradient-to-r from-[#3d50e3]/10 to-[#1e90e8]/10 dark:from-[#3d50e3]/5 dark:to-[#1e90e8]/5'
      }`}></div>
      
      <div className={`relative max-w-[1400px] mx-auto px-8 lg:px-12 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className={`md:col-span-1 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="mb-6">
              {/* Company Logo */}
              <div className="relative group">
                <div className="w-32 h-32 relative hover:scale-105 transition-all duration-300">
                  <Image
                    src="/logo.png"
                    alt="KENSA AI"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain dark:brightness-0 dark:invert"
                  />
                </div>

              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-[15px]">
              {t("footer.description") || "Leading AI transformation partner helping Fortune 500 companies unlock the power of artificial intelligence for measurable business growth."}
            </p>
            
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-[14px]">
              {t("footer.location") || "Toronto, Canada • Global Reach"}
            </p>
            
            {/* Social Links */}
            <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
              <a href="#" className="w-12 h-12 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 group shadow-lg">
                <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform flex-shrink-0" />
              </a>
              <a href="#" className="w-12 h-12 bg-gradient-to-r from-[#3d50e3] to-[#1e90e8] rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 group shadow-lg">
                <Twitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform flex-shrink-0" />
              </a>
              <a href="#" className="w-12 h-12 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 group shadow-lg">
                <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* AI Solutions */}
          <div className={isRTL ? 'w-full flex justify-end' : 'text-left'}>
            {isRTL ? (
              /* Arabic Services Section */
              <div className="w-full text-right" dir="rtl">
                <h3 className="text-[18px] font-semibold text-[#1e90e8] mb-6 w-full text-right">
                  {t("nav.services") || "الخدمات"}
                </h3>
                <div className="space-y-3 w-full">
                {services.map((service, index) => (
                  <div key={index} className="group cursor-pointer w-full">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 flex-row-reverse w-full justify-start">
                      <span className="text-[14px] text-right flex-1">{service}</span>
                      <ChevronRight className="h-4 w-4 flex-shrink-0 text-[#1e90e8] transition-transform duration-300 group-hover:translate-x-1 rotate-180" />
                    </div>
                  </div>
                ))}
              </div>
              </div>
            ) : (
              /* English Services Section */
              <div className="text-left">
                <h3 className="text-[18px] font-semibold text-[#1e90e8] mb-6">
                  {t("nav.services") || "AI Solutions"}
                </h3>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 justify-start">
                        <ChevronRight className="h-4 w-4 flex-shrink-0 text-[#1e90e8] transition-transform duration-300 group-hover:translate-x-1" />
                        <span className="text-[14px]">{service}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries */}
          <div className={isRTL ? 'w-full flex justify-end' : 'text-left'}>
            {isRTL ? (
              /* Arabic Industries Section */
              <div className="w-full text-right" dir="rtl">
                <h3 className="text-[18px] font-semibold text-[#3d50e3] mb-6 w-full text-right">
                  {t("industries.title") || "خبرتنا عبر القطاعات"}
                </h3>
                <div className="space-y-3 w-full">
                {industries.map((industry, index) => (
                  <div key={index} className="group cursor-pointer w-full">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 flex-row-reverse w-full justify-start">
                      <span className="text-[14px] text-right flex-1">{industry}</span>
                      <ChevronRight className="h-4 w-4 flex-shrink-0 text-[#3d50e3] transition-transform duration-300 group-hover:translate-x-1 rotate-180" />
                    </div>
                  </div>
                ))}
              </div>
              </div>
            ) : (
              /* English Industries Section */
              <div className="text-left">
                <h3 className="text-[18px] font-semibold text-[#3d50e3] mb-6">
                  {t("industries.title") || "Industries"}
                </h3>
                <div className="space-y-3">
                  {industries.map((industry, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 justify-start">
                        <ChevronRight className="h-4 w-4 flex-shrink-0 text-[#3d50e3] transition-transform duration-300 group-hover:translate-x-1" />
                        <span className="text-[14px]">{industry}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

                    {/* Contact */}
          <div className={isRTL ? 'w-full flex justify-end' : 'text-left'}>
            {isRTL ? (
              /* Arabic Contact Section */
              <div className="w-full text-right" dir="rtl">
                <h3 className="text-[18px] font-semibold text-[#1e90e8] mb-6 w-full text-right">
                  {t("nav.contact") || "التواصل"}
                </h3>
                <div className="space-y-4 w-full">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 flex-row-reverse w-full justify-start">
                    <span className="text-[14px] text-right flex-1">{t("footer.contact.email") || "contact@kensaai.com"}</span>
                    <div className="w-10 h-10 bg-[#1e90e8]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#1e90e8]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 flex-row-reverse w-full justify-start">
                    <span className="text-[14px] text-right flex-1">{t("footer.contact.phone") || "+1 (437) 873-47 82"}</span>
                    <div className="w-10 h-10 bg-[#3d50e3]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#3d50e3]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 flex-row-reverse w-full justify-start">
                    <span className="text-[14px] text-right flex-1">{t("footer.contact.location") || "Global impact, proudly based in Toronto,ONTARIO Canada"}</span>
                    <div className="w-10 h-10 bg-[#1e90e8]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#1e90e8]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 flex-row-reverse w-full justify-start">
                    <span className="text-[14px] text-right flex-1">{t("footer.contact.hours") || "Mon-Fri | 9AM-6PM EST"}</span>
                    <div className="w-10 h-10 bg-[#3d50e3]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#3d50e3]" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* English Contact Section */
              <div className="text-left">
                <h3 className="text-[18px] font-semibold text-[#1e90e8] mb-6">
                  {t("nav.contact") || "Get In Touch"}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 justify-start">
                    <div className="w-10 h-10 bg-[#1e90e8]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#1e90e8]" />
                    </div>
                    <span className="text-[14px]">{t("footer.contact.email") || "contact@kensaai.com"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 justify-start">
                    <div className="w-10 h-10 bg-[#3d50e3]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#3d50e3]" />
                    </div>
                    <span className="text-[14px]">{t("footer.contact.phone") || "+1 (437) 873-47 82"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 justify-start">
                    <div className="w-10 h-10 bg-[#1e90e8]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#1e90e8]" />
                    </div>
                    <span className="text-[14px]">{t("footer.contact.location") || "Global impact, proudly based in Toronto,ONTARIO Canada"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 justify-start">
                    <div className="w-10 h-10 bg-[#3d50e3]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#3d50e3]" />
                    </div>
                    <span className="text-[14px]">{t("footer.contact.hours") || "Mon-Fri | 9AM-6PM EST"}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className="text-gray-500 dark:text-gray-400 text-[14px]">
              {t("footer.copyright") || "© 2024 KENSA AI. All rights reserved."}
            </div>
            <div className={`flex items-center gap-6 text-[14px] ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-gray-500 dark:text-gray-400 hover:text-[#1e90e8] cursor-pointer transition-colors">
                {t("footer.legal.privacy") || "Privacy Policy"}
              </span>
              <span className="text-gray-500 dark:text-gray-400 hover:text-[#1e90e8] cursor-pointer transition-colors">
                {t("footer.legal.terms") || "Terms of Service"}
              </span>
              <span className="text-gray-500 dark:text-gray-400 hover:text-[#1e90e8] cursor-pointer transition-colors">
                {t("footer.legal.ethics") || "AI Ethics"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}