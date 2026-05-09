'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 500);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 md:py-20">
        <div className="container-custom text-center">
          <p className="section-subtitle">CONTACT US</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a question or ready to start your next project? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Let's Start a Conversation
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you have a question about our services, need a quote, or want to discuss your project requirements, our team is ready to help. Get in touch with us today and let's create something amazing together.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-6 mb-8">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">pmtinfotech7@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 9773148082</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Vadodara, Gujarat</p>
                  </div>
                </div>
              </div>

              
            </div>

            {/* Right Column - Form */}
            <div className="animate-slide-in-up">
              <form onSubmit={handleSubmit} className="bg-light p-8 md:p-10 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>

                {/* Full Name */}
                <div className="mb-6">
                  <label htmlFor="fullName" className="block text-gray-900 font-semibold mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-primary'
                    }`}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-900 font-semibold mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
                      errors.email
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-primary'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-900 font-semibold mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9999999999"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
                      errors.phone
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-primary'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
                </div>

                {/* Subject */}
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-900 font-semibold mb-3">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label htmlFor="message" className="block text-gray-900 font-semibold mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-primary'
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                {/* <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button> */}
<button
  type="submit"
  disabled={isSubmitting}
  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
>
<Send size={18} />
      Send Message
</button>
                <p className="text-gray-500 text-sm text-center mt-4">
                  We'll get back to you within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      <Toast
        message="We will be in touch within 24 hours"
        isVisible={showToast}
        duration={4000}
      />

      <Footer />
    </>
  );
}
