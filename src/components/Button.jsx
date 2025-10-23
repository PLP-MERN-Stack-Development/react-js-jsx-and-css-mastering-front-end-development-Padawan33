// src/components/Button.jsx (COMPLETE Button Component with Animation)
import React from 'react';

function Button({ children, onClick, variant = 'primary', className = '', type = 'button', disabled = false }) {
  let colorClasses = '';
  switch (variant) {
    case 'primary':
      colorClasses = 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500';
      break;
    case 'secondary':
      colorClasses = 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-400';
      break;
    case 'danger':
      colorClasses = 'bg-red-600 hover:bg-red-700 focus:ring-red-500';
      break;
    default:
      colorClasses = 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500';
  }
  
  // Requirement 4: Added transform and hover:scale-105 for interactive animation
  const baseClasses = `px-4 py-2 rounded-lg font-semibold text-white transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 disabled:bg-gray-400 disabled:hover:scale-100 ${colorClasses} ${className}`;

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}

export default Button;