import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="text-white font-bold text-xl flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              Project Sentinel
            </div>
            <p className="text-slate-400 mb-4">
              Empowering women with discreet, effective safety technology for a world without fear.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-slate-400 mb-4">Subscribe to our newsletter for product updates and safety tips.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-500 text-white"
              />
              <button className="bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded-r-md transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Project Sentinel. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;