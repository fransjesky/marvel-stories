import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

function Loader() {
  const styleSheets = {
    container: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    text: {
      color: '#ffffff',
      fontSize: '2rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      position: 'absolute',
      bottom: '10vh',
      zIndex: '2',
    },
  };

  return (
    <Box sx={styleSheets.container}>
      <Typography sx={styleSheets.text}>Loading...</Typography>
      <Image
        src='/assets/loader.gif'
        layout='fill'
        objectFit='cover'
        quality={100}
        priority
      />
    </Box>
  );
}

export default Loader;
