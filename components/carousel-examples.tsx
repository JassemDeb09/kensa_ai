"use client"

import React, { useState } from 'react'
import ProfessionalCarousel, { CarouselItem } from './professional-carousel'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

// Example data for services carousel
const servicesData: CarouselItem[] = [
  {
    id: 'strategy',
    image: '/strategy.jpg',
    title: 'Strategy & Consulting',
    description: 'We identify high-impact AI opportunities tailored to your business and design robust strategies in data management, digital transformation, governance, and AI adoption at scale.',
    badge: '01',
    features: [
      'Strategic AI Planning',
      'Digital Transformation',
      'Data Governance',
      'AI Implementation Roadmap',
      'ROI Optimization'
    ]
  },
  {
    id: 'education',
    image: '/education.jpg',
    title: 'AI Education & Training',
    description: 'Comprehensive AI education programs designed to upskill your workforce and create an AI-ready culture within your organization.',
    badge: '02',
    features: [
      'Executive AI Training',
      'Technical Workshops',
      'AI Literacy Programs',
      'Custom Curriculum',
      'Certification Programs'
    ]
  },
  {
    id: 'end-to-end',
    image: '/end_to_end.jpg',
    title: 'End-to-End AI Solutions',
    description: 'Complete AI solution development from concept to deployment, ensuring seamless integration with your existing systems and processes.',
    badge: '03',
    features: [
      'Custom AI Development',
      'System Integration',
      'Performance Optimization',
      'Scalable Architecture',
      'Ongoing Support'
    ]
  },
  {
    id: 'ai-talent',
    image: '/ai_talent.jpg',
    title: 'AI Talent & Recruitment',
    description: 'Access to top-tier AI talent and specialized recruitment services to build your internal AI capabilities and drive innovation.',
    badge: '04',
    features: [
      'AI Talent Sourcing',
      'Technical Assessment',
      'Team Building',
      'Skills Matching',
      'Remote Expertise'
    ]
  }
]

// Example data for testimonials carousel
const testimonialsData: CarouselItem[] = [
  {
    id: 'testimonial-1',
    image: '/placeholder-user.jpg',
    title: 'Transformational AI Implementation',
    description: 'KENSA AI helped us implement cutting-edge AI solutions that increased our operational efficiency by 40% and reduced costs significantly. Their strategic approach and technical expertise are unmatched.',
    author: {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp Solutions',
      avatar: '/placeholder-user.jpg'
    }
  },
  {
    id: 'testimonial-2',
    image: '/placeholder-user.jpg',
    title: 'Exceptional AI Consulting',
    description: 'The team at KENSA AI provided us with invaluable insights and guidance on our AI transformation journey. Their expertise in both strategy and implementation is truly remarkable.',
    author: {
      name: 'Michael Chen',
      role: 'VP of Innovation, GlobalTech',
      avatar: '/placeholder-user.jpg'
    }
  },
  {
    id: 'testimonial-3',
    image: '/placeholder-user.jpg',
    title: 'Outstanding Results',
    description: 'Working with KENSA AI was a game-changer for our organization. They delivered AI solutions that exceeded our expectations and provided measurable business value.',
    author: {
      name: 'Emily Rodriguez',
      role: 'CEO, FutureDyne Industries',
      avatar: '/placeholder-user.jpg'
    }
  }
]

export const ServicesCarousel: React.FC = () => {
  const [selectedService, setSelectedService] = useState<CarouselItem | null>(null)

  const handleServiceClick = (item: CarouselItem) => {
    setSelectedService(item)
  }

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We blend strategic consulting expertise with cutting-edge technology execution to deliver measurable business impact.
          </p>
        </div>

        {/* Services Carousel */}
        <ProfessionalCarousel
          items={servicesData}
          autoPlay={true}
          autoPlayInterval={5000}
          cardWidth={500}
          onItemClick={handleServiceClick}
          className="mb-8"
        />

        {/* Service Detail Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedService && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedService.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedService.description}
                    </p>
                    {selectedService.features && (
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {selectedService.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export const TestimonialsCarousel: React.FC = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from the leaders who have transformed their businesses with our AI solutions.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <ProfessionalCarousel
          items={testimonialsData}
          autoPlay={true}
          autoPlayInterval={6000}
          cardWidth={480}
          className="mb-8"
        />
      </div>
    </div>
  )
}

export const CompactCarousel: React.FC = () => {
  const compactData = servicesData.map(item => ({
    ...item,
    description: item.description.substring(0, 100) + '...'
  }))

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Compact Services Overview
        </h3>
        <ProfessionalCarousel
          items={compactData}
          autoPlay={false}
          cardWidth={380}
          showNavigation={true}
          showIndicators={false}
        />
      </div>
    </div>
  )
}

export default {
  ServicesCarousel,
  TestimonialsCarousel,
  CompactCarousel
}
