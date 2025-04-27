import React from 'react';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

const Impact: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Project Sentinel has transformed how I navigate the world. I no longer have to plan my day around safety concerns.",
      author: "Sarah J., Urban Professional",
      location: "New York City",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      quote: "As a college student who often studies late, Sentinel gives me peace of mind and the confidence to focus on my education.",
      author: "Mei L., Student",
      location: "San Francisco",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      quote: "Working with survivors of assault, I've seen firsthand how Sentinel helps rebuild confidence and reclaim independence.",
      author: "Dr. Rivera, Psychologist",
      location: "Chicago",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const impactStats = [
    {
      id: 1,
      icon: <TrendingUp className="h-8 w-8 text-teal-500" />,
      value: "89%",
      label: "of users report increased feelings of safety"
    },
    {
      id: 2,
      icon: <Users className="h-8 w-8 text-teal-500" />,
      value: "75,000+",
      label: "women protected worldwide"
    },
    {
      id: 3,
      icon: <Award className="h-8 w-8 text-teal-500" />,
      value: "53%",
      label: "reduction in reported incidents"
    },
    {
      id: 4,
      icon: <Globe className="h-8 w-8 text-teal-500" />,
      value: "32",
      label: "countries with active users"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Transforming Lives Through Technology
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
            Project Sentinel isn't just a product—it's a movement to empower women 
            and transform communities through innovative safety technology.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat) => (
            <div key={stat.id} className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105 border border-slate-100">
              <div className="rounded-full w-16 h-16 bg-teal-100 flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{stat.value}</h3>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Voices of Change</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-slate-50 rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-slate-700 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-900">{testimonial.author}</span>
                    <span className="text-slate-500 text-sm">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-500 to-teal-700 rounded-xl shadow-xl p-8 text-white">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
              <p className="mb-4">
                Project Sentinel is more than a product—it's a commitment to creating a world where women 
                can live, work, and move freely without fear. Join us in building that world.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-teal-700 px-6 py-2 rounded-md font-semibold hover:bg-slate-100 transition-colors">
                  Get Involved
                </button>
                <button className="border border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-teal-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="rounded-lg bg-teal-600 p-6">
                <h4 className="font-semibold mb-2">Community Partners</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Women's Safety Coalition
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Global Security Initiative
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Urban Safety Project
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    TechSafe Foundation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;