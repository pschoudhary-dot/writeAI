import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold">WriteAI</span>
          </div>
          
          <div className="flex items-center space-x-8">
            <button className="hover:text-purple-400 transition-colors">Features</button>
            <button className="hover:text-purple-400 transition-colors">Pricing</button>
            <button className="hover:text-purple-400 transition-colors">Blog</button>
            <button 
              onClick={() => navigate('/auth')}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:opacity-90 transition-opacity"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;