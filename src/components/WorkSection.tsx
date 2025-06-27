
import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

const WorkSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: 'Wonderlust',
      description: 'The House Booking System is a web-based full stack application that allows users to search, book, and manage house rental properties seamlessly. This project is designed to simplify the process of finding and booking rental accommodations for short or long-term stays, similar to platforms like Airbnb.',
      image: 'photo-1605146769289-440113cc3d00',
      category: 'Full Stack',
      technologies: ['HTML', 'JavaScript','Bootstrap','CSS','Node.js','Express.js', 'MongoDB'],
      liveUrl: 'https://major-worderlust-project.onrender.com/listings',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      title: 'Gym Web Application',
      description: 'I have developed a responsive Gym Web Application using HTML, CSS, and JavaScript. This project showcases a modern, user-friendly website design for a fitness center. The application provides essential information about gym services, membership plans, trainers, and contact details, aimed at enhancing user experience and attracting potential customers.',
      image: 'photo-1623874514711-0f321325f318',
      category: 'Web App',
      technologies: ['HTML','CSS','JavaScript'],
      liveUrl: 'https://yashdaksh09.github.io/gymweb-application_project/',
      githubUrl: 'https://github.com',
      featured: true,
    },
    // {
    //   title: 'Portfolio Website',
    //   description: 'Modern portfolio website with 3D animations and interactive elements.',
    //   image: 'photo-1460925895917-afdab827c52f',
    //   category: 'Website',
    //   technologies: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    //   featured: false,
    // },
  ];

  const categories = ['All','Full Stack', 'Web App'];
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="work-section">
      <div className="container">
        <div className="section-title">
          <h2>My Work</h2>
          <p>A collection of projects that showcase my skills and creativity</p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          <Filter size={20} />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              {/* Image */}
              <div className="project-image">
                <img
                  src={`https://images.unsplash.com/${project.image}?w=800&h=400&fit=crop`}
                  alt={project.title}
                />
                <div className="project-overlay"></div>
                
                {/* Overlay buttons */}
                <div className="project-buttons">
                  <a href={project.liveUrl} className="project-btn">
                    <Eye size={16} />
                  </a>
                  <a href={project.githubUrl} className="project-btn">
                    <Github size={16} />
                  </a>
                </div>

                {project.featured && (
                  <div className="featured-badge">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="project-tech">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.liveUrl} className="project-link">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="project-link">
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
