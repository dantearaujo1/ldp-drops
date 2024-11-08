import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItworks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-secondary min-h-screen text-gray-800">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
