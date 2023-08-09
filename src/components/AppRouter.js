import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import data from '../data';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import AboutMeSection from './AboutMeSection';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';

const AppRouter = () => {
    
    return (
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={HeroSection} />
        <Route path="/about" component={AboutMeSection} />
        <Route path="/projects" component={ProjectSection} />
        <Route path="/contact" render={() => <ContactSection contact={data.contact} />} />
//... other routes

      </BrowserRouter>
    );
  };
  
export default AppRouter;