'use client';

import { Mail, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-3 text-sm">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <a href="mailto:info@yourcompany.com" className="flex items-center gap-2 hover:text-gray-200">
            <Mail size={16} />
            <span>info@yourcompany.com</span>
          </a>
          <a href="tel:+919377249249" className="flex items-center gap-2 hover:text-gray-200">
            <Phone size={16} />
            <span>+91 9377249249</span>
          </a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-200" aria-label="Facebook">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" className="hover:text-gray-200" aria-label="Twitter">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 002.856-3.515 10 10 0 01-2.856 2.855c1.671-.975 2.95-2.505 3.537-4.237a10 10 0 01-3.537 1.397zm-3.154 1.43a10 10 0 00-2.857-2.856 10 10 0 012.857 2.856zm-4.99-6.41a10 10 0 00-3.71 2.93 10 10 0 003.71-2.93z"/></svg>
          </a>
          <a href="#" className="hover:text-gray-200" aria-label="LinkedIn">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
          </a>
          <a href="#" className="hover:text-gray-200" aria-label="Instagram">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.521 17.354c-.608.658-1.524 1.042-2.465 1.042h-8.112c-.94 0-1.857-.384-2.465-1.042-.608-.659-.927-1.593-.927-2.465V8.111c0-.872.319-1.806.927-2.465.608-.658 1.524-1.042 2.465-1.042h8.112c.94 0 1.857.384 2.465 1.042.608.659.927 1.593.927 2.465v8.778c0 .872-.319 1.806-.927 2.465z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
