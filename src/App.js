// /new-portfolio/src/App.js
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  if (theme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`font-roboto transition-colors duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-[#0B0A2A] via-[#1E1B5E] to-[#3B2A7D]' // Deep galaxy gradient
        : 'bg-gradient-to-b from-[#F0F9FF] via-[#E0F2FE] to-[#D6EAF8]' // Softer light gradient
    }`}>
      <Header theme={theme} setTheme={setTheme} scrollToSection={scrollToSection} />
      <div id="hero" className="section"><Hero theme={theme} setTheme={setTheme} /></div>
      <div id="about" className="section"><About theme={theme} setTheme={setTheme} /></div>
      <div id="experience" className="section"><Experience theme={theme} setTheme={setTheme} /></div>
      <div id="projects" className="section"><Projects theme={theme} /></div>
      <div id="skills" className="section"><Skills theme={theme} setTheme={setTheme} /></div>
      <div id="certifications" className="section"><Certifications theme={theme} setTheme={setTheme} /></div>
      <div id="contact" className="section"><Contact theme={theme} setTheme={setTheme} /></div>
      <div id="footer" className="section"><Footer theme={theme} setTheme={setTheme} /></div>
    </div>
  );
}

export default App;