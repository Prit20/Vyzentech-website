'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <Link href="/" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState({}, '', '/');
            }} className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
              <div>
                <div className="flex items-center gap-0">
                  <div className="relative">
                    <span className="font-bold text-2xl text-blue-900">V</span>
                    <span className="absolute top-0 left-0 font-bold text-lg text-blue-500" style={{marginLeft: '2px'}}>\</span>
                  </div>
                  <span className="font-bold text-2xl text-blue-900">yzen</span>
                  <span className="font-bold text-2xl text-blue-500">Tech</span>
                </div>
                <div className="text-xs text-gray-500 font-medium">IT SOLUTIONS</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Vyzentech is your trusted partner for innovative IT solutions, web development, and digital transformation services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  SEO Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Mail size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:info@vyzentech.in" className="text-white hover:text-primary transition-colors">
                    info@vyzentech.in
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+917016124622" className="text-white hover:text-primary transition-colors">
                    +91 7016124622
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">A-Wing 202-203, Union Heights, Rahulraj Mall Lane, Maharana Pratap Rd, Vesu, Surat, Gujarat 395007</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-center md:text-left">
            &copy; {currentYear} Vyzentech. All rights reserved.
          </p>

          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
