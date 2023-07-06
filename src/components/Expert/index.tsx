import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import "swiper/css"

import './index.less';

export default function Expert({ data }) {

  return <div className='expertWrap'>
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map(item => <SwiperSlide>
        <div className='expert'>
          <div className="expertCell">
            {item.icon && <img className="expertIcon" src={item.icon} />}
            <div className='expertText'>
              <div className='expertTitle'>{item.title}</div>
              {item.desc && item.desc.map(desc => <div className='expertDesc'>➣ {desc}</div>)}
            </div>
          </div>
        </div>
      </SwiperSlide>)}
    </Swiper>
  </div>
}