// /new-portfolio/src/components/Contact.js
import { motion } from 'framer-motion';

const Contact = ({ theme }) => {
  return (
    <motion.section
      id="contact"
      className={`py-20 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#A4CCDA] via-[#9AC6D4] to-[#90C0CE] text-[#1A3C34]' // Swapped to light teal
          : 'bg-gradient-to-br from-[#7A6AFA] via-[#8A7AFA] to-[#9A8AFA] text-[#E0F7FA]' // Swapped to dark blue
      } relative overflow-hidden`}
      initial={{ y: 50 }}
      animate={{ y: 0 }}
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
      <h2 className="text-5xl md:text-6xl font-poppins font-extrabold text-center mb-16">
        Get in Touch
      </h2>
      <div className="container mx-auto px-6">
        <motion.form
          className={`max-w-lg mx-auto p-8 rounded-xl shadow-md card-border relative z-10 ${
            theme === 'dark' ? 'bg-white bg-opacity-90' : 'bg-[#1E1B5E] bg-opacity-80' // Swapped form background
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block font-roboto mb-2 text-lg">
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${
                theme === 'dark' ? 'bg-gray-100 text-[#1A3C34] border-[#1A3C34] focus:ring-[#4A6A60]' : 'bg-[#2A2670] text-[#E0F7FA] border-[#00DDEB] focus:ring-[#FF3CAC]' // Swapped input styles
              }`}
              placeholder="Your Name"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block font-roboto mb-2 text-lg">
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${
                theme === 'dark' ? 'bg-gray-100 text-[#1A3C34] border-[#1A3C34] focus:ring-[#4A6A60]' : 'bg-[#2A2670] text-[#E0F7FA] border-[#00DDEB] focus:ring-[#FF3CAC]' // Swapped input styles
              }`}
              placeholder="Your Email"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block font-roboto mb-2 text-lg">
              Message
            </label>
            <motion.textarea
              id="message"
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${
                theme === 'dark' ? 'bg-gray-100 text-[#1A3C34] border-[#1A3C34] focus:ring-[#4A6A60]' : 'bg-[#2A2670] text-[#E0F7FA] border-[#00DDEB] focus:ring-[#FF3CAC]' // Swapped textarea styles
              }`}
              rows="4"
              placeholder="Your Message"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.button
            type="submit"
            className={`w-full px-6 py-3 rounded-full font-semibold text-lg shadow-md transition-colors ${
              theme === 'dark' ? 'bg-[#1A3C34] text-[#F0F9FF] hover:bg-[#4A6A60]' : 'bg-[#00DDEB] text-[#0B0A2A] hover:bg-[#FF3CAC]' // Swapped button styles
            }`}
            whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;