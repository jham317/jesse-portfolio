import React from 'react';
import data from './data';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import AboutMeSection from './components/AboutMeSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

const App = () => {
  const { hero, aboutMe, projects, contact } = data;

  return (
    <>
      <NavBar />
      <HeroSection hero={hero} />
      <AboutMeSection aboutMe={aboutMe} />
      <ProjectSection projects={projects} />
      <ContactSection contact={contact} />
    </>
  );
};

export default App;
