import React, { useRef, useEffect } from 'react';
import PageBg from './components/PageBg';
import Header from './components/Header';
import Floor from '@/components/Floor';
import UserInfo from './components/UserInfo';
import UserDetail from './components/UserDetail';
import Experience from './components/Experience';
import Expert from './components/Expert';
import ProjectInfo from './components/ProjectInfo';
import ProjectList from './components/ProjectList';
import Achievement from './components/Achievement';
import Footer from './components/Footer';
import { data } from '@/data';
import Modal from "@/components/PromisifyModal";
import { viewport, setBodyStyleProperty } from '@/utils';
import style from './index.module.less';

viewport();
export default function Resume() {
  const scroller = useRef(null);
  useEffect(() => {
    const theme = localStorage.getItem('--theme-color');
    theme && setBodyStyleProperty('--theme-color', theme);
    // setBodyStyleProperty('background-color', theme)
    setBodyStyleProperty('color', '#fff');
  }, [])
  return <Modal.Provider>
    <div className={style.home} ref={scroller}>
      <PageBg>
        <Header scroller={scroller} />

        <UserInfo data={data.userInfo} />
        <Floor>
          <Experience data={data.experience} />
        </Floor>
        <Floor>
          <UserDetail data={data.userDetail} />
        </Floor>
        <Floor title='专业技能'>
          <Expert data={data.expert} />
        </Floor>
        <Floor title='重点项目'>
          <ProjectInfo data={data.project} />
        </Floor>
        <Floor title='项目列表'>
          <ProjectList data={data.projectList} />
        </Floor>
        <Floor title='作品展示'>
          <Achievement />
        </Floor>
        <Footer />
      </PageBg>
    </div>
  </Modal.Provider>
}