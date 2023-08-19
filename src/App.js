import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import { ThemeProvider } from './ThemeContext';
import GlobalStyle from './GlobalStyle';


const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <NavBar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutMeSection />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </ThemeProvider>
  );
};

export default App;

