import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography, Input, InputAdornment } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useScroll from '../../hooks/useScroll';
import Drawer from './Drawer';

// data
import navigation from '../../data/navigation';

// icon
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Header() {
  // initialize hook
  const scroll = useScroll();

  // theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const styleSheets = {
    header: {
      padding: '0 1rem',
      height: '5.5rem',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: scroll > 15 ? '#151515' : 'transparent',
      transition: 'all 0.3s ease',
      position: 'fixed',
      top: '0',
      zIndex: '999',
    },
    github: {
      height: '5.5rem',
      display: 'flex',
      alignItems: 'center',
    },
    githubIcon: {
      marginRight: '0.25rem',
      color: '#ffffff',
    },
    githubText: {
      color: '#ffffff',
      fontSize: '0.55rem',
      fontWeight: '700',
      letterSpacing: '0.125rem',
    },
    main: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
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
      fontSize: '0.55rem',
      fontWeight: '700',
      letterSpacing: '0.125rem',
      textTransform: 'uppercase',
    },
    options: {
      width: '17rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    drawer: {
      display: {
        xs: 'flex',
        lg: 'none',
      },
    },
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={styleSheets.header}>
        <Link href='https://github.com/fransjesky' passHref>
          <a>
            <Box sx={styleSheets.github}>
              <GitHubIcon fontSize='small' sx={styleSheets.githubIcon} />
              <Typography sx={styleSheets.githubText}>
                github.com/fransjesky
              </Typography>
            </Box>
          </a>
        </Link>
        <Box sx={styleSheets.main}>
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
        <Box sx={styleSheets.options}>
          <Input
            id='input-with-icon-adornment'
            placeholder='Search'
            startAdornment={
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            }
          />
          <DarkModeIcon sx={{ color: '#fff' }} />
          <Link passHref href='https://www.marvel.com/'>
            <a>
              <ExitToAppIcon sx={{ color: '#fff' }} />
            </a>
          </Link>
        </Box>
      </Box>
      <Box sx={styleSheets.drawer}>
        <Drawer />
      </Box>
    </ThemeProvider>
  );
}

export default Header;
