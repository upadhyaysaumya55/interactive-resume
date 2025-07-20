import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-colors duration-500`}>
      <div className="fixed top-4 right-4 z-50">
        <button
          className="px-4 py-2 rounded-full shadow-md text-sm font-semibold transition transform hover:scale-105 bg-blue-500 text-white dark:bg-yellow-400 dark:text-black"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Motion wrapper for smooth transition */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
