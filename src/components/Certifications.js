// /new-portfolio/src/components/Certifications.js
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import certificationsData from "../data/certifications.json";

const Certifications = ({ theme, setTheme }) => {
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
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#ffffff", "#ffdd55", "#55ddff"],
      },
      shape: {
        type: "star",
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.3,
          sync: false,
        },
      },
      size: {
        value: 2,
        random: true,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        out_mode: "out",
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
  };

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  return (
    <motion.section
      id="certifications"
      className={`py-20 ${
        theme === "dark"
          ? "bg-gradient-to-br from-teal-500 to-blue-900"
          : "bg-gradient-to-br from-teal-200 to-blue-200"
      } text-white relative overflow-hidden`}
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
      <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-center mb-10 text-teal-200 drop-shadow-lg glowing-text">
        Certifications
      </h2>
      <div className="container mx-auto px-6">
        {certificationsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                onClick={() => openModal(cert)}
                className={`certification-card p-6 shadow-lg rounded-lg relative overflow-hidden z-10 cursor-pointer ${
                  theme === "dark"
                    ? "bg-blue-900 bg-opacity-70 border border-teal-400 border-opacity-30 gradient-border"
                    : "bg-white border border-teal-200 border-opacity-30 gradient-border-light"
                }`}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-poppins font-semibold text-teal-200">
                  {cert.title || "Untitled Certification"}
                </h3>
                <p className="text-gray-200 mt-2 font-roboto">
                  Issuer: {cert.issuer || "Unknown Issuer"}
                </p>
                <p className="mt-2 font-roboto text-gray-200">
                  Date: {cert.date || "Unknown Date"}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-200">
            No certifications data available.
          </p>
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
              theme === "dark"
                ? "bg-blue-900 text-white"
                : "bg-white text-black"
            }`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h3 className="text-xl font-poppins font-semibold text-teal-200">
              {selectedCert.title}
            </h3>
            <p className="text-gray-200 mt-2 font-roboto">
              Issuer: {selectedCert.issuer}
            </p>
            <p className="text-gray-200 mt-2 font-roboto">
              Date: {selectedCert.date}
            </p>
            {selectedCert.url && (
              <a
                href={selectedCert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline mt-2 block font-roboto"
              >
                View Certificate
              </a>
            )}
            <motion.button
              onClick={closeModal}
              className="mt-4 bg-teal-500 text-white rounded-md p-2 hover:bg-teal-400 transition-colors"
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
