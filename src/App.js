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
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`font-roboto ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Header theme={theme} setTheme={setTheme} />
      <Hero theme={theme} setTheme={setTheme} />
      <About theme={theme} setTheme={setTheme} />
      <Experience theme={theme} setTheme={setTheme} />
      <Projects theme={theme} setTheme={setTheme} />
      <Skills theme={theme} setTheme={setTheme} />
      <Certifications theme={theme} setTheme={setTheme} />
      <Contact theme={theme} setTheme={setTheme} />
      <Footer theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;