import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import UserJourney from './components/UserJourney';
import TechStack from './components/TechStack';
import Impact from './components/Impact';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => {
    document.title = 'Project Sentinel - Women\'s Safety Wearable';
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <UserJourney />
      <TechStack />
      <Impact />
      <Footer />
    </div>
  );
}

export default App;