import React from 'react';

const skillsData = ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"];

function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skillsData.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;