'use client';

import { useState } from 'react';
import { Logo } from '@/components/logo'; // Adjust the import based on your project structure

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle login logic here
  // };

  return (
    <div className="flex min-h-screen">
      {/* Left Side: Form */}
      <div className="flex flex-col justify-between items-center w-[50%] p-8">
        {' '}
        {/* Use justify-between to push footer down */}
        <div className="my-auto">
          <h1 className="text-2xl font-bold text-[#00bc65]">
            Sign-in to your account
          </h1>
          <p className="text-sm text-gray-600">
            Ready to dive in? Just sign in to continue where you left off.
          </p>
          <form className="space-y-4 mt-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Employee ID
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#00bc65] text-white py-2 rounded-md"
            >
              Sign In
            </button>
          </form>
        </div>
        {/* Footer Section */}
        <footer className="mt-4 text-center text-sm text-gray-500">
          <p>Powered by ELID Technology Intl., Inc.</p>
          <p>Version 1.0.0</p>
        </footer>
      </div>

      {/* Right Side: Background Image */}
      <div className="relative w-[50%] h-[95vh] bg-[#02a65b] rounded-xl my-auto mr-6">
        <div
          style={{
            backgroundImage: 'url(/image-pattern.png)', // Adjust the path as needed
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            opacity: 0.05, // Adjust opacity to make the image less noticeable
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <Logo />
        </div>
      </div>
    </div>
  );
}
