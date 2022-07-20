import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

function HomeContainer() {
  return (
    <Box>
      <Image
        src='/images/landing.jpeg'
        layout='fill'
        objectFit='cover'
        quality={100}
      />
    </Box>
  );
}

export default HomeContainer;
