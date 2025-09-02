'use client';

import { GraduationCap, Instagram, Youtube, Mail, Twitter } from 'lucide-react';

const footerLinks = {
  Features: [
    { name: 'MateLearn', href: '/learn' },
    
    { name: 'MateVest', href: '/invest' }
  ],

  Company: [
    { name: 'About Us', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Contact', href: '#' }
  ]
};

export default function Footer() {
  return (
    <footer className="dark:bg-slate-900/50 bg-gray-100/50 backdrop-blur-sm dark:border-slate-800 border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {/* Logo and Description */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
              <span className="text-lg sm:text-xl font-bold dark:text-white text-gray-900">MoneyMate</span>
            </div>
            <p className="dark:text-gray-400 text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              &quot;Educate, Calculate, with MoneyMate.&quot; Your comprehensive financial education platform for building lasting wealth.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" aria-label="Instagram" className="dark:text-gray-400 text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="dark:text-gray-400 text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="dark:text-gray-400 text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" aria-label="Gmail" className="dark:text-gray-400 text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {/* Only show Features & company column in the top grid */}
          <div className="justify-self-end text-right">
            <h4 className="dark:text-white text-gray-900 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Features</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.Features.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="dark:text-gray-400 text-gray-600 hover:dark:text-white hover:text-gray-900 transition-colors duration-200 text-xs sm:text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="justify-self-end text-right">
            <h4 className="font-semibold dark:text-white text-gray-900 mb-2">Company</h4>
            <ul className="space-y-1">
              <li><a href="#" className="dark:text-gray-400 text-gray-600 hover:dark:text-white hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="dark:text-gray-400 text-gray-600 hover:dark:text-white hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="dark:text-gray-400 text-gray-600 hover:dark:text-white hover:text-gray-900 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="dark:text-gray-400 text-gray-600 hover:dark:text-white hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="dark:border-slate-800 border-gray-200/50 mt-16 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col items-center">
            <p className="dark:text-gray-400 text-gray-600 text-xs sm:text-sm text-center">
              © 2025 MoneyMate. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}