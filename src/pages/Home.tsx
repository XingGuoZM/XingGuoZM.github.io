import React, { useRef, useMemo } from 'react';
import Header from '../components/PageHeader';
import UserInfo from '../components/UserInfo';
import Experience from '../components/Experience';
import CompanyInfo from '../components/CompanyInfo';
import ProjectInfo from '../components/ProjectInfo';
import Footer from '../components/Footer';
import { data } from '../data';
import { navbarHeight, getRpx2px } from "../utils";
import './Home.css'

export default function Home() {
  const scroller = useRef(null);
  const { statusBarHeight, navBarHeight } = navbarHeight;
  const headerNormalHeight = useMemo(() => statusBarHeight + navBarHeight, [
    navBarHeight,
    statusBarHeight
  ]);
  return <div className='home' ref={scroller}>
    <Header scroller={scroller}>
      <div className='home-header' style={{ height: `${getRpx2px(headerNormalHeight)}px` }}>{data.headTitle}</div>
    </Header>
    <div style={{ marginTop: `${getRpx2px(headerNormalHeight)}px` }}>
      <UserInfo user={data.user} />
      <CompanyInfo company={data.expert} />
      <Experience />
      <ProjectInfo project={data.project} />
      <Footer />
    </div>
  </div >
}