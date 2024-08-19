import React from 'react';

const educationData = [
  {
    degree: "Degree",
    school: "University Name",
    date: "Graduation Date"
  },
  {
    degree: "Degree 2",
    school: "University Name 2",
    date: "Graduation Date 2"
  },
  // Add more education as needed
];

function Education() {
  return (
    <section>
      <h2>Education</h2>
      {educationData.map((edu, index) => (
        <div key={index}>
          <h3>{edu.degree} at {edu.school}</h3>
          <p>{edu.date}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;