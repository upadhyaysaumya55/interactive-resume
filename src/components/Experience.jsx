import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const experiences = [
    {
      title: "Full-Stack Developer",
      subtitle: "Experience:",
      details: "Skills: React, Node.js, Express, MongoDB, Django, Python",
    },
    {
      title: "Full-Stack Software Developer Course",
      details:
        "Completed a comprehensive course covering front-end and back-end technologies.",
    },
    {
      title: "Capstone Project: Car Dealership Review Portal",
      details:
        "Designed and developed a full-stack web application for users to review and rate car dealerships.",
      tech: "Technologies Used: React, Node.js, Express, MongoDB",
    },
    {
      title: "DevOps & Containerization",
      details:
        "Implemented CI/CD pipelines and containerized the Car Dealerships Review Portal using Docker and Kubernetes.",
      tech: "Technologies Used: Docker, Kubernetes, GitHub Actions",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full px-4 py-16 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="p-6 rounded-2xl shadow-lg bg-gradient-to-tr from-gray-800 to-gray-700 border border-gray-600 hover:shadow-2xl transform transition duration-300 ease-in-out"
            data-aos="fade-up"
            data-aos-delay={idx * 150}
            whileHover={{ scale: 1.03, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-2">
              {exp.title}
            </h3>

            {exp.subtitle && (
              <p className="text-sm text-gray-300 font-medium mb-2">
                {exp.subtitle}
              </p>
            )}

            <p className="text-gray-200 mb-2 leading-relaxed">{exp.details}</p>

            {exp.tech && (
              <p className="text-sm text-purple-300 italic">{exp.tech}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
