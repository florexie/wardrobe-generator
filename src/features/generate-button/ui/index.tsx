import { useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { COLOR_ACCENT, COLOR_ACCENT_LIGHT } from 'shared/config';
import { Loader } from 'shared/ui';

import { bottoms, generateRandomInteger, getResult, tops } from '../lib';

export const GenerateButton = () => {
  const [topImage, setTopImage] = useState<any>(null);
  const [bottomImage, setBottomImage] = useState<any>(null);
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateLook = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
    const newTopImage = tops.at(generateRandomInteger(0, tops.length - 1));
    setTopImage(newTopImage);
    const newBottomImage = bottoms.at(generateRandomInteger(0, bottoms.length - 1));
    setBottomImage(newBottomImage);
    setResult(getResult(newTopImage, newBottomImage));
  };
  return (
    <>
      {isLoading && (
        <Stack sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Loader />
        </Stack>
      )}
      <Stack justifyContent="center" sx={{ visibility: isLoading ? 'hidden' : 'visible' }}>
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
            <Typography
              variant="h4"
              sx={{ textAlign: 'center', color: result === 'MATCH' ? COLOR_ACCENT : COLOR_ACCENT_LIGHT }}
            >
              {result}
            </Typography>
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
        <Button sx={{ width: '200px', mt: 2 }} onClick={generateLook} disabled={isLoading}>
          Generate
        </Button>
      </Stack>
    </>
  );
};
