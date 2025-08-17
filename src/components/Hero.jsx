import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-10 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm <span className="text-indigo-500">Saumya Kumari</span>
      </motion.h1>

      <TypeAnimation
        sequence={[
          "Full Stack Developer 💻",
          2000,
          "MERN Stack Enthusiast 🌐",
          2000,
          "Loves React & Node.js ⚛️",
          2000,
          "Kubernetes & CI/CD 🚀",
          2000,
        ]}
        wrapper="h2"
        cursor={true}
        repeat={Infinity}
        className="text-xl md:text-2xl mt-4 text-indigo-300 font-semibold"
      />

      <motion.p
        className="text-center max-w-3xl mt-6 text-base md:text-lg text-gray-300 leading-relaxed px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        data-aos="fade-up"
      >
        I am a Full Stack Software Developer with comprehensive expertise in both front-end and back-end technologies. 
        I specialize in creating dynamic, responsive user interfaces using React and developing robust server-side functionality with Node.js. 
        I am passionate about designing scalable, efficient solutions and enjoy transforming complex challenges into elegant, high-quality applications.
      </motion.p>
    </section>
  );
};

export default Hero;
