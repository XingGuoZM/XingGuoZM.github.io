import React from '@/pages/Blog/components/BlogList/node_modules/react';
import TabList from '@/components/TabList';
import "@/pages/Blog/components/BlogList/node_modules/swiper/css/pagination";
import "@/pages/Blog/components/BlogList/node_modules/swiper/css"

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