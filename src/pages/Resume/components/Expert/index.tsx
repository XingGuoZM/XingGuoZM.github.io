import React from 'react';
import Carousel from '@/components/Carousel';
import classnames from 'classnames';
import IconList from '@/components/IconList';
import styles from './index.module.less';

export default function Expert({ data }) {

  return <div className={styles.expertWrap}>
    <Carousel data={data}>
      {(item) => {
        return <div className={styles.expert}>
          <div className={styles.expertCell}>
            <div className={styles.expertIconWrap}>
              <IconList data={item.iconList} className={styles['filter-shadow']} />
            </div>
            <div className={styles.expertTextWrap}>
              <div className={styles.expertText}>
                <div className={classnames({
                  [styles.expertTitle]: true,
                  [styles['filter-shadow']]: true
                })}>{item.title}</div>
                {item.desc && item.desc.map(ele => (
                  <div
                    className={classnames({
                      [styles.expertDesc]: true,
                      [styles['filter-shadow']]: true
                    })}
                    key={ele}
                  >➣ {ele}</div>)
                )}
              </div>
            </div>
          </div>
        </div>
      }}
    </Carousel>
  </div>
}