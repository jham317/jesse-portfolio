import React from 'react';
import styled, { css } from 'styled-components';
import data from '../data'; // Import the data

const ProjectsWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 50px;
`;

const ProjectCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 10px;
  ${props =>
    !props.show &&
    css`
      display: none;
    `}
`;

const NavigationButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0; /* Hide buttons by default */
  transition: opacity 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const PreviousButton = styled(NavigationButton)`
  left: 10px;
`;

const NextButton = styled(NavigationButton)`
  right: 10px;
`;

const ArrowButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  pointer-events: none; /* Prevent button clicks from interfering with image hover */
  opacity: 0;

  ${ProjectCard}:hover & {
    /* Show arrow buttons when hovering on the card */
    opacity: 1;
  }
`;

const ProjectLink = styled.a`
  display: block;
  text-align: center;
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProjectSection = () => {
  const { projects } = data; // Destructure projects from data

  return (
    <ProjectsWrapper id="projects">
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          {project.imageUrl.map((url, idx) => (
            <ProjectImage
              key={idx}
              src={url}
              alt={`Project ${index + 1}`}
              show={project.imageUrl.length === 1 || idx === 0} // Use show prop within the styled.img
            />
          ))}
          {project.imageUrl.length > 1 && (
            <ArrowButtonWrapper>
              <PreviousButton>&lt;</PreviousButton>
              <NextButton>&gt;</NextButton>
            </ArrowButtonWrapper>
          )}
          <ProjectLink href={project.url}>Learn More</ProjectLink>
        </ProjectCard>
      ))}
    </ProjectsWrapper>
  );
};

export default ProjectSection;
