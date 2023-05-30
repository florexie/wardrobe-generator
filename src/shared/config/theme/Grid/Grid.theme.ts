import { ComponentsOverrides, ComponentsProps } from '@mui/material';

export const getMuiGridOverrides = (): ComponentsOverrides['MuiGrid'] => ({});

export const getMuiGridDefaultProps = (): ComponentsProps['MuiGrid'] => ({
  xs: 'auto',
  lineHeight: 0,
});
