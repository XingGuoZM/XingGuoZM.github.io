import React, { useRef, useEffect } from 'react';
import Modal from '@/components/PromisifyModal';
import Header from './components/Header';
import ArticlePage from './components/ArticleList';
import { viewport, setBodyStyleProperty } from '@/utils';
import PageBg from './components/PageBg';
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
      <PageBg>
        <Header scroller={scroller}></Header>
        <div className={styles.article}>
          <ArticlePage />
        </div>
      </PageBg>
    </div>

  </Modal.Provider>
}