import React from 'react';

function Button({ children, variant = 'primary', onClick, type = 'button', className = '' }) {
  let baseStyles = 'px-4 py-2 font-semibold rounded-lg transition-colors duration-200 ';
  let variantStyles = '';

  switch (variant) {
    case 'secondary':
      variantStyles = 'bg-gray-500 hover:bg-gray-600 text-white';
      break;
    case 'danger':
      variantStyles = 'bg-red-600 hover:bg-red-700 text-white';
      break;
    case 'primary':
    default:
      variantStyles = 'bg-blue-600 hover:bg-blue-700 text-white';
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;