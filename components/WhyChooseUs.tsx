'use client';

import { Zap, Code2, Users, Heart, Shield, Lightbulb } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: 'Reliable Delivery',
      description: 'We consistently deliver projects on time and within budget, ensuring your business objectives are met.',
      icon: Zap,
    },
    {
      id: 2,
      title: 'Modern Technology',
      description: 'We use cutting-edge technologies and frameworks to build scalable, future-proof solutions.',
      icon: Code2,
    },
    {
      id: 3,
      title: 'Client-Centric Approach',
      description: 'Your vision is our priority. We collaborate closely to understand and exceed your expectations.',
      icon: Users,
    },
    {
      id: 4,
      title: 'Affordable Pricing',
      description: 'Premium quality IT solutions at competitive rates, maximizing your return on investment.',
      icon: Heart,
    },
    {
      id: 5,
      title: 'Skilled Team',
      description: 'Our experienced developers and designers bring expertise across multiple domains and technologies.',
      icon: Shield,
    },
    {
      id: 6,
      title: 'Transparent Communication',
      description: 'Clear, honest, and regular updates keep you informed every step of the way.',
      icon: Lightbulb,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">WHY CHOOSE US</p>
          <h2 className="section-title">
            Why <span className="text-gradient">Vyzentech</span> Stands Out
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            We combine innovation, reliability, and expertise to deliver exceptional IT solutions that drive your business forward.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-100"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom Accent */}
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full mt-6 group-hover:w-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
