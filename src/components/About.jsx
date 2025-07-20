import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import AOS from "aos";
import "aos/dist/aos.css";
import animationData from "../assets/rocket.json";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-16 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14">
        {/* Left Content */}
        <motion.div
          className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-up"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center lg:text-left text-cyan-400 mb-6 hover:text-cyan-300 transition duration-300 ease-in-out">
            About Me
          </h2>
          <p className="hover:scale-[1.01] transition-transform duration-300" data-aos="fade-right">
            I am a passionate <span className="font-semibold text-cyan-300">Frontend Web Developer</span> with 1 year of
            experience in building modern, user-friendly interfaces using HTML,
            CSS, and JavaScript frameworks like React.
          </p>
          <p className="hover:scale-[1.01] transition-transform duration-300" data-aos="fade-left">
            I specialize in creating responsive layouts and dynamic user experiences.
            I pay great attention to detail to ensure every interface is clean,
            intuitive, and accessible across all devices and browsers.
          </p>
          <p className="hover:scale-[1.01] transition-transform duration-300" data-aos="fade-right">
            I love using tools like Tailwind CSS for rapid UI development and
            enjoy turning design concepts into beautiful, functional components.
          </p>
          <p className="hover:scale-[1.01] transition-transform duration-300" data-aos="fade-left">
            I'm also experienced with version control tools like Git & GitHub, and
            always stay up-to-date with evolving frontend technologies.
          </p>
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
            style={{ height: "350px", width: "100%" }}
            className="hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
