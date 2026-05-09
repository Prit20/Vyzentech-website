'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Code2, Globe, Smartphone, BookOpen, Palette, Search, Share2, CheckCircle, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = [
    {
      id: 'software-development',
      title: 'Software Development',
      icon: Code2,
      description: 'Custom software solutions tailored to your business needs',
      longDescription: 'We develop robust, scalable software applications that drive your business forward. From concept to deployment, we deliver high-quality solutions using the latest technologies.',
      technologies: ['Java', 'Python', 'C++', 'Go', 'Rust', 'Kotlin', 'C#', '.NET'],
      features: [
        'Custom Application Development',
        'API Development & Integration',
        'Database Design & Optimization',
        'Software Architecture & Design',
        'Legacy System Modernization',
        'Microservices Architecture',
      ],
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 'web-development',
      title: 'Web Development',
      icon: Globe,
      description: 'Stunning, responsive websites designed for performance',
      longDescription: 'Build modern web applications that engage users and drive conversions. We create responsive, accessible, and SEO-optimized web experiences.',
      technologies: ['React', 'Next.js', 'Angular', 'PHP', 'Node.js', 'TypeScript', 'HTML5', 'CSS3'],
      features: [
        'Frontend Development',
        'Backend Development',
        'Full-Stack Solutions',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'CMS Development',
      ],
      color: 'from-cyan-400 to-blue-500',
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development',
      icon: Smartphone,
      description: 'Native and cross-platform mobile applications',
      longDescription: 'Create powerful mobile apps that work seamlessly on iOS and Android. From user interface design to backend integration, we handle every aspect.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Objective-C', 'Java', 'Dart', 'JavaScript'],
      features: [
        'iOS App Development',
        'Android App Development',
        'Cross-Platform Development',
        'App UI/UX Design',
        'Mobile API Integration',
        'App Store Deployment',
      ],
      color: 'from-pink-400 to-red-500',
    },
    {
      id: 'web-design',
      title: 'Web Design',
      icon: Palette,
      description: 'Beautiful, user-centered design that converts',
      longDescription: 'We create stunning visual designs that not only look great but also drive user engagement and conversions. Every design is tailored to your brand.',
      technologies: [],
      features: [
        'UI/UX Design',
        'Wireframing & Prototyping',
        'Brand Identity Design',
        'Responsive Web Design',
        'User Experience Research',
        'Design System Creation',
      ],
      color: 'from-purple-400 to-pink-500',
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      icon: Palette,
      description: 'Creative visual designs that captivate your audience',
      longDescription: 'Stand out with exceptional graphic design. From logos to marketing materials, we create designs that tell your story and engage your audience.',
      technologies: [],
      features: [
        'Logo Design',
        'Branding & Identity',
        'Marketing Collateral',
        'Print Design',
        'Social Media Graphics',
        'Packaging Design',
      ],
      color: 'from-yellow-400 to-orange-500',
    },
    {
      id: 'seo-optimization',
      title: 'SEO Optimization',
      icon: Search,
      description: 'Data-driven strategies that boost visibility',
      longDescription: 'Improve your online visibility and drive organic traffic with our comprehensive SEO strategies. We use proven techniques to rank your website higher.',
      technologies: [],
      features: [
        'Keyword Research & Analysis',
        'On-Page Optimization',
        'Technical SEO',
        'Content Optimization',
        'Link Building',
        'SEO Reporting & Analytics',
      ],
      color: 'from-green-400 to-green-600',
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: Share2,
      description: 'Creative campaigns that grow your brand',
      longDescription: 'Reach your target audience with data-driven digital marketing strategies. From social media to paid advertising, we maximize your ROI.',
      technologies: [],
      features: [
        'Social Media Marketing',
        'Paid Advertising (PPC)',
        'Email Marketing',
        'Content Marketing',
        'Marketing Analytics',
        'Campaign Management',
      ],
      color: 'from-indigo-400 to-purple-600',
    },
    {
      id: 'qa-testing',
      title: 'QA Testing',
      icon: CheckCircle,
      description: 'Comprehensive quality assurance and testing',
      longDescription: 'Ensure your applications are bug-free and perform flawlessly with our comprehensive QA testing services. We test across all devices and scenarios.',
      technologies: [],
      features: [
        'Manual Testing',
        'Performance Testing',
        'Security Testing',
        'Mobile App Testing',
        'Test Frameworks',
        'Quality Assurance',
      ],
      color: 'from-teal-400 to-cyan-600',
    },
    {
      id: 'content-writing',
      title: 'Content Writing',
      icon: BookOpen,
      description: 'Professional, SEO-friendly content',
      longDescription: 'Engaging, SEO-optimized content that resonates with your audience and drives engagement. From blog posts to technical documentation, we cover all your content needs.',
      technologies: [],
      features: [
        'Blog Writing',
        'Website Copy',
        'Technical Documentation',
        'Social Media Content',
        'Email Copywriting',
        'Content Strategy',
      ],
      color: 'from-amber-400 to-orange-600',
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 md:py-28">
        <div className="container-custom text-center">
          <p className="section-subtitle">OUR SERVICES</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive IT <span className="text-gradient">Solutions</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From software development to digital marketing, we offer a complete range of services to accelerate your business growth.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              const isExpanded = expandedService === service.id;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${service.color} p-8 text-white`}>
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white text-opacity-90">{service.description}</p>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      {service.longDescription}
                    </p>

                    {/* Technologies */}
                    {service.technologies.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-900 mb-3 text-sm">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-semibold border border-blue-200"
                            >
                              {tech}
                            </span>
                          ))}
                          {service.technologies.length > 4 && (
                            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                              & more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Features Toggle */}
                    <button
                      onClick={() => setExpandedService(isExpanded ? null : service.id)}
                      className="w-full text-left font-semibold text-primary hover:text-secondary transition-colors text-sm flex items-center justify-between"
                    >
                      <span>View Features</span>
                      <ArrowRight
                        size={16}
                        className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                      />
                    </button>

                    {/* Features List */}
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in">
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="text-primary font-bold mt-1">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white text-opacity-90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business. Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 font-bold rounded-lg hover:bg-gray-100 transition-all"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
