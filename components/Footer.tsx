'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
                <span className="tracking-tighter">PMT</span>
              </div>
              <div>
                <div className="font-bold text-white">PMT Infotech</div>
                <div className="text-xs text-gray-500">IT SOLUTIONS</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              PMT Infotech is your trusted partner for innovative IT solutions, web development, and digital transformation services.
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
                  <a href="mailto:pmtinfotech7@gmail.com" className="text-white hover:text-primary transition-colors">
                    pmtinfotech7@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+919773148082" className="text-white hover:text-primary transition-colors">
                    +91 9773148082
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Vadodara, Gujarat</p>
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
            &copy; {currentYear} PMT Infotech. All rights reserved.
          </p>

          <div className="flex gap-8">
            <span className="text-gray-400">
              Privacy Policy
            </span>
            <span className="text-gray-400">
              Terms of Service
            </span>
            <span className="text-gray-400">
              Sitemap
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
