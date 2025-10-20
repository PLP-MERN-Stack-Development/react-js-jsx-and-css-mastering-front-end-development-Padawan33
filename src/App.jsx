import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the pages we just created
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Placeholder for future Navbar/Header component */}
        <header className="p-4 bg-gray-800 text-white shadow-lg">
          <nav className="flex justify-between items-center max-w-7xl mx-auto">
            <h1 className="text-xl font-semibold">Task Manager</h1>
            <div className="space-x-4">
              <a href="/" className="hover:text-gray-400">Home</a>
              <a href="/login" className="hover:text-gray-400">Login</a>
              <a href="/register" className="hover:text-gray-400">Register</a>
            </div>
          </nav>
        </header>

        <main>
          <Routes>
            {/* Define routes for the three main pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;