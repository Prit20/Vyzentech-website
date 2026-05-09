'use client';

import { useState } from 'react';
import { PenTool, Globe, Search, Share2, Palette, Smartphone, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const [isHovering, setIsHovering] = useState(false);

  const services = [
    {
      id: 'software-development',
      icon: PenTool,
      title: 'Content Writing',
      description: 'Professional, SEO-friendly content that strengthens your brand.',
    },
    {
      id: 'web-development',
      icon: Globe,
      title: 'Web Development',
      description: 'Stunning, responsive websites designed for top performance.',
    },
    {
      id: 'seo-optimization',
      icon: Search,
      title: 'SEO Optimization',
      description: 'Data-driven strategies that boost visibility and traffic.',
    },
    {
      id: 'digital-marketing',
      icon: Share2,
      title: 'Digital Marketing',
      description: 'Creative campaigns that grow your brand presence online.',
    },
    {
      id: 'graphic-design',
      icon: Palette,
      title: 'Graphic Design',
      description: 'Stunning visual designs that captivate your audience.',
    },
    {
      id: 'mobile-app-development',
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for success.',
    },
    {
      id: 'qa-testing',
      icon: CheckCircle,
      title: 'QA Testing',
      description: 'Comprehensive quality assurance and testing to ensure flawless performance.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-white to-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="section-subtitle">OUR EXPERTISE</p>
          <h2 className="section-title">
            Premium IT Services<br />
            For Your <span className="text-gradient">Success</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            PMT Infotech offers comprehensive IT solutions tailored to drive your business forward
          </p>
        </div>

        {/* Auto-scrolling Services Container */}
        <div 
          className="relative overflow-hidden py-8"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .services-scroll {
              animation: ${isHovering ? 'none' : 'scroll 40s linear infinite'};
              display: flex;
              gap: 1.5rem;
              width: max-content;
            }
          `}</style>

          <div className="services-scroll">
            {/* Duplicate services for infinite scroll effect */}
            {[...services, ...services].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-primary"
                >
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center text-primary font-semibold hover:gap-3 transition-all group/link"
                  >
                    Learn More <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">← Scroll to see more services →</p>
        </div>
      </div>
    </section>
  );
}
