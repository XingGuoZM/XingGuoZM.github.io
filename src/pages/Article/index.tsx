import React from 'react';
import ReactDOM from 'react-dom/client';
import ArticlePage from './components/ArticleList';
import PageWithHeader from '@/common/PageWithHeader';
import { PageType } from '@/constant';
import styles from './index.module.less';

function Article() {
  return <PageWithHeader type={PageType.Article}>
    <div className={styles.article}>
      <ArticlePage />
    </div>
  </PageWithHeader>
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Article />)