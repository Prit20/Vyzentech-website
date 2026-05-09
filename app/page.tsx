'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import WorkingProcess from '@/components/WorkingProcess';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <WorkingProcess />
      <CTA />
      <Footer />
    </main>
  );
}
