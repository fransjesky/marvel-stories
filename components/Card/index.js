import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

function Card({ image }) {
  return <Box>Card</Box>;
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Card;
