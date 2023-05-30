import React, { FC, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { forEach } from 'lodash';

import {
  COLOR_ACCENT,
  COLOR_BG,
  COLOR_GRAY_LIGHT,
  COLOR_PURPURE,
  COLOR_RED,
  COLOR_STROKE,
  COLOR_WH,
} from './colors.constants';

export default {
  title: 'theme/colors',
};

interface ColorBlockProps {
  title: string;
  color: string;
}

const ColorBlock: React.FC<ColorBlockProps> = ({ color, title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        marginBottom: 5,
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          marginRight: 5,
          border: '1px solid lightgray',
          background: color,
        }}
      />
      <Typography>{color}&nbsp;&nbsp;</Typography>
      <Typography> {title}</Typography>
    </Box>
  );
};

interface ColorGroupProps {
  title: string;
  colors: Record<string, string>;
}

const ColorsGroup: FC<ColorGroupProps> = ({ title, colors }) => {
  const content: ReactNode[] = [];
  forEach(colors, (color, colorTitle) => {
    content.push(<ColorBlock key={color} color={color} title={colorTitle} />);
  });

  return (
    <Box
      sx={{
        margin: '0 10px 20px 10px',
      }}
    >
      <Typography variant="h6">{title}</Typography>
      {content}
    </Box>
  );
};

interface ColorGroup {
  title: string;
  colors: Record<string, string>;
}
const colorGroups: ColorGroup[] = [
  {
    title: 'Color',
    colors: {
      COLOR_ACCENT,
      COLOR_BG,
      COLOR_PURPURE,
      COLOR_STROKE,
      COLOR_WH,
      COLOR_RED,
      COLOR_GRAY_LIGHT,
    },
  },
];

export const Colors: FC = () => {
  const content = colorGroups
    // eslint-disable-next-line react/no-array-index-key
    .map((group, index) => <ColorsGroup key={index} colors={group.colors} title={group.title} />);

  return <Box>{content}</Box>;
};
