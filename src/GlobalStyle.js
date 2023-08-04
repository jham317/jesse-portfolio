import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Define the font family to be used in your project */
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#333')};
    background-color: ${({ theme }) => (theme.mode === 'dark' ? '#222' : '#f9f9f9')};
  }

  /* Add styles for headings */
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    color: ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#333')};
  }

  /* Add styles for links */
  a {
    color: #ff85a2; /* Set link color to pastel pink */
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: #d8617c; /* Set hover color for links */
  }

  /* Add other global styles you want here */
`;

export default GlobalStyle;
