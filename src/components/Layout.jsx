import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    // CRITICAL: min-h-screen for full viewport height, flex-col for stacking
    <div className="flex flex-col min-h-screen"> 
      <Navbar />
      
      {/* flex-grow pushes Footer down. w-full and max-w-7xl center the content. */}
      <main className="flex-grow max-w-7xl w-full mx-auto p-4"> 
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
export default Layout;