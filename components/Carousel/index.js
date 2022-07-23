import React from 'react';
import Card from '../Card';

// swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';

function Carousel({ data }) {
  return (
    <Swiper
      effect='cards'
      grabCursor={true}
      modules={[EffectCards]}
      // onSlideChange={(e) => setCounter(e.activeIndex)}
    >
      {data?.map((value, index) => {
        return (
          <SwiperSlide key={index}>
            <Card
              image={`${value.thumbnail?.path}/portrait_uncanny.${value.thumbnail?.extension}`}
              title={value.title}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Carousel;
