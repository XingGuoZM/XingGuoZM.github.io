import React from 'react';
import HeaderBg from "./HeaderBg";
import Content from "./Content";
import "./index.less";

export default function PageHeader ({ children, scroller }) {
  return (
    <div className="page-header">
      <Content>{children}</Content>
      <HeaderBg scroller={scroller} />
    </div>
  );
}
