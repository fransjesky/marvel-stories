import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

function Header() {
  const styleSheets = {
    header: {
      height: '5rem',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#202020',
      position: 'fixed',
      top: '0',
      zIndex: '999',
    },
    imageContainer: {
      height: '3rem',
      width: '12rem',
      position: 'relative',
    },
  };

  return (
    <Box sx={styleSheets.header}>
      <Box sx={styleSheets.imageContainer}>
        <Image
          src='/logo.svg'
          layout='fill'
          objectFit='contain'
          quality={100}
        />
      </Box>
    </Box>
  );
}

export default Header;
