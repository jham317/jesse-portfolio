import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../data';

const ContactWrapper = styled.div`
  padding: 50px;
  height: 100vh;
`;

const Title = styled.h2`
  font-size: 28px;
  color: ${props => props.theme.text};
  text-align: center;
  margin-bottom: 20px;
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
        // Here you would typically send formData to a server to handle the email sending.
    };

    const { title } = data.contact; // Destructure the contact property from data

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
        </ContactWrapper>
    );
};

export default ContactSection;
