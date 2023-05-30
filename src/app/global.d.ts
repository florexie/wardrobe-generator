import { colorThemes } from 'shared/config';

declare module '@mui/material' {
  interface Theme extends MuiTheme {
    themeColors: typeof colorThemes;
  }
}

declare module '*.jpg' {
  const content: string;
  export default content;
}
