import React, { useRef } from 'react';
import Modal from '@/components/PromisifyModal';
import Header from './components/Header';
import TabList from './components/TabList';
import styles from './index.module.less';

export default function Blog() {
  const scroller = useRef(null);
  return <Modal.Provider>
    <div className={styles.wrap} ref={scroller}>
      <Header scroller={scroller}></Header>
      <div className={styles.content}>
        <TabList />
      </div>
    </div>
  </Modal.Provider>
}