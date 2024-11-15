import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="fixed w-full bg-secondary/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-white text-xl font-bold">EcoGuardian</span>
          </Link>

          <div className="flex space-x-4">
            <Link to="/about" className="text-gray-300 hover:text-primary px-3 py-2">
              About
            </Link>
            <Link to="/calculator" className="text-gray-300 hover:text-primary px-3 py-2">
              Calculator
            </Link>
            <Link to="/case-study" className="text-gray-300 hover:text-primary px-3 py-2">
              Case Study
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-primary px-3 py-2">
              Contact
            </Link>
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-primary-dark"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-primary-dark"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}