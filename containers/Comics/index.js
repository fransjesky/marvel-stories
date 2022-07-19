import React, { useEffect } from 'react';
import Card from '../../components/Card';
import { Box, Grid } from '@mui/material';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getComics } from '../../redux/features/comics';

function ComicsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComics());
  }, []);

  const { list } = useSelector((state) => state.comics);

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
      <Box sx={{ margin: '1rem 0' }}>
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 0 }}
          rowSpacing={{ xs: 2, sm: 4 }}
        >
          {list?.results?.map((value, index) => {
            return (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <Card
                  image={`${value.thumbnail?.path}/portrait_uncanny.${value.thumbnail?.extension}`}
                  title={value.title}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default ComicsContainer;
