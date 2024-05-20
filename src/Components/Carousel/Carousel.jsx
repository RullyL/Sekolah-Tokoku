
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import CardComp from '../Card/Card';

function CarouselComp() {
  const imageUrls = [
    'https://s4.bukalapak.com/img/96667261003/s-463-463/data.jpeg.webp',
    'https://s4.bukalapak.com/img/96667261003/s-463-463/data.jpeg.webp',
    'https://s4.bukalapak.com/img/96667261003/s-463-463/data.jpeg.webp',
    'https://s4.bukalapak.com/img/96667261003/s-463-463/data.jpeg.webp',
    'https://s4.bukalapak.com/img/96667261003/s-463-463/data.jpeg.webp',
    'https://s4.bukalapak.com/img/96667261003/s-463-463/data.jpeg.webp',
    'https://s4.bukalapak.com/img/96667261003/s-463-463/data.jpeg.webp',
    'https://s4.bukalapak.com/img/96667261003/s-463-463/data.jpeg.webp',
  ];
 
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {imageUrls.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <CardComp.CardCarousel image={imageUrl} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarouselComp;
