'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Users, Target, Lightbulb, Zap } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously explore cutting-edge technologies to deliver next-generation solutions that drive business transformation.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Quality is not negotiable. We maintain rigorous standards in every project, ensuring superior results and client satisfaction.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work as true partners with our clients, understanding their vision and delivering solutions that exceed expectations.',
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'In a fast-moving tech landscape, we adapt quickly to changing requirements and market demands without compromising quality.',
    },
  ];

  const achievements = [
    {
      year: '2022',
      title: 'Company Founded',
      description: 'Vyzentech was established with a vision to deliver world-class IT solutions to businesses across diverse industries.',
    },
    {
      year: '2023',
      title: 'First Major Milestone',
      description: 'Launched our comprehensive service portfolio and established partnerships with leading enterprises in multiple sectors.',
    },
    {
      year: '2024',
      title: 'Rapid Growth',
      description: 'Expanded our team to 30+ talented professionals and delivered 50+ successful projects across various technologies.',
    },
    {
      year: '2025',
      title: 'Market Recognition',
      description: 'Recognized as a trusted partner for IT solutions, earning accolades for innovation and customer-centric approach.',
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-subtitle">ABOUT VYZENTECH</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforming Ideas Into <span className="text-gradient">Digital Reality</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Since 2022, Vyzentech has been at the forefront of delivering innovative IT solutions that empower businesses to thrive in the digital era. With a team of passionate developers, designers, and strategists, we're committed to turning your vision into cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-block bg-primary text-white px-8 py-4 font-bold rounded-lg hover:bg-secondary transition-all"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-primary text-primary px-8 py-4 font-bold rounded-lg hover:bg-blue-50 transition-all"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-subtitle">OUR FOUNDATION</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Mission, Vision & Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-primary hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses through innovative IT solutions that drive growth, enhance efficiency, and unlock new opportunities in the digital landscape.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-secondary hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and innovative IT solutions partner for businesses globally, recognized for excellence, reliability, and transformative impact.
              </p>
            </div>

            {/* Commitment */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-accent hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
              <p className="text-gray-600 leading-relaxed">
                To consistently deliver high-quality solutions, maintain transparent partnerships, and exceed client expectations through dedication and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-subtitle">WHAT DRIVES US</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary"
                >
                  <div className="p-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-subtitle">OUR JOURNEY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              From 2022 to Today
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 top-2 w-6 h-6 bg-white border-4 border-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`md:flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Left/Right content */}
                    <div className="md:w-1/2">
                      <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-primary md:border-l-0 md:border-r-4 md:border-r-primary hover:shadow-lg transition-all">
                        <div className="text-primary font-bold text-lg mb-2">{achievement.year}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-subtitle">PARTNERSHIP WITH US</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Choose Vyzentech
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Expert Team',
                  description: 'Highly skilled professionals with years of experience across various technologies and industries.',
                },
                {
                  title: 'Proven Track Record',
                  description: '50+ successful projects delivered with consistent quality and client satisfaction.',
                },
                {
                  title: 'Innovative Solutions',
                  description: 'We leverage cutting-edge technologies to create solutions that drive real business value.',
                },
                {
                  title: 'Client-Centric Approach',
                  description: 'Your success is our success. We work closely with you to understand and exceed your expectations.',
                },
                {
                  title: 'Transparent Communication',
                  description: 'Regular updates, clear reporting, and honest feedback throughout the project lifecycle.',
                },
                {
                  title: 'Long-term Partnership',
                  description: 'We build lasting relationships, providing ongoing support and continuous improvement.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                      <span className="text-white font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white text-opacity-90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how Vyzentech can help you achieve your digital goals. Our team is ready to collaborate with you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 font-bold rounded-lg hover:bg-gray-100 transition-all"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-4 font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
