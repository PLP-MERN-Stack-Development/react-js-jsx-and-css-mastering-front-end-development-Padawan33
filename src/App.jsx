// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import ALL necessary components/providers
import { ThemeProvider } from './context/ThemeContext'; 
import { TaskProvider } from './context/TaskContext'; 

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    // The correct nesting order: ThemeProvider first, then TaskProvider
    <ThemeProvider> 
      <TaskProvider> 
        <Router>
          <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/login" element={<Layout><LoginPage /></Layout>} />
            <Route path="/register" element={<Layout><RegisterPage /></Layout>} />
          </Routes>
        </Router>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;