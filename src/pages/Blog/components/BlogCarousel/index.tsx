import React from 'react';
import Carousel from '@/components/Carousel';
import styles from './index.module.less';

const carouselData = [{ title: 'js', desc: ['javascript'] }, { title: 'react', desc: ['javascript'] }];

export default function BlogCarousel() {
  return <div className={styles.wrap}>
    <Carousel data={carouselData} >
      {(item) => {
        return <div className={styles.cell}>
          <div className={styles.iconWrap}>
            {/* <IconList data={item.icon} /> */}
          </div>
          <div className={styles.textWrap}>
            <div className={styles.text}>
              <div className={styles.title}>{item.title}</div>
              {/* {item.desc && item.desc.map(desc => <div className={styles.desc} key={desc}>➣ {desc}</div>)} */}
            </div>
          </div>
        </div>
      }}
    </Carousel>
  </div>
}