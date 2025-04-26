import "./Projects.css";

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
  },
  {
    title: "Recipe Book",
    description:
      "A feature-rich recipe app using React. Includes add/edit/delete recipes, filters by category/ingredients, modals, testimonials, and localStorage persistence.",
    link: "https://github.com/upadhyaysaumya55/recipe-book.git",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;