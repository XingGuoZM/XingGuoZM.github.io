
import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";

export default function Carousel({ data, children }) {
  return <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000 }}
  >
    {data.map(item => <SwiperSlide key={item.title}>{() => children(item)}</SwiperSlide>)}
  </Swiper>
}