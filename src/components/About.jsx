import React from "react";
import "./About.css"; // Ensure you have corresponding CSS for styling

const About = () => {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p>
        I am a passionate Full Stack Developer with 1 year of experience in web development.
        I have a strong command over both front-end and back-end technologies, allowing me to
        build complete and scalable applications.
      </p>
      <p>
        On the front-end side, I specialize in HTML, CSS, and JavaScript frameworks such as
        React and Angular. I’m passionate about creating intuitive user interfaces that provide
        an exceptional user experience. I pay great attention to detail, ensuring that the websites
        or applications I develop are responsive, visually appealing, and accessible across different devices and browsers.
      </p>
      <p>
        Moving to the back end, I’m proficient in server-side languages like Python and Node.js.
        I have extensive experience working with databases such as MySQL, PostgreSQL, and Express, 
        and I can design efficient database structures and write optimized queries.
      </p>
      <p>
        I’m familiar with RESTful APIs and know how to integrate them into applications to enable
        seamless communication between the front end and back end. Additionally, I have expertise 
        in version control systems like Git. I enjoy staying up to date with the latest trends 
        and technologies in the web development world, as it allows me to continually improve my 
        skills and deliver cutting-edge solutions.
      </p>
    </section>
  );
};

export default About;