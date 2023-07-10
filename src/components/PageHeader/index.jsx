import React from 'react';
import HeaderBg from "./HeaderBg";
import Content from "./Content";
import "./index.less";

export default function PageHeader ({ children, scroller, immersive = false }) {
  return (
    <div className="page-header">
      {!immersive && <Content>{children}</Content>}
      <HeaderBg scroller={scroller}>{immersive && children}</HeaderBg>
    </div>
  );
}
