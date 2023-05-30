import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material';

import { FontWeights } from '../Typography';

export const getMuiTextFieldOverrides = (theme: Theme): ComponentsOverrides['MuiTextField'] => ({
  root: {
    width: '100%',
    '.MuiInputBase-root': {
      padding: theme.spacing(2.25, 2.5),
      height: 56,
      background: theme.themeColors.colorsTextFieldBackground,
      border: `1px solid ${theme.themeColors.colorsTextFieldBorder}`,
      borderRadius: 8,
      '&::after, &::before': {
        display: 'none',
      },
      '&:hover, &:active, &.Mui-focused': {
        background: theme.themeColors.colorsTextFieldBackground,
      },
      '&.Mui-disabled': {
        background: theme.themeColors.colorsTextFieldBackground,
      },
      '.MuiInputBase-input': {
        padding: 0,
        fontWeight: FontWeights.Medium,
        fontSize: 16,
        lineHeight: '24px',
        color: theme.themeColors.colorsTextFieldColor,
        '&.Mui-disabled': {
          opacity: 1,
          color: theme.themeColors.colorsTextFieldColorDisabled,
          WebkitTextFillColor: theme.themeColors.colorsTextFieldColorDisabled,
        },
      },
      '.MuiFilledInput-notchedOutline': {
        padding: 0,
      },
      '&.Mui-error': {
        borderColor: `${theme.themeColors.colorsTextFieldColorError} !important`,
      },
      '&.Mui-error fieldset': {
        borderColor: `${theme.themeColors.colorsTextFieldColorError} !important`,
      },
    },
    '.MuiInputBase-multiline': {
      background: theme.themeColors.colorsTextFieldBackground,
      minHeight: 56,
      height: 'min-content',
    },
    '.MuiFormLabel-root': {
      color: theme.themeColors.colorsFormLabelTextField,
      fontWeight: FontWeights.Medium,
      fontSize: 16,
      lineHeight: '24px',
      transform: 'translate(20px, 16px) scale(1)',
      '&.MuiInputLabel-shrink': {
        transform: 'translate(20px, 3px) scale(0.75)',
      },
      '&.Mui-focused': {
        color: theme.themeColors.colorsTextFieldColor,
      },
    },
    '.MuiFormHelperText-root': {
      fontSize: 12,
      lineHeight: '20px',
      '&.Mui-error': {
        borderColor: theme.themeColors.colorsTextFieldColorError,
      },
    },
    'input:-webkit-autofill': {
      boxShadow: '0 0 0 1000px transparent inset !important',
      transitionDelay: '999999s',
      transitionProperty: 'background-color, color',
    },
  },
});

export const getMuiTextFieldDefaultProps = (): ComponentsProps['MuiTextField'] => ({
  variant: 'filled',
  SelectProps: {
    displayEmpty: true,
  },
  autoComplete: 'off',
});
