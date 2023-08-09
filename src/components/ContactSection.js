import React, { useState } from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  padding: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  background-color: #ffffff;  // This sets the background to white
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

    return (
        <ContactWrapper id="contact">
            <h2>Contact Me</h2>
            <Form onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={handleChange}
                    required 
                />
<Input type="email" placeholder="Your Email" required />
<Textarea rows="5" placeholder="Your Message" required></Textarea>

                <Button type="submit">Send</Button>
            </Form>
        </ContactWrapper>
    );
};

export default ContactSection;
