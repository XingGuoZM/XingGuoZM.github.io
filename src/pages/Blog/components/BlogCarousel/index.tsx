import React, { ReactElement } from 'react';
import Carousel from '@/components/Carousel';
import classnames from 'classnames';
// import IconList from '@/components/IconList';
import { data } from '../../data';
import styles from './index.module.less';

export default function BlogCarousel() {

  const carouselData = data.excellent;
  const AnimMap: { [key: string]: string } = {
    js: styles.shakeAnim,
    webpack: styles.flipAnim,
    react: styles.spinAnim,
    h5: styles.ringAnim,
    opt: styles.bounceinAnim,
  }

  return <div className={styles.wrap}>
    <Carousel data={carouselData} >
      {(item) => {
        return <div className={styles.cell}>
          <div className={styles.iconWrap}>
            {/* <IconList data={item.iconList} /> */}
            {item.iconList.map((Icon: ReactElement, index: number) => Icon({
              className: classnames(styles.icon, AnimMap[item.id]), key: index
            }))}
          </div>
          <div className={styles.textWrap}>
            <div className={styles.title}>{item.title}</div>
          </div>
        </div>
      }}
    </Carousel>
  </div>
}