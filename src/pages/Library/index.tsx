import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import PageContainer, { PageContainerType } from '@/common/PageContainer';
import Header, { HeaderType } from '@/common/Header';
import Button, { ButtonType } from '@/components/Button';
import { viewport } from '@/utils';

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

function Library() {
  const scroller = useRef(null);
  return <div className={styles.libray} ref={scroller}>
    <PageContainer type={PageContainerType.Library}>
      <Header scroller={scroller} type={HeaderType.Libray} />
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