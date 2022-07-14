import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

// icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Card({ image, likes = '0', title, desc }) {
  const styleSheets = {
    container: {
      width: '15rem',
      height: '20rem',
      borderRadius: '0.25rem',
      backgroundColor: '#121212',
      overflow: 'hidden',
      position: 'relative',
      '&:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'linear-gradient(to bottom, transparent, #000000)',
      },
    },
    iconContainer: {
      padding: '0.5rem',
      position: 'absolute',
      top: '0',
      zIndex: '1',
    },
    textContainer: {
      width: '100%',
      padding: '0.5rem',
      position: 'absolute',
      bottom: '0',
      zIndex: '1',
    },
    statsContainer: {
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    statsText: {
      fontSize: '0.75rem',
    },
    titleText: {
      color: '#ffffff',
      fontSize: '1rem',
      fontWeight: '700',
    },
    descText: {
      color: '#e0e0e0',
      fontSize: '0.75rem',
      fontWeight: '400',
    },
  };

  return (
    <Box sx={styleSheets.container}>
      <Image
        alt={title}
        src={image}
        layout='fill'
        objectFit='cover'
        quality={100}
      />
      <Box sx={styleSheets.iconContainer}>
        <Box sx={styleSheets.statsContainer}>
          <FavoriteBorderIcon
            sx={{ fontSize: '1rem', marginRight: '0.25rem' }}
          />
          <Typography sx={styleSheets.statsText}>{likes}</Typography>
        </Box>
      </Box>
      <Box sx={styleSheets.textContainer}>
        <Typography sx={styleSheets.titleText}>{title}</Typography>
        <Typography sx={styleSheets.descText}>{desc}</Typography>
      </Box>
    </Box>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Card;
