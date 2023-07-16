import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(<Article />, document.querySelector('#root'));