import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section
            id="education"
            className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-20 xl:px-40"
        >
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10"
            >
                Education
            </motion.h2>

            <motion.div
                data-aos="fade-up"
                className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-gray-800 dark:to-gray-700 shadow-xl rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl max-w-3xl mx-auto"
            >
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    Bachelor's in Computer Application
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    Aryabhatta Knowledge University <br />
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">2022 - 2025</span>
                </p>
            </motion.div>
        </section>
    );
};

export default Education;
