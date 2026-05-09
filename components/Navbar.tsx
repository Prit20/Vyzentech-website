'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Career', href: '/career' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* PMT Logo */}
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
            <span className="tracking-tighter">PMT</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-primary text-lg">PMT Infotech</div>
            <div className="text-xs text-gray-500 font-medium">IT SOLUTIONS</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 hover:text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-4">
          <div className="container-custom flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
