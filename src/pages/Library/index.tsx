import React from 'react';
import ReactDOM from 'react-dom/client';
import PageContainer from '@/common/PageContainer';
import Header from '@/common/Header';
import Button, { ButtonType } from './BizLib/Button';
import SlotComp from './BizLib/Slot';
import { Slot } from './GenLib/Slot';
import GenModal from './GenLib/Modal';
import { viewport, getDeviceInfo } from '@/utils';
import { PageType } from '@/constant';
import styles from './index.module.less';

viewport();

const list = [
  {
    title: '按钮', compList: [
      () => <Button type={ButtonType.Small}>按钮</Button>,
      () => <Button type={ButtonType.Medium}>按钮</Button>,
      () => <Button type={ButtonType.Large}>按钮</Button>,
    ]
  }, {
    title: '插槽', compList: [
      () => <div><SlotComp>
        <Slot.Call name='header'><div>heelo</div></Slot.Call>
      </SlotComp>
      </div>
    ]
  }, {
    title: '弹窗',
    compList: [
      () => <div onClick={GenModal.show}>点击弹窗</div>
    ]
  }
]

if (!getDeviceInfo.isMobile) alert('当前页面不是在手机端打开,可能会会失效');

function Library() {
  return <div className={styles.libray} >
    <PageContainer type={PageType.Library}>
      <Header type={PageType.Libray} />
      <div className={styles.list}>
        {list.map((item, index) => <div className={styles.item} key={index}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.compList} key={index}>
            {item.compList.map((Comp, index) => <div className={styles.compItem} key={index}><Comp /></div>)}
          </div>
        </div>)}
      </div>
    </PageContainer>
  </div>
}


const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<Library />);