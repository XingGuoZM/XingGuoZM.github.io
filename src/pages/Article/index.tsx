import React, { useRef, useEffect } from 'react';
import Modal from '@/components/PromisifyModal';
import Header from './components/Header';
import ArticlePage from './components/ArticleList';
import { viewport } from '@/utils';
import setBodyStyleProperty from '@/utils/setBodyStyleProperty';
import styles from './index.module.less';

viewport();

export default function Article() {
  const scroller = useRef(null);
  useEffect(() => {
    const theme = localStorage.getItem('--theme-color')
    theme && setBodyStyleProperty('--theme-color', theme);
  }, [])

  return <Modal.Provider>
    <div className={styles.wrap} ref={scroller}>
      <Header scroller={scroller}></Header>
      <div className={styles.article}>
        <ArticlePage />
      </div>

    </div>
  </Modal.Provider>
}