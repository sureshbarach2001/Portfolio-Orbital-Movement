// /new-portfolio/src/components/Skills.js
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import {
  FaCode,
  FaGlobe,
  FaServer,
  FaDatabase,
  FaCloud,
  FaTools,
  FaShieldAlt,
  FaCogs,
  FaUsers,
  FaLanguage,
} from 'react-icons/fa';
import skillsData from '../data/skills.json';

// Custom hook to get window width
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    setWindowWidth(window.innerWidth);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const windowWidth = useWindowWidth();
  const containerRef = useRef(null);

  // Fallback skills data
  const fallbackSkillsData = [
    { name: "Programming Languages", skills: [{ name: "JavaScript", level: 90 }, { name: "Python", level: 85 }, { name: "C++", level: 80 }] },
    { name: "Web Development - Front-End", skills: [{ name: "React", level: 80 }, { name: "HTML", level: 90 }, { name: "CSS", level: 85 }] },
    { name: "Web Development - Back-End", skills: [{ name: "Node.js", level: 75 }, { name: "Express", level: 70 }, { name: "Django", level: 65 }] },
    { name: "Full-Stack Development", skills: [{ name: "MERN", level: 70 }, { name: "MEAN", level: 65 }] },
    { name: "Database Management", skills: [{ name: "MongoDB", level: 65 }, { name: "MySQL", level: 70 }, { name: "PostgreSQL", level: 60 }] },
    { name: "API & Cloud Technologies", skills: [{ name: "AWS", level: 60 }, { name: "Google Cloud", level: 55 }, { name: "REST APIs", level: 80 }] },
    { name: "Software Development & Tools", skills: [{ name: "Git", level: 85 }, { name: "Docker", level: 60 }, { name: "Webpack", level: 55 }] },
    { name: "Security & DevOps", skills: [{ name: "Kubernetes", level: 50 }, { name: "CI/CD", level: 55 }, { name: "Linux", level: 70 }] },
    { name: "Other Technical Skills", skills: [{ name: "Agile", level: 75 }, { name: "Scrum", level: 70 }, { name: "Testing", level: 65 }] },
    { name: "Soft Skills & Collaboration", skills: [{ name: "Teamwork", level: 90 }, { name: "Communication", level: 85 }, { name: "Leadership", level: 80 }] },
    { name: "Languages", skills: [{ name: "English", level: 95 }, { name: "Spanish", level: 60 }, { name: "French", level: 50 }] },
  ];

  // Use fallback data if skillsData is empty or invalid
  const dataToUse = skillsData && skillsData.length > 0 ? skillsData : fallbackSkillsData;

  // Define colors for each category
  const categoryColors = [
    'radial-gradient(circle, #2DD4BF, #67E8F9)', // Programming Languages
    'radial-gradient(circle, #67E8F9, #A5B4FC)', // Web Development - Front-End
    'radial-gradient(circle, #A5B4FC, #2DD4BF)', // Web Development - Back-End
    'radial-gradient(circle, #2DD4BF, #A5B4FC)', // Full-Stack Development
    'radial-gradient(circle, #67E8F9, #2DD4BF)', // Database Management
    'radial-gradient(circle, #A5B4FC, #67E8F9)', // API & Cloud Technologies
    'radial-gradient(circle, #2DD4BF, #67E8F9)', // Software Development & Tools
    'radial-gradient(circle, #67E8F9, #A5B4FC)', // Security & DevOps
    'radial-gradient(circle, #A5B4FC, #2DD4BF)', // Other Technical Skills
    'radial-gradient(circle, #2DD4BF, #A5B4FC)', // Soft Skills & Collaboration
    'radial-gradient(circle, #A855F7, #67E8F9)', // Languages (purple accent)
  ];

  // Define icons for each category
  const categoryIcons = {
    "Programming Languages": <FaCode className="text-teal-200 text-2xl md:text-3xl" />,
    "Web Development - Front-End": <FaGlobe className="text-teal-200 text-2xl md:text-3xl" />,
    "Web Development - Back-End": <FaServer className="text-teal-200 text-2xl md:text-3xl" />,
    "Full-Stack Development": <FaGlobe className="text-teal-200 text-2xl md:text-3xl" />,
    "Database Management": <FaDatabase className="text-teal-200 text-2xl md:text-3xl" />,
    "API & Cloud Technologies": <FaCloud className="text-teal-200 text-2xl md:text-3xl" />,
    "Software Development & Tools": <FaTools className="text-teal-200 text-2xl md:text-3xl" />,
    "Security & DevOps": <FaShieldAlt className="text-teal-200 text-2xl md:text-3xl" />,
    "Other Technical Skills": <FaCogs className="text-teal-200 text-2xl md:text-3xl" />,
    "Soft Skills & Collaboration": <FaUsers className="text-teal-200 text-2xl md:text-3xl" />,
    "Languages": <FaLanguage className="text-teal-200 text-2xl md:text-3xl" />,
  };

  if (windowWidth === 0) {
    return null;
  }

  // Calculate the required height based on the number of rows
  const columns = windowWidth < 768 ? 2 : 3;
  const totalRows = Math.ceil(dataToUse.length / columns);
  const ySpacing = windowWidth < 768 ? 450 : 550;
  const sectionHeight = totalRows * ySpacing + 400; // Add padding

  return (
    <motion.section
      id="skills"
      className="py-20 bg-gradient-to-br from-teal-500 to-blue-900 text-white relative overflow-hidden"
      style={{ minHeight: `${sectionHeight}px` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
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

      <h2 className="text-5xl md:text-6xl font-poppins font-extrabold text-center mb-16 text-teal-200 drop-shadow-lg">
        Skill Galaxy
      </h2>

      <div className="container mx-auto px-6 relative" ref={containerRef}>
        {dataToUse.length > 0 ? (
          <div className="relative w-full h-full galaxy-container py-10">
            {dataToUse.map((category, categoryIndex) => {
              // Grid positioning: 3 columns on desktop, 2 on mobile
              const columns = windowWidth < 768 ? 2 : 3;
              const row = Math.floor(categoryIndex / columns);
              const col = categoryIndex % columns;
              const xSpacing = windowWidth < 768 ? 450 : 550;
              const ySpacing = windowWidth < 768 ? 450 : 550;
              const totalRows = Math.ceil(dataToUse.length / columns);

              // Center the grid by accounting for the container's dimensions and padding
              const containerWidth = containerRef.current ? containerRef.current.offsetWidth : windowWidth;
              const containerHeight = window.innerHeight;
              const paddingX = 94; // px-6 in Tailwind CSS = 1.5rem = 24px (assuming default 16px font size)

              const x = col * xSpacing - ((columns - 1) * xSpacing) / 2 + (containerWidth / 2) - paddingX;
              const y = row * ySpacing - ((totalRows - 1) * ySpacing) / 2 + (containerHeight / 2) + 500; // Increased offset

              return (
                <motion.div
                  key={categoryIndex}
                  className="absolute planet"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    opacity: 1 - (categoryIndex * 0.02),
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, 15, 0],
                  }}
                  transition={{
                    opacity: { duration: 1, delay: categoryIndex * 0.2 },
                    scale: { duration: 1, delay: categoryIndex * 0.2 },
                    y: { repeat: Infinity, duration: 4, delay: categoryIndex * 0.2 },
                  }}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: '0 0 30px rgba(45, 212, 191, 0.8)',
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Floating Label */}
                  <motion.div
                    className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 flex items-center space-x-3 text-teal-200 text-base md:text-lg font-poppins font-semibold text-center bg-blue-900 bg-opacity-50 rounded-full px-4 py-2 glowing-label"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                  >
                    {categoryIcons[category.name]}
                    <span>{category.name}</span>
                  </motion.div>

                  {/* Planet (Category) */}
                  <div
                    className="w-28 h-28 md:w-44 md:h-44 rounded-full bg-teal-400 bg-opacity-80 flex items-center justify-center glowing-planet border-2 border-teal-200"
                    style={{
                      background: categoryColors[categoryIndex] || 'radial-gradient(circle, #2DD4BF, #67E8F9)',
                    }}
                  >
                    <h3 className="text-sm md:text-xl font-poppins font-semibold text-center text-white px-3 drop-shadow-md">
                      {category.name}
                    </h3>
                  </div>

                  {/* Orbiting Moons (Skills) */}
                  {category.skills.map((skill, skillIndex) => {
                    const skillAngle = (skillIndex / category.skills.length) * 360;
                    const skillRadius = (windowWidth < 768 ? 80 : 110) + skill.level * 0.5;
                    const moonSize = (windowWidth < 768 ? 40 : 48) + skill.level * 1; // Increased base size
                    const orbitSpeed = 25 - skill.level * 0.05;
                    const orbitClass = hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'paused-orbit' : '';

                    return (
                      <motion.div
                        key={skillIndex}
                        className={`absolute moon ${orbitClass}`}
                        style={{
                          transformOrigin: `${skillRadius}px 0`,
                          animation: `orbit ${orbitSpeed}s linear infinite`,
                          animationDelay: `${skillIndex * 0.5}s`,
                        }}
                        onMouseEnter={() => {
                          const id = `${categoryIndex}-${skillIndex}`;
                          console.log("Hovering over:", id); // Debug log
                          setHoveredSkill(id);
                        }}
                        onMouseLeave={() => {
                          console.log("Leaving hover:", `${categoryIndex}-${skillIndex}`); // Debug log
                          setHoveredSkill(null);
                        }}
                        whileHover={{
                          scale: 1.3,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <div
                          className="relative flex items-center justify-center glowing-moon"
                          style={{
                            width: `${moonSize}px`,
                            height: `${moonSize}px`,
                            transform: `rotate(${skillAngle}deg) translate(${skillRadius}px, 0) rotate(-${skillAngle}deg)`,
                          }}
                        >
                          <svg className="absolute w-full h-full">
                            <circle
                              cx="50%"
                              cy="50%"
                              r="40%"
                              fill="none"
                              stroke="#67E8F9"
                              strokeWidth="4"
                              strokeDasharray={`${(skill.level / 100) * 251.2}, 251.2`}
                              strokeDashoffset="0"
                              className="glowing-ring"
                            />
                          </svg>
                          <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-cyan-300 bg-opacity-60 flex items-center justify-center">
                            <span className="text-sm md:text-lg font-roboto font-bold text-black text-center">
                              {skill.name}
                            </span>
                          </div>
                        </div>

                        {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                          console.log("Rendering tooltip for:", skill.name, skill.level), // Debug log
                          <motion.div
                            className="absolute top-20 md:top-24 left-1/2 transform -translate-x-1/2 p-3 bg-blue-900 bg-opacity-90 rounded-lg shadow-lg holographic-card z-50" // Increased z-index to 50
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-sm md:text-base font-roboto text-teal-200">
                              {skill.name}: {skill.level}%
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-200 text-lg">No skills data available.</p>
        )}
      </div>
    </motion.section>
  );
};

export default Skills;