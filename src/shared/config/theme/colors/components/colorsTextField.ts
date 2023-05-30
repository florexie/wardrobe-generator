import { alpha } from '@mui/material';

import { COLOR_GRAY, COLOR_GRAY_LIGHT, COLOR_LIGHT_GRAY_INPUT, COLOR_RED, COLOR_WH } from '../colors.constants';

export const colorsTextField = {
  colorsTextFieldBackground: alpha(COLOR_WH, 0.16),
  colorsTextFieldBorder: COLOR_GRAY_LIGHT,
  colorsTextFieldColor: COLOR_WH,
  colorsTextFieldColorError: COLOR_RED,
  colorsTextFieldColorDisabled: COLOR_GRAY,
  colorsFormLabelTextField: COLOR_LIGHT_GRAY_INPUT,
};
