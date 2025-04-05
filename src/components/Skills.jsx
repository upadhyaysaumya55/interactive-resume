import "./Skills.css";

const skills = () => {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Cloud Computing", "Django", "Git/GitHub", "Docker", "Kubernetes", "CI/CD", "SQL", "Microservices"]

    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div key={index} className="skill">{skill}</div>
                ))}
            </div>
        </section>
    );
};

export default skills;