// /new-portfolio/src/components/Modal.js
import { motion } from 'framer-motion';

const Modal = ({ item, onClose, theme }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={`p-6 rounded-lg max-w-md w-full ${
          theme === 'dark' ? 'bg-blue-900 text-white' : 'bg-white text-black'
        }`}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <h3 className="text-xl font-poppins font-semibold text-teal-200">
          {item.title}
        </h3>
        {item.issuer && (
          <p className="text-gray-200 mt-2 font-roboto">
            Issuer: {item.issuer}
          </p>
        )}
        {item.date && (
          <p className="text-gray-200 mt-2 font-roboto">
            Date: {item.date}
          </p>
        )}
        {item.description && (
          <p className="text-gray-200 mt-2 font-roboto">
            {item.description}
          </p>
        )}
        {item.tech && (
          <p className="text-teal-200 mt-2 font-roboto">
            Tech: {item.tech.join(', ')}
          </p>
        )}
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover mt-2 rounded"
          />
        )}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline mt-2 block font-roboto"
          >
            View on GitHub
          </a>
        )}
        <motion.button
          onClick={onClose}
          className="mt-4 bg-teal-500 text-white rounded-md p-2 hover:bg-teal-400 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;