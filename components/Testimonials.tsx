'use client';

import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Smith',
      position: 'CEO, Tech Solutions Inc.',
      content:
        'Exceptional service and results. Their team delivered exactly what we needed on time and within budget. Highly recommended!',
      rating: 5,
      image: 'JS',
    },
    {
      name: 'Sarah Johnson',
      position: 'Marketing Director, Global Brand Co.',
      content:
        'Professional, responsive, and innovative. They truly understand our business needs and deliver solutions that drive growth.',
      rating: 5,
      image: 'SJ',
    },
    {
      name: 'Michael Brown',
      position: 'Founder, Digital Ventures',
      content:
        'Outstanding support and expertise. Our project was transformed into a stunning platform that exceeded expectations.',
      rating: 5,
      image: 'MB',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">WHAT CLIENTS SAY</p>
          <h2 className="section-title">
            Customer <span className="text-gradient">Testimonials</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-light p-8 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
