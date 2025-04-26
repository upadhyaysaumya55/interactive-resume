import { Link } from "react-scroll";
import "./Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
    return (
      <header className="header">
        <h1>My Resume</h1>
        <nav className="nav-links">
        <ul>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        </ul>
        </nav>

        <div className="resume-download">
          <a href="/resume.pdf" download="My_Resume.pdf" target="blank" rel="noopener noreferrer" className="download-btn">
            Download Resume
          </a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/upadhyaysaumya55" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/saumya-u-211917206/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </header>
    );
};
  
export default Header;