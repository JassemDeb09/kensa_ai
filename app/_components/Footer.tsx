"use client"

import Image from "next/image"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  const services = [
    "Conseil en IA stratégique",
    "Intégration de solutions",
    "Transformation digitale",
    "Formation et accompagnement",
    "Support 24/7"
  ]

  const industries = [
    "Industrie & Fabrication",
    "Finance & Assurance",
    "Commerce & Retail",
    "Smart Cities",
    "Santé & Biotechnologies"
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
              Là où la stratégie mondiale rencontre l'intelligence artificielle d'excellence.
            </p>
            <p className="text-gray-300 mb-4">🌍 Basé à Toronto, impact global</p>
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
            <h3 className="text-xl font-bold text-purple-400 mb-4">Services</h3>
            <div className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <p key={index} className="hover:text-white cursor-pointer transition-colors">
                  {service}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Industries</h3>
            <div className="space-y-2 text-gray-300">
              {industries.map((industry, index) => (
                <p key={index} className="hover:text-white cursor-pointer transition-colors">
                  {industry}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-2">
                <span>📧</span> contact@kensaai.com
              </p>
              <p className="flex items-center gap-2">
                <span>📱</span> +1 (437 873 47 82
              </p>
              <p className="flex items-center gap-2">
                <span>🌍</span> Impact mondial, basé à Toronto, ON Canada
              </p>
              <p className="flex items-center gap-2">
                <span>⏰</span> Lun-Ven 9h-18h EST
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 KENSA AI. Tous droits réservés. |
            <span className="hover:text-white cursor-pointer transition-colors"> Politique de confidentialité</span> |
            <span className="hover:text-white cursor-pointer transition-colors"> Mentions légales</span> |
            <span className="hover:text-white cursor-pointer transition-colors"> Conditions d'utilisation</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
