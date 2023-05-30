import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material';

export const getMuiIconButtonOverrides = (theme: Theme): ComponentsOverrides['MuiIconButton'] => ({
  root: {
    padding: 0,
    borderRadius: '50%',
    background: theme.themeColors.colorIconButtonOutlinedBackground,
    border: theme.themeColors.colorIconButtonOutlinedBorder,

    '&:hover': {
      background: theme.themeColors.colorIconButtonOutlinedBackgroundHover,
    },
  },
  sizeMedium: {
    width: 56,
    height: 56,
  },
  sizeSmall: {
    width: 46,
    height: 46,
  },
  sizeLarge: {
    width: 60,
    height: 60,
  },
  colorSecondary: {},
});

export const getMuiIconButtonDefaultProps = (): ComponentsProps['MuiIconButton'] => ({
  disableFocusRipple: true,
  disableRipple: true,
  size: 'medium',
});
