import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import data from '../data';

const HeroSectionWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 50px;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  margin-top: 20px; /* Increase spacing from the title */
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 40px; /* Increase spacing from the description */
  display: flex; /* Arrange the items in a row */
  justify-content: space-between; /* Distribute items evenly across the available space */
`;

const SkillItem = styled.li`
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-right: 20px; /* Add some space between the icons */
`;

const IconWrapper = styled.span`
  font-size: 24px; /* Adjust the icon size */
  margin-right: 5px; /* Add some space between the icon and the text */
`;

const HtmlIcon = styled(FaHtml5)`
  color: #E44D26; /* Add the desired color for the HTML icon */
`;

const CssIcon = styled(FaCss3Alt)`
  color: #264DE4; /* Add the desired color for the CSS icon */
`;

const JsIcon = styled(FaJs)`
  color: #F7DF1E; /* Add the desired color for the JS icon */
`;

const ReactIcon = styled(FaReact)`
  color: #61DAFB; /* Add the desired color for the React icon */
`;

const HeroSection = () => {
  const { introduction } = data;

  return (
    <HeroSectionWrapper>
      <HeroContent>
        <Title>React Web Developper</Title>
        <Description>{introduction}</Description>
        <SkillList>
          <SkillItem>
            <IconWrapper>
              <HtmlIcon />
            </IconWrapper>
            HTML
          </SkillItem>
          <SkillItem>
            <IconWrapper>
              <CssIcon />
            </IconWrapper>
            CSS
          </SkillItem>
          <SkillItem>
            <IconWrapper>
              <JsIcon />
            </IconWrapper>
            Javascript
          </SkillItem>
          <SkillItem>
            <IconWrapper>
              <ReactIcon />
            </IconWrapper>
            React.js
          </SkillItem>
        </SkillList>
      </HeroContent>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
