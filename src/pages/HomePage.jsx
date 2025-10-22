// src/pages/HomePage.jsx (Restoring LocalTaskManager)
import React from 'react';
import LocalTaskManager from '../components/LocalTaskManager';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-start w-full py-10">
      <LocalTaskManager /> 
    </div>
  );
}

export default HomePage;