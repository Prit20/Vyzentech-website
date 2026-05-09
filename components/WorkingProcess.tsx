'use client';

import { FileText, BarChart3, CheckSquare, TrendingUp } from 'lucide-react';

export default function WorkingProcess() {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Choose a project',
      description: 'Select your project and we begin shaping a clear roadmap for your vision and goals.',
    },
    {
      number: '02',
      icon: BarChart3,
      title: 'Project analysis',
      description: 'We analyze requirements deeply to ensure clarity and accuracy.',
    },
    {
      number: '03',
      icon: CheckSquare,
      title: 'Plan Execute',
      description: 'Our team plans strategically and executes efficiently to turn your concept into reality.',
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Deliver result',
      description: 'We deliver high-quality results that meet expectations and provide measurable value.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">WORKING PROCESS</p>
          <h2 className="section-title">
            How To <span className="text-gradient">Work It</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary to-transparent opacity-20"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step container */}
                <div className="bg-light p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 relative z-10">
                  {/* Step number */}
                  <div className="text-6xl font-bold text-gray-200 mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 -mt-12 relative z-20">
                    <Icon size={32} className="text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-20 z-5">
                    <svg className="w-8 h-8 text-primary opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tech Stack Tags */}
        
      </div>
    </section>
  );
}
