import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Hello, I'm <span>Saumya Kumari</span>
            </motion.h1>

            {/* Typing animation below */}
            <TypeAnimation
                sequence={[
                    "Full Stack Developer 💻",
                    2000,
                    "MERN Stack Enthusiast 🌐",
                    2000,
                    "Loves React & Node.js ⚛️",
                    2000,
                    "Kubernetes & CI/CD 🚀",
                    2000
                ]}
                wrapper="h2"
                cursor={true}
                repeat={Infinity}
                className="typing"
            />

            <p>
                I’m a Full Stack Web Developer with expertise in both front-end and back-end technologies.
                Whether it’s building dynamic UIs with React or server-side functionality with Node.js,
                I’m passionate about building scalable solutions. I love turning complex problems into elegant apps.
            </p>

            <a href="/resume.pdf" download className="download-btn">
            Download Resume
            </a>

        </section>
    );
};

export default Hero;