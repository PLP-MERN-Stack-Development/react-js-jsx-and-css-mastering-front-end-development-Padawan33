// src/pages/APIBrowserPage.jsx
import React from 'react';
import { ChartBarSquareIcon, CodeBracketSquareIcon, CalendarDaysIcon, GlobeAltIcon, RectangleGroupIcon, ClockIcon } from '@heroicons/react/24/outline'; 

// Detailed Feature Card Data
const featureCards = [
  {
    icon: CodeBracketSquareIcon,
    title: "RESTful API Endpoints",
    description: "Full read/write access to all task data via secure, well-documented REST endpoints.",
  },
  {
    icon: ChartBarSquareIcon,
    title: "Advanced Reporting",
    description: "Extract custom reports and analytics on team performance and task completion rates.",
  },
  {
    icon: CalendarDaysIcon,
    title: "Smart Scheduling",
    description: "Programmatically manage due dates, reminders, and recurring task patterns.",
  },
  {
    icon: GlobeAltIcon,
    title: "Webhooks for Events",
    description: "Receive real-time push notifications for task creations, updates, or deletions.",
  },
  {
    icon: RectangleGroupIcon,
    title: "Kanban Board Integration",
    description: "Sync task status directly with external Kanban and project management tools.",
  },
  {
    icon: ClockIcon,
    title: "Time Tracking Hooks",
    description: "Integrate with third-party time tracking services using dedicated API hooks.",
  },
];

// Use Case Accordion Data
const useCases = [
  {
    title: "Individuals",
    content: "Perfect for managing personal projects, errands, and tracking habits with high granularity. Leverage the API to integrate personal automation tools.",
  },
  {
    title: "Small Teams",
    content: "Use sub-tasks and categories to break down projects and assign ownership efficiently. Webhooks ensure immediate communication.",
  },
  {
    title: "Students",
    content: "Plan study schedules, track deadlines, and organize course materials by priority. Automate class schedule imports via the API.",
  },
];


const APIBrowser = () => {
  return (
    // Updated line: Set dark background for the page container
    <div className="min-h-screen bg-white font-inter pt-16 dark:bg-gray-900">
      
      {/* 1. Sub-Hero Section */}
      <section className="pt-32 pb-12 px-4 text-center max-w-3xl mx-auto">
          {/* Updated line: Added dark:text-white */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 dark:text-white">
              Focus Flow <span className="text-emerald-500">API Capabilities</span>
          </h1>
          {/* Updated line: Added dark:text-gray-400 */}
          <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore the power and flexibility of our task management platform. Integrate seamlessly and customize your workflow with our robust, feature-rich API.
          </p>
      </section>

      {/* 2. Feature Grid (Detailed) */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
          {/* Updated line: Added dark:text-white */}
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureCards.map((card, index) => (
                  // Updated line: Set dark background for feature card
                  <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 space-y-3 dark:bg-gray-800 dark:border-gray-700">
                      <div className="w-12 h-12 text-white bg-emerald-500 rounded-lg flex items-center justify-center mb-3">
                          <card.icon className="w-6 h-6" />
                      </div>
                      {/* Updated line: Added dark:text-white */}
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                      {/* Updated line: Added dark:text-gray-400 */}
                      <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
                  </div>
              ))}
          </div>
      </section>
      
      {/* 3. Use Case Scenarios (Accordion) */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
          {/* Updated line: Added dark:text-white */}
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Who Benefits?</h2>
          {/* Updated line: Set dark background and border for accordion wrapper */}
          <div className="border border-gray-200 rounded-xl divide-y divide-gray-200 shadow-md dark:border-gray-700 dark:divide-gray-700 dark:bg-gray-800">
              {useCases.map((useCase, index) => (
                  <details key={index} className="p-4 group">
                      {/* Updated line: Added dark:text-gray-200 */}
                      <summary className="font-semibold text-gray-800 cursor-pointer flex justify-between items-center py-1 dark:text-gray-200">
                          {useCase.title}
                          <span className="text-emerald-500 transform transition duration-200 group-open:rotate-90">
                            ▶
                          </span>
                      </summary>
                      {/* Updated line: Added dark:text-gray-400 and dark:border-gray-700 */}
                      <p className="pt-3 pb-1 text-gray-600 border-t border-gray-100 mt-2 dark:text-gray-400 dark:border-gray-700">
                          {useCase.content}
                      </p>
                  </details>
              ))}
          </div>
      </section>

    </div>
  );
};

export default APIBrowser;                          