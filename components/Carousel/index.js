import React from 'react';
import Card from '../Card';

// redux
import { useDispatch } from 'react-redux';
import { getComicDetails } from '../../redux/features/comics';

// swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';

function Carousel({ data }) {
  const dispatch = useDispatch();

  const getDetails = (e) => {
    const payload = {
      title: data[e.activeIndex].title,
    };
    dispatch(getComicDetails(payload))
  };

  return (
    <Swiper
      effect='cards'
      grabCursor={true}
      modules={[EffectCards]}
      onSlideChange={(e) => getDetails(e)}
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
