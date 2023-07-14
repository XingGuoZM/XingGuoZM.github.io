import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PageContainer from '@/common/PageContainer';
import Header from '@/common/Header';
import Button, { ButtonType } from '@/components/Button';
import { viewport, PageType, getDeviceInfo } from '@/utils';
import styles from './index.module.less';

viewport();

const list = [
  {
    title: '按钮', compList: [
      () => <Button type={ButtonType.Small} effect={false} >按钮</Button>,
      () => <Button type={ButtonType.Medium} onClick={() => alert(111)}>按钮</Button>,
      () => <Button type={ButtonType.Large}>按钮</Button>,
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
            {item.compList.map((Comp, index) => <div className={styles.compItem}><Comp key={index} /></div>)}
          </div>
        </div>)}
      </div>
    </PageContainer>
  </div>
}


ReactDOM.render(
  <Library />,
  document.querySelector('#root')
);