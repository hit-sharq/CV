import React from 'react';

const experienceData = [
  {
    title: "Job Title 1",
    company: "Company Name 1",
    date: "Date",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
      "Responsibility 3"
    ]
  },
  {
    title: "Job Title 2",
    company: "Company Name 2",
    date: "Date",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2"
    ]
  },
  // Add more experience as needed
];

function Experience() {
  return (
    <section>
      <h2>Professional Experience</h2>
      {experienceData.map((job, index) => (
        <div key={index}>
          <h3>{job.title} at {job.company}</h3>
          <p>{job.date}</p>
          <ul>
            {job.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;