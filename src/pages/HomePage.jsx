import React from 'react';
import TaskManager from '../components/TaskManager';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-full py-10 bg-gray-500">
      {/* We can add a simple title here, though TaskManager also has one */}
      <h1 className="text-4xl font-bold text-white mb-6">Application Dashboard</h1>
      <TaskManager />
    </div>
  );
}

export default HomePage;