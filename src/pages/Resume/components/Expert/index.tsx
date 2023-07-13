import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import classnames from 'classnames';
import IconList from '@/components/IconList';
import "swiper/css/pagination";
import "swiper/css"

import styles from './index.module.less';

export default function Expert({ data }) {

  return <div className={styles.expertWrap}>
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {data.map(item => <SwiperSlide key={item.title}>
        <div className={styles.expert}>
          <div className={styles.expertCell}>
            <div className={styles.expertIconWrap}>
              <IconList data={item.iconList} className={styles['filter-shadow']} />
            </div>
            <div className={styles.expertTextWrap}>
              <div className={styles.expertText}>
                <div className={classnames({
                  [styles.expertTitle]: true,
                  [styles['filter-shadow']]: true
                })}>
                  {item.title}</div>
                {item.desc && item.desc.map(desc => <div
                  className={classnames({
                    [styles.expertDesc]: true,
                    [styles['filter-shadow']]: true
                  })} key={desc}>➣ {desc}</div>)}
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>)}
    </Swiper>
  </div >
}