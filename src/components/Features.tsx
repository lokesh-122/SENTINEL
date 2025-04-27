import React, { useState } from 'react';
import { AlertCircle, Heart, Mic, Shield, Cloud, Sparkles } from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(1);
  
  const features: Feature[] = [
    {
      id: 1,
      icon: <AlertCircle size={32} />,
      title: "Instant SOS Alerts",
      description: "With a discreet double-tap or voice command, Sentinel sends immediate alerts to emergency contacts and local authorities. GPS location, audio, and vital signs are transmitted in real-time to ensure a rapid response.",
      color: "rose"
    },
    {
      id: 2,
      icon: <Heart size={32} />,
      title: "Heartbeat Monitoring",
      description: "Advanced sensors continuously monitor vital signs to detect signs of distress or danger. The system recognizes patterns associated with fear or panic, triggering automatic alerts when manual activation isn't possible.",
      color: "rose"
    },
    {
      id: 3,
      icon: <Mic size={32} />,
      title: "Discreet Audio Recording",
      description: "When activated, Sentinel begins recording audio to capture evidence during threatening situations. All recordings are securely encrypted and stored in the cloud, accessible only to the user and, when necessary, law enforcement.",
      color: "teal"
    },
    {
      id: 4,
      icon: <Shield size={32} />,
      title: "Integrated Self-Defense",
      description: "In extreme danger, Sentinel provides a last line of defense with its legally-compliant stun mechanism. A specific gesture sequence activates this feature, preventing accidental discharge while ensuring it's available when needed.",
      color: "rose"
    },
    {
      id: 5,
      icon: <Cloud size={32} />,
      title: "Secure Cloud Integration",
      description: "All data captured by Sentinel is encrypted and securely stored in the cloud. This ensures evidence preservation and allows authorized emergency contacts to access critical information in real-time during emergencies.",
      color: "teal"
    },
    {
      id: 6,
      icon: <Sparkles size={32} />,
      title: "Elegant, Everyday Design",
      description: "Sentinel is designed to be worn daily, with a stylish appearance that complements any outfit. The lightweight, water-resistant construction ensures comfort and durability without sacrificing functionality.",
      color: "teal"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm font-medium mb-4">
            Core Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Advanced Protection Technology
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Project Sentinel combines state-of-the-art technology with practical safety features
            to provide comprehensive protection in a stylish, wearable device.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all ${
                activeFeature === feature.id 
                  ? `border-2 border-${feature.color}-500 transform scale-105` 
                  : 'border border-slate-200 hover:border-slate-300'
              }`}
              onClick={() => setActiveFeature(feature.id)}
            >
              <div className={`w-14 h-14 rounded-full bg-${feature.color}-100 flex items-center justify-center mb-4 text-${feature.color}-500`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              {activeFeature === feature.id && (
                <p className="text-slate-600 transition-all">{feature.description}</p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-slate-100 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">How Features Work Together</h3>
          
          <div className="relative py-8">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-300"></div>
            
            {/* Steps */}
            <div className="relative z-10 mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">1</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto border-t-4 border-rose-500">
                <h4 className="font-bold text-slate-900 mb-2">Detection & Assessment</h4>
                <p className="text-slate-600">
                  Sentinel's sensors continuously monitor vital signs and environmental factors.
                  AI algorithms assess potential threat levels based on heart rate, movement patterns, and other indicators.
                </p>
              </div>
            </div>
            
            <div className="relative z-10 mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-teal-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">2</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto border-t-4 border-teal-500">
                <h4 className="font-bold text-slate-900 mb-2">Alert & Evidence Collection</h4>
                <p className="text-slate-600">
                  When triggered manually or automatically, Sentinel activates its alert system while simultaneously
                  beginning secure audio recording and vital sign logging to gather critical evidence.
                </p>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">3</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto border-t-4 border-rose-500">
                <h4 className="font-bold text-slate-900 mb-2">Response & Protection</h4>
                <p className="text-slate-600">
                  Emergency contacts and authorities receive real-time data and location information.
                  If necessary, the self-defense mechanism can be activated while help is en route.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;