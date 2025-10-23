// src/components/Layout.jsx (Verified Working Code)
import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    // The main container applies the global background and text colors
    // that respond to the ThemeProvider context.
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        {children}
      </main>
    </div>
  );
}

export default Layout;