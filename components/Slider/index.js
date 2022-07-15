import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

// core swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

function Slider({ data }) {
  const styleSheets = {
    image: {
      height: '70vh',
      width: '100vw',
      position: 'relative',
    },
    contents: {
      width: '40vw',
      position: 'absolute',
      bottom: '5%',
      left: '5%',
      right: '5%',
      zIndex: '2',
    },
    name: {
      color: '#ffffff',
      fontSize: '2rem',
      fontWeight: '700',
    },
    desc: {
      color: '#ffffff',
      fontSize: '1rem',
    },
  };

  return (
    <Swiper
      slidesPerView={1}
      modules={[EffectFade]}
      effect='fade'
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((value, index) => {
        return (
          <SwiperSlide key={index}>
            <Box sx={styleSheets.image}>
              <Image
                src={value.image}
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </Box>
            <Box sx={styleSheets.contents}>
              <Typography sx={styleSheets.name}>{value.name}</Typography>
              <Typography sx={styleSheets.desc}>{value.desc}</Typography>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;
