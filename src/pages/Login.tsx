import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Music } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the actual login logic
    onLogin();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Music className="w-12 h-12" />
          <span className="text-2xl font-bold">Melodify</span>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Log in to Melodify</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-white focus:outline-none"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-white focus:outline-none"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-500 text-black font-semibold py-3 rounded-full hover:bg-green-400 transition-colors"
            >
              Log In
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400">Don't have an account?</p>
            <Link
              to="/signup"
              className="text-white hover:underline font-medium block mt-2"
            >
              Sign up for Melodify
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}