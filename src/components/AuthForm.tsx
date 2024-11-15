import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Mail, Lock, User } from 'lucide-react';

interface AuthFormProps {
  isLogin: boolean;
  onToggle: () => void;
}

export default function AuthForm({ isLogin, onToggle }: AuthFormProps) {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      await login(formData.email, formData.password);
      navigate('/dashboard');
    } else {
      // In a real app, handle signup here
      await login(formData.email, formData.password);
      navigate('/dashboard');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!isLogin && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-10 pr-4 py-2 bg-secondary-light rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="John Doe"
            />
          </div>
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full pl-10 pr-4 py-2 bg-secondary-light rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full pl-10 pr-4 py-2 bg-secondary-light rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="••••••••"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-secondary font-semibold py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors"
      >
        {isLogin ? 'Sign In' : 'Create Account'}
      </button>

      <p className="text-center text-gray-400">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
        <button
          type="button"
          onClick={onToggle}
          className="text-primary hover:text-primary-dark"
        >
          {isLogin ? 'Sign up' : 'Sign in'}
        </button>
      </p>
    </form>
  );
}