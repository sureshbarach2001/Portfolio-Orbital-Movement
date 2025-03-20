// /new-portfolio/src/components/Contact.js
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-gradient-to-br from-teal-500 to-blue-900 text-white relative overflow-hidden"
      initial={{ y: 50 }}
      animate={{ y: 0 }}
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
        Get in Touch
      </h2>

      <div className="container mx-auto px-6">
        <motion.form
          className="max-w-lg mx-auto p-8 bg-blue-900 bg-opacity-70 rounded-xl shadow-lg glowing-card gradient-border relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            boxShadow: '0 0 25px rgba(45, 212, 191, 0.8)',
            transition: { duration: 0.3 },
          }}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-teal-200 font-roboto mb-2 text-lg glowing-label"
            >
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 glowing-input"
              placeholder="Your Name"
              whileFocus={{ scale: 1.02, borderColor: '#67E8F9' }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-teal-200 font-roboto mb-2 text-lg glowing-label"
            >
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 glowing-input"
              placeholder="Your Email"
              whileFocus={{ scale: 1.02, borderColor: '#67E8F9' }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-teal-200 font-roboto mb-2 text-lg glowing-label"
            >
              Message
            </label>
            <motion.textarea
              id="message"
              className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 glowing-input"
              rows="4"
              placeholder="Your Message"
              whileFocus={{ scale: 1.02, borderColor: '#67E8F9' }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-teal-400 text-navy px-6 py-3 rounded-full font-semibold text-lg shadow-md pulsing-button"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#34D399',
              boxShadow: '0 0 20px rgba(52, 211, 153, 0.7)',
            }}
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