
import React from 'react'
import Card, { CardTypeEnum } from '@/components/Card';
import { data } from '@/data';
import styles from './index.module.less';

export default function Achievement() {

  const handleClick = (url) => {
    if (url) {
      window.location.href = url;
    }
  }
  return <div className={styles.wrap}>
    <Card type={CardTypeEnum.Tiny} data={data.achievement}>
      {(item) => <div className={styles.tiny} >
        <div className={styles.title} onClick={() => handleClick(item.url)}>
          {item.title}
        </div>
        {item.subTitle && <div className={styles.subTitle}>{item.subTitle}</div>}
      </div>}
    </Card>
  </div>
}