import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-20 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
        data-aos="fade-up"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Let's <span className="text-indigo-500">Connect</span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 mb-10">
          I’m open to work opportunities, collaborations, or even a quick coffee chat!
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col items-center gap-6 text-lg"
        >
          <motion.a
            href="mailto:saumyaupadhyay621@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="transition duration-300 hover:text-indigo-400"
            data-aos="zoom-in"
          >
            📧 <span className="underline underline-offset-4">saumyaupadhyay621@gmail.com</span>
          </motion.a>

          <motion.a
            href="tel:+91XXXXXXXXXX"
            whileHover={{ scale: 1.05 }}
            className="transition duration-300 hover:text-indigo-400"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            📞 <span className="underline underline-offset-4">+91 XXXXXXXXXX</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
