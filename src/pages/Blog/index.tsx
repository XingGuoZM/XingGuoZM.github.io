import React from 'react';
import ReactDOM from 'react-dom';
import PageWithHeader from '@/common/PageWithHeader';
import BlogCarousel from './components/BlogCarousel';
import BlogTabList from './components/BlogTabList';
import { PageType } from '@/constant';
import Footer from '@/common/Footer';

ReactDOM.render(
  <PageWithHeader type={PageType.Blog}>
    <BlogCarousel />
    <BlogTabList />
    <Footer>本页面数据通过node脚本生成</Footer>
  </PageWithHeader>,
  document.querySelector('#root')
);