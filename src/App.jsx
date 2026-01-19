import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-slate font-sans selection:bg-brand-orange/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
