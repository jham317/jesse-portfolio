import React from 'react';
import styled, { keyframes } from 'styled-components';
import data from '../data';
import { motion } from 'framer-motion';

const waveAnimation = keyframes`
  0% { transform: translateY(-2px); }
  50% { transform: translateY(2px); }
  100% { transform: translateY(-2px); }
`;

const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const AboutMeContent = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }

  @media (min-width: 769px) {
    margin-right: 20px;
  }
`;

const AboutMeImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: contain;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, 50%);
  margin-top: -170px;

  @media (max-width: 768px) {
    position: static;
    transform: none;
    width: 180px;
    height: 280px;
    margin-top: 20px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  color: ${props => props.theme.text};
  margin-bottom: 3px;
  padding-bottom: 30px;
  animation: ${waveAnimation} 1.5s infinite;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin-top: 110px;
  color: ${props => props.theme.text};
  line-height: 1.6;
  max-width: 900px;

  @media (max-width: 768px) {
    margin-top: 20px;
    text-align: left;
  }
`;

const Separator = styled.hr`
  width: 80%;
  border: 0;
  border-top: 1px solid ${props => props.theme.text};
`;

const ShapesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 20px;

  @media (min-width: 769px) {
    margin-top: auto;
  }
`;

const Circle = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.color || '#ccc'};

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Triangle = styled(motion.div)`
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 60px solid ${props => props.color || '#ccc'};

  @media (max-width: 768px) {
    border-bottom: 40px solid ${props => props.color || '#ccc'};
  }
`;

const Square = styled(motion.div)`
  width: 60px;
  height: 60px;
  background-color: ${props => props.color || '#ccc'};

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const combinedAnimation = {
  hidden: { x: 0, y: 0, rotate: 0 },
  visible: {
    x: [0, -20, 20, 0],
    y: [0, 20, -20, 0],
    rotate: [0, 90, 180, 270, 360],
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 2.75,
    },
  },
};

const AboutMeSection = () => {
  const { title, description, imageUrl } = data.aboutMe;
  const animationState = 'visible';
  return (
    <AboutMeWrapper>
      <Separator />
      <ContentWrapper>
  <div>
    <Title>{title}</Title>
    <AboutMeContent>
      <Description>{description}</Description>
    </AboutMeContent>
  </div>
  <AboutMeImage src={imageUrl} alt="About Me" />
</ContentWrapper>

      <ShapesWrapper>
        <Circle
          variants={combinedAnimation}
          initial="hidden"
          animate={animationState}
          color="#f04"
        />
        <Square
          variants={combinedAnimation}
          initial="hidden"
          animate={animationState}
          color="#0f4"
        />
        <Triangle
          variants={combinedAnimation}
          initial="hidden"
          animate={animationState}
          color="#04f"
        />
        <Circle
          variants={combinedAnimation}
          initial="hidden"
          animate={animationState}
          color="#f40"
        />
        <Square
          variants={combinedAnimation}
          initial="hidden"
          animate={animationState}
          color="#40f"
        />
        <Triangle
          variants={combinedAnimation}
          initial="hidden"
          animate={animationState}
          color="#0f0"
        />
      </ShapesWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMeSection;
