import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from '@/components/PromisifyModal';
import Header from '@/common/Header';
import ArticlePage from './components/ArticleList';
import { viewport, setBodyStyleProperty } from '@/utils';
import PageContainer, { PageContainerType } from '@/common/PageContainer';
import styles from './index.module.less';

viewport();

function Article() {
  const scroller = useRef(null);
  useEffect(() => {
    const theme = localStorage.getItem('--theme-color')
    theme && setBodyStyleProperty('--theme-color', theme);
  }, [])

  return <Modal.Provider>
    <div className={styles.wrap} ref={scroller}>
      <PageContainer type={PageContainerType.Article}>
        <Header scroller={scroller}></Header>
        <div className={styles.article}>
          <ArticlePage />
        </div>
      </PageContainer>
    </div>
  </Modal.Provider>
}

ReactDOM.render(
  <Article />,
  document.querySelector('#root')
);