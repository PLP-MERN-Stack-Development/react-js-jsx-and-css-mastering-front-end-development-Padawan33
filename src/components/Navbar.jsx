// src/components/Navbar.jsx
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

function Navbar({ onNavigate }) {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDark = theme === 'dark';
  
  const headerClasses = isDark 
    ? "bg-gray-800 text-white" 
    : "bg-white text-gray-900 border-b border-gray-200";

  const buttonText = isDark ? (
    <>
      <SunIcon className="w-5 h-5 sm:mr-1" /> <span className="hidden sm:inline">Light</span>
    </>
  ) : (
    <>
      <MoonIcon className="w-5 h-5 sm:mr-1" /> <span className="hidden sm:inline">Dark</span>
    </>
  );

  const NavLink = ({ to, children, className = "" }) => (
    <a 
      href="#"
      onClick={(e) => { 
        e.preventDefault(); 
        onNavigate(to);
        setIsMenuOpen(false);
      }}
      className={`block w-full px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-700 
        transition-colors duration-150 dark:text-white sm:inline-block sm:w-auto sm:px-2 sm:py-1 
        sm:hover:bg-transparent ${className}`}
    >
      {children}
    </a>
  );

  return (
    <header className={`${headerClasses} p-4 shadow-lg w-full z-50 transition-colors duration-300 relative`}>
      <nav className="flex flex-wrap justify-between items-center max-w-7xl mx-auto">
        <NavLink to="home" className="text-2xl font-bold hover:text-gray-400 dark:text-white !p-0">
          Focus Flow
        </NavLink>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white transition duration-150"
            aria-label="Toggle theme"
          >
            {buttonText}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? 
              <XMarkIcon className="w-6 h-6" /> : 
              <Bars3Icon className="w-6 h-6" />
            }
          </button>
        </div>

        {/* Desktop menu */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col w-full sm:flex sm:flex-row sm:w-auto sm:items-center sm:space-x-4`}>
          <NavLink to="home">Home</NavLink>
          <NavLink to="api">API Browser</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="login">Login</NavLink>
          <NavLink to="register">Register</NavLink>
          
          <button
            onClick={toggleTheme}
            className="hidden sm:flex items-center justify-center px-4 py-2 mt-2 sm:mt-0 rounded-lg
              bg-emerald-500 hover:bg-emerald-600 text-white transition duration-150 text-sm"
          >
            {buttonText}
          </button>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;