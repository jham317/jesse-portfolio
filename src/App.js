import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageStyling from './PageStyling';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';





const AppRouter = () => {
  return (
    <BrowserRouter>
      <PageStyling /> {/* Apply the pastel color scheme */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutMeSection />} />
        <Route path="/projects" element={<ProjectSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => {
  return <AppRouter />;
};

export default App;
