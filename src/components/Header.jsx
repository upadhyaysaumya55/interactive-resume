import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <motion.header
      className="w-full px-6 py-4 bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900 text-white shadow-lg fixed top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
        <motion.h1
          className="text-2xl font-bold tracking-wide"
          data-aos="fade-down"
        >
          My Resume
        </motion.h1>

        <nav className="text-sm md:text-base">
          <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6 font-medium">
            {["about", "experience", "skills", "education", "projects", "contact"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer transition-colors duration-300 hover:text-yellow-400"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="/resume.pdf"
            download="My_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-3 rounded transition duration-300"
          >
            Download Resume
          </a>

          <motion.a
            href="https://github.com/upadhyaysaumya55"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-xl hover:text-yellow-400"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/saumya-u-211917206/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-xl hover:text-yellow-400"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
