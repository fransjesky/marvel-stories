import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
function Card({ image, title, copyright }) {
  const styleSheets = {
    container: {
      width: '12.5rem',
      height: '20rem',
      overflow: 'hidden',
      position: 'relative',
      transition: 'all 0.3s ease',
      '&:after': {
        content: '""',
        position: 'absolute',
        top: '80%',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'linear-gradient(to bottom, transparent, #000000)',
      },
      '&:hover': {
        cursor: 'pointer',
        transform: 'translateY(-0.25rem)',
        boxShadow:
          '0 1rem 1.875rem rgba(0, 0, 0, 0.25), 0 0.625rem 0.625rem rgba(0, 0, 0, 0.25)',
      },
    },
    textContainer: {
      width: '100%',
      padding: '0.5rem',
      position: 'absolute',
      bottom: '0',
      zIndex: '1',
    },
    titleText: {
      color: '#ffffff',
      fontSize: '1rem',
      fontWeight: '700',
    },
    copyrightText: {
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
      <Box sx={styleSheets.textContainer}>
        <Typography sx={styleSheets.titleText}>{title}</Typography>
        <Typography sx={styleSheets.copyrightText}>{copyright}</Typography>
      </Box>
    </Box>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  copyright: PropTypes.string.isRequired,
};

export default Card;
