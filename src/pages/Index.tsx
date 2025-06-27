
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import IntroSection from '../components/IntroSection';
import SkillsSection from '../components/SkillsSection';
import Education from '../components/Education';
import ExperienceSection from '../components/ExperienceSection';
import WorkSection from '../components/WorkSection';
import ContactSection from '../components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.body.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main style={{ paddingTop: '64px' }}>
        <IntroSection />
        <SkillsSection />
        <Education />
        <ExperienceSection />
        <WorkSection />
        <ContactSection />
        <Footer/>
      </main>
    </div>
  );
};

export default Index;
