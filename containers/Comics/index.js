import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import Carousel from '../../components/Carousel';
import { DateTime } from 'luxon';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getComics } from '../../redux/features/comics';

function ComicsContainer() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // redux state
  const { list } = useSelector((state) => state.comics);
  const { details } = useSelector((state) => state.comics);
  const { status } = useSelector((state) => state.comics);

  useEffect(() => {
    dispatch(getComics());
  }, []);

  useEffect(() => {
    status == 'success' ? setLoading(false) : setLoading(true);
  }, [status]);

  const styleSheets = {
    comics: {
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.8)',
    },
    background: {
      position: 'fixed',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      filter: 'blur(1rem)',
      WebkitFilter: 'blur(1rem)',
      zIndex: '-1',
    },
    cardsContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    comicTitle: {
      marginBottom: '2rem',
      color: '#ffffff',
      fontSize: '2rem',
      fontWeight: '700',
    },
    comicDetailsContainer: {
      margin: '0.625rem 0',
    },
    comicDetails: {
      color: '#ffffff',
      fontSize: '1rem',
      fontWeight: '700',
      textTransform: 'capitalize',
    },
    comicDetailsInfo: {
      color: '#9ca3af',
      fontSize: '0.75rem',
      fontWeight: '400',
    },
  };

  const creators = [
    {
      role: 'writter',
      name: details?.writer,
    },
    {
      role: 'editor',
      name: details?.editor,
    },
    {
      role: 'letterer',
      name: details?.letterer,
    },
    {
      role: 'penciler',
      name: details?.penciler,
    },
    {
      role: 'colorist',
      name: details?.colorist,
    },
    {
      role: 'painter (cover)',
      name: details?.painter,
    },
    {
      role: 'inker',
      name: details?.inker,
    },
  ];

  return (
    <Box sx={styleSheets.comics}>
      {loading ? (
        <video
          src='/assets/intro.mp4'
          type='video/mp4'
          autoPlay
          loop
          muted
          style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
        />
      ) : (
        <>
          {details ? (
            <Box sx={styleSheets.background}>
              <Image
                alt=''
                src={details.image}
                layout='fill'
                objectFit='cover'
                objectPosition={'center center'}
                quality={100}
                priority
              />
            </Box>
          ) : null}
          <Grid container>
            <Grid item xs={4} sx={styleSheets.cardsContainer}>
              <Box sx={{ width: '18.75rem' }}>
                <Carousel data={list?.results} />
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Typography variant='h1' sx={styleSheets.comicTitle}>
                {details?.title}
              </Typography>
              <Box sx={styleSheets.comicDetailsContainer}>
                <Typography sx={styleSheets.comicDetails}>Published</Typography>
                <Typography sx={styleSheets.comicDetailsInfo}>
                  {DateTime.fromISO(details?.published).toFormat(
                    'MMMM dd, yyyy'
                  )}
                </Typography>
              </Box>
              <Grid container>
                {creators.map((value, index) => {
                  return value.name ? (
                    <Grid item xs={4} key={index}>
                      <Box sx={styleSheets.comicDetailsContainer}>
                        <Typography sx={styleSheets.comicDetails}>
                          {value.role}
                        </Typography>
                        <Typography sx={styleSheets.comicDetailsInfo}>
                          {value.name}
                        </Typography>
                      </Box>
                    </Grid>
                  ) : null;
                })}
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
}

export default ComicsContainer;
