// src/pages/LoginPage.jsx (Simulating login/contact actions)
import React from 'react';
import Button from '../components/Button';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'; 

// LoginPage now accepts the onNavigate prop
const LoginPage = ({ onNavigate }) => {

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Successful! Redirecting to Home...");
    onNavigate('home'); // <-- Redirect to home on success
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    alert("Message Sent! Thank you for reaching out.");
    // In a real app, form data would be sent here.
  };

  return (
    <div className="min-h-screen bg-white font-inter pt-16">
      
      {/* Top Section: Login */}
      <section className="pt-32 pb-12 px-4 max-w-sm mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome Back</h1>
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 space-y-4">
              <form onSubmit={handleLogin} className="space-y-4"> {/* Use form and submit */}
                  <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
                      required
                  />
                  <input 
                      type="password" 
                      placeholder="Password" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
                      required
                  />
                  <Button 
                      type="submit" // Set type to submit
                      variant="primary" 
                      className="w-full text-base p-3 font-semibold"
                  >
                      Log In
                  </Button>
              </form>
              <a href="#" className="text-sm text-gray-500 hover:text-emerald-500">Forgot Password?</a>
          </div>
      </section>

      <div className="border-t border-gray-100 mt-12 mb-12 max-w-7xl mx-auto"></div>

      {/* Bottom Section: Contact Form & Channels */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Get In Touch</h2>
          
          <div className="flex flex-col lg:flex-row gap-10">
              {/* Left Column: Contact Form */}
              <div className="lg:w-2/3 bg-white p-8 rounded-xl shadow-xl border border-gray-200">
                  <form onSubmit={handleSendMessage} className="space-y-4"> {/* Use form and submit */}
                      <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500" required/>
                      <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500" required/>
                      <input type="text" placeholder="Subject" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500" required/>
                      <textarea rows="4" placeholder="Message" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500" required></textarea>
                      <Button type="submit" variant="primary" className="p-3 font-semibold w-full">
                          Send Message
                      </Button>
                  </form>
              </div>

              {/* Right Column: Alternative Contact Channels & Location */}
              <div className="lg:w-1/3 space-y-8">
                  {/* Channels */}
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900">Support & Contact</h3>
                      <div className="space-y-2">
                        <p className="text-gray-600 flex items-center">
                            <EnvelopeIcon className="w-5 h-5 mr-2 text-emerald-500"/> Email: <span className="ml-1 font-medium">support@focusflow.com</span>
                        </p>
                        <p className="text-gray-600 flex items-center">
                            <PhoneIcon className="w-5 h-5 mr-2 text-emerald-500"/> Phone: <span className="ml-1 font-medium">+1 (555) 123-4567</span>
                        </p>
                      </div>
                      <a href="#" className="text-emerald-500 hover:text-emerald-600 font-medium transition duration-150 block mt-3">
                          View Support Documentation &rarr;
                      </a>
                  </div>

                  {/* Location/Office */}
                  <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900">Our Office</h3>
                      {/* Placeholder Map */}
                      <div className="bg-gray-300 h-40 w-full rounded-lg flex items-center justify-center text-gray-700 font-medium">
                          [Map Placeholder]
                      </div>
                      <p className="text-sm text-gray-600">
                          123 Productivity Ave, Suite 400<br/>
                          Flow City, 90210
                      </p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default LoginPage;