// /new-portfolio/src/components/About.js

import { motion } from 'framer-motion';
import profilePic from '../assets/images/profile-pic.png';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-br from-teal-500 to-blue-900 text-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <motion.img
          src={profilePic}
          alt="Profile"
          className="w-64 h-64 rounded-full object-cover mb-6 md:mb-0 md:mr-10 shadow-lg border-4 border-cyan-300 glowing-dot"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: 'spring', stiffness: 80 }}
          whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.3 } }}
        />
        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-poppins font-extrabold mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl font-roboto leading-relaxed text-gray-200"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I am Suresh Kumar Barach, a passionate software engineer with a BS in Software Engineering from FAST NUCES, Faisalabad. With hands-on experience in full-stack development (MERN stack), DevOps, and cloud technologies, I thrive on building innovative solutions. From internships at TechnoHacks Solutions and YoungDev Interns to tutoring students to A+ grades, I blend technical expertise with a commitment to excellence.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;