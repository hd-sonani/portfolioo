import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;