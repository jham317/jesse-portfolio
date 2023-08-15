import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../data';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProjectsWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; 
  padding: 50px;
  gap: 30px;  
`;

const ProjectCard = styled.div`
  width: 90%;
  height: 80vh;
  display: flex;
  flex-direction: column;  
  align-items: center; 
  justify-content: center;  
  border-radius: 10px;
  overflow: hidden;
  position: relative;  
`;

const ProjectTitle = styled.h3`
  flex: 1; 
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;  
  padding-bottom: 80px;
  color: ${props => props.theme.text};
`;

const ProjectDescription = styled.p`
  flex: 1;  
  font-size: 16px;
  text-align: center;
  color: ${props => props.theme.text};
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;  
  height: 50vh;
  margin-bottom: 50px;  
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px; 
  margin-bottom: 20px;  
`;

const ProjectImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: opacity 0.3s;
`;


const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 40px;
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
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  

  const handleArrowClick = (direction) => {
    const maxIndex = projects.length - 1;
    if (direction === 'prev') {
      setCurrentProjectIndex((oldIndex) => (oldIndex === 0 ? maxIndex : oldIndex - 1));
    } else if (direction === 'next') {
      setCurrentProjectIndex((oldIndex) => (oldIndex === maxIndex ? 0 : oldIndex + 1));
    }
  };

  const currentProject = projects[currentProjectIndex];


  return (
    <ProjectsWrapper>
      <ProjectCard>
        <TextWrapper>
          <ProjectTitle>{currentProject.title}</ProjectTitle>
          <ProjectDescription>{currentProject.description}</ProjectDescription>
        </TextWrapper>
        <ImageWrapper>
          <ProjectImage src={currentProject.imageUrl[0]} alt={`Project ${currentProjectIndex + 1}`} />
        </ImageWrapper>
        <LeftArrow onClick={() => handleArrowClick('prev')}>
          <FaArrowLeft />
        </LeftArrow>
        <RightArrow onClick={() => handleArrowClick('next')}>
          <FaArrowRight />
        </RightArrow>
      </ProjectCard>
    </ProjectsWrapper>
  );
};

export default ProjectSection;
