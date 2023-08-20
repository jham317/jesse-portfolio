import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import data from '../data';
import { motion } from 'framer-motion';

const HeroSectionWrapper = styled.div`
  padding: 30px;
  text-align: center;
  height: 100vh;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const HeroContent = styled.div`
  max-width: 800px; /* Adjust this value as needed */
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 90%; /* Adjust this value for even narrower width */
    padding: 10px 0;
  }
`;

const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border-color: black;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  color: ${props => props.color || props.theme.text};
  font-family: 'Playfair Display', serif;
  padding: 5px 40px;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 32px;
    padding: 5px 20px;
  }
`;

const Description = styled.p`
  font-size: 22px;
  color: ${props => props.theme.text};
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 30px;
  display: flex;
  justify-content: center; /* Center items horizontally */
  flex-wrap: wrap; /* Allow items to wrap when exceeding container */
`;

const SkillItem = styled.li`
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 10px; /* Adjust this value to control spacing */

  @media (max-width: 768px) {
    font-size: 16px;
    flex: 0 0 calc(33.33% - 10px); /* Adjust this value for proper spacing and wrapping */
    margin-right: 10px;
    margin-left: 10px;
    justify-content: center;
  }
`;
const IconWrapper = styled(motion.div)`
  font-size: 55px;
  padding-top: 20px;
  margin-right: 5px;

  @media (max-width: 768px) {
    font-size: 30px; /* Adjust this value for smaller icon size */
  }
`;


const dropAnimation = {
  initial: { y: '-200vh' },
  animate: { y: 0 },
  transition: {
    type: 'tween',
    duration: 5.0,
    ease: 'easeOut',
  },
};

const HtmlIcon = styled(FaHtml5)`
  color: #e44d26;
`;

const CssIcon = styled(FaCss3Alt)`
  color: #264de4;
`;

const JsIcon = styled(FaJs)`
  color: #f7df1e;
`;

const ReactIcon = styled(FaReact)`
  color: #61dafb;
`;

const getIconComponent = iconName => {
  switch (iconName) {
    case 'FaHtml5':
      return HtmlIcon;
    case 'FaCss3Alt':
      return CssIcon;
    case 'FaJs':
      return JsIcon;
    case 'FaReact':
      return ReactIcon;
    default:
      return null;
  }
};

const HeroSection = () => {
  const { hero, aboutMe } = data;

  return (
    <HeroSectionWrapper>
      <HeroContent>
        <ProfileImage src={process.env.PUBLIC_URL + '/' + hero.imageUrl} alt="Profile Image" />
        <HeroTitle>{hero.title}</HeroTitle>
        <Description>{hero.introduction}</Description>
        <SkillList>
          {aboutMe.skills.map(skill => {
            const IconComponent = getIconComponent(skill.icon);
            return (
              <SkillItem key={skill.name}>
                <IconWrapper
                  initial={dropAnimation.initial}
                  animate={dropAnimation.animate}
                  transition={dropAnimation.transition}
                >
                  <IconComponent style={{ color: skill.color }} />
                </IconWrapper>
                {skill.name}
              </SkillItem>
            );
          })}
        </SkillList>
      </HeroContent>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
