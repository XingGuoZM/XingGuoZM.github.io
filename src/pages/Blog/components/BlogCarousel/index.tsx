import React from 'react';
import Carousel from '@/components/Carousel';
import IconList from '@/components/IconList';
import { data } from '@/data';
import styles from './index.module.less';

export default function BlogCarousel() {

  const carouselData = data.expert;
  return <div className={styles.wrap}>
    <Carousel data={carouselData} >
      {(item) => {
        return <div className={styles.cell}>
          <div className={styles.iconWrap}>
            <IconList data={item.iconList} />
          </div>
          <div className={styles.textWrap}>
            <div className={styles.text}>
              <div className={styles.title}>{item.title}</div>
              {item.desc && item.desc.map(desc => <div className={styles.desc} key={desc}>➣ {desc}</div>)}
            </div>
          </div>
        </div>
      }}
    </Carousel>
  </div>
}