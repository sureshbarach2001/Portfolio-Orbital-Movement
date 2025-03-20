// /new-portfolio/src/components/Hero.js
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-teal-500 to-blue-900 text-white flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* CSS-based particle background */}
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

      {/* Hero content */}
      <div className="text-center relative z-10">
        <motion.img
          src="/logo192.png"
          alt="Logo"
          className="h-40 mx-auto mb-6 shadow-lg rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1.2, type: 'spring', stiffness: 80 }}
        />
        <h1 className="text-6xl md:text-7xl font-poppins font-extrabold tracking-tight">
          Suresh Kumar Barach
        </h1>
        <div className="text-2xl md:text-3xl mt-4 font-roboto text-teal-200">
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
          className="mt-8 bg-teal-400 text-navy px-8 py-3 rounded-full font-semibold text-lg shadow-md"
          whileHover={{ scale: 1.1, backgroundColor: '#34D399', boxShadow: '0 0 15px rgba(52, 211, 153, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#about">Learn More</a>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Hero;