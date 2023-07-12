
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import "swiper/css";

export default function Carousel({ data, children }) {
  return <Swiper
    modules={[Pagination]}
    pagination={{ clickable: true }}
  >
    {data.map(item => <SwiperSlide key={item.title}>{() => children(item)}</SwiperSlide>)}
  </Swiper>
}