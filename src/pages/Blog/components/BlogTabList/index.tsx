import React, { useContext } from 'react';
import TabList from '@/components/TabList';
import Card, { CardTypeEnum } from '@/components/Card';
import { ModalContext } from '@/components/PromisifyModal';
import { data } from '../../data/data.js';
import { IconMap } from '../../data';
import { getBaseUrl, jump2Page } from '@/utils';
import styles from './index.module.less';

export default function BlogTabList() {
  const { theme } = useContext(ModalContext);

  const handleClick = (item: { url: string }) => {
    const { url } = item;
    const baseUrl = getBaseUrl();
    if (url) {
      jump2Page(baseUrl + url)
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
                <Comp className={styles.icon} fill={theme} />
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