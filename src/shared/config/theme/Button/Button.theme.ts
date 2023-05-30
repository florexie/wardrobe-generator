import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material';

import { FontFamilies, FontWeights } from '../Typography';

export const getMuiButtonOverrides = (theme: Theme): ComponentsOverrides['MuiButton'] => ({
  root: {
    padding: theme.spacing(1.5, 3),
    borderRadius: '141px',
    backgroundColor: theme.themeColors.background,
    lineHeight: '30px',
    fontFamily: FontFamilies.primary,
    fontWeight: FontWeights.SemiBold,
    fontSize: 18,
    textTransform: 'capitalize',
    boxShadow: 'none',
    '&:disabled': {
      color: theme.themeColors.colorButtonBorderDisabled,
      border: `2px solid ${theme.themeColors.colorButtonBorderDisabled}`,
    },
    '&:hover': {
      boxShadow: 'none',
    },
  },
  contained: {
    height: 56,
    color: theme.themeColors.colorButtonContainedColor,
    background: theme.themeColors.colorButtonContainedBackground,
    border: theme.themeColors.colorButtonContainedBorder,
    '&:hover': {
      background: theme.themeColors.colorButtonContainedBackgroundHover,
      border: theme.themeColors.colorButtonContainedBorderHover,
    },
  },
  outlined: {
    height: 56,
    color: theme.themeColors.colorButtonOutlinedColor,
    background: theme.themeColors.colorButtonOutlinedBackground,
    border: theme.themeColors.colorButtonOutlinedBorder,
    '&:hover': {
      background: theme.themeColors.colorButtonOutlinedBackgroundHover,
      color: theme.themeColors.colorButtonOutlinedColorHover,
      border: theme.themeColors.colorButtonOutlinedBorderHover,
    },
  },
});

export const getMuiButtonDefaultProps = (): ComponentsProps['MuiButton'] => ({
  disableElevation: false,
  disableFocusRipple: true,
  disableRipple: true,
  size: 'medium',
});
