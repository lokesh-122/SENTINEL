import React, { useState } from 'react';
import { AlertCircle, Map, Phone, Shield, Wifi, Check } from 'lucide-react';

const UserJourney: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Danger Detection",
      description: "Sarah is walking home late at night and notices she's being followed. Her heart rate increases, which Sentinel detects.",
      note: "Sentinel can be manually activated with a discreet double-tap or automatically when stress signs are detected."
    },
    {
      id: 2,
      icon: <Wifi className="w-8 h-8" />,
      title: "Alert Activation",
      description: "Sarah double-taps her Sentinel bracelet, activating the emergency protocol. The bracelet vibrates slightly to confirm activation.",
      note: "Activation is discreet, with no visible indicators that would alert a potential attacker."
    },
    {
      id: 3,
      icon: <Map className="w-8 h-8" />,
      title: "Data Transmission",
      description: "Sentinel begins recording audio and transmitting Sarah's GPS location and vital signs to her emergency contacts and local authorities.",
      note: "All data is encrypted end-to-end for privacy and security."
    },
    {
      id: 4,
      icon: <Phone className="w-8 h-8" />,
      title: "Response Coordination",
      description: "Sarah's emergency contacts receive alerts with her real-time location. Police are dispatched to her coordinates.",
      note: "Contacts can communicate with each other through the Sentinel app to coordinate response."
    },
    {
      id: 5,
      icon: <Shield className="w-8 h-8" />,
      title: "Self-Defense Activation",
      description: "As the situation escalates, Sarah uses the specific gesture sequence to activate Sentinel's stun mechanism for self-defense.",
      note: "The stun mechanism is a last resort, legally compliant, and designed to create distance for escape."
    },
    {
      id: 6,
      icon: <Check className="w-8 h-8" />,
      title: "Resolution & Evidence",
      description: "Help arrives. All recorded audio and data are securely stored as evidence for potential legal proceedings.",
      note: "Sarah can later access all data through the secure Sentinel app and share it with authorities if needed."
    }
  ];

  const handleStepChange = (stepId: number) => {
    setCurrentStep(stepId);
  };

  return (
    <section id="journey" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-slate-200 text-slate-800 rounded-full text-sm font-medium mb-4">
            User Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How Sentinel Works in an Emergency
          </h2>
          <div className="w-24 h-1 bg-slate-400 mx-auto"></div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 max-w-5xl mx-auto">
          <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide">
            <div className="flex space-x-2">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => handleStepChange(step.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full flex items-center space-x-2 transition-all ${
                    currentStep === step.id
                      ? 'bg-rose-500 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{step.id}</span>
                  <span className="hidden sm:inline">{step.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative mb-10 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${(currentStep - 1) * 100}%)` }}
            >
              {steps.map((step) => (
                <div key={step.id} className="min-w-full">
                  <div className="bg-slate-100 rounded-lg p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 mr-4">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-lg text-slate-700 mb-6">{step.description}</p>
                    <div className="bg-slate-200 p-4 rounded-lg">
                      <p className="text-slate-600 text-sm italic">{step.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button 
              onClick={() => setCurrentStep(prev => Math.max(prev - 1, 1))}
              disabled={currentStep === 1}
              className={`px-4 py-2 rounded-md ${
                currentStep === 1 
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                  : 'bg-slate-800 text-white hover:bg-slate-700'
              }`}
            >
              Previous
            </button>
            <div className="flex space-x-1">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className={`w-3 h-3 rounded-full ${
                    currentStep === step.id ? 'bg-rose-500' : 'bg-slate-300'
                  }`}
                ></div>
              ))}
            </div>
            <button 
              onClick={() => setCurrentStep(prev => Math.min(prev + 1, steps.length))}
              disabled={currentStep === steps.length}
              className={`px-4 py-2 rounded-md ${
                currentStep === steps.length 
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                  : 'bg-slate-800 text-white hover:bg-slate-700'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserJourney;