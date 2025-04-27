import React from 'react';
import { Cpu, Server, Database, Radio, Smartphone } from 'lucide-react';

const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-medium mb-4">
            Technology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Architecture
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Project Sentinel combines cutting-edge hardware and software technologies to create
            a comprehensive safety ecosystem that's reliable, secure, and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-slate-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-teal-400">Hardware Components</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="w-12 h-12 bg-teal-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Cpu size={24} className="text-teal-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Microprocessor & Sensors</h4>
                  <p className="text-slate-400">
                    Ultra low-power ARM Cortex-M4F processor, BioSensor array for heart rate and stress detection,
                    9-axis motion sensors, and temperature monitoring.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-teal-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Radio size={24} className="text-teal-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Connectivity & Location</h4>
                  <p className="text-slate-400">
                    Bluetooth 5.2 LE, Cellular connectivity (LTE-M/NB-IoT), GPS/GLONASS/Galileo positioning,
                    and Ultra-wideband for precise indoor positioning.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-rose-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Smartphone size={24} className="text-rose-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Power & Interface</h4>
                  <p className="text-slate-400">
                    High-density lithium polymer battery with 7+ day life, wireless charging,
                    haptic feedback engine, and capacitive touch sensors for discreet control.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-rose-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Radio size={24} className="text-rose-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Self-Defense Module</h4>
                  <p className="text-slate-400">
                    Legally-compliant electrical pulse generator, multi-factor activation system,
                    and redundant safety mechanisms to prevent accidental discharge.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-rose-500">Software & Cloud Architecture</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="w-12 h-12 bg-rose-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Server size={24} className="text-rose-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Edge Computing</h4>
                  <p className="text-slate-400">
                    On-device AI for pattern recognition and threat detection, real-time signal processing,
                    and local buffer for audio recording and sensor data.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-rose-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Database size={24} className="text-rose-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Cloud Platform</h4>
                  <p className="text-slate-400">
                    End-to-end encrypted data storage, distributed microservice architecture,
                    and real-time event processing with redundant fail-safe systems.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-teal-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Smartphone size={24} className="text-teal-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Mobile Applications</h4>
                  <p className="text-slate-400">
                    Cross-platform user app for configuration and monitoring, dedicated responder app
                    for emergency contacts, and administrative portal for system management.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-teal-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Server size={24} className="text-teal-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Security Infrastructure</h4>
                  <p className="text-slate-400">
                    Zero-knowledge architecture, multi-factor authentication, blockchain-based
                    evidence preservation, and GDPR/CCPA compliant data handling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;