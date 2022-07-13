import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

function Card({ image, title }) {
  const styleSheets = {
    container: {
      width: '15rem',
      height: '20rem',
      borderRadius: '0.25rem',
      backgroundColor: '#121212',
      overflow: 'hidden',
      position: 'relative',
    },
    titleText: {
      color: '#ffffff',
    },
  };

  return (
    <Box sx={styleSheets.container}>
      <Image src={image} layout='fill' objectFit='cover' quality={100} />
      <Typography sx={styleSheets.titleText}>{title}</Typography>
    </Box>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Card;
