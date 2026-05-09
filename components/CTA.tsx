'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>

        <p className="text-xl text-white mb-10 max-w-2xl mx-auto opacity-90">
          Let's discuss how our innovative solutions can drive your business forward.
          Get in touch with our team today!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all inline-block">
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
}
