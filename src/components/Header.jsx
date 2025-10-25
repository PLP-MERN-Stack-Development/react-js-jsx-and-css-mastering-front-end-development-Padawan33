// src/components/Header.jsx (Reintroduced Dark Mode Toggle)
import React, { useState } from 'react';
import Button from './Button';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'; 
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', path: 'home' },
  { name: 'API Browser', path: 'api' },
  { name: 'Register', path: 'register' },
  { name: 'Log in', path: 'login' },
  { name: 'Contact', path: 'login' },
];



const Header = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Use the global theme context so all components stay in sync
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const handleLinkClick = (path) => (e) => {
    e.preventDefault();
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50 dark:bg-gray-900/95 dark:shadow-lg transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo/App Name */}
          <div className="flex-shrink-0">
            <a href="#" onClick={handleLinkClick('home')} className="text-2xl font-extrabold text-gray-900 tracking-tight dark:text-white">
              Focus <span className="text-emerald-500">Flow</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                onClick={handleLinkClick(link.path)}
                className="text-gray-600 hover:text-emerald-500 font-medium transition duration-150 dark:text-gray-300 dark:hover:text-emerald-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button & Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition duration-150"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? (
          <SunIcon className="w-6 h-6" />
        ) : (
          <MoonIcon className="w-6 h-6" />
        )}
      </button>
            
            <Button variant="primary" onClick={() => onNavigate('login')} className="text-base px-6 py-2">
              Talk To Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Dark Mode Toggle */}
       <button
        onClick={toggleTheme}
        className="p-2 rounded-full text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 focus:outline-none"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? (
          <SunIcon className="w-6 h-6" />
        ) : (
          <MoonIcon className="w-6 h-6" />
        )}
      </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-emerald-500 focus:outline-none dark:text-gray-400 dark:hover:text-emerald-400"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel (Conditional Rendering) */}
      {isOpen && (
        <div className="md:hidden bg-white/95 border-t border-gray-200 py-2 dark:bg-gray-900/95 dark:border-gray-700">
          <div className="flex flex-col space-y-2 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                onClick={handleLinkClick(link.path)}
                className="block text-gray-700 hover:bg-gray-50 p-2 rounded-lg font-medium dark:text-gray-300 dark:hover:bg-gray-700"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <Button variant="primary" onClick={() => onNavigate('login')} className="w-full text-base py-2">
                Talk To Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;