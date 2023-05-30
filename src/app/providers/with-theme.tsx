import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material';
import { colorThemes, getTheme } from 'shared/config';

export const withTheme = (component: () => ReactNode) => (
  <ThemeProvider theme={getTheme(colorThemes)}>{component()}</ThemeProvider>
);
