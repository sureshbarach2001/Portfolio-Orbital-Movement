// /new-portfolio/src/components/Experience.js
import { motion } from 'framer-motion';
import experienceData from '../data/experience.json';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-20 bg-gradient-to-br from-teal-500 to-blue-900 text-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Particle Background */}
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

      {/* Section Title */}
      <h2 className="text-5xl md:text-6xl font-poppins font-extrabold text-center mb-16 text-teal-200 drop-shadow-lg glowing-text">
        My Journey
      </h2>

      <div className="container mx-auto px-6">
        <div className="relative">
          {/* Timeline Line with Gradient, Glow, and Pulsing Animation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line pulsing-line z-0"></div>

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-12 md:mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Experience Card */}
              <motion.div
                className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-8 md:pr-12 text-right' : 'pl-8 md:pl-12 text-left'} glowing-card gradient-border relative z-10`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(45, 212, 191, 0.8)',
                  transition: { duration: 0.3 },
                }}
              >
                <div className="bg-blue-900 bg-opacity-70 backdrop-blur-md rounded-lg p-6 shadow-lg border border-teal-400 border-opacity-30">
                  <h3 className="text-xl md:text-2xl font-poppins font-semibold text-teal-200">{exp.title}</h3>
                  <p className="text-teal-300 font-roboto text-sm md:text-base mt-1">
                    {exp.company} | {exp.duration}
                  </p>
                  <p className="mt-3 font-roboto text-gray-200 text-sm md:text-base">{exp.description}</p>
                </div>
                {/* Connection Line to Timeline */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-1 bg-teal-400 glowing-line z-0 ${index % 2 === 0 ? 'right-0' : 'left-0'}`}
                ></div>
              </motion.div>

              {/* Empty Space on the Other Side */}
              <div className="hidden md:block w-1/2"></div>

              {/* Glowing Dot on Timeline */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-300 rounded-full border-4 border-blue-900 glowing-dot z-20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                whileHover={{
                  scale: 1.3,
                  boxShadow: '0 0 20px rgba(103, 232, 249, 1)',
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;