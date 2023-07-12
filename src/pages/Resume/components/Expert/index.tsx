import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import IconList from '@/components/IconList';
import "swiper/css/pagination";
import "swiper/css"

import './index.less';

export default function Expert({ data }) {

  return <div className='expertWrap'>
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {data.map(item => <SwiperSlide key={item.title}>
        <div className='expert'>
          <div className="expertCell">
            <div className='expertIconWrap'>
              <IconList data={item.icon} />
            </div>
            <div className='expertTextWrap'>
              <div className='expertText'>
                <div className='expertTitle'>{item.title}</div>
                {item.desc && item.desc.map(desc => <div className='expertDesc' key={desc}>➣ {desc}</div>)}
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>)}
    </Swiper>
  </div>
}