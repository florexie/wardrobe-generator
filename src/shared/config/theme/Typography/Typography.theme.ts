import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material';
import { COLOR_ACCENT, COLOR_GRAY } from 'shared/config/theme/colors';

export enum FontWeights {
  Regular = 400,
  Medium = 500,
  SemiBold = 600,
  Bold = 700,
}

export const colorVariations = {
  '&.accent': {
    color: COLOR_ACCENT,
  },
  '&.grey': {
    color: COLOR_GRAY,
  },
};

export enum FontFamilies {
  primary = '"Inter", sans-serif',
  secondary = '"Kodchasan", sans-serif',
}

export const getTypographyOverrides = (theme: Theme): ComponentsOverrides['MuiTypography'] => ({
  root: {
    textTransform: 'none',
    color: theme.themeColors.mainColor,
    fontFamily: FontFamilies.primary,
    fontWeight: FontWeights.Regular,
    textAlign: 'left',
    fontStyle: 'normal',
    ...colorVariations,
  },

  h1: {
    fontSize: 64,
    lineHeight: '80px',
    fontFamily: FontFamilies.secondary,
    fontWeight: FontWeights.Bold,

    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
      lineHeight: '42px',
    },
  },

  h2: {
    fontSize: 48,
    lineHeight: '48px',
    fontWeight: FontWeights.Bold,

    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      lineHeight: '24px',
    },
  },

  h3: {
    fontSize: 32,
    lineHeight: '30px',
    fontFamily: FontFamilies.secondary,
    fontWeight: FontWeights.Medium,

    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      lineHeight: '30px',
    },
  },

  h4: {
    fontSize: 24,
    lineHeight: '30px',
    fontWeight: FontWeights.Medium,

    '&.bold': {
      fontWeight: FontWeights.Bold,
    },
  },

  body1: {
    fontSize: 18,
    lineHeight: '30px',
    fontWeight: FontWeights.Regular,
  },

  body2: {
    fontSize: 15,
    lineHeight: '24px',
    fontWeight: FontWeights.Regular,
  },

  subtitle1: {
    fontSize: 14,
    lineHeight: '20px',
    fontFamily: FontFamilies.secondary,
    fontWeight: FontWeights.Regular,
  },

  subtitle2: {
    fontSize: 12,
    lineHeight: '22px',
    fontWeight: FontWeights.Regular,
  },

  button: {
    fontSize: 20,
    lineHeight: '32px',
    textTransform: 'none',
  },
});

export const getTypographyDefaultProps = (): ComponentsProps['MuiTypography'] => ({
  variant: 'body1',
});
