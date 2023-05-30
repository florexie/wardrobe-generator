import {
  Bottom1,
  Bottom2,
  Bottom3,
  Bottom4,
  Bottom5,
  Bottom6,
  Bottom7,
  Bottom8,
  Bottom9,
  Bottom10,
  Bottom11,
  Top1,
  Top2,
  Top3,
  Top4,
  Top5,
  Top6,
  Top7,
  Top8,
  Top9,
  Top10,
  Top11,
  Top12,
  Top13,
  Top14,
  Top15,
  Top16,
  Top17,
} from 'shared/assets';

export enum COLORS {
  'blue' = 'BLUE',
  'black' = 'BLACK',
  'beige' = 'BEIGE',
  'brown' = 'BROWN',
  'white' = 'WHITE',
  'red' = 'RED',
  'green' = 'GREEN',
  'denim' = 'DENIM',
  'gray' = 'GRAY',
  'pink' = 'PINK',
}

export enum ORNAMENTS {
  'lines' = 'LINES',
  'print' = 'PRINT',
  'geometric' = 'GEOMETRIC',
}

export enum STYLES {
  'casual' = 'CASUAL',
  'night' = 'NIGHT',
}

export const tops = [
  {
    src: Top1,
    colors: [COLORS.blue, COLORS.black],
    ornament: ORNAMENTS.lines,
    styles: [STYLES.casual],
    id: 1,
  },
  {
    src: Top2,
    colors: [COLORS.beige],
    styles: [STYLES.casual],
    id: 2,
  },
  {
    src: Top3,
    colors: [COLORS.white],
    ornament: ORNAMENTS.print,
    styles: [STYLES.casual],
    id: 3,
  },
  {
    src: Top4,
    colors: [COLORS.beige, COLORS.black],
    styles: [STYLES.night],
    id: 4,
  },
  {
    src: Top5,
    colors: [COLORS.blue, COLORS.white],
    styles: [STYLES.casual],
    id: 5,
  },
  {
    src: Top6,
    colors: [COLORS.beige, COLORS.green],
    ornament: ORNAMENTS.geometric,
    styles: [STYLES.casual],
    id: 6,
  },
  {
    src: Top7,
    colors: [COLORS.beige],
    ornament: ORNAMENTS.lines,
    styles: [STYLES.casual],
    id: 7,
  },
  {
    src: Top8,
    colors: [COLORS.white, COLORS.blue],
    ornament: ORNAMENTS.lines,
    styles: [STYLES.casual],
    id: 8,
  },
  {
    src: Top9,
    colors: [COLORS.black],
    styles: [STYLES.casual, STYLES.night],
    id: 9,
  },
  {
    src: Top10,
    colors: [COLORS.denim],
    ornament: ORNAMENTS.print,
    styles: [STYLES.casual],
    id: 10,
  },
  {
    src: Top11,
    colors: [COLORS.brown],
    styles: [STYLES.night],
    id: 11,
  },
  {
    src: Top12,
    colors: [COLORS.black],
    styles: [STYLES.night],
    id: 12,
  },
  {
    src: Top13,
    colors: [COLORS.beige],
    styles: [STYLES.casual],
    id: 13,
  },
  {
    src: Top14,
    colors: [COLORS.beige],
    styles: [STYLES.casual],
    id: 14,
  },
  {
    src: Top15,
    colors: [COLORS.beige, COLORS.green, COLORS.pink],
    ornament: ORNAMENTS.geometric,
    styles: [STYLES.casual],
    id: 15,
  },
  {
    src: Top16,
    colors: [COLORS.denim],
    styles: [STYLES.casual],
    id: 16,
  },
  {
    src: Top17,
    colors: [COLORS.white],
    styles: [STYLES.casual],
    id: 17,
  },
];

export const bottoms = [
  { src: Bottom1, colors: [COLORS.blue, COLORS.beige], ornament: ORNAMENTS.print, styles: [STYLES.night], id: 1 },
  { src: Bottom2, colors: [COLORS.beige], styles: [STYLES.casual], id: 2 },
  { src: Bottom3, colors: [COLORS.denim], styles: [STYLES.casual], id: 3 },
  { src: Bottom4, colors: [COLORS.gray], styles: [STYLES.casual], id: 4 },
  { src: Bottom5, colors: [COLORS.pink], styles: [STYLES.casual], id: 5 },
  { src: Bottom6, colors: [COLORS.black], styles: [STYLES.casual, STYLES.night], id: 6 },
  { src: Bottom7, colors: [COLORS.black], styles: [STYLES.casual, STYLES.night], id: 7 },
  {
    src: Bottom8,
    colors: [COLORS.beige, COLORS.white],
    ornaments: ORNAMENTS.geometric,
    styles: [STYLES.casual],
    id: 8,
  },
  {
    src: Bottom9,
    colors: [COLORS.red, COLORS.white],
    ornaments: ORNAMENTS.print,
    styles: [STYLES.night],
    id: 9,
  },
  {
    src: Bottom10,
    colors: [COLORS.denim],
    styles: [STYLES.casual],
    id: 10,
  },
  {
    src: Bottom11,
    colors: [COLORS.beige],
    ornaments: ORNAMENTS.lines,
    styles: [STYLES.casual],
    id: 11,
  },
];

export const generateRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getResult = (topImage: any, bottomImage: any) => {
  if (topImage.colors.length + bottomImage.colors.length > 3) {
    return 'MIS-MATCH';
  }
  if (topImage.ornament && bottomImage.ornament && topImage.ornament !== bottomImage.ornament) {
    return 'MIS-MATCH';
  }
  if (
    (topImage.colors.includes(COLORS.blue) && topImage.colors.includes(COLORS.brown)) ||
    (topImage.colors.includes(COLORS.brown) && topImage.colors.includes(COLORS.blue))
  ) {
    return 'MIS-MATCH';
  }
  if (
    (topImage.colors.includes(COLORS.blue) && topImage.colors.includes(COLORS.red)) ||
    (topImage.colors.includes(COLORS.red) && topImage.colors.includes(COLORS.blue))
  ) {
    return 'MIS-MATCH';
  }
  if (
    (topImage.colors.includes(COLORS.denim) && bottomImage.styles.includes(STYLES.night)) ||
    (topImage.styles.includes(STYLES.night) && bottomImage.colors.includes(COLORS.denim))
  ) {
    return 'MIS-MATCH';
  }
  if (
    (topImage.styles.includes(STYLES.casual) && bottomImage.styles.includes(STYLES.casual)) ||
    (topImage.styles.includes(STYLES.night) && bottomImage.styles.includes(STYLES.night))
  ) {
    return 'MATCH';
  }
  return 'MIS-MATCH';
};
