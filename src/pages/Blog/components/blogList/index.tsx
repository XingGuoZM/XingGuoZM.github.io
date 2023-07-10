import React from 'react';
import TabList from '@/components/TabList';
import "swiper/css/pagination";
import "swiper/css"

import styles from './index.module.less';

const data = [1, 2, 3, 4]
export default function BlogList() {

  return (
    <TabList
      data={data}
      renderTabCell={(item) => <div className={styles.tabCell}>{item}</div>}
      renderListCell={(item) => <div className={styles.listCell}>
        <div className={styles.listCellItem}>
          {item}
        </div>
      </div>}
    />)
}