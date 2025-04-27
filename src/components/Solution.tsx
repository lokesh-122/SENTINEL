import React from 'react';
import { Shield, Heart, Clock, ZapOff } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-teal-900 text-teal-300 rounded-full text-sm font-medium mb-4">
            Our Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Introducing Project Sentinel
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-72 h-72 mx-auto border-4 border-teal-500/30 rounded-full flex items-center justify-center relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 p-4 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-500/10 to-rose-500/10 flex items-center justify-center">
                    <div className="relative w-40 h-40 bg-slate-900 rounded-full overflow-hidden border-2 border-teal-500/30 flex items-center justify-center shadow-xl">
                      <div className="absolute inset-4 border-2 border-dashed border-teal-500/30 rounded-full animate-spin-slow"></div>
                      <div className="z-10 text-center">
                        <span className="text-xl font-bold text-teal-400">Sentinel</span>
                        <span className="block text-sm text-slate-400">Smart Safety Bracelet</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-slate-800 px-4 py-2 rounded-full border border-teal-500/30">
                  <Shield size={20} className="text-teal-500" />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-800 px-4 py-2 rounded-full border border-teal-500/30">
                  <ZapOff size={20} className="text-rose-500" />
                </div>
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-slate-800 px-4 py-2 rounded-full border border-teal-500/30">
                  <Heart size={20} className="text-rose-500" />
                </div>
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-slate-800 px-4 py-2 rounded-full border border-teal-500/30">
                  <Clock size={20} className="text-teal-500" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-teal-400">A Revolutionary Approach to Safety</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Project Sentinel is an elegant, wearable safety device designed specifically for women. 
              Disguised as a stylish bracelet, it combines advanced technology with practical safety features to 
              provide comprehensive protection without drawing unwanted attention.
            </p>
            
            <div className="space-y-4">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h4 className="font-semibold text-white mb-2">Discreet Protection</h4>
                <p className="text-slate-400">
                  Sentinel's elegant design allows women to carry powerful safety technology without 
                  revealing they're wearing a security device.
                </p>
              </div>
              
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h4 className="font-semibold text-white mb-2">Immediate Response</h4>
                <p className="text-slate-400">
                  When activated, Sentinel immediately alerts designated emergency contacts and authorities 
                  with the wearer's exact location and status.
                </p>
              </div>
              
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h4 className="font-semibold text-white mb-2">Proactive Monitoring</h4>
                <p className="text-slate-400">
                  Advanced sensors detect signs of distress, such as elevated heart rate or sudden 
                  movements, enabling automatic response when manual activation isn't possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;