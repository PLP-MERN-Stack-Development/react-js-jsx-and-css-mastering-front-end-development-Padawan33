import React from 'react';
import RegisterForm from '../components/RegisterForm';

function RegisterPage() {
  // We use a simple flex wrapper to center the RegisterForm on the page content area
  return (
    <div className="flex justify-center items-center w-full min-h-full py-10 bg-green-500">
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;