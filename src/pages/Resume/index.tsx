import React from 'react';
import ReactDOM from 'react-dom';
import PageWithHeader from '@/common/PageWithHeader';
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
import { PageType } from '@/utils';

function Resume() {

  return <PageWithHeader type={PageType.Resume}>
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
  </PageWithHeader>
}

ReactDOM.render(<Resume />,
  document.querySelector('#root')
);