// /new-portfolio/src/components/Hero.js
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = ({ theme }) => {
  return (
    <motion.section
      className={`min-h-screen ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#1A3C34] via-[#1A3C34] to-[#0B0A2A] text-[#E0F7FA]' // Light teal gradient
          : 'bg-gradient-to-br from-[#0B0A2A] via-[#0B0A2A] to-[#1E1B5E] text-[#E0F7FA]' // Dark blue gradient
      } flex items-center justify-center relative overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="particle-background absolute top-0 left-0 w-full h-full z-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      <div className="text-center relative z-10">
        <motion.img
          src="/logo192.png"
          alt="Logo"
          className="h-40 mx-auto mb-6 shadow-md rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1.2, type: 'spring', stiffness: 80 }}
        />
        <h1 className="text-6xl md:text-7xl font-poppins font-extrabold tracking-tight">
          Suresh Kumar Barach
        </h1>
        <div className="text-2xl md:text-3xl mt-4 font-roboto">
          <Typewriter
            options={{
              strings: ['Full-Stack Developer', 'DevOps Enthusiast', 'Innovator'],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
            onInit={(typewriter) => {
              typewriter.start();
            }}
          />
        </div>
        <motion.button
          className={`mt-8 px-8 py-3 rounded-full font-semibold text-lg shadow-md ${
            theme === 'dark' ? 'bg-[#1A3C34] text-[#F0F9FF] hover:bg-[#4A6A60]' : 'bg-[#00DDEB] text-[#0B0A2A] hover:bg-[#FF3CAC]'
          }`}
          whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Hero;