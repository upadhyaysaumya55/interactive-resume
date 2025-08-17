import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  const skills = [
    "HTML5", "Tailwind CSS", "JavaScript", "React", "Node.js", "Express.js", "Cloud Computing", "MongoDB",
    "Django", "Git/GitHub", "Docker", "Kubernetes", "CI/CD", "SQL", "Microservices Architecture",
    "REST APIs", "Cloud Computing",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="skills"
      className="py-16 px-4 sm:px-6 lg:px-16 bg-white dark:bg-gray-900"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 rounded-xl text-center text-gray-800 dark:text-gray-100 font-semibold cursor-pointer transform hover:scale-105"
            data-aos="zoom-in"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
