import React, { createContext, useContext, useEffect } from 'react';
// Import the custom hook for persistence
import useLocalStorage from '../hooks/useLocalStorage'; 

const TaskContext = createContext();

// Create an initial state for tasks
const initialTasks = [
  { id: 1, text: 'Complete Task Manager Setup', completed: false },
  { id: 2, text: 'Integrate Theme Context', completed: true },
];

export const TaskProvider = ({ children }) => {
  // Use custom hook for state management and local storage persistence
  const [tasks, setTasks] = useLocalStorage('tasks-list', initialTasks);
  const [filter, setFilter] = useLocalStorage('tasks-filter', 'all'); // all, active, completed

  // 1. Add new tasks
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  // 2. Mark tasks as completed
  const toggleTask = (id) => {
    setTasks((prevTasks) => 
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // 3. Delete tasks
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  
  // 4. Filter tasks (handled in the component, but state is managed here)
  const changeFilter = (newFilter) => {
      setFilter(newFilter);
  };

  // Logic to compute the filtered list
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });
  
  // Combine all state and functions into the value object
  const contextValue = {
    tasks: filteredTasks, // Provide filtered list to consumers
    activeFilter: filter,
    addTask,
    toggleTask,
    deleteTask,
    changeFilter,
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use the TaskContext
export const useTasks = () => {
  return useContext(TaskContext);
};