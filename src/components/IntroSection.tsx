
import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const IntroSection = () => {
  const scrollToNext = () => {
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  let resumedownload=()=>{
    const link= document.createElement("a");
    link.click(); // programmily click 
  }

  return (
    <section id="intro" className="intro-section">
      <div className="intro-content">
        {/* Animated Background Elements */}
        <div className="background-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>

        <div className="intro-location">
          <MapPin size={20} />
          <span>Moradabad, Uttar Pradesh</span>
        </div>

        <h1 className="intro-title">
          Hello!
        </h1>

        <h2 className="intro-subtitle">
          I'm <span className="name">Yash Kumar Daksh</span>
          <br />
          Aspiring Full Stack Developer
        </h2>

        <p className="intro-description">
          Building My Way into Full Stack Development | Frontend to Backend with Passion
        </p>

        {/* Action Buttons */}
        <div className="intro-buttons">
         <a href="https://drive.google.com/file/d/1gEB7GEFMia18qyjzigxHEtwUGSYUB2Pw/view?usp=drive_link" > <button onClick={resumedownload} className="btn btn-primary">
            <Download size={20} style={{ marginRight: '8px' }} />
            
            Download CV
          </button></a>
          <button 
            onClick={scrollToNext} 
            className="btn btn-secondary"
          >
            View My Work
          </button>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/yashdaksh09" className="social-link">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/yash-daksh09/" className="social-link">
            <Linkedin size={20} />
          </a>
          <a href="mailto:yashdaksh620@gmail.com" className="social-link">
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <button onClick={scrollToNext}>
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default IntroSection;
