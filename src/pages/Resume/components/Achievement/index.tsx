
import React, { useState } from 'react'
import TabList from '@/components/TabList';
import { getBaseUrl } from '@/utils';
import styles from './index.module.less';

export default function Achievement() {

  const data = [{
    tabTitle: '博客', tabData: [{ name: '', Comp: () => <div className={styles.blog}>我的博客</div>, url: '/blog' }],
  }]
  const handleClick = (url) => {
    const baseUrl = getBaseUrl();
    location.replace(baseUrl + url);
  }
  return <div className={styles.wrap}>
    <TabList
      data={data}
      renderTabCell={(cell) => <div className={styles.tab}>{cell.tabTitle}</div>}
      renderListCell={(cell) => <div className={styles.list}>
        {cell.tabData.map(item => <div className={styles.content} key={item.name}>
          <div className={styles.label}>{item.name}</div>
          {item.Comp && <div className={styles.value} onClick={() => handleClick(item.url)}>{item.Comp()}</div>}
        </div>)}
      </div>} />
  </div>
}