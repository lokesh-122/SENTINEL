import React from 'react';
import { AlertTriangle, Clock, ShieldAlert } from 'lucide-react';

const Problem: React.FC = () => {
  const statistics = [
    { 
      id: 1, 
      icon: <AlertTriangle className="w-10 h-10 text-rose-500" />,
      value: "1 in 3", 
      label: "women experience violence in their lifetime" 
    },
    { 
      id: 2, 
      icon: <Clock className="w-10 h-10 text-rose-500" />,
      value: "Every 73 seconds", 
      label: "someone in the US experiences sexual assault" 
    },
    { 
      id: 3, 
      icon: <ShieldAlert className="w-10 h-10 text-rose-500" />,
      value: "Less than 40%", 
      label: "of assaults are reported to authorities" 
    }
  ];

  return (
    <section id="problem" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium mb-4">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Women's Safety is a Critical Issue
          </h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Despite progress in many areas of society, women continue to face significant safety concerns in their daily lives. 
            From walking alone after dark to navigating public transportation, many women experience a persistent undercurrent of vulnerability.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Current Safety Challenges:</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="mr-2 text-rose-500">•</span>
                <span><strong>Delayed Response Time:</strong> Traditional emergency systems often have delayed response times, critical in life-threatening situations.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-rose-500">•</span>
                <span><strong>Lack of Discreet Options:</strong> Many existing safety solutions are obvious and can escalate dangerous situations.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-rose-500">•</span>
                <span><strong>Evidence Challenges:</strong> Victims often struggle to provide evidence of threats or assaults, complicating legal proceedings.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-rose-500">•</span>
                <span><strong>Limited Self-Defense Options:</strong> Many women lack practical, accessible means of self-defense in threatening situations.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-rose-500">•</span>
                <span><strong>Stigma and Reporting:</strong> Fear and stigma prevent many incidents from being reported, creating a cycle of silence.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {statistics.map(stat => (
            <div key={stat.id} className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{stat.value}</h3>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-slate-900 italic">
            "Safety isn't just about protection—it's about freedom. The freedom to live, work, and move without fear."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;