
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-indigo-500 selection:text-white relative">
      <InteractiveBackground />
      <Navbar />
      <div className="relative z-10">
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      <Chatbot />
    </div>
  );
}

export default App;
