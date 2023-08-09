// components/Portfolio.js
import React from 'react';
import { data } from '../data';
import { aboutMeData } from '../data';
import { FullPage, Slide } from 'react-full-page';

const Portfolio = () => {
  const { name, introduction, projects, contact } = data;

  return (
    <FullPage>
      {/* Hero Section */}
      <Slide>
        <div className="section">
          {/* Hero Section content goes here */}
          <h1>{name}</h1>
          <p>{introduction}</p>
        </div>
      </Slide>

      {/* About Me Section */}
      <Slide>
        <div className="section">
          {/* About Me Section content goes here */}
          <h2>About Me</h2>
          {/* Add about me details from the data object */}
        </div>
      </Slide>

      {/* Projects Section */}
      {projects.map((project, index) => (
        <Slide key={index}>
          <div className="section">
            {/* Projects Section content goes here */}
            <h2>{project.title}</h2>
            {/*  Project details from the data object */}
          </div>
        </Slide>
      ))}

      {/* Contact Section */}
      <Slide>
        <div className="section">
          {/* Contact Section content goes here */}
          <h2>Contact</h2>
          {/* Contact details from the data object */}
        </div>
      </Slide>
    </FullPage>
  );
};

export default Portfolio;
