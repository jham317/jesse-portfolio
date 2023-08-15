import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { ic_brightness_7 } from 'react-icons-kit/md/ic_brightness_7';
import { ic_brightness_2 } from 'react-icons-kit/md/ic_brightness_2';
import { ic_home } from 'react-icons-kit/md/ic_home';
import { ic_person } from 'react-icons-kit/md/ic_person';
import { ic_work } from 'react-icons-kit/md/ic_work';
import { ic_mail } from 'react-icons-kit/md/ic_mail';

const NavWrapper = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: start;
  background-color: transparent;
  top: 0;
  left: 0;
  height: 70px; 
  width: 100%;
  padding: 10px 10px 10px 10px;
`;

const NavLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.span`
  position: absolute;
  left: 100%; 
  top: 50%; 
  transform: translateY(-50%); 
  opacity: 0;
  transition: opacity 0.3s;
`;

const StyledNavLink = styled.a`
  color: #fff;
  position: relative;
  text-decoration: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse; 

  &:hover ${Label} {
    opacity: 1;
  }
`;

const ThemeToggleButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px; 
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <NavWrapper>
      <NavLinksWrapper>
      <StyledNavLink href="#home" aria-label="Navigate to Home">
          <Label>Home</Label>
          <Icon icon={ic_home} size={32} />
        </StyledNavLink>
        <StyledNavLink href="#about">
          <Label>About</Label>
          <Icon icon={ic_person} size={32} />
        </StyledNavLink>
        <StyledNavLink href="#projects">
          <Label>Projects</Label>
          <Icon icon={ic_work} size={32} />
        </StyledNavLink>
        <StyledNavLink href="#contact">
          <Label>Contact</Label>
          <Icon icon={ic_mail} size={32} />
        </StyledNavLink>
      </NavLinksWrapper>
      <ThemeToggleButton onClick={toggleTheme}>
        {theme === 'light' 
          ? <Icon icon={ic_brightness_2} size={32} />  
          : <Icon icon={ic_brightness_7} size={32} />  
        }
      </ThemeToggleButton>
    </NavWrapper>
  );
}

export default NavBar;
