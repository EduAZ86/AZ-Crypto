// ThemeContext.tsx
import React, { createContext, useState } from 'react';
import { darkPalette, lightPalette } from './palettes';
import { ThemeContextType, ThemeProviderProps } from '../types';

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);


export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = (theme === 'light' ? lightPalette : darkPalette)

  return (
    <ThemeContext.Provider value= {{ theme, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
