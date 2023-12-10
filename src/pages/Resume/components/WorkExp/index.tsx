import React from 'react'
import styles from './index.module.less'

export default function WorkExp() {
  const nodeList = [
    {
      title: '上海中电电子系统',
      time: '2018.5-2019.5',
    },
    {
      title: '武汉佰钧成',
      time: '2019.5-2023.4',
    },
    {
      title: '华为od',
      time: '2023.5-2023.6',
    },
    {
      title: '腾娱互动',
      time: '2023.9-至今',
    },
  ]
  return (
    <div className={styles.wrap}>
      <div className={styles.timeline}></div>
      {nodeList.map((item, index) => (
        <div className={`${styles.node} ${styles['node' + (index + 1)]}`}>
          <div className={styles.titleWrap}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.subTitle}>（{item.time}）</div>
          </div>
        </div>
      ))}
    </div>
  )
}
