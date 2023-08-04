import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <NavWrapper>
      <NavLink href="#hero">Home</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </NavWrapper>
  );
};

export default NavBar;
