// src/App.jsx (REBUILT CLEAN STRUCTURE)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import necessary providers
import { ThemeProvider } from './context/ThemeContext'; 
import { TaskProvider } from './context/TaskContext';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import APIBrowserPage from './pages/APIBrowserPage'; 

function App() {
  return (
    <ThemeProvider> 
      <TaskProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/api-browser" element={<Layout><APIBrowserPage /></Layout>} /> 
            <Route path="/login" element={<Layout><LoginPage /></Layout>} />
            <Route path="/register" element={<Layout><RegisterPage /></Layout>} />
          </Routes>
        </Router>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;