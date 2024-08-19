import React from 'react';

const projectsData = [
  {
    title: "Project 1",
    description: "Short description of project 1.",
    link: "https://projectlink1.com"
  },
  {
    title: "Project 2",
    description: "Short description of project 2.",
    link: "https://projectlink2.com"
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      {projectsData.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </section>
  );
}

export default Projects;