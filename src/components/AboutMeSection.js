import React from 'react';
import styled, { keyframes } from 'styled-components';
import data from '../data';


const waveAnimation = keyframes`
  0% { transform: translateY(-2px); }
  50% { transform: translateY(2px); }
  100% { transform: translateY(-2px); }
`;


const AboutMeWrapper = styled.div`
  display: flex;   
  height: 100vh;      
  justify-content: center;  
  align-items: flex-start;    
  padding: 50px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Separator = styled.hr`
  width: 80%; 
  border: 0;
  border-top: 1px solid ${props => props.theme.text}; 
  margin: 20px auto; 

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const AboutMeContent = styled.div`
  width: 100%; 
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  color: ${props => props.theme.text};
  padding-bottom: 100px;
  margin-top: 50px;  
  animation: ${waveAnimation} 1.5s infinite;

  @media (max-width: 768px) {
    font-size: 28px;
    padding-bottom: 50px;
    margin-top: 30px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: ${props => props.theme.text};
  line-height: 1.6;
  border: 4px solid ${props => props.theme.text};
  padding: 15px;
  max-width: 600px; margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 90%;
  }
`;


const AboutMeSection = ({ aboutMe }) => {
  const { title, description } = data.aboutMe; 

  return (
    <AboutMeWrapper id="about">

      
      <AboutMeContent>
      <Separator/>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </AboutMeContent>
    </AboutMeWrapper>
  );
};

export default AboutMeSection;
