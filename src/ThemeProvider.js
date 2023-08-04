import React, { useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = {
    mode: isDarkMode ? 'dark' : 'light',
  };

  return (
    <StyledThemeProvider theme={theme}>
      {children}
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </StyledThemeProvider>
  );
};

export { ThemeProvider };
