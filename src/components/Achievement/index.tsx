
import React, { useState } from 'react'
import Card, { CardTypeEnum } from '../Card';
import useCountdown from '../../hooks/useCountdown';
import './index.less';

export default function Achievement() {
  const [end, setEnd] = useState(false);
  const { hours, minutes, seconds } = useCountdown(100000, () => { setEnd(true) })
  return <Card type={CardTypeEnum.Large}>
    <div className='achievement'>
      <div className='achievement-title'>react 组件库</div>
      <div className='achievement-content'>
        <div className='achievement-label'>倒计时</div>
        <div className='achievement-value'>{`${hours}:${minutes}:${seconds}`} {end && '倒计时已结束'}</div>
      </div>
    </div>
  </Card>
}