// src/components/TaskManager.jsx (FINAL CORRECTED CODE)
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function TaskManager() {
  // States for API data, loading, and error
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // States for search and pagination 
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // 10 users / 5 per page = 2 pages

  // Pagination Handlers
  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };
  
  // useEffect for fetching data (API Integration)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetching data from the USERS endpoint
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=5`
        );
        
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load user data from the API. Check the console for network errors.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage]);

  // Filter Logic
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- RENDERING LOGIC (Requirement 3: Loading/Error States) ---
  let content;

  if (loading) {
    content = <p className="text-center py-10 text-xl text-blue-500">Loading users... 🔄</p>;
  } else if (error) {
    content = <p className="text-center py-10 text-xl text-red-600 font-bold">{error}</p>;
  } else if (filteredUsers.length === 0 && searchTerm) {
    content = <p className="text-center py-10 text-gray-500">No results found for "{searchTerm}".</p>;
  } else {
    // Display Fetched Data in a Grid (Requirement 2)
    content = (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filteredUsers.map(user => (
          // Card displays Name, Email, and Company
          <Card key={user.id} title={user.name} className="hover:shadow-lg transition"> 
            <p className="text-gray-600 dark:text-gray-400 font-medium">Email: {user.email}</p>
            {/* CRITICAL FIX: Using optional chaining ?. to safely access nested properties */}
            <p className="text-gray-600 dark:text-gray-400">Company: {user.company?.name || 'N/A'}</p>
            <p className="text-sm text-blue-500 mt-2">User ID: {user.id}</p>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4">
      <Card title="API User Browser" className="w-full max-w-4xl">
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search user names..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        />

        {content}
        
        {/* Pagination Controls */}
        <div className="flex justify-between items-center w-full mt-8 max-w-sm mx-auto">
            <button
                onClick={goToPrevPage}
                disabled={currentPage === 1 || loading}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400 hover:bg-blue-600 transition"
            >
                &larr; Previous
            </button>
            
            <p className='text-md font-semibold dark:text-gray-300'>
                Page {currentPage} of {totalPages}
            </p>

            <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages || loading}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400 hover:bg-blue-600 transition"
            >
                Next &rarr;
            </button>
        </div>

      </Card>
    </div>
  );
}

export default TaskManager;