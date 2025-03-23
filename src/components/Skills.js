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

const Skills = ({ theme }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const windowWidth = useWindowWidth();
  const containerRef = useRef(null);

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

  const dataToUse = skillsData && skillsData.length > 0 ? skillsData : fallbackSkillsData;

  const categoryColors = [
    'radial-gradient(circle, #00DDEB, #FF3CAC)',
    'radial-gradient(circle, #FF3CAC, #00DDEB)',
    'radial-gradient(circle, #00DDEB, #FF3CAC)',
    'radial-gradient(circle, #FF3CAC, #00DDEB)',
    'radial-gradient(circle, #00DDEB, #FF3CAC)',
    'radial-gradient(circle, #FF3CAC, #00DDEB)',
    'radial-gradient(circle, #00DDEB, #FF3CAC)',
    'radial-gradient(circle, #FF3CAC, #00DDEB)',
    'radial-gradient(circle, #00DDEB, #FF3CAC)',
    'radial-gradient(circle, #FF3CAC, #00DDEB)',
    'radial-gradient(circle, #00DDEB, #FF3CAC)',
  ];

  const categoryIcons = {
    "Programming Languages": <FaCode className="text-2xl md:text-3xl" />,
    "Web Development - Front-End": <FaGlobe className="text-2xl md:text-3xl" />,
    "Web Development - Back-End": <FaServer className="text-2xl md:text-3xl" />,
    "Full-Stack Development": <FaGlobe className="text-2xl md:text-3xl" />,
    "Database Management": <FaDatabase className="text-2xl md:text-3xl" />,
    "API & Cloud Technologies": <FaCloud className="text-2xl md:text-3xl" />,
    "Software Development & Tools": <FaTools className="text-2xl md:text-3xl" />,
    "Security & DevOps": <FaShieldAlt className="text-2xl md:text-3xl" />,
    "Other Technical Skills": <FaCogs className="text-2xl md:text-3xl" />,
    "Soft Skills & Collaboration": <FaUsers className="text-2xl md:text-3xl" />,
    "Languages": <FaLanguage className="text-2xl md:text-3xl" />,
  };

  if (windowWidth === 0) return null;

  const columns = windowWidth < 768 ? 2 : 3;
  const totalRows = Math.ceil(dataToUse.length / columns);
  const ySpacing = windowWidth < 768 ? 450 : 550;
  const sectionHeight = totalRows * ySpacing + 400;

  return (
    <motion.section
      id="skills"
      className={`py-20 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#B8D8E6] via-[#AED2E0] to-[#A4CCDA] text-[#1A3C34]' // Swapped to light teal
          : 'bg-gradient-to-br from-[#5A4ABA] via-[#6A5ADA] to-[#7A6AFA] text-[#E0F7FA]' // Swapped to dark blue
      } relative overflow-hidden`}
      style={{ minHeight: `${sectionHeight}px` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
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
      <h2 className="text-5xl md:text-6xl font-poppins font-extrabold text-center mb-16">
        Skill Galaxy
      </h2>
      <div className="container mx-auto px-6 relative" ref={containerRef}>
        {dataToUse.length > 0 ? (
          <div className="relative w-full h-full galaxy-container py-10">
            {dataToUse.map((category, categoryIndex) => {
              const columns = windowWidth < 768 ? 2 : 3;
              const row = Math.floor(categoryIndex / columns);
              const col = categoryIndex % columns;
              const xSpacing = windowWidth < 768 ? 450 : 550;
              const ySpacing = windowWidth < 768 ? 450 : 550;
              const totalRows = Math.ceil(dataToUse.length / columns);
              const containerWidth = containerRef.current ? containerRef.current.offsetWidth : windowWidth;
              const containerHeight = window.innerHeight;
              const paddingX = 94;

              const x = col * xSpacing - ((columns - 1) * xSpacing) / 2 + (containerWidth / 2) - paddingX;
              const y = row * ySpacing - ((totalRows - 1) * ySpacing) / 2 + (containerHeight / 2) + 500;

              return (
                <motion.div
                  key={categoryIndex}
                  className="absolute planet"
                  style={{ left: `${x}px`, top: `${y}px`, opacity: 1 - (categoryIndex * 0.02) }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, 15, 0] }}
                  transition={{
                    opacity: { duration: 1, delay: categoryIndex * 0.2 },
                    scale: { duration: 1, delay: categoryIndex * 0.2 },
                    y: { repeat: Infinity, duration: 4, delay: categoryIndex * 0.2 },
                  }}
                  whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
                >
                  <motion.div
                    className={`absolute top-[-80px] left-1/2 transform -translate-x-1/2 flex items-center space-x-3 text-base md:text-lg font-poppins font-semibold text-center rounded-full px-4 py-2 ${
                      theme === 'dark' ? 'bg-white text-[#1A3C34]' : 'bg-[#1E1B5E] text-[#E0F7FA]' // Swapped label background
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                  >
                    {categoryIcons[category.name]}
                    <span>{category.name}</span>
                  </motion.div>
                  <div
                    className={`w-28 h-28 md:w-44 md:h-44 rounded-full bg-opacity-80 flex items-center justify-center border-2 ${
                      theme === 'dark' ? 'border-[#1A3C34]' : 'border-[#00DDEB]' // Adjusted border color
                    }`}
                    style={{ background: categoryColors[categoryIndex] || 'radial-gradient(circle, #00DDEB, #FF3CAC)' }}
                  >
                    <h3 className="text-sm md:text-xl font-poppins font-semibold text-center text-white px-3">
                      {category.name}
                    </h3>
                  </div>
                  {category.skills.map((skill, skillIndex) => {
                    const skillAngle = (skillIndex / category.skills.length) * 360;
                    const skillRadius = (windowWidth < 768 ? 80 : 110) + skill.level * 0.5;
                    const moonSize = (windowWidth < 768 ? 40 : 48) + skill.level * 1;
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
                        onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
                      >
                        <div
                          className="relative flex items-center justify-center"
                          style={{
                            width: `${moonSize}px`,
                            height: `${moonSize}px`,
                            transform: `rotate(${skillAngle}deg) translate(${skillRadius}px, 0) rotate(-${skillAngle}deg)`,
                          }}
                        >
                          <svg className="absolute w-full h-full">
                            <circle
                              cx="50%"
                              cy="45%"
                              r="51%"
                              fill="none"
                              stroke={theme === 'dark' ? "#1A3C34" : "#FF3CAC"} // Adjusted stroke color
                              strokeWidth="3"
                              strokeDasharray={`${(skill.level / 100) * 251.2}, 251.2`}
                              strokeDashoffset="0"
                            />
                          </svg>
                          <div className={`w-24 h-24 md:w-40 md:h-20 rounded-full flex items-center justify-center ${
                            theme === 'dark' ? 'bg-white bg-opacity-90' : 'bg-[#1E1B5E] bg-opacity-80' // Swapped moon background
                          }`}>
                            <span className="text-sm md:text-lg font-roboto font-bold text-center">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                        {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                          <motion.div
                            className={`absolute top-20 md:top-24 left-1/2 transform -translate-x-1/2 p-3 rounded-lg shadow-md z-50 ${
                              theme === 'dark' ? 'bg-white text-[#1A3C34]' : 'bg-[#1E1B5E] text-[#E0F7FA]' // Swapped tooltip background
                            }`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-sm md:text-base font-roboto">
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
          <p className="text-center text-lg">No skills data available.</p>
        )}
      </div>
    </motion.section>
  );
};

export default Skills;