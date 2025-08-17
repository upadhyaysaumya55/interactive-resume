import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import AOS from "aos";
import "aos/dist/aos.css";
import animationData from "../assets/rocket.json";

const skills = [
  "React",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "HTML5 & CSS3",
  "Git & GitHub",
  "Responsive Design",
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48 overflow-hidden"
    >
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500 opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-500 opacity-10 rounded-full blur-3xl -z-10"></div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14">
        {/* Left Content */}
        <motion.div
          className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-up"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center lg:text-left text-gradient mb-6">
            About Me
          </h2>

          <p className="hover:scale-[1.02] transition-transform duration-300">
            I am a dedicated <span className="font-semibold text-cyan-400">Full Stack Software Developer</span> specializing in designing and developing modern, scalable, and high-performance web applications using <span className="font-semibold text-pink-400">React</span> for dynamic front-end experiences and <span className="font-semibold text-cyan-400">Node.js</span> and <span className="font-semibold text-cyan-400">Django</span> for robust back-end solutions.
          </p>

          <p className="hover:scale-[1.02] transition-transform duration-300">
            I enjoy transforming complex problems into elegant, user-friendly solutions.
            I focus on clean, maintainable code and intuitive interfaces that work seamlessly across all devices.
          </p>

          <p className="hover:scale-[1.02] transition-transform duration-300">
            My toolkit includes <span className="text-yellow-400">Tailwind CSS</span>, modern JavaScript frameworks, and version control with <span className="text-green-400">Git & GitHub</span>.
          </p>

          {/* Skills */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 hover:bg-cyan-600/30 backdrop-blur-md text-white px-4 py-2 rounded-lg text-center font-medium cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
          data-aos="zoom-in"
          className="w-full lg:w-1/2"
        >
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: "400px", width: "100%" }}
            className="hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
