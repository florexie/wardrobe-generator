import { COLOR_BG, COLOR_STROKE, COLOR_WH } from './colors.constants';
import { colorsButton, colorsIconButton, colorsRadioAndCheckbox, colorsTextField } from './components';

export const colorThemes = {
  background: COLOR_BG,
  mainColor: COLOR_WH,
  borderMain: COLOR_STROKE,
  ...colorsButton,
  ...colorsIconButton,
  ...colorsRadioAndCheckbox,
  ...colorsTextField,
};
