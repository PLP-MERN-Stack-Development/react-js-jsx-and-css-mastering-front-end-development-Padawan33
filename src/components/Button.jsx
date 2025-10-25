// src/components/Button.jsx
import React from 'react';

const Button = ({ children, onClick, variant = 'primary', type = 'button', className = '', ...props }) => {
  let baseStyles = 'px-4 py-2 rounded-lg font-semibold text-sm transition duration-150 ease-in-out shadow-sm';
  let variantStyles = '';

  switch (variant) {
    case 'primary':
      // Updated to use the new Teal/Emerald accent color
      variantStyles = 'bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-300';
      break;
    case 'secondary':
      variantStyles = 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-600';
      break;
    case 'danger':
      variantStyles = 'bg-red-500 text-white hover:bg-red-600 focus:ring-4 focus:ring-red-300';
      break;
    default:
      variantStyles = 'bg-gray-500 text-white hover:bg-gray-600';
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;