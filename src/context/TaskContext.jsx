// src/context/TaskContext.jsx (Updated for Reorder Tasks and Theme Context)
import React, { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext();

const DEFAULT_CATEGORIES = [
    { id: 1, name: 'Work', color: 'bg-blue-500' },
    { id: 2, name: 'Personal', color: 'bg-green-500' },
    { id: 3, name: 'Shopping', color: 'bg-yellow-500' },
    { id: 4, name: 'Health', color: 'bg-red-500' },
];

const RECURRENCE_OPTIONS = ['None', 'Daily', 'Weekly', 'Monthly'];
const PRIORITY_OPTIONS = ['Low', 'Medium', 'High'];

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
    // --- TASK STATE ---
    const [tasks, setTasks] = useState(getInitialTasks);
    const [newTaskText, setNewTaskText] = useState('');
    const [newDueDate, setNewDueDate] = useState('');
    const [newTime, setNewTime] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [newCategory, setNewCategory] = useState(DEFAULT_CATEGORIES[0].name); 
    const [categories] = useState(DEFAULT_CATEGORIES);
    const [newRecurrence, setNewRecurrence] = useState(RECURRENCE_OPTIONS[0]);
    const [newPriority, setNewPriority] = useState(PRIORITY_OPTIONS[0]);
    const [newReminderTime, setNewReminderTime] = useState('');
    const [newDescription, setNewDescription] = useState(''); 

    // --- CRITICAL FIX: THEME STATE ---
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
    
    // --- CRITICAL FIX: THEME TOGGLE HANDLER ---
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };


    // --- useEffect for TASKS ---
    useEffect(() => {
        try {
            // Save the entire tasks array, including order
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (e) {
            console.error("Could not save tasks to localStorage:", e);
        }
    }, [tasks]);

    // --- CRITICAL FIX: useEffect for THEME ---
    useEffect(() => {
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {
            console.error("Could not save theme to localStorage:", e);
        }
    }, [theme]);


    // Handlers (handleAddTask, moveTask, toggleTask, etc. remain the same)
    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTaskText.trim() === '') return;

        const newTask = {
            id: Date.now(),
            text: newTaskText.trim(),
            completed: false,
            dueDate: newDueDate || null,
            time: newTime || null,
            subTasks: [],
            category: newCategory, 
            recurrence: newRecurrence,
            priority: newPriority,
            reminderTime: newReminderTime || null,
            description: newDescription.trim() || null, 
        };

        setTasks([newTask, ...tasks]); 
        
        setNewTaskText('');
        setNewDueDate('');
        setNewTime('');
        setNewCategory(DEFAULT_CATEGORIES[0].name);
        setNewRecurrence(RECURRENCE_OPTIONS[0]);
        setNewPriority(PRIORITY_OPTIONS[0]);
        setNewReminderTime('');
        setNewDescription(''); 
    };

    const moveTask = (id, direction) => {
        setTasks(prevTasks => {
            const index = prevTasks.findIndex(task => task.id === id);
            if (index === -1) return prevTasks;

            let newIndex = index + (direction === 'up' ? -1 : 1);

            if (newIndex < 0 || newIndex >= prevTasks.length) return prevTasks;
            
            const newTasks = [...prevTasks];
            [newTasks[index], newTasks[newIndex]] = [newTasks[newIndex], newTasks[index]];
            
            return newTasks;
        });
    };
    
    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };
    
    const editTask = (id, updatedProperties) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, ...updatedProperties } : task
        ));
    };

    const addSubTask = (taskId, subTaskText) => {
        if (subTaskText.trim() === '') return;

        const newSubTask = {
            id: Date.now(),
            text: subTaskText.trim(),
            completed: false,
        };

        setTasks(tasks.map(task => 
            task.id === taskId 
            ? { ...task, subTasks: [...task.subTasks, newSubTask] } 
            : task
        ));
    };

    const toggleSubTask = (taskId, subTaskId) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    subTasks: task.subTasks.map(subTask => 
                        subTask.id === subTaskId 
                        ? { ...subTask, completed: !subTask.completed } 
                        : subTask
                    )
                };
            }
            return task;
        }));
    };

    const getCategoryDetails = (categoryName) => {
        return categories.find(cat => cat.name === categoryName) || { name: categoryName, color: 'bg-gray-500' };
    };

    const getPriorityDetails = (priorityName) => {
        switch (priorityName) {
            case 'High':
                return { name: 'High', color: 'bg-red-600 text-white', iconColor: 'text-red-600' };
            case 'Medium':
                return { name: 'Medium', color: 'bg-yellow-500 text-black', iconColor: 'text-yellow-600' };
            case 'Low':
            default:
                return { name: 'Low', color: 'bg-green-500 text-white', iconColor: 'text-green-600' };
        }
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

    // --- CRITICAL FIX: EXPORTING theme AND toggleTheme ---
    const value = {
        tasks,
        activeFilter,
        newTaskText,
        setNewTaskText,
        newDueDate,
        setNewDueDate,
        newTime,
        setNewTime,
        newCategory,
        setNewCategory,
        categories,
        getCategoryDetails,
        newRecurrence,
        setNewRecurrence,
        RECURRENCE_OPTIONS,
        newPriority,
        setNewPriority,
        PRIORITY_OPTIONS,
        getPriorityDetails,
        newReminderTime,
        setNewReminderTime,
        newDescription,
        setNewDescription,
        handleAddTask,
        toggleTask,
        deleteTask,
        editTask,
        addSubTask,
        toggleSubTask,
        moveTask,              
        changeFilter,
        filteredTasks,
        // Added theme management to the context value
        theme,
        toggleTheme,
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (context === undefined) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
};