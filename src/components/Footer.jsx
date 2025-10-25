// src/components/Footer.jsx
import React from 'react';
import { ArrowTopRightOnSquareIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'; // Example social/utility icons

const Footer = () => {
  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'API Browser', href: '/api-browser' },
    { name: 'Register', href: '/register' },
    { name: 'Log in', href: '/login' },
    { name: 'Contact', href: '/contact' },
  ];
  
  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Legal Terms', href: '/terms' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
          
          {/* Column 1: Logo/Brief Description */}
          <div className="space-y-4">
            <a href="/" className="text-3xl font-extrabold text-white tracking-tight">
              Focus <span className="text-emerald-500">Flow</span>
            </a>
            <p className="text-gray-400 text-sm max-w-xs">
              The minimalist platform for maximum productivity. Designed for deep work and achieving your goals.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
                <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
                <ul className="space-y-2">
                {mainLinks.map((link) => (
                    <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-emerald-500 text-sm transition duration-150">
                        {link.name}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-white mb-3">Legal</h3>
                <ul className="space-y-2">
                {legalLinks.map((link) => (
                    <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-emerald-500 text-sm transition duration-150">
                        {link.name}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
          </div>

          {/* Column 3: Social Media & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
            <div className="flex space-x-4">
              {/* Social Media Icons (Placeholders) */}
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-150" aria-label="LinkedIn">
                <ArrowTopRightOnSquareIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-150" aria-label="Twitter">
                <EnvelopeIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-150" aria-label="Facebook">
                <PhoneIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Focus Flow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;