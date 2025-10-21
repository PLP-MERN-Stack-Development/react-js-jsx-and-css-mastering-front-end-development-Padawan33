import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <header className="p-4 bg-gray-800 text-white shadow-lg">
            <nav className="flex justify-between items-center max-w-7xl mx-auto">
             <Link to="/" className="text-xl font-semibold hover:text-gray-400">Assignment App</Link>
             <div className="space-x-4">
               <Link to="/" className="hover:text-gray-400">Home</Link>
               <Link to="/login" className="hover:text-gray-400">Login</Link>
                <Link to="/register" className="hover:text-gray-400">Register</Link>
             </div>
            </nav>
        </header>
    </>
  );
}
export default Navbar;