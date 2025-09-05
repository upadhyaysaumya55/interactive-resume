import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projectData = [
  {
    title: "Car Dealerships Review Portal",
    description:
      "Full-stack app with Express, MongoDB, React. Features reviews, ratings, and search filters.",
    link: "https://github.com/upadhyaysaumya55/xrwvm-fullstack_developer_capstone.git",
  },
  {
    title: "Interactive Resume",
    description:
      "A modern interactive resume with React, animations, and download feature.",
    link: "https://github.com/upadhyaysaumya55/interactive-resume.git",
    liveDemo: "https://interactive-resume-navy.vercel.app/",
  },
  {
    title: "Recipe Book",
    description:
      "A feature-rich recipe app using React. Includes add/edit/delete recipes, filters by category/ingredients, modals, testimonials, and localStorage persistence.",
    link: "https://github.com/upadhyaysaumya55/recipe-book.git",
    liveDemo: "https://recipe-book-gilt-two.vercel.app/",
  },
  {
    title: "Interactive Map",
    description:
      "A dynamic web application that allows users to explore locations on an interactive map. Features include clickable markers with detailed information, search and filter options, clustering, sidebar integration, and real-time updates. Built with React and modern mapping libraries for a smooth and engaging experience.",
    link: "https://github.com/upadhyaysaumya55/Interactive-map.git",
    liveDemo: "https://interactive-map-eight-roan.vercel.app/",
  },
  {
    title: "Portfolio Site",
    description:
      "A personal portfolio website built with React to showcase projects, skills, and experience. Features responsive design, smooth navigation, project highlights, and contact integration for better visibility and networking.",
    link: "https://github.com/upadhyaysaumya55/My-Portfolio.git",
    liveDemo: "https://my-portfolio-tan-seven-14.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather application built with React that fetches real-time weather data using an external API. Includes features like city-based search, current conditions, 5-day forecast, temperature conversion, and intuitive UI for a seamless user experience.",
    link: "https://github.com/upadhyaysaumya55/SkyCast-Weather-App.git",
    liveDemo: "https://sky-cast-weather-app-gamma.vercel.app/",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-8 bg-gradient-to-br from-gray-900 to-black text-white"
    >
      <h2
        className="text-4xl sm:text-5xl font-bold text-center mb-16"
        data-aos="fade-up"
      >
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-700"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            data-aos="zoom-in-up"
          >
            <h3 className="text-2xl font-semibold text-indigo-400 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 hover:scale-105 transform transition duration-300 shadow-lg"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
