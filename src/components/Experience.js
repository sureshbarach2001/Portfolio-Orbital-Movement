// /new-portfolio/src/components/Experience.js
import { motion } from 'framer-motion';
import experienceData from '../data/experience.json';

const Experience = ({ theme }) => {
  return (
    <motion.section
      id="experience"
      className={`py-20 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#BCE0E8] via-[#A7D8E0] to-[#92D0D8] text-black' // Swapped to light teal gradient
          : 'bg-gradient-to-br from-[#2A2A5A] via-[#3A3A7A] to-[#4A4A9A] text-white' // Swapped to dark blue gradient
      } relative overflow-hidden`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="particle-background absolute top-0 left-0 w-full h-full z-0">
        {[...Array(30)].map((_, i) => (
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
      <h2 className={`text-5xl md:text-6xl font-poppins font-extrabold text-center mb-16 drop-shadow-lg glowing-text ${
        theme === 'dark' ? 'text-black' : 'text-white' // Adjust text color for readability
      }`}>
        My Journey
      </h2>
      <div className="container mx-auto px-6">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line pulsing-line z-0"></div>
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-12 md:mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-8 md:pr-12 text-right' : 'pl-8 md:pl-12 text-left'} glowing-card gradient-border relative z-10`}
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(45, 212, 191, 0.8)', transition: { duration: 0.3 } }}
              >
                <div className={`${
                  theme === 'dark' ? 'bg-white bg-opacity-70' : 'bg-blue-900 bg-opacity-70'
                } backdrop-blur-md rounded-lg p-6 shadow-lg border border-teal-400 border-opacity-30`}>
                  <h3 className={`text-xl md:text-2xl font-poppins font-semibold ${
                    theme === 'dark' ? 'text-teal-600' : 'text-teal-200'
                  }`}>
                    {exp.title}
                  </h3>
                  <p className={`font-roboto text-sm md:text-base mt-1 ${
                    theme === 'dark' ? 'text-teal-800' : 'text-teal-300'
                  }`}>
                    {exp.company} | {exp.duration}
                  </p>
                  <p className={`mt-3 font-roboto text-sm md:text-base ${
                    theme === 'dark' ? 'text-gray-800' : 'text-gray-200'
                  }`}>
                    {exp.description.join(' ')}
                  </p>
                </div>
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-1 glowing-line z-0 ${
                    theme === 'dark' ? 'bg-teal-600' : 'bg-teal-400'
                  } ${index % 2 === 0 ? 'right-0' : 'left-0'}`}
                ></div>
              </motion.div>
              <div className="hidden md:block w-1/2"></div>
              <motion.div
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 glowing-dot z-20 ${
                  theme === 'dark' ? 'bg-teal-300 border-white' : 'bg-cyan-300 border-blue-900'
                }`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                whileHover={{ scale: 1.3, boxShadow: '0 0 20px rgba(103, 232, 249, 1)', transition: { duration: 0.3 } }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;