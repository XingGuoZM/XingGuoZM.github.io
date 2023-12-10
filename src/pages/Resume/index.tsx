import React from 'react'
import ReactDOM from 'react-dom/client'
import PageWithHeader from '@/common/PageWithHeader'
import Footer from '@/common/Footer'
import Floor from '@/components/Floor'
import UserInfo from './components/UserInfo'
import UserDetail from './components/UserDetail'
import Experience from './components/Experience'
import WorkExp from './components/WorkExp'
import Skill from './components/Skill'
import Expert from './components/Expert'
import ProjectInfo from './components/ProjectInfo'
import ProjectList from './components/ProjectList'
import Achievement from './components/Achievement'
import Floater from './components/Floater'

import Modal from '@/components/PromisifyModal'
import { ExpertModal } from './components/Modal'
import { data } from '@/data'
import { PageType } from '@/constant'

function Resume() {
  return (
    <PageWithHeader type={PageType.Resume}>
      <UserInfo />
      <Floor>
        <WorkExp />
      </Floor>
      {/* <Floor>
      <Experience />
    </Floor> */}
      <Floor>
        <UserDetail data={data.userDetail} />
      </Floor>
      <Floor title="专业技能">
        <Skill />
      </Floor>

      {/* <Floor
      title='专业技能'
      more='更多技能'
      moreClk={() => Modal.show(ExpertModal, { title: '更多技能' })}
    >
      <Expert data={data.expert} />
    </Floor> */}
      <Floor title="重点项目">
        <ProjectInfo data={data.project} />
      </Floor>
      <Floor title="项目列表">
        <ProjectList data={data.projectList} />
      </Floor>
      <Floor title="作品展示">
        <Achievement />
      </Floor>
      <Floater />
      <Footer>感谢你花时间阅读我的简历，期待能有机会与你共事。</Footer>
    </PageWithHeader>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<Resume />)
