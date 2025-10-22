// src/components/TaskManager.jsx (API Data Browser with new content)
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function TaskManager() {
  // States for API data, loading, and error
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // States for search and pagination 
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // 500 comments total, 50 per page = 10 pages

  // Pagination Handlers
  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };
  
  // useEffect for fetching data (API Integration)
  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetching data from the COMMENTS endpoint, 50 per page
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=50`
        );
        
        setComments(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load topic data from the API. Check the console for network errors.");
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [currentPage]);

  // Filter Logic (Requirement 5) - filters by comment NAME (which acts as topic)
  const filteredComments = comments.filter(comment =>
    comment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- RENDERING LOGIC ---
  let content;

  if (loading) {
    content = <p className="text-center py-10 text-xl text-blue-500">Loading topics... 🔄</p>;
  } else if (error) {
    content = <p className="text-center py-10 text-xl text-red-600 font-bold">{error}</p>;
  } else if (filteredComments.length === 0 && searchTerm) {
    content = <p className="text-center py-10 text-gray-500">No results found for "{searchTerm}".</p>;
  } else {
    // Display Fetched Data in a Grid 
    content = (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Loop through filteredComments */}
        {filteredComments.map(comment => (
          // Card displays Topic (name) and content (body)
          <Card key={comment.id} title={comment.name} className="hover:shadow-lg transition"> 
            <p className="text-gray-600 dark:text-gray-400 font-medium">Topic: {comment.name.substring(0, 50)}...</p>
            <p className="text-gray-600 dark:text-gray-400 italic">User Email: {comment.email}</p>
            <p className="text-gray-800 dark:text-white mt-2">Content: {comment.body.substring(0, 150)}...</p>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4">
      <Card title="API Topics Browser" className="w-full max-w-4xl">
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search topic titles (e.g., health, politics)..."
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