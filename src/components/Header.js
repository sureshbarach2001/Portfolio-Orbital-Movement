// /new-portfolio/src/components/Header.js
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ theme, setTheme, scrollToSection }) => {
  const navItems = [
    { name: 'Home', section: 'hero' },
    { name: 'About', section: 'about' },
    { name: 'Experience', section: 'experience' },
    { name: 'Projects', section: 'projects' },
    { name: 'Skills', section: 'skills' },
    { name: 'Certifications', section: 'certifications' },
    { name: 'Contact', section: 'contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 py-4 backdrop-blur-md shadow-md ${
        theme === 'dark'
          ? 'bg-[#F0F9FF] bg-opacity-90 text-[#1A3C34]' // Swapped to light teal
          : 'bg-[#0B0A2A] bg-opacity-90 text-[#E0F7FA]' // Swapped to dark blue
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-poppins font-bold">
          Suresh
        </div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.section}>
              <button
                onClick={() => scrollToSection(item.section)}
                className="nav-link"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="theme-toggle"
        >
          {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;