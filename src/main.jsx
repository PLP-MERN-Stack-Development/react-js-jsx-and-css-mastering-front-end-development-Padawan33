import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 1. Import the provider
import { TaskProvider } from './context/TaskContext.jsx'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap the entire App component */}
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>,
);