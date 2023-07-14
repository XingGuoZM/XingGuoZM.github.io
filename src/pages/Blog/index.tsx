import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Modal from '@/components/PromisifyModal';
import Header, { HeaderType } from '@/common/Header';
import PageContainer, { PageContainerType } from '@/common/PageContainer';
import BlogCarousel from './components/BlogCarousel';
import BlogTabList from './components/BlogTabList';

import styles from './index.module.less';
import { viewport } from '@/utils';
viewport();

function Blog() {
  const scroller = useRef(null);

  return <div className={styles.wrap} ref={scroller}>
    <PageContainer type={PageContainerType.Blog}>
      <Header scroller={scroller} type={HeaderType.Blog} />
      <BlogCarousel />
      <BlogTabList />
    </PageContainer>
  </div>
}

ReactDOM.render(
  <Modal.Provider><Blog /></Modal.Provider>,
  document.querySelector('#root')
);