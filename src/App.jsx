import React, { useState } from 'react';

// FIX: Added .jsx extension to resolve compilation errors
import Layout from './components/Layout'; 
import HomePage from './pages/HomePage';
import APIBrowser from './pages/APIBrowserPage'; 
import LoginPage from './pages/LoginPage'; 
import Button from './components/Button'; 

import { TaskProvider } from './context/TaskContext'; 
import { ThemeProvider } from './context/ThemeContext';
import Contacts from './pages/Contacts'; 


// Updated component for Register Page with dark mode fixes
const RegisterPage = ({ onNavigate }) => { 
    
    const handleRegister = (e) => {
        e.preventDefault();
        // Placeholder for real registration logic
        console.log("Registration Successful! Redirecting to Home...");
        onNavigate('home'); 
    };
    
    return (
        <div className="pt-32 p-8 max-w-sm mx-auto min-h-[50vh]">
            {/* Dark mode text/color applied */}
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">Join Focus Flow</h1>
            {/* Dark mode background/border applied to card */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 space-y-4">
                <form onSubmit={handleRegister} className="space-y-4"> 
                    <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition duration-150" required/>
                    <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition duration-150" required/>
                    <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition duration-150" required/>
                    <Button type="submit" variant="primary" className="w-full text-base p-3 font-semibold">Create Account</Button>
                </form>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Already have an account? 
                    <a href="#" onClick={() => onNavigate('login')} className="text-emerald-500 hover:text-emerald-600 ml-1">Log in</a>
                </p>
            </div>
        </div>
    );
};


function App() {
    const [currentPage, setCurrentPage] = useState('home'); 

    const handleNavigation = (path) => {
        setCurrentPage(path);
        window.scrollTo(0, 0); 
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'api':
                return <APIBrowser />;
            case 'login':
                return <LoginPage onNavigate={handleNavigation} />; 
            case 'contact': 
                // Routing to the new Contacts page
                return <Contacts />; 
            case 'register':
                return <RegisterPage onNavigate={handleNavigation} />; 
            default:
                return <HomePage />;
        }
    };
    
    return (
        <ThemeProvider>
            <TaskProvider>
                <Layout onNavigate={handleNavigation}>
                    {renderPage()}
                </Layout>
            </TaskProvider>
        </ThemeProvider>
    );
}

export default App;
