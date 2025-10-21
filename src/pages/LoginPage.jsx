import React from 'react';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  // We use a simple flex wrapper to center the LoginForm on the page content area
  return (
    <div className="flex justify-center items-center w-full min-h-full py-10 bg-blue-500">
      <LoginForm />
    </div>
  );
}

export default LoginPage;