import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import data from '../data';
const HeroSectionWrapper = styled.div`
  padding: 50px;
  text-align: center;
  height: 100vh;
`;

const HeroContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${props => props.theme.text};
`;

const Description = styled.p`
  font-size: 18px;
  color: ${props => props.theme.text};
  margin-top: 20px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

const SkillItem = styled.li`
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const IconWrapper = styled.span`
  font-size: 24px;
  margin-right: 5px;
`;

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
        <Title>{hero.title}</Title>
        <Description>{hero.introduction}</Description>
        <SkillList>
          {aboutMe.skills.map(skill => {
            const IconComponent = getIconComponent(skill.icon);  // renamed variable to clarify that it's a component
            return (
              <SkillItem key={skill.name}>
                <IconWrapper>
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
