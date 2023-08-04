import React from 'react';
import styled from 'styled-components';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'; // You might need to install the react-icons package.


const ContactWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 50px;
`;

const ContactLink = styled.a`
  display: inline-block;
  margin: 10px;
  color: #007bff;
  text-decoration: none;
`;

const IconWrapper = styled.span`
  margin-right: 5px;
`;

const ContactSection = ({ contact }) => {
  const { email, github, linkedin } = contact;

  return (
    <ContactWrapper id="contact">
      <h2>Contact</h2>
      <ContactLink href={`mailto:${email}`}>
        <IconWrapper>
          <FiMail />
        </IconWrapper>
        {email}
      </ContactLink>
      <ContactLink href={github} target="_blank" rel="noopener noreferrer">
        <IconWrapper>
          <FiGithub />
        </IconWrapper>
        GitHub
      </ContactLink>
      <ContactLink href={linkedin} target="_blank" rel="noopener noreferrer">
        <IconWrapper>
          <FiLinkedin />
        </IconWrapper>
        LinkedIn
      </ContactLink>
      {/* Add more contact information as needed */}
    </ContactWrapper>
  );
};

export default ContactSection;
