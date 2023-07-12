import React from 'react';
import styles from './index.module.less';

export default function PageBg({ children }) {
  return <div className={styles.wrap}>
    <div className={styles.bg}></div>
    <div className={styles.content}>
      {children}
    </div>
  </div>
}