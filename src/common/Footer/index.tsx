import React from 'react';
import styles from './index.module.less';

export default function Footer({ children }) {
  return <div className={styles.footer}>
    {children}
  </div>
}