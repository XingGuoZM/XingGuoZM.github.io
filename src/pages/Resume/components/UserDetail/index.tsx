import React from 'react';
import Card, { CardTypeEnum } from '@/components/Card';
import styles from './index.module.less';


export default function UserDetail({ data }) {
  return <Card type={CardTypeEnum.Small} data={data} >
    {(item) => {
      return <div className={styles.cardSmall}>
        <div className={styles.cardSmallTitle}>{item.title}</div>
        <div className={styles.cardSmallContent}>
          {item.list.map(ele => <div className={styles.valueWrap} key={ele.value}>
            {ele.name && <div className={styles.name}>{ele.name}</div>}
            {ele.Icon && <ele.Icon className={styles.icon} />}
            <div className={styles.value}>{ele.value}</div>
          </div>)}
        </div>
      </div>
    }}
  </Card>
}