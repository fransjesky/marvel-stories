import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import navigation from '../../data/navigation';

function Header() {
  const styleSheets = {
    header: {
      height: '5rem',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: '0',
      zIndex: '999',
    },
    imageContainer: {
      height: '3rem',
      width: '10rem',
      display: 'flex',
      justifyContent: 'flex-start',
      position: 'relative',
    },
    navigations: {
      display: 'flex',
    },
    link: {
      margin: '0 1rem',
      color: '#ffffff',
      fontSize: '0.75rem',
      fontWeight: '700',
      letterSpacing: '0.125rem',
      textTransform: 'uppercase',
    },
  };

  return (
    <Box sx={styleSheets.header}>
      <Link href='/'>
        <a>
          <Box sx={styleSheets.imageContainer}>
            <Image
              src='/logo.svg'
              layout='fill'
              objectFit='contain'
              priority
              quality={100}
            />
          </Box>
        </a>
      </Link>
      <Box sx={styleSheets.navigations}>
        {navigation.map((value, index) => {
          return (
            <Link href={value.link} key={index}>
              <a>
                <Typography sx={styleSheets.link}>{value.name}</Typography>
              </a>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}

export default Header;
