import React, { useRef } from 'react';
import Header from './components/Header';
import Floor from '@/components/Floor';
import UserInfo from './components/UserInfo';
import Experience from './components/Experience';
import Expert from './components/Expert';
import ProjectInfo from './components/ProjectInfo';
import ProjectList from './components/ProjectList';
import Achievement from './components/Achievement';
import Footer from './components/Footer';
import { data } from '@/data';
import Modal from "@/components/PromisifyModal";
import style from './index.module.less'

export default function Home() {
  const scroller = useRef(null);

  return <Modal.Provider>
    <div className={style.home} ref={scroller}>
      <Header scroller={scroller} immersive></Header>
      <UserInfo user={data.user} />
      <Floor title='专业技能'>
        <Expert data={data.expert} />
      </Floor>
      <Floor title='学习工作经历'>
        <Experience data={data.experience} />
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
    </div>
  </Modal.Provider>
}