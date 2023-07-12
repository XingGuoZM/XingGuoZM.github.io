
import React, { useState } from 'react'
// import Card, { CardTypeEnum } from '@/components/Card';
import Countdown from '@/components/Countdown';
import Marquee from '@/components/Marquee';
import Floater from '@/components/Floater';
import Modal from '@/components/Modal';
import TabList from '@/components/TabList';
import styles from './index.module.less';

const data = [{
  tabTitle: 'react组件库',
  tabData: [
    { name: '倒计时', Comp: Countdown },
    { name: '跑马灯', Comp: Marquee },
    { name: '命令式弹窗', Comp: Modal },
    { name: '悬浮球', Comp: Floater },
  ]
}, {
  tabTitle: 'js基础',
  tabData: [{ name: '原型链' }, { name: '作用域' }, { name: '事件循环' }, { name: '' }]
}, {
  tabTitle: 'react',
  tabData: [{ name: 'hook原理' }]
}, {
  tabTitle: '性能优化',
  tabData: [{ name: 'chrome渲染原理' }]
}, {
  tabTitle: 'webpack',
  tabData: [{ name: 'webpack原理' }]
}, {
  tabTitle: 'hybrid h5',
  tabData: [{ name: 'webview' }]
}, {
  tabTitle: 'http网络',
  tabData: [{
    name: 'htt发展历程'
  }]
}, {
  tabTitle: '常用算法',
  tabData: [{
    name: '数组去重'
  }, {
    name: '二叉树遍历'
  }]
}, {
  tabTitle: '面试题',
  tabData: [{ name: '面试题汇总' }]
}]

export default function Achievement() {


  return <div className={styles.wrap}>
    {/* <Card type={CardTypeEnum.Large}></Card> */}
    <TabList
      data={data}
      renderTabCell={(cell) => <div className={styles.tab}>{cell.tabTitle}</div>}
      renderListCell={(cell) => <div className={styles.list}>
        {cell.tabData.map(item => <div className={styles.content} key={item.name}>
          <div className={styles.label}>{item.name}</div>
          {item.Comp && <div className={styles.value}>{item.Comp()}</div>}
        </div>)}
      </div>} />
  </div>
}