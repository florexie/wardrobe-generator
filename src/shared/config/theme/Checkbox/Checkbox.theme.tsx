import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material';
import { CheckboxChecked } from 'shared/ui';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getMuiCheckbox = (theme: Theme): ComponentsOverrides['MuiCheckbox'] => {
  return {
    root: {
      marginLeft: 0,
      padding: 0,
      height: '100%',
      width: '100%',
      maxHeight: 24,
      maxWidth: 24,
      borderRadius: 8,
      borderWidth: 1,
      borderStyle: 'solid',
      overflow: 'hidden',
    },
    colorPrimary: {
      background: theme.themeColors.colorRadioAndCheckboxBackground,
      border: `1px solid ${theme.themeColors.colorRadioAndCheckboxBorder}`,
      color: 'transparent',
      '&, &:hover, &:focus, &:active': {
        opacity: 1,
      },
      '&.Mui-checked': {
        border: 0,
        background: theme.themeColors.colorRadioAndCheckboxChecked,
      },
      '&.Mui-disabled': {
        color: 'transparent',

        '&, & + .MuiFormControlLabel-label': {
          cursor: 'default',
        },
      },
    },
  };
};

export const getMuiCheckboxDefaultProps = (): ComponentsProps['MuiCheckbox'] => ({
  checkedIcon: <CheckboxChecked />,
  disableRipple: true,
  color: 'primary',
});
