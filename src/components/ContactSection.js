import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import data from '../data';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const waveAnimation = keyframes`
  0% { transform: translateY(-2px); }
  50% { transform: translateY(2px); }
  100% { transform: translateY(-2px); }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  padding: 20px 50px 0; 
  height: 100vh;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Separator = styled.hr`
  width: 80%; 
  border: 0;
  border-top: 1px solid ${props => props.theme.text}; 
  margin: 20px auto;

  @media (max-width: 768px) {
    width: 90%;
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
    font-size: 28px;
    padding-bottom: 20px;
  }
`;
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.6s forwards;
  max-width: 700px;
  width: 80%;
  padding: 30px;
  margin: 50px auto 0; 
  background-color: #333;

  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 20px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 180px; 
`;


const Input = styled.input`
box-sizing: border-box;
  background-color: #f7f7f7;  
  border: 2px solid #ebebeb;
  padding: 12px 15px;
  margin-bottom: 15px;
  width: 100%;
  border-radius: 8px; 
  font-size: 16px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.25);
    outline: none;
  }
`;


const Textarea = styled.textarea`
box-sizing: border-box;
  background-color: #f7f7f7;  
  border: 2px solid #ebebeb;
  padding: 15px 15px;
  margin-bottom: 15px;
  width: 100%;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.25);
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s; 

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px); 
  }

  &:active {
    transform: translateY(0);
  }
`;

const IconLink = styled.a`
    color: ${props => props.theme.text};
    text-decoration: none;  
    transition: 0.3s;       

    &:hover {
        transform: scale(1.5);  
    }
`;


const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
      
    
      const savedData = JSON.parse(localStorage.getItem('savedFormData')) || [];
      savedData.push(formData);
      localStorage.setItem('savedFormData', JSON.stringify(savedData));
    
      setFormData({
          name: '',
          email: '',
          message: ''
      });
  };

  const { title, email, github, linkedin } = data.contact;

  return (
    <ContactWrapper id="contact">
      <Separator/>
        <Title>{title}</Title>
        <Form onSubmit={handleSubmit}>
              <Input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name} 
                  onChange={handleChange}
                  required 
              />
              <Input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email} 
                  onChange={handleChange}
                  required 
              />
              <Textarea 
                  name="message" 
                  rows="5" 
                  placeholder="Your Message" 
                  value={formData.message} 
                  onChange={handleChange}
                  required
              ></Textarea>
              <Button type="submit">Send</Button>
              </Form>
              <Footer>
    <IconLink href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" aria-label="Email">
        <FaEnvelope size={40} />   {}
    </IconLink>
    <IconLink href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin size={40} />   {}
    </IconLink>
    <IconLink href={github} target="_blank" rel="noopener noreferrer" aria-label="Github">
        <FaGithub size={40} />     {}
    </IconLink>
</Footer>

    </ContactWrapper>
);
  }

export default ContactSection;