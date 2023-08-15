
import React from 'react';
import data from '../data';
import { FullPage, Slide } from 'react-full-page';

const Portfolio = () => {
  const { name, introduction, projects, contact } = data;

  return (
    <FullPage>
      {}
      <Slide>
        <div className="section">
          {}
          <h1>{name}</h1>
          <p>{introduction}</p>
        </div>
      </Slide>

      {}
      <Slide>
        <div className="section">
          {}
          <h2>About Me</h2>
          {}
        </div>
      </Slide>

      {}
      {projects.map((project, index) => (
        <Slide key={index}>
          <div className="section">
            {}
            <h2>{project.title}</h2>
            {}
          </div>
        </Slide>
      ))}

      {}
      <Slide>
        <div className="section">
          {}
          <h2>Contact</h2>
          {}
        </div>
      </Slide>
    </FullPage>
  );
};

export default Portfolio;
