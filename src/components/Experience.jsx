import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="experience-title">Experience</h2>

      <div className="experience-card">
        <h3 className="experience-role">Full-Stack Developer</h3>
        <p className="experience-subtitle"><strong>Experience:</strong></p>
        <p className="experience-details">
          <strong>Skills:</strong> React, Node.js, Express, MongoDB, Django, Python
        </p>
      </div>

      <div className="experience-card">
        <h3 className="experience-role">Full-Stack Software Developer Course</h3>
        <p className="experience-details">
          Completed a comprehensive course covering front-end and back-end technologies.
        </p>
      </div>

      <div className="experience-card">
        <h3 className="experience-role">Capstone Project: Car Dealership Review Portal</h3>
        <p className="experience-details">
          Design and developed a full-stack web application for users to review and rate car dealerships using React for the frontend and Express with MongoDB for the backend.
        </p>
        <p className="experience-details">
        <strong>Technologies Used</strong>React, Node.js, Express, MongoDB
        </p>
        </div>

        <div className="experience-card">
        <h3 className="experience-role">DevOps & Containerization</h3>
        <p className="experience-details">Implemented CI/CD pipelines and containerized the Car Dealerships Review Portal using Docker and Kubernetes.
        </p>
        <p className="experience-details">
        <strong>Technologies Used</strong>React, Node.js, Express, MongoDB
        </p>
      </div>
    </div>
  );
};

export default Experience;
