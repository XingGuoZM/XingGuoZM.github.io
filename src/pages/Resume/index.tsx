import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import PageContainer, { PageContainerType } from '@/common/PageContainer';
import Header, { HeaderType } from '@/common/Header';
import Footer from '@/common/Footer';
import Floor from '@/components/Floor';
import UserInfo from './components/UserInfo';
import UserDetail from './components/UserDetail';
import Experience from './components/Experience';
import Expert from './components/Expert';
import ProjectInfo from './components/ProjectInfo';
import ProjectList from './components/ProjectList';
import Achievement from './components/Achievement';
import { data } from '@/data';
import Modal from "@/components/PromisifyModal";
import { viewport } from '@/utils';
import style from './index.module.less';

viewport();
function Resume() {
  const scroller = useRef(null);

  return <div className={style.home} ref={scroller}>
    <PageContainer type={PageContainerType.Resume}>
      <Header scroller={scroller} type={HeaderType.Resume} />
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
    </PageContainer>
  </div>
}

ReactDOM.render(
  <Modal.Provider>
    <Resume />
  </Modal.Provider>,
  document.querySelector('#root')
);