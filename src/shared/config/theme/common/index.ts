import { COLOR_ACCENT, COLOR_STROKE, COLOR_WH } from '../colors';

// ===== Border-Radius
export const BORDER_RADIUS_XL = '24px';
export const BORDER_RADIUS_L = '18px';
export const BORDER_RADIUS_M = '16px';
export const BORDER_RADIUS_S = '8px';

// ===== Transitions
export const TRANSITION_300 = 'all 0.3s ease-out';
export const TRANSITION_500 = 'all 0.5s ease-out';

// ===== Borders
export const BORDER_MAIN = `1px solid ${COLOR_STROKE}`;
export const BORDER_MAIN_BOLD = `2px solid ${COLOR_STROKE}`;
export const BORDER_WHITE = `1px solid ${COLOR_WH}`;
export const BORDER_ACCENT = `2px solid ${COLOR_ACCENT}`;
export const getBorder = (color = COLOR_ACCENT) => `2px solid ${color}`;
