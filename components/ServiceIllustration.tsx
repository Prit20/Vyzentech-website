'use client';

import { Code2, Smartphone, Globe, Server, Search } from 'lucide-react';

export default function ServiceIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center px-4">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        .service-card {
          animation: float 4s ease-in-out infinite;
        }
        
        .service-card:nth-child(1) { animation-delay: 0s; }
        .service-card:nth-child(2) { animation-delay: 0.2s; }
        .service-card:nth-child(3) { animation-delay: 0.4s; }
        .service-card:nth-child(4) { animation-delay: 0.6s; }
        .service-card:nth-child(5) { animation-delay: 0.8s; }
      `}</style>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-12 gap-4 w-full max-w-4xl h-96 relative">
        {/* Connection Lines SVG - Behind all cards */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a5f99" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0d7aa1" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Top-Left (Software) to Center */}
          <line x1="12.5" y1="25" x2="42" y2="50" stroke="url(#lineGrad2)" strokeWidth="1.2" strokeLinecap="round" />
          
          {/* Bottom-Left (Mobile) to Center */}
          <line x1="12.5" y1="75" x2="42" y2="50" stroke="url(#lineGrad2)" strokeWidth="1.2" strokeLinecap="round" />
          
          {/* Center to Top-Right (Web Hosting) */}
          <line x1="58" y1="50" x2="87.5" y2="25" stroke="url(#lineGrad2)" strokeWidth="1.2" strokeLinecap="round" />
          
          {/* Center to Bottom-Right (SEO) */}
          <line x1="58" y1="50" x2="87.5" y2="75" stroke="url(#lineGrad2)" strokeWidth="1.2" strokeLinecap="round" />
        </svg>

        {/* Left Column - Software & Mobile */}
        <div className="col-span-3 flex flex-col gap-4 justify-center relative z-10">
          {/* Software Development */}
          <div className="service-card h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-6 flex flex-col items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <Code2 className="w-12 h-12 text-white mb-2" />
            <p className="text-white font-bold text-sm text-center">Software</p>
            <p className="text-white font-bold text-sm text-center">Development</p>
          </div>

          {/* Mobile Development */}
          <div className="service-card h-32 bg-gradient-to-br from-pink-500 to-red-500 rounded-3xl p-6 flex flex-col items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <Smartphone className="w-12 h-12 text-white mb-2" />
            <p className="text-white font-bold text-sm text-center">Mobile</p>
            <p className="text-white font-bold text-sm text-center">Development</p>
          </div>
        </div>

        {/* Center - Web Development (Large) */}
        <div className="col-span-6 flex items-center justify-center relative z-10">
          <div className="service-card w-56 h-56 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <Globe className="w-20 h-20 text-white mb-4" />
            <p className="text-white font-bold text-center text-lg">Web</p>
            <p className="text-white font-bold text-center text-lg">Development</p>
          </div>
        </div>

        {/* Right Column - Web Hosting & SEO */}
        <div className="col-span-3 flex flex-col gap-4 justify-center relative z-10">
          {/* Web Hosting */}
          <div className="service-card h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-6 flex flex-col items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <Server className="w-12 h-12 text-white mb-2" />
            <p className="text-white font-bold text-sm text-center">Web</p>
            <p className="text-white font-bold text-sm text-center">Hosting</p>
          </div>

          {/* SEO */}
          <div className="service-card h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-6 flex flex-col items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <Search className="w-12 h-12 text-white mb-2" />
            <p className="text-white font-bold text-sm text-center">SEO</p>
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-3 w-full max-w-2xl">
        {/* Software Development */}
        <div className="service-card h-28 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <Code2 className="w-10 h-10 text-white mb-2" />
          <p className="text-white font-bold text-xs text-center">Software Development</p>
        </div>

        {/* Mobile Development */}
        <div className="service-card h-28 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <Smartphone className="w-10 h-10 text-white mb-2" />
          <p className="text-white font-bold text-xs text-center">Mobile Development</p>
        </div>

        {/* Web Development - Full Width */}
        <div className="col-span-2 service-card h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <Globe className="w-12 h-12 text-white mb-2" />
          <p className="text-white font-bold text-sm text-center">Web Development</p>
        </div>

        {/* Web Hosting */}
        <div className="service-card h-28 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <Server className="w-10 h-10 text-white mb-2" />
          <p className="text-white font-bold text-xs text-center">Web Hosting</p>
        </div>

        {/* SEO */}
        <div className="service-card h-28 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <Search className="w-10 h-10 text-white mb-2" />
          <p className="text-white font-bold text-xs text-center">SEO</p>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden grid grid-cols-2 gap-3 w-full">
        {/* Software Development */}
        <div className="service-card h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-3 flex flex-col items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <Code2 className="w-8 h-8 text-white mb-1" />
          <p className="text-white font-bold text-xs text-center leading-tight">Software Dev</p>
        </div>

        {/* Mobile Development */}
        <div className="service-card h-24 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl p-3 flex flex-col items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <Smartphone className="w-8 h-8 text-white mb-1" />
          <p className="text-white font-bold text-xs text-center leading-tight">Mobile Dev</p>
        </div>

        {/* Web Development */}
        <div className="col-span-2 service-card h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-3 flex flex-col items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <Globe className="w-8 h-8 text-white mb-1" />
          <p className="text-white font-bold text-xs text-center">Web Development</p>
        </div>

        {/* Web Hosting */}
        <div className="service-card h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-3 flex flex-col items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <Server className="w-8 h-8 text-white mb-1" />
          <p className="text-white font-bold text-xs text-center leading-tight">Web Hosting</p>
        </div>

        {/* SEO */}
        <div className="service-card h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-3 flex flex-col items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <Search className="w-8 h-8 text-white mb-1" />
          <p className="text-white font-bold text-xs text-center leading-tight">SEO</p>
        </div>
      </div>
    </div>
  );
}
