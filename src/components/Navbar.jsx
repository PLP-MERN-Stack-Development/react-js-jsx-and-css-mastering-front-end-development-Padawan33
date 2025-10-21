// src/components/Navbar.jsx (Correct Navigation Component)
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; 

function Navbar() {
  // Correct theme hook usage
  const { theme, toggleTheme } = useTheme(); 

  const buttonText = theme === 'light' ? 'Switch to Dark' : 'Switch to Light';

  return (
    <header className="p-4 bg-gray-800 text-white shadow-lg w-full z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-semibold hover:text-gray-400">Assignment App</Link>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/login" className="hover:text-gray-400">Login</Link>
          <Link to="/register" className="hover:text-gray-400">Register</Link>

          {/* Theme Toggle Button */}
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