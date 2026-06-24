
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    // {
    //   degree: 'Master of Computer Science',
    //   school: 'Stanford University',
    //   location: 'Stanford, CA',
    //   period: '2019 - 2021',
    //   description: 'Specialized in Machine Learning and Human-Computer Interaction. Graduated Summa Cum Laude with a 3.9 GPA.',
    //   achievements: ['Dean\'s List', 'Research Assistant', 'Published 2 papers'],
    // },
    {
      degree: 'Bachelor of Computer Application',
      school: 'IFTM University',
      location: 'Moradabad',
      period: '2022 - 2025',
      cgpa:   "CGPA: 7.90",
      description: 'Focus on Software Engineering and Web Development. Active member of the Computer Science Student Association.',
    },
    {
      degree: '12th',
      school: 'Chitrgupt Inter College',
      location: 'Moradabad',
      period: '2020 - 2021',
      percentage: "Percentage: 70%",
      description: 'I have lot of enjoyed this time period.',
    },
    {
      degree: '10th',
      school: 'Chitrgupt Inter College',
      location: 'Moradabad',
      period: '2018 - 2019',
      percentage: "Percentage: 72.83%",
      description: 'I have lot of enjoyed this time period.',
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
          <p>My academic journey and continuous learning path</p>
        </div>

        <div className="education-timeline">
          <div className="timeline-line"></div>

          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="timeline-dot"></div>

              <div className="education-content">
                <div className="education-header">
                  <GraduationCap size={24} />
                  <h3>{edu.degree}</h3>
                </div>
                
                <h4 className="education-school">{edu.school}</h4>
                
                <div className="education-meta">
                  <div>
                    <Calendar size={16} />
                    {edu.period}
                  </div>
                  <div>
                    {edu.cgpa}
                  </div>
                  <div>
                    {edu.percentage}
                  </div>
                  <div>
                    <MapPin size={16} />
                    {edu.location}
                  </div>
                </div>
                
                {/* <p className="education-description">{edu.description}</p> */}
                
                {/* <div className="education-achievements">
                  {edu.achievements.map((achievement, achIndex) => (
                    <span key={achIndex} className="achievement-tag">
                      {achievement}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
