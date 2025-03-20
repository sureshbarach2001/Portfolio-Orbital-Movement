// /new-portfolio/src/components/Projects.js
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import Select from "react-select";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("stars");
  const [filterLanguage, setFilterLanguage] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [init, setInit] = useState(false);
  const [theme, setTheme] = useState("dark");

  const username = "sureshbarach2001";
  const accessToken = process.env.REACT_APP_GITHUB_TOKEN;
  const featuredRepos = ["my-portfolio", "awesome-project"];

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!accessToken) {
      setError(
        "GitHub access token is missing. Please set REACT_APP_GITHUB_TOKEN in the .env file."
      );
      setLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        if (!response.ok) {
          const errorMessage = await response.json();
          throw new Error(
            `HTTP error: ${response.status} - ${errorMessage.message}`
          );
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(`Error fetching user data: ${error.message}`);
      }
    };

    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        if (!response.ok) {
          const errorMessage = await response.json();
          throw new Error(
            `HTTP error: ${response.status} - ${errorMessage.message}`
          );
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
        setError(`Error fetching repositories: ${error.message}`);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchUserData(), fetchRepositories()]);
      setLoading(false);
    };

    fetchData();
  }, [accessToken]);

  useEffect(() => {
    if (!repos.length) return;

    let updatedRepos = [...repos];

    if (filterLanguage !== "All") {
      updatedRepos = updatedRepos.filter(
        (repo) => repo.language === filterLanguage
      );
    }

    if (searchQuery) {
      updatedRepos = updatedRepos.filter(
        (repo) =>
          repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (repo.description &&
            repo.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    updatedRepos.sort((a, b) => {
      if (sortBy === "stars") {
        return b.stargazers_count - a.stargazers_count;
      } else if (sortBy === "updated") {
        return new Date(b.updated_at) - new Date(a.updated_at);
      }
      return 0;
    });

    console.log("Filtered Repos:", updatedRepos); // Debug the filtered repos
    setFilteredRepos(updatedRepos);
  }, [repos, sortBy, filterLanguage, searchQuery]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const languages = [
    "All",
    ...new Set(repos.map((repo) => repo.language).filter(Boolean)),
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: theme === "dark" ? "#1e3a8a" : "#e0f2fe",
      color: theme === "dark" ? "white" : "black",
      borderColor: "#2dd4bf",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#2dd4bf",
      },
      borderRadius: "8px",
      padding: "2px",
      zIndex: 20, // Ensure the control is above other elements
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: theme === "dark" ? "#1e3a8a" : "#e0f2fe",
      color: theme === "dark" ? "white" : "black",
      borderRadius: "8px",
      zIndex: 20, // Ensure the dropdown menu is above project cards
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#2dd4bf"
        : theme === "dark"
        ? "#1e3a8a"
        : "#e0f2fe",
      color: theme === "dark" ? "white" : "black",
      "&:hover": {
        backgroundColor: "#2dd4bf",
        color: "white",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme === "dark" ? "white" : "black",
    }),
  };

  const sortOptions = [
    { value: "stars", label: "Stars (High to Low)" },
    { value: "updated", label: "Last Updated (Recent First)" },
  ];

  const languageOptions = languages.map((lang) => ({
    value: lang,
    label: lang,
  }));

  const resetFilters = () => {
    console.log("Resetting filters...");
    setSortBy("stars");
    setFilterLanguage("All");
    setSearchQuery("");
    let updatedRepos = [...repos];
    updatedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    setFilteredRepos(updatedRepos);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    console.log("Search query:", query); // Debug the search input
    setSearchQuery(query);
  };

  return (
    <div
      className={
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }
    >
      <motion.button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-4 right-4 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-400 transition-colors z-50" // Increased z-index to 50 and added top-16 to avoid overlap
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </motion.button>

      {userData && (
        <motion.section
          id="github-profile"
          className={`py-20 ${
            theme === "dark"
              ? "bg-gradient-to-br from-blue-900 to-teal-500"
              : "bg-gradient-to-br from-blue-200 to-teal-200"
          } text-white relative overflow-hidden`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {init && (
            <Particles
              id="tsparticles-profile"
              options={particlesOptions}
              className="absolute top-0 left-0 w-full h-full z-0"
            />
          )}

          <h2 className="text-5xl md:text-6xl font-poppins font-extrabold text-center mb-16 text-teal-200 drop-shadow-lg glowing-text">
            GitHub Profile
          </h2>

          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.div
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-teal-400 glowing-card"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={userData.avatar_url}
                alt={`${userData.login}'s avatar`}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-poppins font-semibold text-teal-200 mb-2">
                {userData.name || userData.login}
              </h3>
              <p className="text-gray-200 text-lg mb-4">
                {userData.bio || "No bio available."}
              </p>
              <div className="text-gray-300 text-sm space-y-2">
                {userData.location && (
                  <p>
                    <strong>Location:</strong> {userData.location}
                  </p>
                )}
                <p>
                  <strong>Public Repositories:</strong> {userData.public_repos}
                </p>
                <p>
                  <strong>Followers:</strong> {userData.followers}
                </p>
                <p>
                  <strong>Following:</strong> {userData.following}
                </p>
                <p>
                  <strong>Joined GitHub:</strong>{" "}
                  {formatDate(userData.created_at)}
                </p>
                {userData.blog && (
                  <p>
                    <strong>Website:</strong>{" "}
                    <a
                      href={userData.blog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:underline"
                    >
                      {userData.blog}
                    </a>
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      <motion.section
        id="projects"
        className={`py-20 ${
          theme === "dark"
            ? "bg-gradient-to-br from-teal-500 to-blue-900"
            : "bg-gradient-to-br from-teal-200 to-blue-200"
        } text-white relative overflow-hidden`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {init && (
          <Particles
            id="tsparticles-projects"
            options={particlesOptions}
            className="absolute top-0 left-0 w-full h-full z-0"
          />
        )}

        <h2 className="text-5xl md:text-6xl font-poppins font-extrabold text-center mb-16 text-teal-200 drop-shadow-lg glowing-text">
          My Projects
        </h2>

        <div className="container mx-auto px-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 z-10 relative">
          <div className="relative flex items-center gap-2 w-full md:w-1/3 z-20"> {/* Increased z-index */}
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearchChange}
              className={`w-full p-2 rounded-md border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300 cursor-text ${
                theme === "dark"
                  ? "bg-blue-900 text-white"
                  : "bg-white text-black"
              }`}
              style={{ pointerEvents: "auto", zIndex: 20 }} // Ensure input is interactable
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 text-gray-400 hover:text-gray-200 z-20"
              >
                ✕
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 z-20">
            <label className="text-gray-200 font-roboto">Sort by:</label>
            <Select
              options={sortOptions}
              value={sortOptions.find((option) => option.value === sortBy)}
              onChange={(option) => setSortBy(option.value)}
              styles={customSelectStyles}
              className="w-48"
            />
          </div>
          <div className="flex items-center gap-2 z-20">
            <label className="text-gray-200 font-roboto">
              Filter by Language:
            </label>
            <Select
              options={languageOptions}
              value={languageOptions.find(
                (option) => option.value === filterLanguage
              )}
              onChange={(option) => setFilterLanguage(option.value)}
              styles={customSelectStyles}
              className="w-48"
            />
          </div>
          <motion.button
            onClick={resetFilters}
            className="bg-teal-500 text-white rounded-md p-2 hover:bg-teal-400 transition-colors z-20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reset Filters
          </motion.button>
        </div>

        <div className="container mx-auto px-6">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="bg-blue-900 bg-opacity-30 rounded-lg p-6 shadow-lg border border-teal-400 border-opacity-50 animate-pulse"
                >
                  <div className="h-6 bg-gray-600 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-600 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-600 rounded w-5/6 mb-4"></div>
                  <div className="h-4 bg-gray-600 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-600 rounded w-1/3 mb-4"></div>
                  <div className="h-10 bg-gray-600 rounded-full w-1/2"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <p className="text-center text-red-400 text-lg">{error}</p>
          ) : filteredRepos.length === 0 ? (
            <div className="text-center">
              <svg
                className="mx-auto h-24 w-24 text-gray-400 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-6h6v6m-3-3v6m-9 3h18M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                />
              </svg>
              <p className="text-gray-200 text-lg mt-4">
                {filterLanguage === "All" && !searchQuery
                  ? "No repositories found."
                  : `No repositories found for your search or filter.`}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  className={`project-card rounded-lg p-6 shadow-lg relative overflow-hidden z-10 ${
                    theme === "dark"
                      ? "bg-blue-900 bg-opacity-70 border border-teal-400 border-opacity-30 gradient-border"
                      : "bg-white border border-teal-200 border-opacity-30 gradient-border-light"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  {featuredRepos.includes(repo.name) && (
                    <span className="absolute top-4 right-4 bg-yellow-500 text-blue-900 text-xs font-bold px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                  <h3 className="text-xl md:text-2xl font-poppins font-semibold text-teal-200 mb-2">
                    {repo.name}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base mb-4">
                    {repo.description
                      ? repo.description
                      : "No description available."}
                  </p>
                  <div className="text-gray-300 text-sm mb-4 space-y-1">
                    <p>
                      <strong>Language:</strong>{" "}
                      {repo.language ? repo.language : "Not specified"}
                    </p>
                    <p>
                      <strong>Stars:</strong> {repo.stargazers_count}
                    </p>
                    <p>
                      <strong>Last Updated:</strong>{" "}
                      {formatDate(repo.updated_at)}
                    </p>
                    <motion.div
                      className="additional-info"
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>
                        <strong>Forks:</strong> {repo.forks_count}
                      </p>
                      <p>
                        <strong>Open Issues:</strong> {repo.open_issues_count}
                      </p>
                    </motion.div>
                  </div>
                  <motion.a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-500 text-white font-roboto font-medium py-2 px-4 rounded-full hover:bg-teal-400 transition-colors pulsing-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View on GitHub
                  </motion.a>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.section>

      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-teal-500 text-white p-4 rounded-full shadow-lg hover:bg-teal-400 transition-colors z-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </div>
  );
};

export default Projects;