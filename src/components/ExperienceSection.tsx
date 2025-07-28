
import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'MERN Stack Intern',
      company: 'Correct Steps Consultancy',
      location: 'Remote- Ghaziabad',
      period: 'October 2024 - 2025',
      description: ["India-Italy Connect is a project developed to assist Indian students who aspire to study in Italy by providing a one-stop platform to find the right colleges, job opportunities, hostels, and accommodation options. The mission was to simplify the relocation process for students by offering accurate and reliable information, while the vision was to build a digital bridge between India and Italy, making international education more accessible and stress-free."],
      achievements: ["Developed a Mern-stack web application using HTML, CSS, JavaScript React, and GitHub data.", "Create RESTful APIs using Node.js and Express.js.", "Implement authentication methods such as JWT or OAuth.", "Design an efficient MongoDB schema"],
      technologies: ['HTML', 'JavaScript', 'Node.js'],
      link: '',
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-title">
          <h2>Experience</h2>
          <p>My professional journey and key achievements</p>
        </div>

        <div className="experience-timeline">
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="timeline-dot"></div>

              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-company">
                    <span>{exp.company}</span>
                    <ExternalLink size={16} />
                  </div>
                  <div className="experience-meta">
                    <div>
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <div>
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>  

                <div className="experience-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
