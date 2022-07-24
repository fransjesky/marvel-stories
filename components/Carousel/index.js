import React from 'react';
import Card from '../Card';

// redux
import { useDispatch } from 'react-redux';
import { getComicDetails } from '../../redux/features/comics';

// swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';

// swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip } from 'swiper';

function Carousel({ data }) {
  const dispatch = useDispatch();

  const getDetails = (e) => {
    // get creator role
    const creatorDetails = (roleName) => {
      const filter = data[e.activeIndex].creators.items.filter(
        (item) => item.role == roleName
      );
      return filter[0]?.name;
    };

    // payload init
    const payload = {
      title: data[e.activeIndex].title,
      published: data[e.activeIndex].dates[0].date,
      writer: creatorDetails('writer'),
      editor: creatorDetails('editor'),
      letterer: creatorDetails('letterer'),
      penciler: creatorDetails('penciler'),
    };

    // dispatch to redux
    dispatch(getComicDetails(payload));
  };

  return (
    <Swiper
      effect='flip'
      grabCursor={true}
      modules={[EffectFlip]}
      onSlideChange={(e) => getDetails(e)}
    >
      {data?.map((value, index) => {
        return (
          <SwiperSlide key={index}>
            <Card
              image={`${value.thumbnail?.path}.${value.thumbnail?.extension}`}
              title={value.title}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Carousel;
