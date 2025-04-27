import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="text-white font-bold text-lg md:text-xl flex items-center gap-2">
              <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              Project Sentinel
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-white hover:text-rose-400 transition-colors">Problem</a>
            <a href="#solution" className="text-white hover:text-rose-400 transition-colors">Solution</a>
            <a href="#features" className="text-white hover:text-rose-400 transition-colors">Features</a>
            <a href="#journey" className="text-white hover:text-rose-400 transition-colors">User Journey</a>
            <a href="#impact" className="text-white hover:text-rose-400 transition-colors">Impact</a>
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-md transition-colors">
              Contact Us
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-rose-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#problem"
              className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Problem
            </a>
            <a
              href="#solution"
              className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Solution
            </a>
            <a
              href="#features"
              className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#journey"
              className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              User Journey
            </a>
            <a
              href="#impact"
              className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Impact
            </a>
            <button 
              className="w-full text-left block px-3 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;