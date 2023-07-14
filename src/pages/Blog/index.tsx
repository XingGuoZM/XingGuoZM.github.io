import React from 'react';
import ReactDOM from 'react-dom';
import PageWithHeader from '@/common/PageWithHeader';
import BlogCarousel from './components/BlogCarousel';
import BlogTabList from './components/BlogTabList';
import { PageType } from '@/utils';

ReactDOM.render(
  <PageWithHeader type={PageType.Blog}>
    <BlogCarousel />
    <BlogTabList />
  </PageWithHeader>,
  document.querySelector('#root')
);