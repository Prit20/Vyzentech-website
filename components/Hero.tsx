'use client';

import Link from 'next/link';
import ServiceIllustration from './ServiceIllustration';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-5 w-20 h-20 bg-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-secondary rounded-full opacity-5 blur-2xl"></div>

      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary bg-opacity-10 rounded-full border border-primary border-opacity-20">
            <span className="text-primary font-semibold uppercase text-sm tracking-wide">
               Cutting-Edge IT Solutions
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Advanced Technology For Your <span className="text-gradient">Business Growth</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl">
            PMT Infotech delivers innovative IT solutions designed to transform your business. From web development to digital transformation, we empower companies to achieve their goals with modern technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/services" className="btn-primary inline-block text-center">
              Explore Services →
            </Link>
            <Link href="/contact" className="btn-secondary inline-block text-center">
              Get In Touch →
            </Link>
          </div>
        </div>

        {/* Right Side - Service Illustration */}
        <div className="flex-1 flex justify-center animate-slide-in-up">
          <ServiceIllustration />
        </div>
      </div>
    </section>
  );
}
