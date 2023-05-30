import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

import { bottoms, generateRandomInteger, getResult, tops } from '../lib';

export const GenerateButton = () => {
  const [topImage, setTopImage] = useState<any>(null);
  const [bottomImage, setBottomImage] = useState<any>(null);
  const [result, setResult] = useState('');

  const generateLook = () => {
    const newTopImage = tops.at(generateRandomInteger(0, tops.length - 1));
    setTopImage(newTopImage);
    const newBottomImage = bottoms.at(generateRandomInteger(0, bottoms.length - 1));
    setBottomImage(newBottomImage);
    setResult(getResult(newTopImage, newBottomImage));
  };
  return (
    <>
      {topImage && (
        <Box
          component="img"
          alt="top"
          src={topImage.src}
          sx={{ maxWidth: '200px', maxHeight: '300px', border: '3px solid gray' }}
        />
      )}
      {result && (
        <Box sx={{ background: 'gray', p: 2, my: 0.5 }}>
          <Typography variant="h3">{result}</Typography>
        </Box>
      )}
      {bottomImage && (
        <Box
          component="img"
          alt="bottom"
          src={bottomImage.src}
          sx={{ maxWidth: '200px', maxHeight: '300px', border: '3px solid gray' }}
        />
      )}
      <Button sx={{ width: '200px', mt: 2 }} onClick={generateLook}>
        Generate
      </Button>
    </>
  );
};
