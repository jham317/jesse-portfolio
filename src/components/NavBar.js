import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const NavWrapper = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }

  &.activeclassname {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <NavWrapper>
      <StyledNavLink to="/" activeclassname="activeclassname" exact="true">
        Home
      </StyledNavLink>
      <StyledNavLink to="/about" activeclassname="activeclassname">
        About
      </StyledNavLink>
      <StyledNavLink to="/projects" activeclassname="activeclassname">
        Projects
      </StyledNavLink>
      <StyledNavLink to="/contact" activeclassname="activeclassname">
        Contact
      </StyledNavLink>
    </NavWrapper>
  );
};

export default NavBar;
