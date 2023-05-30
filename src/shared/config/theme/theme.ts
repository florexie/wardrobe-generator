import { BreakpointsOptions, createTheme } from '@mui/material';

import { getMuiButtonDefaultProps, getMuiButtonOverrides } from './Button';
import { getMuiCheckbox, getMuiCheckboxDefaultProps } from './Checkbox';
import { colorThemes } from './colors';
import { getMuiCssBaselineDefaultProps, getMuiCssBaselineOverrides } from './CssBaseLine';
import { getMuiGridDefaultProps, getMuiGridOverrides } from './Grid';
import { getMuiIconButtonDefaultProps, getMuiIconButtonOverrides } from './IconButton';
import { getMuiRadio, getMuiRadioDefaultProps } from './Radio';
import { getMuiTextFieldDefaultProps, getMuiTextFieldOverrides } from './TextField';
import { getTypographyDefaultProps, getTypographyOverrides } from './Typography';

export const breakpointOptions: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1260,
    xl: 1680,
  },
};

export const getTheme = (themeColors: typeof colorThemes) => {
  const themeBase = createTheme(
    {
      breakpoints: breakpointOptions,
    },
    {
      themeColors,
    },
  );

  return createTheme(themeBase, {
    components: {
      MuiCssBaseline: {
        styleOverrides: getMuiCssBaselineOverrides(themeBase),
        defaultProps: getMuiCssBaselineDefaultProps(),
      },
      MuiGrid: {
        defaultProps: getMuiGridDefaultProps(),
        styleOverrides: getMuiGridOverrides(),
      },
      MuiTypography: {
        styleOverrides: getTypographyOverrides(themeBase),
        defaultProps: getTypographyDefaultProps(),
      },
      MuiButton: {
        defaultProps: getMuiButtonDefaultProps(),
        styleOverrides: getMuiButtonOverrides(themeBase),
      },
      MuiRadio: {
        styleOverrides: getMuiRadio(themeBase),
        defaultProps: getMuiRadioDefaultProps(),
      },
      MuiCheckbox: {
        defaultProps: getMuiCheckboxDefaultProps(),
        styleOverrides: getMuiCheckbox(themeBase),
      },
      MuiIconButton: {
        styleOverrides: getMuiIconButtonOverrides(themeBase),
        defaultProps: getMuiIconButtonDefaultProps(),
      },
      MuiTextField: {
        styleOverrides: getMuiTextFieldOverrides(themeBase),
        defaultProps: getMuiTextFieldDefaultProps(),
      },
    },
  });
};
