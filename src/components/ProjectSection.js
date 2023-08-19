import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import data from '../data';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';

const waveAnimation = keyframes`
  0% { transform: translateY(-2px); }
  50% { transform: translateY(2px); }
  100% { transform: translateY(-2px); }
`;

const ProjectsWrapper = styled.div`
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  padding: 50px;
  gap: 30px;
  overflow: visible;  

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const Separator = styled.hr`
  width: 80%; 
  border: 0;
  border-top: 1px solid ${props => props.theme.text}; 
  margin: 20px auto; 
  
  @media (max-width: 768px) {
    margin: 10px auto;
  }
`;
const ProjectCard = styled.div`
  width: 90%;
  flex: 1;
  height: 40vh;
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  border-radius: 10px;
  overflow: visible;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px 0;
  }
`;

const TextWrapper = styled.div`
  flex: 0.35;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  padding-right: 10%;

  @media (max-width: 768px) {
    padding-right: 0;
    align-items: center;
  }
`;

const MainTitle = styled.h2`
  font-size: 36px;
  text-align: center;
  color: ${props => props.theme.text};
  animation: ${waveAnimation} 1.5s infinite;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 22px;
  color: ${props => props.theme.text};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`;

const DescriptionBubble = styled.div`
  padding: 10px;
  border-radius: 20px;

  @media (max-width: 768px) {
    border-radius: 15px;
    text-align: center;
  }
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: ${props => props.theme.text};
  
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center; // optional: for better alignment on smaller screens
  }
`;

const Arrow = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 50px; 
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  padding: 10px;
  opacity: 1;
  transition: opacity 0.3s; 

  @media (max-width: 768px) {
    font-size: 40px;  // Adjust the arrow size
  }
`;

const LeftArrow = styled(Arrow)`
  left: -10%;

  @media (max-width: 768px) {
    left: 5%;  // Adjust position to avoid overlapping
  }
`;


const RightArrow = styled(Arrow)`
  right: -10%;

  @media (max-width: 768px) {
    right: 5%;  // Adjust position to avoid overlapping
  }
`;

const ImageWrapper = styled.div`
  flex: 0.65;
  display: flex;
  align-items: center;
  justify-content: center; 
  position: relative;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const ArrowsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectImage = styled.img`
  width: 100%;  
  max-height: 100%;
  object-fit: cover;
  z-index: 1;
  border: 3px solid ${props => props.theme.text};
  transition: transform 0.2s;  // Add transition for smoother effect
  
  &:hover + ${ArrowsWrapper} ${Arrow} {
    opacity: 0.0;
  }
  
  &:hover {
    transform: scale(1.3);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ProjectSection = () => {
  const { projects } = data;
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleArrowClick = direction => {
    const newIndex = 
      direction === 'prev' 
      ? (currentProjectIndex - 1 + projects.length) % projects.length
      : (currentProjectIndex + 1) % projects.length;
      
    setCurrentProjectIndex(newIndex);
  };

  const currentProject = projects[currentProjectIndex];
  return (
    <ProjectsWrapper>
       <Separator />
      <MainTitle>My Projects</MainTitle>
      <ProjectCard>
        <TextWrapper>
          <ProjectTitle>{currentProject.title}</ProjectTitle>
          <DescriptionBubble>
            <ProjectDescription>{currentProject.description}</ProjectDescription>
          </DescriptionBubble>
        </TextWrapper>
        <ImageWrapper>
          <ProjectImage src={currentProject.imageUrl[0]} alt={`Project ${currentProjectIndex + 1}`} />
          <ArrowsWrapper>
            <LeftArrow onClick={() => handleArrowClick('prev')}>
              <FaRegArrowAltCircleLeft />
            </LeftArrow>
            <RightArrow onClick={() => handleArrowClick('next')}>
              <FaRegArrowAltCircleRight />
            </RightArrow>
          </ArrowsWrapper>
        </ImageWrapper>
      </ProjectCard>
    </ProjectsWrapper>
  );
};

export default ProjectSection;