import React, { ReactElement } from 'react';
import PageHeader from '@/components/PageHeader';
import styles from './index.module.less';

export default function Header({ scroller }: { scroller: ReactElement }) {
  return <PageHeader scroller={scroller} immersive={true} >
    <div className={styles.wrap}>
      <div className={styles.title}>我的博客</div>
    </div>
  </PageHeader>
}