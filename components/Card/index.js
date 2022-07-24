import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
function Card({ image, title }) {
  const styleSheets = {
    container: {
      margin: '0 auto',
      width: '100%',
      height: 'auto',
      aspectRatio: 'auto 550 / 845',
      overflow: 'hidden',
      position: 'relative',
      cursor: 'pointer',
    },
  };

  return (
    <Box sx={styleSheets.container}>
      <Image
        alt={title}
        src={image}
        layout='fill'
        objectFit='contain'
        quality={100}
        priority
      />
    </Box>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Card;
