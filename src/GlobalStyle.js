import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Define the font family to be used in your project */
  html body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    color: #333; /* Set the text color */
    background-color: #f9f9f9;
  }

  /* Add styles for headings */
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    color: #333; /* Set heading color */
  }

  /* Add styles for links */
  a {
    color: #ffd1dc; /* Set link color to pastel pink */
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: #d8617c; /* Set hover color for links */
  }

  /* Add other global styles you want here */

  /* Fun decorations! */
  html body::before {
    content: '🎉';
    font-size: 100px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0.1;
  }

  html body::after {
    content: '✨';
    font-size: 100px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0.1;
  }
`;

export default GlobalStyle;
