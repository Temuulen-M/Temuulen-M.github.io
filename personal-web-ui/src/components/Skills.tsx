import React from 'react';

function Skills() {
  const skillsData = [
    {
      id: 1,
      category: 'Frontend',
      skills: 'React, TypeScript, HTML5, CSS3, JavaScript'
    },
    {
      id: 2,
      category: 'Backend',
      skills: 'Node.js, Express, MongoDB, REST APIs'
    },
    {
      id: 3,
      category: 'Tools',
      skills: 'Git, VS Code, npm, webpack, GitHub'
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map(skill => (
          <div key={skill.id} className="skill-item">
            <h3>{skill.category}</h3>
            <p>{skill.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;