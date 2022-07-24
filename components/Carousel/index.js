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

  console.log('data', data);

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
      image: `${data[e.activeIndex].thumbnail?.path}.${
        data[e.activeIndex].thumbnail.extension
      }`,
      title: data[e.activeIndex].title,
      published: data[e.activeIndex].dates[0].date,
      writer: creatorDetails('writer'),
      editor: creatorDetails('editor'),
      letterer: creatorDetails('letterer'),
      penciler: creatorDetails('penciler'),
      colorist: creatorDetails('colorist'),
      painter: creatorDetails('painter (cover)'),
      inker: creatorDetails('inker'),
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
