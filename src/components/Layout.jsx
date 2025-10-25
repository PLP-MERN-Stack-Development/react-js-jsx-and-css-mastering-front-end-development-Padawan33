// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * A global layout wrapper that ensures the Header and Footer are present on every page.
 * Added dark:bg-gray-900 to ensure the viewport is dark in dark mode.
 */
const Layout = ({ children, onNavigate }) => {
  return (
    // Updated line: Added dark:bg-gray-900 and dark:text-gray-200
    <div className="min-h-screen flex flex-col font-inter bg-gray-50 dark:bg-gray-900 dark:text-gray-200">
      
      {/* Pass the navigation handler to the Header */}
      <Header onNavigate={onNavigate} /> 
      
      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* The Standard Footer */}
      <Footer />
      
    </div>
  );
};

export default Layout;