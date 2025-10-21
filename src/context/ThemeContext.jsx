import React, { createContext, useState, useContext, useEffect } from 'react'; // <-- CRITICAL: useEffect IMPORTED
import useLocalStorage from '../hooks/useLocalStorage';

// Helper hook to handle theme side effects (applying the 'dark' class)
const useThemeEffect = (theme) => {
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);
};
// ---------------------------------------------------------------------

const ThemeContext = createContext();

// 2. Create the provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('app-theme', 'light');

  // CRITICAL: Call the effect hook inside the provider to manage the HTML class
  useThemeEffect(theme); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Create a custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};