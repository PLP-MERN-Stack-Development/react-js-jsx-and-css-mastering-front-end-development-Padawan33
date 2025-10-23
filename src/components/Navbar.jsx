// src/components/Navbar.jsx (Verified Working Code)
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
// Check this import carefully after the npm install fix!
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; 

function Navbar() {
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

  return (
    <header className="p-4 bg-gray-800 text-white shadow-lg w-full z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-semibold hover:text-gray-400">Assignment App</Link>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          {/* Link to API Browser */}
          <Link to="/api-browser" className="hover:text-gray-400">API Browser</Link> 
          <Link to="/login" className="hover:text-gray-400">Login</Link>
          <Link to="/register" className="hover:text-gray-400">Register</Link>
          
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