import { getBorder } from '../../common';
import { COLOR_ACCENT, COLOR_ACCENT_LIGHT, COLOR_BG, COLOR_GRAY_LIGHT } from '../colors.constants';

export const colorsButton = {
  colorButtonBorderDisabled: COLOR_GRAY_LIGHT,

  // contained button theme
  colorButtonContainedBackground: COLOR_ACCENT,
  colorButtonContainedColor: COLOR_BG,
  colorButtonContainedColorHover: COLOR_BG,
  colorButtonContainedBorder: getBorder(),
  colorButtonContainedBorderHover: getBorder(COLOR_ACCENT_LIGHT),
  colorButtonContainedBackgroundHover: COLOR_ACCENT_LIGHT,

  // outlined button theme
  colorButtonOutlinedBackground: 'transparent',
  colorButtonOutlinedColor: COLOR_ACCENT,
  colorButtonOutlinedColorHover: COLOR_BG,
  colorButtonOutlinedBorder: getBorder(),
  colorButtonOutlinedBorderHover: getBorder(),
  colorButtonOutlinedBackgroundHover: COLOR_ACCENT,
};
