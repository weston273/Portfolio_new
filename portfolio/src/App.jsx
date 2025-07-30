import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;