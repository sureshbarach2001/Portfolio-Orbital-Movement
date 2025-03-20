// /new-portfolio/src/components/Header.js
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-teal-500 to-blue-900 bg-opacity-80 backdrop-blur-md z-40 shadow-lg" // Lowered z-index to 40 to avoid overlapping with the toggle button
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.img
          src="/logo192.png"
          alt="Logo"
          className="h-12 rounded-full shadow-md"
          whileHover={{ rotate: 360, scale: 1.1, transition: { duration: 1 } }}
        />
        <ul className="flex space-x-6 text-white font-roboto">
          {['about', 'experience', 'projects', 'skills', 'certifications', 'contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: '#A7F3D0', transition: { duration: 0.3 } }}
            >
              <a href={`#${item}`} className="capitalize">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <motion.a
            href="https://linkedin.com/in/suresh-b-594a66253"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#A7F3D0', transition: { duration: 0.3 } }}
          >
            <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="h-6" />
          </motion.a>
          <motion.a
            href="https://github.com/sureshbarach2001"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#A7F3D0', transition: { duration: 0.3 } }}
          >
            <img src="/assets/icons/github.svg" alt="GitHub" className="h-6" />
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;