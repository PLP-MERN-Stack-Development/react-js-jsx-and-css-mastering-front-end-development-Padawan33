import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto text-center text-sm">
        <p>© {new Date().getFullYear()} Assignment App. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;