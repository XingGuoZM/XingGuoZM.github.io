import React, { useState } from 'react';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import "swiper/css"

import './index.less';

export default function TabList({ data, renderTabCell, renderListCell }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return <div className='tabList'>
    <Swiper
      modules={[Thumbs]}
      watchSlidesProgress
      slidesPerView={3}
      onSwiper={setThumbsSwiper}>
      {data.map(item => <SwiperSlide key={item.tabTitle}>
        {renderTabCell(item)}
      </SwiperSlide>)}
    </Swiper>

    <Swiper
      modules={[Thumbs]}
      thumbs={{
        swiper: thumbsSwiper,
        watchSlidesVisibility: true,
      }}>
      {data.map(item => <SwiperSlide key={item.tabTitle}>
        {renderListCell(item)}
      </SwiperSlide>)}
    </Swiper>

  </div >
}