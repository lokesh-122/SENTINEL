import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-900 text-white flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Radial accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-rose-500">Project Sentinel</span>: 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-teal-400">
                Empowering Safety
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-lg">
              An elegant wearable solution designed to protect women through cutting-edge technology, 
              discreet monitoring, and immediate emergency response capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-md transition-all transform hover:scale-105 font-semibold">
                Learn More
              </button>
              <button className="border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-8 py-3 rounded-md transition-all">
                See Features
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-slate-800 to-slate-700 rounded-full mx-auto flex items-center justify-center p-4 shadow-xl border border-slate-700">
                <div className="w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center shadow-inner">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 bg-slate-900 rounded-full flex items-center justify-center overflow-hidden border-4 border-rose-500/30">
                    <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-rose-500/20 to-teal-500/20 flex items-center justify-center">
                      <div className="text-center px-4">
                        <span className="block text-2xl font-bold text-rose-500">Sentinel</span>
                        <span className="block text-sm text-slate-400 mt-2">Smart Safety Bracelet</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-24 h-24 bg-teal-500/10 rounded-full blur-xl"></div>
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-24 h-24 bg-rose-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#problem" className="text-slate-400 hover:text-white transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;