import React from 'react';
import Slider from '../../components/Slider';
import { Box } from '@mui/material';

// static daata
import sliderData from '../../data/sliderData';

function CharactersContainer() {
  return (
    <Box>
      <Slider data={sliderData} />
    </Box>
  );
}

export default CharactersContainer;
