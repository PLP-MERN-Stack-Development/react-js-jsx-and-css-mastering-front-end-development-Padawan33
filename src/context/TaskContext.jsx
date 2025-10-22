// src/context/TaskContext.jsx (REBUILT FOR STABILITY)
import React, { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext();

// Function to safely get data from localStorage or return default
const getInitialTasks = () => {
    try {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (e) {
        console.error("Could not load tasks from localStorage:", e);
        return [];
    }
};

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(getInitialTasks);
    const [newTaskText, setNewTaskText] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [theme, setTheme] = useState('light'); // Theme state is managed separately but included here for completeness if you used it in TaskManager originally

    // Save tasks to local storage whenever the tasks state changes
    useEffect(() => {
        try {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (e) {
            console.error("Could not save tasks to localStorage:", e);
        }
    }, [tasks]);

    // Handlers
    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTaskText.trim() === '') return;

        const newTask = {
            id: Date.now(),
            text: newTaskText.trim(),
            completed: false,
        };

        setTasks([...tasks, newTask]);
        setNewTaskText('');
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const changeFilter = (filterName) => {
        setActiveFilter(filterName);
    };

    const filteredTasks = () => {
        switch (activeFilter) {
            case 'active':
                return tasks.filter(task => !task.completed);
            case 'completed':
                return tasks.filter(task => task.completed);
            case 'all':
            default:
                return tasks;
        }
    };

    const value = {
        tasks,
        activeFilter,
        newTaskText,
        setNewTaskText,
        handleAddTask,
        toggleTask,
        deleteTask,
        changeFilter,
        filteredTasks,
        theme, 
        setTheme 
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (context === undefined) {
        throw new Error('useTasks must be used within a TaskProvider');
    }
    return context;
};