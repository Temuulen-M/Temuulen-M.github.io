import React from 'react';

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'Personal Portfolio',
      description: 'A modern React-based portfolio website showcasing my work and skills.',
      tech: 'React, TypeScript, CSS'
    },
    {
      id: 2,
      title: 'Web Application',
      description: 'Full-stack application built with modern web technologies.',
      tech: 'React, Node.js, MongoDB'
    },
    {
      id: 3,
      title: 'GitHub Projects',
      description: 'Open source contributions and collaborative projects.',
      tech: 'TypeScript, JavaScript, React'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">{project.tech}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;