import React, { useRef, useMemo, useState, useEffect } from 'react';
import Header from '../components/PageHeader';
import UserInfo from '../components/UserInfo';
import Experience from '../components/Experience';
import Expert from '../components/Expert';
import ProjectInfo from '../components/ProjectInfo';
import Footer from '../components/Footer';
import { data } from '../data';
import Modal from "../components/PromisifyModal";
import SettingModal from "../components/PromisifyModal/SettingModal";
import { navbarHeight, getRpx2px } from "../utils";
import './Home.less'
import setBodyStyleProperty from '../utils/setBodyStyleProperty';


export default function Home() {
  const scroller = useRef(null);

  const { statusBarHeight, navBarHeight } = navbarHeight;
  const headerNormalHeight = useMemo(() => statusBarHeight + navBarHeight, [
    navBarHeight,
    statusBarHeight
  ]);
  const openSettingModal = () => {
    Modal.show(SettingModal, { data: data.theme });
  }
  useEffect(() => {
    const theme = localStorage.getItem('--theme-color')
    theme && setBodyStyleProperty('--theme-color', theme);
  }, [])
  return <Modal.Provider>
    <div className='home' ref={scroller}>
      <Header scroller={scroller}>
        <div className='home-header' style={{ height: `${getRpx2px(headerNormalHeight)}px` }}>
          <div>{data.headTitle}</div>
          <div className='home-setting' onClick={() => openSettingModal()}>设置</div>
        </div>
      </Header>
      <div style={{ marginTop: `${getRpx2px(headerNormalHeight)}px` }}>
        <UserInfo user={data.user} />
        <Expert data={data.expert} />
        <Experience data={data.experience} />
        <ProjectInfo project={data.project} />
        <Footer />
      </div>
    </div>
  </Modal.Provider>
}