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
  max-width: 600px;
  margin: 0 auto;
  text-align: center;  // Ensures all inner content is centrally aligned

  @media (max-width: 768px) {
    max-width: 80%;  // Adjust based on your design preference
    padding: 10px 0;  // Some vertical padding can help space out the content
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
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;  // Allow items to wrap on smaller screens
    justify-content: space-around; 
    margin-top: 15px;
  }
`;

const SkillItem = styled.li`
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
    flex: 0 0 calc(50% - 10px); // Make each item occupy roughly 50% width on smaller screens, accounting for margins
    margin-right: 0;  // Remove right margin to ensure items fit well on smaller screens
    margin-bottom: 5px;  // Add some bottom margin to give space when items stack on smaller screens
    justify-content: center;
  }
`;

const IconWrapper = styled(motion.div)`
  font-size: 55px;
  padding-top: 20px;
  margin-right: 5px;
`;
const dropAnimation = {
  initial: { y: "-200vh" },
  animate: { y: 0 },
  transition: {
    type: "tween",
    duration: 5.0,   
    ease: "easeOut"  
  }
};



const HtmlIcon = styled(FaHtml5)`
  color: #E44D26;
`;

const CssIcon = styled(FaCss3Alt)`
  color: #264DE4;
`;

const JsIcon = styled(FaJs)`
  color: #F7DF1E;
`;

const ReactIcon = styled(FaReact)`
  color: #61DAFB;
`;

const getIconComponent = (iconName) => {
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
      <HeroTitle>
          {hero.title}
        </HeroTitle>
        <Description>{hero.introduction}</Description>
        <SkillList>
          {aboutMe.skills.map(skill => {
            const IconComponent = getIconComponent(skill.icon);  
            return (
              <SkillItem key={skill.name}>
              <IconWrapper initial={dropAnimation.initial} animate={dropAnimation.animate} transition={dropAnimation.transition}>
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
