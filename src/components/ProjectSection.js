import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../data';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProjectsWrapper = styled.div`
height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px;
  gap: 30px;  // spacing between projects
`;

const ProjectCard = styled.div`
  width: calc(30% - 20px);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  text-align: center;
  color: ${props => props.theme.text};
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${props => props.theme.text};
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;  /* Adjust the height as needed */
`;

const ProjectImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  transition: opacity 0.3s;
`;

const ImageSlider = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-${props => props.index * 100}%);
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 24px;
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const LeftArrow = styled(Arrow)`
  left: 10px;
`;

const RightArrow = styled(Arrow)`
  right: 10px;
`;

const ProjectSection = () => {
  const { projects } = data;
  const [currentImages, setCurrentImages] = useState({});

  const handleArrowClick = (projectIndex, direction) => {
    const currentImageIndex = currentImages[projectIndex] || 0;
    const adjustedIndex = direction === 'prev' 
      ? (currentImageIndex - 1 + projects[projectIndex].imageUrl.length) % projects[projectIndex].imageUrl.length 
      : (currentImageIndex + 1) % projects[projectIndex].imageUrl.length;
    
    setCurrentImages({
      ...currentImages,
      [projectIndex]: adjustedIndex
    });
  };

  return (
    <ProjectsWrapper>
      {projects.map((project, projectIndex) => (
        <ProjectCard key={projectIndex}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ImageWrapper>
            <ImageSlider index={currentImages[projectIndex] || 0}>
              {project.imageUrl.map((url, imgIndex) => (
                <ProjectImage 
                  key={imgIndex}
                  src={url}
                  alt={`Project ${projectIndex + 1}`}
                  style={{ opacity: imgIndex === (currentImages[projectIndex] || 0) ? 1 : 0 }}
                />
              ))}
            </ImageSlider>
            {project.imageUrl.length > 1 && (
              <>
                <LeftArrow onClick={() => handleArrowClick(projectIndex, 'prev')}><FaArrowLeft /></LeftArrow>
                <RightArrow onClick={() => handleArrowClick(projectIndex, 'next')}><FaArrowRight /></RightArrow>
              </>
            )}
          </ImageWrapper>
        </ProjectCard>
      ))}
    </ProjectsWrapper>
  );
};

export default ProjectSection;
