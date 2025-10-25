import React from 'react';

function Card({ title, className = '', children, ...props }) {
  return (
    // Requirement 4: Added transition duration-300
    <div
      className={`p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border dark:border-gray-700 transition duration-300 ${className}`}
      {...props}
    >
      {title && (
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
      )}
      {children}
    </div>
  );
}

export default Card;