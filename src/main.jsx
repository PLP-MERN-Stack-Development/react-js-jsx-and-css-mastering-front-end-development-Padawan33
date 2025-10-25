import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// The App component already wraps the necessary providers (ThemeProvider, TaskProvider).
// Keep the root render lean to avoid duplicating providers.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);