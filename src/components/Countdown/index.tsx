import React, { useState } from 'react';
import useCountdown from '../../hooks/useCountdown';

export default function Countdown() {
  const [end, setEnd] = useState(false);
  const { hours, minutes, seconds } = useCountdown(100000, () => { setEnd(true) })
  return <div className='achievement-value'>{!end && `${hours}:${minutes}:${seconds}`} {end && '倒计时已结束'}</div>
}