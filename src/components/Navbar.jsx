// src/components/Navbar.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx'; // FIX: Added .jsx extension
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; 

// Navbar now accepts onNavigate prop
function Navbar({ onNavigate }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const buttonText = isDark ? (
    <>
      <SunIcon className="w-5 h-5 inline mr-1" /> Light
    </>
  ) : (
    <>
      <MoonIcon className="w-5 h-5 inline mr-1" /> Dark
    </>
  );

  // Helper function to handle navigation
  const navigateTo = (path) => {
    if (onNavigate) {
        onNavigate(path);
    }
  };

  const NavLink = ({ to, children }) => (
    <a 
        href="#" // Use anchor tag with href="#" for accessibility 
        onClick={(e) => { e.preventDefault(); navigateTo(to); }} 
        className="hover:text-gray-400 transition-colors duration-150"
    >
        {children}
    </a>
  );

  return (
    <header className="p-4 bg-gray-800 text-white shadow-lg w-full z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <NavLink to="home" className="text-xl font-semibold hover:text-gray-400">Focus Flow</NavLink>
        <div className="space-x-4 flex items-center">
          <NavLink to="home">Home</NavLink>
          <NavLink to="api">API Browser</NavLink> 
          {/* NEW: Link to Contacts Page */}
          <NavLink to="contact">Contacts</NavLink> 
          <NavLink to="login">Login</NavLink>
          <NavLink to="register">Register</NavLink>
          
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 text-sm rounded-full bg-blue-600 hover:bg-blue-700 transition duration-150"
          >
            {buttonText}
          </button>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
