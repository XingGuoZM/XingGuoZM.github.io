
import React, { useState } from 'react'
import Card, { CardTypeEnum } from '@/components/Card';
import Countdown from '@/components/Countdown';
import Marquee from '@/components/Marquee';
import Floater from '@/components/Floater';
import Modal from '@/components/Modal';
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

        </div>
      </div>
    </div>
  </Card>
}