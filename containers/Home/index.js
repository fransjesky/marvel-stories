import React, { useEffect } from 'react';
import Card from '../../components/Card';
import { Box, Grid } from '@mui/material';
import Slider from '../../components/Slider';

import sliderData from '../../data/sliderData';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getComics } from '../../redux/features/comics';

function HomeContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComics());
  }, []);

  const { list } = useSelector((state) => state.comics);

  return (
    <Box>
      <Slider data={sliderData} />
      {/* <Grid container spacing={2}>
        {list?.results?.map((value, index) => {
          return (
            <Grid item key={index}>
              <Card
                image={`${value.thumbnail?.path}/portrait_uncanny.${value.thumbnail?.extension}`}
                title={value.title}
              />
            </Grid>
          );
        })}
      </Grid> */}
    </Box>
  );
}

export default HomeContainer;
