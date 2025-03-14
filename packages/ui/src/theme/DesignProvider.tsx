import React, {createContext, useContext, useState, ReactNode} from 'react';
import {Global} from '@emotion/react';

import {COLORS} from '../token/colors';
import {TYPOGRAPHY} from '../token/typography';

import {Theme} from './theme.type';
import {GlobalStyle} from './GlobalStyle';

interface ThemeContextProps {
  theme: Theme;
}

const defaultTheme: Theme = {
  colors: COLORS,
  typography: TYPOGRAPHY,
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const DesignProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [theme] = useState<Theme>(defaultTheme);

  return (
    <ThemeContext.Provider value={{theme}}>
      <Global styles={GlobalStyle} />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a DesignProvider');
  }
  return context;
};
