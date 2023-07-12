import React from 'react';
import TabList from '@/components/TabList';
import Card, { CardTypeEnum } from '@/components/Card';
import styles from './index.module.less';

const tabListData = [{
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

export default function BlogTabList() {
  return <div className={styles.tablistWrap}>
    <TabList data={tabListData}
      renderTabCell={(cell) => <div className={styles.tab}>{cell.tabTitle}</div>}
      renderListCell={(cell) => <div className={styles.list}>
        <Card type={CardTypeEnum.Large} data={cell.tabData}>
          {(item) => {
            return <div className={styles.content} key={item.name}>
              <div className={styles.label}>{item.name}</div>
            </div>
          }}
        </Card>
      </div>}
    />
  </div>
}