import React from 'react';
import TabList from '@/components/TabList';
import Card, { CardTypeEnum } from '@/components/Card';
import { data } from '../../data/data.js';
import { IconMap } from '../../data';
import { getBaseUrl } from '@/utils';
import styles from './index.module.less';

const iconFillColor = localStorage.getItem('--theme-color');

export default function BlogTabList() {

  const handleClick = (item) => {
    const { url } = item;
    const baseUrl = getBaseUrl();
    if (url) {
      location.replace(baseUrl + url)
    }
  }
  return <div className={styles.tablistWrap}>
    <TabList data={data}
      renderTabCell={(cell) => <div className={styles.tab}>{cell.tabTitle}</div>}
      renderListCell={(cell) => <div className={styles.list}>
        <Card type={CardTypeEnum.Large} data={cell.tabData}>
          {(item) => {
            const Comp = IconMap[item.dir];
            return <div className={styles.content} onClick={() => handleClick(item)}>
              <div className={styles.iconWrap}>
                <Comp className={styles.icon} fill={iconFillColor} />
              </div>
              <div className={styles.titleWrap}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.subtitle}>
                  {item.subtitle?.map((ele: string) => <div className={styles.subtitleCell} key={ele.subtitle}>{ele}</div>)}
                </div>
                <div className={styles.desc}>{item.desc}</div>
              </div>
            </div>
          }}
        </Card>
      </div>}
    />
  </div>
}