import React from 'react';
import styled from 'styled-components';
import data from '../data';

const AboutMeWrapper = styled.div`
  padding: 50px;
  height: 100vh;
`;

const AboutMeContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 28px;
  color: ${props => props.theme.text};
`;

const Description = styled.p`
  font-size: 18px;
  color: ${props => props.theme.text};
  line-height: 1.6;
`;


const AboutMeSection = ({ aboutMe }) => {
  const { title, description } = data.aboutMe; // Destructure the aboutMe property

  return (
    <AboutMeWrapper id="about">
      <AboutMeContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </AboutMeContent>
    </AboutMeWrapper>
  );
};

export default AboutMeSection;
