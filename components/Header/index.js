import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import useScroll from '../../hooks/useScroll';

// data
import navigation from '../../data/navigation';

function Header() {
  // initialize hook
  const scroll = useScroll();

  const styleSheets = {
    header: {
      height: '5.5rem',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: scroll > 15 ? '#202020' : 'transparent',
      transition: 'all 0.3s ease',
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
      fontSize: '0.6rem',
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
