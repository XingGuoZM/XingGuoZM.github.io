import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import "swiper/css"

import styles from './index.module.less';


export default function TabList() {
  return <div className={styles.wrap}>
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {[1, 2, 3].map(item => <SwiperSlide key={item}>
        <div>hell</div>
      </SwiperSlide>)}
    </Swiper>
  </div>
}