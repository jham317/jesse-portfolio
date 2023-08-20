import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}

html body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.text}; 
  background-color: ${props => props.theme.body}; 
}

h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
  color: ${props => props.theme.link}; 
}

h2 {
  font-size: 28px;
}


@media (max-width: 768px) {
  h2 {
    font-size: 24px; 
  }
}


@media (min-width: 769px) and (max-width: 1024px) {
  h2 {
    font-size: 26px; 
  }
}

a {
  color: ${props => props.theme.link}; 
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: ${props => props.theme.linkHover}; 
}
`;

export default GlobalStyle;
