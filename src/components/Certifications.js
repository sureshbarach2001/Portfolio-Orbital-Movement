// /new-portfolio/src/components/Certifications.js
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import certificationsData from "../data/certifications.json";

const Certifications = ({ theme }) => {
  const [init, setInit] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: theme === 'dark' ? ["#1A3C34", "#4A6A60"] : ["#E0F7FA", "#FF3CAC", "#00DDEB"] }, // Swapped particle colors
      shape: { type: "star" },
      opacity: { value: 0.8, random: true, anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false } },
      size: { value: 2, random: true },
      move: { enable: true, speed: 0.5, direction: "none", random: true, out_mode: "out" },
    },
    interactivity: {
      events: { onhover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
  };

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  return (
    <motion.section
      id="certifications"
      className={`py-20 ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#AED2E0] via-[#A4CCDA] to-[#9AC6D4] text-[#1A3C34]" // Swapped to light teal
          : "bg-gradient-to-br from-[#6A5ADA] via-[#7A6AFA] to-[#8A7AFA] text-[#E0F7FA]" // Swapped to dark blue
      } relative overflow-hidden`}
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {init && (
        <Particles
          id="tsparticles-certifications"
          options={particlesOptions}
          className="absolute top-0 left-0 w-full h-full z-0"
        />
      )}
      <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-center mb-10">
        Certifications
      </h2>
      <div className="container mx-auto px-6">
        {certificationsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                onClick={() => openModal(cert)}
                className={`certification-card p-6 shadow-md rounded-lg relative overflow-hidden z-10 cursor-pointer card-border ${
                  theme === "dark"
                    ? "bg-white bg-opacity-90" // Swapped to white for light teal background
                    : "bg-[#1E1B5E] bg-opacity-80" // Swapped to dark blue for dark background
                }`}
                whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-poppins font-semibold">
                  {cert.title || "Untitled Certification"}
                </h3>
                <p className="mt-2 font-roboto">
                  Issuer: {cert.issuer || "Unknown Issuer"}
                </p>
                <p className="mt-2 font-roboto">
                  Date: {cert.date || "Unknown Date"}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center">No certifications data available.</p>
        )}
      </div>
      {selectedCert && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`p-6 rounded-lg max-w-md w-full ${
              theme === "dark" ? "bg-white text-[#1A3C34]" : "bg-[#1E1B5E] text-[#E0F7FA]" // Swapped modal background
            }`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h3 className="text-xl font-poppins font-semibold">
              {selectedCert.title}
            </h3>
            <p className="mt-2 font-roboto">
              Issuer: {selectedCert.issuer}
            </p>
            <p className="mt-2 font-roboto">
              Date: {selectedCert.date}
            </p>
            {selectedCert.url && (
              <a
                href={selectedCert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:underline mt-2 block font-roboto ${
                  theme === 'dark' ? 'text-[#1A3C34]' : 'text-[#00DDEB]' // Adjusted link color
                }`}
              >
                View Certificate
              </a>
            )}
            <motion.button
              onClick={closeModal}
              className={`mt-4 rounded-md p-2 transition-colors ${
                theme === 'dark' ? 'bg-[#1A3C34] text-[#F0F9FF] hover:bg-[#4A6A60]' : 'bg-[#00DDEB] text-[#0B0A2A] hover:bg-[#FF3CAC]' // Swapped button styles
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Certifications;