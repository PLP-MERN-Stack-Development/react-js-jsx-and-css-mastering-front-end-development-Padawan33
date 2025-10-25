// src/components/LocalTaskManager.jsx (Mobile Friendly Version)
import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import { 
    ArrowPathIcon, 
    PencilSquareIcon, 
    ClockIcon, 
    BellAlertIcon, 
    BookOpenIcon, 
    ChevronUpIcon, 
    ChevronDownIcon 
} from '@heroicons/react/24/outline'; 
import { useTasks } from '../context/TaskContext';

const filterButtons = ['all', 'active', 'completed'];

// Helper function to format date for display (MM/DD)
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

// Helper function to format time for display (HH:MM AM/PM)
const formatTime = (timeString) => {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const h = parseInt(hours, 10);
    const m = minutes;
    const ampm = h >= 12 ? 'PM' : 'AM';
    const displayHour = h % 12 || 12; // Converts 0 to 12
    return `${displayHour}:${m} ${ampm}`;
};


function LocalTaskManager() {
  const { 
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
  } = useTasks();

  const tasksToDisplay = filteredTasks(); 
  
  const [newSubTaskText, setNewSubTaskText] = useState({});
  const [editingTask, setEditingTask] = useState(null); 
  
  // Helper to determine the index of a task within the CURRENTLY DISPLAYED (filtered) list
  const getDisplayIndex = (taskId) => tasksToDisplay.findIndex(t => t.id === taskId);
  // Helper to get the total number of tasks being displayed
  const totalDisplayedTasks = tasksToDisplay.length;


  const handleAddSubTask = (taskId) => (e) => {
    e.preventDefault();
    const text = newSubTaskText[taskId];
    if (text) {
      addSubTask(taskId, text);
      setNewSubTaskText(prev => ({ ...prev, [taskId]: '' }));
    }
  };
  
  const handleStartEdit = (task) => {
    setEditingTask({ ...task });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingTask(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = (taskId) => {
    if (editingTask.text.trim() === '') return;
    
    // Clean up empty strings to be null before saving
    const taskToSave = {
        ...editingTask,
        dueDate: editingTask.dueDate || null,
        time: editingTask.time || null,
        reminderTime: editingTask.reminderTime || null,
        description: editingTask.description ? editingTask.description.trim() : null,
    };

    editTask(taskId, taskToSave); 
    
    setEditingTask(null);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };


  return (
    <div className="flex flex-col items-center p-4">
      <Card 
        title="Focus Flow Task Manager" 
        className="w-full max-w-sm sm:max-w-lg mx-auto dark:bg-gray-700 dark:border-gray-600"
      >
        
        {/* Task Input Form */}
        <form onSubmit={handleAddTask} className="flex flex-col space-y-3 mb-6">
          
          {/* Main Input Row: Text Input and Add Button */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              placeholder="Add a new task..."
              className="flex-grow p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white"
            />
            <Button type="submit" className="w-full sm:w-auto flex-shrink-0">Add Task</Button>
          </div>
          
          {/* Due Date, Time & Category Inputs (Row 1 - Now Stacks on Mobile) */}
          {/* Changed from flex-grow on each item to grid on mobile (sm:grid-cols-3) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3"> 
            
            {/* Due Date Input Field */}
            <div className="flex items-center space-x-2 w-full">
              <label className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap flex-shrink-0">Date:</label>
              <input
                type="date"
                value={newDueDate}
                onChange={(e) => setNewDueDate(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white text-sm w-full"
              />
            </div>
            
            {/* Time Input Field */}
            <div className="flex items-center space-x-2 w-full">
              <label className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap flex-shrink-0">Time:</label>
              <input
                type="time"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white text-sm w-full"
              />
            </div>
            
            {/* Category Select Dropdown */}
            <div className="flex items-center space-x-2 w-full">
              <label className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap flex-shrink-0">Category:</label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white text-sm w-full"
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.name}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Recurrence, Priority, and Reminder Inputs (Row 2 - Now Stacks on Mobile) */}
          {/* Changed from flex-grow on each item to grid on mobile (sm:grid-cols-3) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* Recurrence Input */}
            <div className="flex items-center space-x-2 w-full">
              <label className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap flex-shrink-0">Recurrence:</label>
              <select
                value={newRecurrence}
                onChange={(e) => setNewRecurrence(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white text-sm w-full"
              >
                {RECURRENCE_OPTIONS.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Priority Input */}
            <div className="flex items-center space-x-2 w-full">
              <label className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap flex-shrink-0">Priority:</label>
              <select
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white text-sm w-full"
              >
                {PRIORITY_OPTIONS.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            {/* Reminder Time Input */}
            <div className="flex items-center space-x-2 w-full">
              <label className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap flex-shrink-0">Reminder:</label>
              <input
                type="time"
                value={newReminderTime}
                onChange={(e) => setNewReminderTime(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white text-sm w-full"
              />
            </div>
          </div>
          
          {/* Description/Notes Input (Row 3 - Takes Full Width) */}
          <div className="w-full">
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Add short notes or a description (optional)..."
              rows="2"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white text-sm"
            />
          </div>

        </form>
        {/* Task Filter Buttons (Remains the same) */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {filterButtons.map((filterName) => (
            <Button
              key={filterName}
              variant={activeFilter === filterName ? 'primary' : 'secondary'}
              onClick={() => changeFilter(filterName)}
              className="px-3 py-1 text-sm flex-shrink-0"
            >
              {filterName.charAt(0).toUpperCase() + filterName.slice(1)}
            </Button>
          ))}
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {tasksToDisplay.length > 0 ? (
            tasksToDisplay.map((task) => {
              const categoryDetails = getCategoryDetails(task.category);
              const priorityDetails = getPriorityDetails(task.priority);
              const isEditing = editingTask && editingTask.id === task.id;
              
              const displayIndex = getDisplayIndex(task.id);
              const totalDisplayedTasks = tasksToDisplay.length;
              const isFirst = displayIndex === 0;
              const isLast = displayIndex === totalDisplayedTasks - 1;


              return (
                <div key={task.id} className="w-full"> {/* Outer container for card content and subtasks/form */}
                    <div
                        className={`p-4 border rounded-xl shadow-sm flex items-start ${ 
                            task.completed ? 'bg-green-50 border-green-300 dark:bg-green-900 dark:border-green-800' : 'bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700'
                        }`}
                    >
                        {/* Reorder Buttons (Visible in 'all' filter and if more than one task is present) */}
                        {activeFilter === 'all' && totalDisplayedTasks > 1 && (
                            <div className="flex flex-col space-y-1 mr-3 mt-1 flex-shrink-0">
                                <button
                                    onClick={() => moveTask(task.id, 'up')}
                                    disabled={isFirst}
                                    title="Move Up"
                                    className={`p-1 rounded-full ${isFirst ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed' : 'text-blue-500 hover:bg-gray-100 dark:text-blue-400 dark:hover:bg-gray-700'}`}
                                >
                                    <ChevronUpIcon className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => moveTask(task.id, 'down')}
                                    disabled={isLast}
                                    title="Move Down"
                                    className={`p-1 rounded-full ${isLast ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed' : 'text-blue-500 hover:bg-gray-100 dark:text-blue-400 dark:hover:bg-gray-700'}`}
                                >
                                    <ChevronDownIcon className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                        
                        {/* Main Task Content and Action Buttons (now uses flex-col on mobile) */}
                        <div className="flex flex-col flex-grow sm:flex-row sm:items-start sm:justify-between">
                            
                            {/* Task Details Column (Main Content) */}
                            <div className="flex flex-col flex-grow">
                                
                                {/* Tags: Category, Priority, and Recurrence */}
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                    {/* Category Tag */}
                                    <span 
                                    className={`text-xs font-medium px-2 py-0.5 rounded-full text-white ${categoryDetails.color} w-fit`}
                                    >
                                    {categoryDetails.name}
                                    </span>
                                    {/* Priority Tag */}
                                    <span 
                                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${priorityDetails.color} w-fit`}
                                    >
                                    {priorityDetails.name}
                                    </span>
                                    {/* Recurrence Tag/Icon */}
                                    {task.recurrence && task.recurrence !== 'None' && (
                                        <span className="flex items-center text-xs font-semibold text-purple-600 dark:text-purple-400">
                                            <ArrowPathIcon className="w-4 h-4 mr-0.5" /> 
                                            {task.recurrence}
                                        </span>
                                    )}
                                </div>
                                
                                {/* Task Text or Edit Input */}
                                {isEditing ? (
                                    <>
                                    <input
                                        type="text"
                                        name="text"
                                        value={editingTask.text}
                                        onChange={handleEditChange}
                                        className="w-full p-1 mb-2 border border-blue-500 rounded-md text-lg dark:bg-gray-700 dark:text-white font-semibold focus:outline-none"
                                    />
                                    {/* Description/Notes Edit Input */}
                                    <textarea
                                        name="description"
                                        value={editingTask.description || ''}
                                        onChange={handleEditChange}
                                        placeholder="Short notes..."
                                        rows="2"
                                        className="w-full p-1 mb-2 border border-gray-300 rounded-lg text-sm dark:bg-gray-700 dark:text-white focus:outline-none"
                                    />

                                    {/* Edit Fields (Date, Time, Category, Recurrence, Priority, Reminder) - Now uses grid-cols-2 on mobile */}
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div className="flex items-center space-x-1">
                                            <label className="text-gray-500 dark:text-gray-400 text-sm flex-shrink-0">Date:</label>
                                            <input
                                                type="date"
                                                name="dueDate"
                                                value={editingTask.dueDate || ''}
                                                onChange={handleEditChange}
                                                className="p-1 border border-gray-300 rounded-lg dark:bg-gray-600 dark:text-white flex-grow"
                                            />
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <label className="text-gray-500 dark:text-gray-400 text-sm flex-shrink-0">Time:</label>
                                            <input
                                                type="time"
                                                name="time"
                                                value={editingTask.time || ''} 
                                                onChange={handleEditChange}
                                                className="p-1 border border-gray-300 rounded-lg dark:bg-gray-600 dark:text-white flex-grow"
                                            />
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <label className="text-gray-500 dark:text-gray-400 text-sm flex-shrink-0">Category:</label>
                                            <select
                                                name="category"
                                                value={editingTask.category}
                                                onChange={handleEditChange}
                                                className="p-1 border border-gray-300 rounded-lg dark:bg-gray-600 dark:text-white flex-grow"
                                            >
                                                {categories.map(cat => (
                                                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <label className="text-gray-500 dark:text-gray-400 text-sm flex-shrink-0">Recurrence:</label>
                                            <select
                                                name="recurrence"
                                                value={editingTask.recurrence}
                                                onChange={handleEditChange}
                                                className="p-1 border border-gray-300 rounded-lg dark:bg-gray-600 dark:text-white flex-grow"
                                            >
                                                {RECURRENCE_OPTIONS.map(option => (
                                                    <option key={option} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <label className="text-gray-500 dark:text-gray-400 text-sm flex-shrink-0">Priority:</label>
                                            <select
                                                name="priority"
                                                value={editingTask.priority}
                                                onChange={handleEditChange}
                                                className="p-1 border border-gray-300 rounded-lg dark:bg-gray-600 dark:text-white flex-grow"
                                            >
                                                {PRIORITY_OPTIONS.map(option => (
                                                    <option key={option} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <label className="text-gray-500 dark:text-gray-400 text-sm flex-shrink-0">Reminder:</label>
                                            <input
                                                type="time"
                                                name="reminderTime"
                                                value={editingTask.reminderTime || ''}
                                                onChange={handleEditChange}
                                                className="p-1 border border-gray-300 rounded-lg dark:bg-gray-600 dark:text-white flex-grow"
                                            />
                                        </div>
                                    </div>
                                    </>

                                ) : (
                                    <span
                                    className={`text-lg text-gray-800 cursor-pointer ${
                                        task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'dark:text-white font-semibold'
                                    }`}
                                    onClick={() => toggleTask(task.id)}
                                    >
                                    {task.text}
                                    </span>
                                )}
                                
                                {/* Display Description/Notes */}
                                {task.description && (
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 whitespace-pre-wrap flex items-start">
                                        <BookOpenIcon className="w-4 h-4 mr-1 mt-0.5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                                        {task.description}
                                    </p>
                                )}

                                {/* Display Date, Time, and Reminder */}
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                                    {task.dueDate && (
                                        <span className="text-sm text-red-600 dark:text-red-400">
                                            Due: {formatDate(task.dueDate)}
                                        </span>
                                    )}
                                    {task.time && (
                                        <span className="text-sm text-red-600 dark:text-red-400 flex items-center">
                                            <ClockIcon className="w-3.5 h-3.5 mr-0.5" />
                                            {formatTime(task.time)}
                                        </span>
                                    )}
                                    {task.reminderTime && (
                                        <span className="text-sm text-blue-600 dark:text-blue-400 flex items-center">
                                            <BellAlertIcon className="w-3.5 h-3.5 mr-0.5" />
                                            Reminder: {formatTime(task.reminderTime)}
                                        </span>
                                    )}
                                </div>
                            </div>
                            
                            {/* Action Buttons Column */}
                            {/* Adjusted to stack buttons vertically on mobile if in display mode */}
                            <div className={`flex ${isEditing ? 'space-x-2' : 'flex-col space-y-1'} mt-2 sm:mt-0 sm:ml-4 flex-shrink-0`}>
                                {isEditing ? (
                                    <>
                                    <Button 
                                        variant="primary" 
                                        onClick={() => handleSaveEdit(task.id)}
                                        className="text-sm px-2 py-1"
                                    >
                                        Save
                                    </Button>
                                    <Button 
                                        variant="secondary" 
                                        onClick={handleCancelEdit}
                                        className="text-sm px-2 py-1"
                                    >
                                        Cancel
                                    </Button>
                                    </>
                                ) : (
                                    <>
                                    <Button 
                                        variant="secondary" 
                                        onClick={() => handleStartEdit(task)}
                                        className="text-sm px-2 py-1 flex items-center justify-center" // Added justify-center for vertical stack alignment
                                    >
                                        <PencilSquareIcon className="w-4 h-4 mr-1"/> Edit
                                    </Button>
                                    <Button 
                                        variant={task.completed ? 'secondary' : 'primary'} 
                                        onClick={() => toggleTask(task.id)}
                                        className="text-sm px-2 py-1 justify-center"
                                    >
                                        {task.completed ? 'Undo' : 'Done'}
                                    </Button>
                                    <Button 
                                        variant="danger" 
                                        onClick={() => deleteTask(task.id)}
                                        className="text-sm px-2 py-1 justify-center"
                                    >
                                        Delete
                                    </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sub-tasks Section and Add Sub-task Input (Only show if not editing the main task) */}
                    {!isEditing && (
                        <>
                        {task.subTasks && task.subTasks.length > 0 && (
                            <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-700 space-y-2">
                                <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Sub-tasks ({task.subTasks.filter(s => !s.completed).length} active)</p>
                                {task.subTasks.map(subTask => (
                                    <div 
                                        key={subTask.id} 
                                        className="flex items-center justify-between ml-2 text-sm cursor-pointer"
                                        onClick={() => toggleSubTask(task.id, subTask.id)}
                                    >
                                        <span className={`flex-grow text-gray-700 dark:text-gray-300 ${subTask.completed ? 'line-through' : ''}`}>
                                            - {subTask.text}
                                        </span>
                                        <span className={`w-3 h-3 rounded-full border ${subTask.completed ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-400 dark:bg-gray-800'}`}></span>
                                    </div>
                                ))}
                            </div>
                        )}

                        <form onSubmit={handleAddSubTask(task.id)} className="flex space-x-2 mt-3">
                            <input
                                type="text"
                                placeholder="Add sub-task..."
                                value={newSubTaskText[task.id] || ''}
                                onChange={(e) => setNewSubTaskText(prev => ({ ...prev, [task.id]: e.target.value }))}
                                className="flex-grow p-1 border border-gray-300 rounded-lg text-sm dark:bg-gray-700 dark:text-white"
                            />
                            <Button type="submit" className="text-xs px-2 py-1 flex-shrink-0">Add</Button>
                        </form>
                        </>
                    )}
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">No tasks found for this filter.</p>
          )}
        </div>
      </Card>
    </div>
  );
}

export default LocalTaskManager;