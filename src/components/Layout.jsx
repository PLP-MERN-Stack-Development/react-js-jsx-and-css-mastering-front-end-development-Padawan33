// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import { useTheme } from '../context/ThemeContext';

function Layout({ children, onNavigate }) { 
    const { theme } = useTheme(); 
    
    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
                <Navbar onNavigate={onNavigate} />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;