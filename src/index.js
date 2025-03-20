// /new-portfolio/src/index.js
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/tailwind.css';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { initParticlesEngine } from '@tsparticles/react';

const ParticlesBackground = () => {
  useEffect(() => {
    // Initialize the particles engine
    initParticlesEngine(async (engine) => {
      console.log('Initializing particles engine:', engine);
      try {
        await loadSlim(engine);
        console.log('Particles engine initialized successfully');
      } catch (error) {
        console.error('Particles initialization failed:', error);
        // Continue rendering even if initialization fails
      }
    });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: { value: '#F5F7FA' }, // Light background color
        },
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } },
          color: { value: '#2E86AB' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 2, direction: 'none', random: true },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: 'repulse' } },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        fullScreen: { enable: true, zIndex: -1 },
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}
    />
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParticlesBackground />
    <App />
  </React.StrictMode>
);