
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
    {
      title: 'Executive',
      company: 'Brindavan Agro Industires Pvt Ltd (The Coca Cola Company)',
      location: 'Onsite- Mathura',
      period: 'October 2025 - Present',
      description: ["Leverage AI-driven development (Cursor, ChatGPT, GitHub Copilot) to accelerate development cycles, optimize code efficiency, and ensure high-quality project delivery. ",
      "Bridge the gap between ground-level challenges and technical execution through on-site requirement gathering to architect efficient, automated digital workflows.", "Adopt a problem-first approach by analyzing real-world business hurdles and utilizing AI tools to model complex logic before final implementation.", "Develop and deploy scalable Full-Stack applications using React.js, Express.js, and MySQL, tailored to streamline inventory, employee tracking, and logistics.","Expertise in rapid prototyping and automation, utilizing AI-assisted coding to deliver robust industrial solutions within tight deadlines.","Self-learning mindset with the ability to leverage documentation and AI-assisted tools to quickly grasp new concepts and build realworld projects."
      ],
      achievements: ["Developed and maintained an Canteen Management Module System consisting of HR Portal, Canteen Management, Accounts Admin, and Employee Management modules.", "Implemented barcode-based employee identification for meal access and validation.", "Built HR Portal features for barcode generation, meal access control, feedback tracking, and daily meal quantity data export", "Built HR Portal features for barcode generation, meal access control, feedback tracking, and daily meal quantity data export", "Developed the Canteen Management module to scan employee barcodes, validate eligibility, redirect to meal page based on time slots, and process meal submissions", "Implemented wallet-based meal credit system to deduct credits automatically and generate meal tokens with transaction history.","Built Accounts/Admin module to manage employee wallet credits, verify barcodes, and monitor transaction records.", "Developed a Driver & Vehicle Management Control System to digitize vehicle inspection and checklist processes in the plant."],
      technologies: ['React.js', 'Express.js', 'MySQL', 'IIS-Server'],
      link: '',
    },
        {
      title: 'Executive-Product Engineering & Automation',
      company: 'UniSpark Innovation Pvt Ltd',
      location: 'Onsite- Greater Noida',
      period: 'April 2025 - Present',
      description: ["Leverage AI-driven development (Cursor, ChatGPT, GitHub Copilot) to accelerate development cycles, optimize code efficiency, and ensure high-quality project delivery. ",
      "Bridge the gap between ground-level challenges and technical execution through on-site requirement gathering to architect efficient, automated digital workflows.", "Adopt a problem-first approach by analyzing real-world business hurdles and utilizing AI tools to model complex logic before final implementation.", "Develop and deploy scalable Full-Stack applications using React.js, Express.js, and MySQL, tailored to streamline inventory, employee tracking, and logistics.","Expertise in rapid prototyping and automation, utilizing AI-assisted coding to deliver robust industrial solutions within tight deadlines.","Self-learning mindset with the ability to leverage documentation and AI-assisted tools to quickly grasp new concepts and build realworld projects."
      ],
      achievements: ["Collaborated with stakeholders to understand business requirements, prepared process flowcharts, and transformed business workflows into scalable applications using Zoho Creator.", "Designed and implemented customized CRM solutions, automating business processes, approval workflows, and data management operations.", "Developed a complete HRMS solution for employee attendance tracking, leave management, employee master management, and daily HR operations.", "Improved HR process efficiency through automation and centralized data management.", "Developed Geo-Fencing based Punch In / Punch Out functionality to ensure employees can mark attendance only from authorized locations.", "Integrated GPS location tracking for accurate attendance monitoring and compliance.","Built Accounts/Admin module to manage employee wallet credits, verify barcodes, and monitor transaction records.", "Created secure and optimized APIs for attendance management, employee data management, leave processing, and reporting modules."],
      technologies: ['React.js', 'Node.js', 'Express.js', 'Cloudinary', 'React Native'],
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
