import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import AuthForm from '../components/AuthForm';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen pt-16 pb-12 flex flex-col bg-secondary">
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8 bg-secondary-light p-8 rounded-xl shadow-2xl">
          <div>
            <div className="flex justify-center">
              <Leaf className="h-12 w-12 text-primary" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              {isLogin ? 'Welcome back' : 'Create your account'}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              {isLogin
                ? 'Sign in to access your dashboard'
                : 'Join us in making software more sustainable'}
            </p>
          </div>

          <AuthForm isLogin={isLogin} onToggle={() => setIsLogin(!isLogin)} />
        </div>
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/10 to-transparent transform rotate-12" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary/10 to-transparent transform -rotate-12" />
      </div>
    </div>
  );
}