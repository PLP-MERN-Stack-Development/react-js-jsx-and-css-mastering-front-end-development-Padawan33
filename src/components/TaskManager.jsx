import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import Button from './Button';
import Card from './Card';

function TaskManager() {
  const { tasks, addTask, toggleTask, deleteTask, activeFilter, changeFilter } = useTasks();
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim()) {
      addTask(newTaskText.trim());
      setNewTaskText('');
    }
  };

  const filterButtons = ['all', 'active', 'completed'];

  return (
    <div className="flex flex-col items-center p-4">
      <Card title="Task Manager" className="w-full max-w-lg">
        {/* Task Input Form */}
        <form onSubmit={handleAddTask} className="flex space-x-2 mb-6">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div
                key={task.id}
                className={`flex items-center justify-between p-3 border rounded-lg ${
                  task.completed ? 'bg-green-100 border-green-300' : 'bg-white border-gray-200'
                }`}
              >
                <span
                  className={`text-gray-800 flex-grow cursor-pointer ${
                    task.completed ? 'line-through text-gray-500' : ''
                  }`}
                  onClick={() => toggleTask(task.id)}
                >
                  {task.text}
                </span>
                
                <div className="flex space-x-2 ml-4">
                  {/* Toggle Button for smaller targets */}
                  <Button 
                    variant={task.completed ? 'secondary' : 'primary'} 
                    onClick={() => toggleTask(task.id)}
                    className="text-sm px-2 py-1"
                  >
                    {task.completed ? 'Undo' : 'Done'}
                  </Button>
                  
                  {/* Delete Button */}
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
            <p className="text-center text-gray-500">No tasks found for this filter.</p>
          )}
        </div>
      </Card>
    </div>
  );
}

export default TaskManager;