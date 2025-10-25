// src/pages/HomePage.jsx
import React from 'react';
import Button from '../components/Button';
import LocalTaskManager from '../components/LocalTaskManager'; 
import { SparklesIcon, UsersIcon, TrophyIcon } from '@heroicons/react/24/outline';
import appScreenshot from '../assets/app-screenshot.png';

const trustLogos = ['Team Alpha', 'Innovate Co.', 'Academia Labs', 'Future Tech'];

const valueProps = [
  {
    icon: SparklesIcon,
    title: "Stay Focused",
    description: "Eliminate distractions with a clean, task-oriented view designed for deep work.",
  },
  {
    icon: UsersIcon,
    title: "Collaborate Easily",
    description: "Share tasks, manage sub-tasks, and keep your team aligned effortlessly.",
  },
  {
    icon: TrophyIcon,
    title: "Achieve Goals",
    description: "Use priorities and deadlines to tackle your most important work first.",
  },
];

const HomePage = () => {
  return (
    // Updated line: Removed hardcoded bg-white and added dark:bg-gray-900
    <div className="min-h-screen bg-gray-50 font-inter pt-16 dark:bg-gray-900">
      
      {/* ADDED: The Main Task Manager (Focus Flow) */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        {/* Updated line: Added dark:text-white */}
        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
            Your Work, Streamlined.
        </h1>
        <LocalTaskManager />
      </section>
      
      {/* 1. Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between pt-12 pb-20 px-4 max-w-7xl mx-auto">
        {/* Left: Headline, Subheadline, CTA */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          {/* Updated line: Added dark:text-white */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight dark:text-white">
            Designed for <span className="text-emerald-500">Deep Work.</span>
          </h2>
          {/* Updated line: Added dark:text-gray-400 */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            The minimalist task manager built for deep work and maximum efficiency.
          </p>
          <Button variant="primary" className="text-lg px-8 py-3 rounded-xl font-bold shadow-lg shadow-emerald-200/50">
            Learn More
          </Button>
        </div>
        
        {/* Right: Actual Screenshot */}
        <div className="md:w-1/2 mt-12 md:mt-0 md:pl-10">
          <img
            src={appScreenshot}
            alt="Application Screenshot"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl border border-gray-300 dark:border-gray-600"
            style={{ background: '#222' }}
          />
        </div>
      </section>

      {/* 2. Trust Bar */}
      {/* Updated line: Added dark:bg-gray-800 and dark:border-gray-700 */}
      <section className="py-4 bg-gray-50 border-y border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        {/* Updated line: Added dark:text-gray-400 */}
        <div className="max-w-7xl mx-auto px-4 flex justify-around items-center opacity-70">
          <span className="text-sm text-gray-600 hidden sm:inline font-semibold dark:text-gray-400">Trusted by:</span>
          {/* Updated line: Added dark:text-gray-300 */}
          {trustLogos.map((logo, index) => (
            <span key={index} className="font-semibold text-gray-700 text-sm md:text-base dark:text-gray-300">
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* 3. Core Value Proposition (Feature Cards) */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        {/* Updated line: Added dark:text-white */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Core Value Proposition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            // Updated line: Added dark:bg-gray-800, dark:shadow-xl and dark:border-gray-700
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 text-center space-y-3 dark:bg-gray-800 dark:shadow-xl dark:border-gray-700">
              <prop.icon className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              {/* Updated line: Added dark:text-white */}
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{prop.title}</h3>
              {/* Updated line: Added dark:text-gray-400 */}
              <p className="text-gray-600 dark:text-gray-400">{prop.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;