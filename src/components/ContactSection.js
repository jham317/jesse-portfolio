import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../data';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';


const ContactWrapper = styled.div`
  padding: 50px;
  height: 100vh;
`;

const Title = styled.h2`
  font-size: 28px;
  color: ${props => props.theme.text};
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  background-color: #ffffff;  
  border: 1px solid ${props => props.theme.text};
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  transition: border 0.2s;

  &:focus {
    border: 1px solid #007bff;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  background-color: #ffffff;  
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  transition: border 0.2s;

  &:focus {
    border: 1px solid #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ContactIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px; 
  margin-top: 200px;
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
            <ContactIcons>
                <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" aria-label="Email">
                    <FaEnvelope size={50} color="#333" />
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer" aria-label="Github">
                    <FaGithub size={50} color="#333" />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin size={50} color="#333" />
                </a>
            </ContactIcons>
        </ContactWrapper>
    );
};


export default ContactSection;
