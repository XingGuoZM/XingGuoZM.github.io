import React, { useRef, useEffect } from 'react';
import Modal from '@/components/PromisifyModal';
import Header from './components/Header';
import BlogCarousel from './components/BlogCarousel';
import BlogTabList from './components/BlogTabList';
import PageBg from './components/PageBg';
import styles from './index.module.less';

import { viewport } from '@/utils';
import setBodyStyleProperty from '@/utils/setBodyStyleProperty';

viewport();

export default function Blog() {
  const scroller = useRef(null);
  useEffect(() => {
    const theme = localStorage.getItem('--theme-color')
    theme && setBodyStyleProperty('--theme-color', theme);
  }, [])
  return <Modal.Provider>
    <div className={styles.wrap} ref={scroller}>
      <PageBg>
        <Header scroller={scroller} />
        <BlogCarousel />
        <BlogTabList />
      </PageBg>
    </div>
  </Modal.Provider>
}