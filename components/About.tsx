'use client';

import { Zap, Award } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Content */}
          <div className="animate-slide-in-up">
            <p className="section-subtitle">ABOUT VYZENTECH</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transforming Businesses Through <span className="text-gradient">Innovation</span>
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Vyzentech is a forward-thinking IT services company dedicated to delivering cutting-edge technology solutions. With years of expertise in web development, mobile applications, and digital transformation, we empower businesses to thrive in the digital age.
            </p>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our team of experienced professionals combines technical excellence with strategic thinking to solve complex business challenges. We believe in building long-term partnerships with our clients, focusing on their growth and success.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Innovative Solutions</h4>
                  <p className="text-gray-600 text-sm">Cutting-edge technology tailored to your business needs</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Quality Assured</h4>
                  <p className="text-gray-600 text-sm">Industry best practices and rigorous quality standards</p>
                </div>
              </div>
            </div>

            <Link href="/about" className="btn-primary mt-8 inline-block">
              Learn More →
            </Link>
          </div>

          {/* Right Side - Professional Large Team Collaboration Illustration */}
          <div className="relative animate-fade-in h-full flex items-center justify-center overflow-visible">
            <svg viewBox="0 0 500 500" className="w-full h-auto" preserveAspectRatio="xMidYMid meet" style={{maxWidth: '100%'}}>
              {/* Background - Subtle gradient */}
              <defs>
                <linearGradient id="screenGradientLarge" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#1565a0', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#0d5a7a', stopOpacity: 1}} />
                </linearGradient>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15" />
                </filter>
              </defs>

              {/* Decorative Chart - Top Left */}
              <g transform="translate(60, 50)">
                <rect x="0" y="20" width="12" height="28" fill="#3b82f6" rx="2" />
                <rect x="18" y="8" width="12" height="40" fill="#0ea5e9" rx="2" />
                <rect x="36" y="2" width="12" height="46" fill="#06b6d4" rx="2" />
              </g>

              {/* Decorative Rocket - Top Right */}
              <g transform="translate(420, 50)">
                <path d="M 0 0 L -6 15 L -2 15 L 0 35 L 2 15 L 6 15 Z" fill="#ef4444" stroke="#dc2626" strokeWidth="1" />
                <circle cx="0" cy="0" r="4" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
                <path d="M -5 20 L -8 30 M 5 20 L 8 30" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
              </g>

              {/* Main Monitor - Large and Professional */}
              <g filter="url(#shadow)">
                <rect x="110" y="140" width="280" height="200" rx="12" fill="url(#screenGradientLarge)" stroke="#0d3f66" strokeWidth="3" />
                
                {/* Monitor screen content */}
                <g opacity="0.25">
                  <line x1="140" y1="170" x2="340" y2="170" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  <line x1="140" y1="195" x2="280" y2="195" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="180" cy="250" r="18" fill="white" opacity="0.3" />
                  <circle cx="250" cy="250" r="18" fill="white" opacity="0.3" />
                  <circle cx="320" cy="250" r="18" fill="white" opacity="0.3" />
                </g>

                {/* Monitor stand - Professional */}
                <rect x="200" y="340" width="100" height="12" rx="4" fill="#0d3f66" stroke="#092540" strokeWidth="1.5" />
                <ellipse cx="220" cy="352" rx="12" ry="8" fill="#0d3f66" />
                <ellipse cx="280" cy="352" rx="12" ry="8" fill="#0d3f66" />
              </g>

              {/* Green Success Checkmark - Large */}
              <g transform="translate(380, 220)" filter="url(#shadow)">
                <circle cx="0" cy="0" r="18" fill="#10b981" stroke="#059669" strokeWidth="1.5" />
                <path d="M -7 2 L -2 7 L 8 -6" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              {/* Decorative Rocket - Top Right */}
              <g transform="translate(420, 50)">
                <path d="M 0 0 L -6 15 L -2 15 L 0 35 L 2 15 L 6 15 Z" fill="#ef4444" stroke="#dc2626" strokeWidth="1" />
                <circle cx="0" cy="0" r="4" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
                <path d="M -5 20 L -8 30 M 5 20 L 8 30" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
              </g>

              {/* LINE CHART - Top Right Area */}
              <g transform="translate(380, 90)" opacity="0.85">
                {/* Grid background */}
                <rect x="0" y="0" width="70" height="50" fill="rgba(15, 138, 210, 0.05)" rx="4" stroke="#0f8ad2" strokeWidth="0.5" />
                {/* Y-axis */}
                <line x1="10" y1="45" x2="10" y2="5" stroke="#0f8ad2" strokeWidth="1" opacity="0.5" />
                {/* X-axis */}
                <line x1="10" y1="45" x2="65" y2="45" stroke="#0f8ad2" strokeWidth="1" opacity="0.5" />
                {/* Line chart path */}
                <polyline points="15,35 25,25 35,30 45,18 55,22 60,15" stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                {/* Data points */}
                <circle cx="15" cy="35" r="2" fill="#10b981" />
                <circle cx="25" cy="25" r="2" fill="#10b981" />
                <circle cx="35" cy="30" r="2" fill="#10b981" />
                <circle cx="45" cy="18" r="2" fill="#10b981" />
                <circle cx="55" cy="22" r="2" fill="#10b981" />
                <circle cx="60" cy="15" r="2" fill="#10b981" />
              </g>

              {/* PIE CHART - Left Middle Area */}
              <g transform="translate(60, 260)" opacity="0.85">
                <circle cx="0" cy="0" r="16" fill="none" stroke="#3b82f6" strokeWidth="7" strokeDasharray="33.5 100.5" />
                <circle cx="0" cy="0" r="16" fill="none" stroke="#10b981" strokeWidth="7" strokeDasharray="25.1 100.5" strokeDashoffset="-33.5" />
                <circle cx="0" cy="0" r="16" fill="none" stroke="#f59e0b" strokeWidth="7" strokeDasharray="41.9 100.5" strokeDashoffset="-58.6" />
              </g>

              {/* Decorative Floating Circles - Around Monitor */}
              {/* Top left circle */}
              <g transform="translate(140, 130)" opacity="0.6">
                <circle cx="0" cy="0" r="8" fill="none" stroke="#0f8ad2" strokeWidth="2" />
                <circle cx="0" cy="0" r="4" fill="#0f8ad2" opacity="0.5" />
              </g>

              {/* Top center circle */}
              <g transform="translate(250, 110)" opacity="0.5">
                <circle cx="0" cy="0" r="6" fill="none" stroke="#10b981" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="3" fill="#10b981" opacity="0.4" />
              </g>

              {/* Right side floating dots */}
              <g transform="translate(410, 170)" opacity="0.6">
                <circle cx="0" cy="0" r="5" fill="#f59e0b" opacity="0.7" />
              </g>

              {/* Bottom right decorative element */}
              <g transform="translate(420, 340)" opacity="0.5">
                <circle cx="0" cy="0" r="7" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
                <circle cx="-3" cy="-3" r="2" fill="#8b5cf6" opacity="0.6" />
                <circle cx="3" cy="3" r="2" fill="#8b5cf6" opacity="0.6" />
              </g>

              {/* Tree/Leaves Decoration - Right Side */}
              <g transform="translate(440, 200)" opacity="0.8">
                {/* Trunk */}
                <rect x="-2" y="10" width="4" height="25" fill="#8b4513" rx="1" />
                {/* Leaves - Top */}
                <circle cx="-8" cy="5" r="6" fill="#10b981" opacity="0.8" />
                <circle cx="0" cy="2" r="8" fill="#34d399" opacity="0.8" />
                <circle cx="8" cy="5" r="6" fill="#10b981" opacity="0.8" />
                {/* Leaves - Middle */}
                <circle cx="-6" cy="18" r="5" fill="#34d399" opacity="0.7" />
                <circle cx="6" cy="18" r="5" fill="#10b981" opacity="0.7" />
              </g>

              {/* PROGRAMMING LANGUAGE LOGOS - SMALL & BELOW MONITOR */}
              <g transform="translate(250, 410)">
                {/* Python Logo */}
                <g transform="translate(-110, 0)" opacity="0.9">
                  <circle cx="0" cy="0" r="8" fill="#3776ab" stroke="#254f7a" strokeWidth="0.5" />
                  <circle cx="-1" cy="-1" r="1" fill="white" />
                </g>

                {/* PHP Logo */}
                <g transform="translate(-75, 0)" opacity="0.9">
                  <circle cx="0" cy="0" r="8" fill="#777bb4" stroke="#5a5c8a" strokeWidth="0.5" />
                  <text x="0" y="1" fontSize="8" fill="white" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial">P</text>
                </g>

                {/* JavaScript Logo */}
                <g transform="translate(-40, 0)" opacity="0.9">
                  <circle cx="0" cy="0" r="8" fill="#f7df1e" stroke="#c4af17" strokeWidth="0.5" />
                  <text x="0" y="1" fontSize="7" fill="#000" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial">JS</text>
                </g>

                {/* React Logo */}
                <g transform="translate(40, 0)" opacity="0.9">
                  <circle cx="0" cy="0" r="8" fill="#61dafb" stroke="#39b9cc" strokeWidth="0.5" />
                  <circle cx="0" cy="0" r="1" fill="#0b0e0c" />
                  <circle cx="0" cy="-3.5" r="0.8" fill="none" stroke="#0b0e0c" strokeWidth="0.8" />
                </g>

                {/* Java Logo */}
                <g transform="translate(75, 0)" opacity="0.9">
                  <circle cx="0" cy="0" r="8" fill="#007396" stroke="#004d6b" strokeWidth="0.5" />
                  <path d="M -3 -1 L -3 3 Q -3 4.5 -1.5 4.5 L 1.5 4.5 Q 3 4.5 3 3 L 3 -1" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" />
                </g>

                {/* Go Logo */}
                <g transform="translate(110, 0)" opacity="0.9">
                  <circle cx="0" cy="0" r="8" fill="#00add8" stroke="#0088b8" strokeWidth="0.5" />
                  <circle cx="0" cy="-2" r="2" fill="white" opacity="0.9" />
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* End of Main About Section */}
      </div>
    </section>
  );
}
