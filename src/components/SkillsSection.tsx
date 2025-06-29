
import React from 'react';
import { Code, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['HTML', 'CSS','JavaScript','TypeScript', 'Bootstrap', 'Tailwind CSS'],
      color: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'MongoDB'],
      color: 'linear-gradient(135deg, #10b981, #059669)',
    },
    {
      icon: Zap,
      title: 'Tools & Others',
      skills: ['Git', 'MongoShell', 'Visual Studio', 'Storybook'],
      color: 'linear-gradient(135deg, #eab308, #f97316)',
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
          <p>A diverse set of technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="skill-card">
                <div className="skill-icon" style={{ background: category.color }}>
                  <Icon size={28} color="white" />
                </div>
                
                <h3>{category.title}</h3>
                
                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
