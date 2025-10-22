// src/components/LocalTaskManager.jsx (Original Task Manager/CRUD)
import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import { useTasks } from '../context/TaskContext';

const filterButtons = ['all', 'active', 'completed'];

function LocalTaskManager() {
  // Re-introducing the context hook
  const { tasks, activeFilter, newTaskText, setNewTaskText, handleAddTask, toggleTask, deleteTask, changeFilter, filteredTasks } = useTasks();

  const tasksToDisplay = filteredTasks(); 

  return (
    <div className="flex flex-col items-center p-4">
      <Card title="Local Task Manager" className="w-full max-w-lg dark:bg-gray-700 dark:border-gray-600">
        
        {/* Task Input Form */}
        <form onSubmit={handleAddTask} className="flex space-x-2 mb-6">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white"
          />
          <Button type="submit">Add Task</Button>
        </form>

        {/* Task Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-4">
          {filterButtons.map((filterName) => (
            <Button
              key={filterName}
              variant={activeFilter === filterName ? 'primary' : 'secondary'}
              onClick={() => changeFilter(filterName)}
            >
              {filterName.charAt(0).toUpperCase() + filterName.slice(1)}
            </Button>
          ))}
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {tasksToDisplay.length > 0 ? (
            tasksToDisplay.map((task) => (
              <div
                key={task.id}
                className={`flex items-center justify-between p-3 border rounded-lg transition-colors ${
                  task.completed ? 'bg-green-100 border-green-300 dark:bg-green-800 dark:border-green-700' : 'bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700'
                }`}
              >
                <span
                  className={`text-gray-800 flex-grow cursor-pointer ${
                    task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'dark:text-white'
                  }`}
                  onClick={() => toggleTask(task.id)}
                >
                  {task.text}
                </span>
                
                <div className="flex space-x-2 ml-4">
                  <Button 
                    variant={task.completed ? 'secondary' : 'primary'} 
                    onClick={() => toggleTask(task.id)}
                    className="text-sm px-2 py-1"
                  >
                    {task.completed ? 'Undo' : 'Done'}
                  </Button>
                  <Button 
                    variant="danger" 
                    onClick={() => deleteTask(task.id)}
                    className="text-sm px-2 py-1"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">No tasks found for this filter.</p>
          )}
        </div>
      </Card>
    </div>
  );
}

export default LocalTaskManager;