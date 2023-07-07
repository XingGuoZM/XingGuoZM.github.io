
import React, { useState } from 'react'
import Card, { CardTypeEnum } from '../Card';
import Countdown from '../Countdown';
import Marquee from '../Marquee';
import Floater from '../Floater';
import Modal from '../Modal';
import './index.less';

const RegisterComList = [
  { name: '倒计时', Comp: Countdown },
  { name: '跑马灯', Comp: Marquee },
  { name: '命令式弹窗', Comp: Modal },
  { name: '悬浮球', Comp: Floater },
]

export default function Achievement() {

  return <Card type={CardTypeEnum.Large}>
    <div className='achievement'>
      <div className='achievement-title'>react 组件库</div>
      <div className='achievement-content-wrap'>
        {RegisterComList.map(item => <div className='achievement-content' key={item.name}>
          <div className='achievement-label'>{item.name}</div>
          <div className='achievement-value'>{item.Comp()}</div>
        </div>)}
      </div>
    </div>
    <div className='achievement'>
      <div className='achievement-title'>技术总结blog</div>
      <div>
        <div className='achievement-content-wrap'>
          <a>关于原型链</a>
          <a>关于作用域</a>
        </div>
      </div>
    </div>
  </Card>
}