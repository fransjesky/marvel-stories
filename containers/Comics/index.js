import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Carousel from '../../components/Carousel';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getComics } from '../../redux/features/comics';

function ComicsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComics());
  }, []);

  const { list } = useSelector((state) => state.comics);
  const { details } = useSelector((state) => state.comics);

  const styleSheets = {
    comics: {
      margin: '1rem 0',
    },
    cardsContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <Box>
      <video
        src='/assets/intro.mp4'
        type='video/mp4'
        autoPlay
        loop
        muted
        style={{ height: '80vh', width: '100%', objectFit: 'cover' }}
      />
      <Grid container columnSpacing={2} sx={styleSheets.comics}>
        <Grid item xs={4} sx={styleSheets.cardsContainer}>
          <Box sx={{ width: '13.5rem' }}>
            <Carousel data={list?.results} />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Typography>{details?.title}</Typography>
            <Typography>Desc</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ComicsContainer;
