"use client"

import Image from "next/image"
import { Facebook, Twitter, Linkedin, ChevronRight, Bot, Mail, Phone, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function Footer() {
  const { t } = useLanguage()

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
    <footer id="contact" className="relative bg-gray-900 dark:bg-black text-white py-20 overflow-hidden">
      {/* AI Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,144,232,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,232,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* AI Gradient Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-[#1e90e8]/5 to-[#3d50e3]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-[#3d50e3]/5 to-[#1e90e8]/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              {/* Company Logo */}
              <div className="relative group">
                <div className="w-20 h-20 relative hover:scale-105 transition-all duration-300">
                  <Image
                    src="/logo.png"
                    alt="KENSA AI"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                  {/* AI Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1e90e8]/20 to-[#3d50e3]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </div>

              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed text-[15px]">
              {t("footer.description") || "Leading AI transformation partner helping Fortune 500 companies unlock the power of artificial intelligence for measurable business growth."}
            </p>
            
            <p className="text-gray-400 mb-6 text-[14px]">
              {t("footer.location") || "Toronto, Canada • Global Reach"}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 group shadow-lg">
                <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#3d50e3] to-[#1e90e8] rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 group shadow-lg">
                <Twitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#1e90e8] to-[#3d50e3] rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 group shadow-lg">
                <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* AI Solutions */}
          <div>
            <h3 className="text-[18px] font-semibold text-[#1e90e8] mb-6">
              {t("nav.services") || "AI Solutions"}
            </h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                    <ChevronRight className="h-4 w-4 text-[#1e90e8] group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-[14px]">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-[18px] font-semibold text-[#3d50e3] mb-6">
              {t("industries.title") || "Industries"}
            </h3>
            <div className="space-y-3">
              {industries.map((industry, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                    <ChevronRight className="h-4 w-4 text-[#3d50e3] group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-[14px]">{industry}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[18px] font-semibold text-[#1e90e8] mb-6">
              {t("nav.contact") || "Get In Touch"}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 bg-[#1e90e8]/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#1e90e8]" />
                </div>
                <span className="text-[14px]">{t("footer.contact.email") || "hello@kensa.ai"}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 bg-[#3d50e3]/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#3d50e3]" />
                </div>
                <span className="text-[14px]">{t("footer.contact.phone") || "+1 (416) 555-0123"}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 bg-[#1e90e8]/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#1e90e8]" />
                </div>
                <span className="text-[14px]">{t("footer.contact.location") || "Toronto, ON"}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 bg-[#3d50e3]/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#3d50e3]" />
                </div>
                <span className="text-[14px]">{t("footer.contact.hours") || "24/7 AI Support"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-[14px]">
              {t("footer.copyright") || "© 2024 KENSA AI. All rights reserved."}
            </div>
            <div className="flex items-center gap-6 text-[14px]">
              <span className="text-gray-400 hover:text-[#1e90e8] cursor-pointer transition-colors">
                {t("footer.legal.privacy") || "Privacy Policy"}
              </span>
              <span className="text-gray-400 hover:text-[#1e90e8] cursor-pointer transition-colors">
                {t("footer.legal.terms") || "Terms of Service"}
              </span>
              <span className="text-gray-400 hover:text-[#1e90e8] cursor-pointer transition-colors">
                AI Ethics
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
