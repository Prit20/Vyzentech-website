'use client';

import { FileText, Users, Trophy, Lightbulb } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: FileText,
      value: '100+',
      label: 'Project Completed',
    },
    {
      icon: Users,
      value: '100+',
      label: 'Clients',
    },
    {
      icon: Trophy,
      value: '16+',
      label: 'Years of experience',
    },
    {
      icon: Lightbulb,
      value: '6+',
      label: 'Industries served',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center text-white group">
                <div className="w-24 h-24 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-30 transition-all duration-300">
                  <Icon size={40} className="text-primary" />
                </div>
                <p className="text-5xl md:text-6xl font-bold mb-3">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-lg">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
