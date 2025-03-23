// /new-portfolio/src/components/Footer.js
import { motion } from 'framer-motion';
import { useState } from 'react';

const Footer = ({ theme }) => {
  const socialIcons = [
    { src: '/assets/icons/linkedin.svg', alt: 'LinkedIn', href: 'https://www.linkedin.com/in/sureshkumarbarach' },
    { src: '/assets/icons/github.png', alt: 'GitHub', href: 'https://github.com/sureshbarach2001' },
    { src: '/assets/icons/instagram.svg', alt: 'Instagram', href: 'https://www.instagram.com/sain_suresh_barach/' },
    { src: '/assets/icons/youtube.svg', alt: 'YouTube', href: 'https://www.youtube.com/@uniquemove8741' },
    { src: '/assets/icons/facebook.svg', alt: 'Facebook', href: 'https://www.facebook.com/sureshraj.menghwar' },
    { src: '/assets/icons/twitter.svg', alt: 'Twitter', href: 'https://x.com/sainsuresh21?s=11' },
  ];

  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <motion.footer
      className={`py-16 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#9AC6D4] via-[#90C0CE] to-[#F0F9FF] text-[#1A3C34]' // Swapped to light teal
          : 'bg-gradient-to-br from-[#8A7AFA] via-[#9A8AFA] to-[#0B0A2A] text-[#E0F7FA]' // Swapped to dark blue
      } relative overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="nebula-background absolute top-0 left-0 w-full h-full z-0"></div>
      <div className="particle-background absolute top-0 left-0 w-full h-full z-1">
        {[...Array(20)].map((_, i) => (
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
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="relative w-64 h-64 md:w-72 md:h-72 mx-auto mb-8 flex items-center justify-center">
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] md:w-[180px] md:h-[180px] border border-dashed rounded-full ${
            theme === 'dark' ? 'border-[#1A3C34]' : 'border-[#00DDEB]' // Adjusted border color
          }`}></div>
          <motion.div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
          >
            <img
              src="/logo192.png"
              alt="Logo"
              className="h-16 w-16 md:h-20 md:w-20 rounded-full shadow-md"
            />
          </motion.div>
          {socialIcons.map((icon, index) => {
            const iconAngle = (index / socialIcons.length) * 360;
            const iconRadius = 90;
            const moonSize = 40;
            const orbitSpeed = 25 - (index % 3) * 1;
            const orbitClass = hoveredIcon === index ? 'paused-orbit' : '';
            const isTopHalf = iconAngle >= 0 && iconAngle <= 180;

            return (
              <motion.div
                key={index}
                className={`absolute top-1/2 left-1/2 z-10 moon ${orbitClass}`}
                style={{
                  transformOrigin: `${iconRadius}px 0`,
                  animation: `orbit ${orbitSpeed}s linear infinite`,
                  animationDelay: `${index * 0.5}s`,
                }}
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              >
                <a
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center"
                  style={{
                    width: `${moonSize}px`,
                    height: `${moonSize}px`,
                    transform: `rotate(${iconAngle}deg) translate(${iconRadius}px, 0) rotate(-${iconAngle}deg)`,
                  }}
                >
                  <img src={icon.src} alt={icon.alt} className="h-8 w-8 md:h-10 md:w-10" />
                </a>
                {hoveredIcon === index && (
                  <motion.div
                    className={`absolute left-1/2 transform -translate-x-1/2 p-2 rounded-lg shadow-md z-50 ${
                      theme === 'dark' ? 'bg-white text-[#1A3C34]' : 'bg-[#1E1B5E] text-[#E0F7FA]' // Swapped label background
                    } ${isTopHalf ? 'top-24 md:top-28' : 'top-[-3rem] md:top-[-4rem]'}`}
                    initial={{ opacity: 0, y: isTopHalf ? 10 : -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-xs md:text-sm font-roboto">{icon.alt}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
        <motion.p
          className="font-poppins text-sm md:text-base mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          "Exploring the Universe, One Code at a Time"
        </motion.p>
        <motion.p
          className="font-roboto text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          © 2025 Suresh Kumar Barach. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;