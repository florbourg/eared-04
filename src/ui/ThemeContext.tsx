'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  isHighContrast: boolean;
  toggleHighContrast: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isHighContrast: false, 
  toggleHighContrast: () => {}, 
});

export const useThemeContext = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);

  const toggleHighContrast = () => {
    setIsHighContrast((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isHighContrast, toggleHighContrast }}>
      {children}
    </ThemeContext.Provider>
  );
};
