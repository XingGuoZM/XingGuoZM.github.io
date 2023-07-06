import React from 'react';
import Card from '../Card';
import './index.css';

export default function UserInfo(props) {

  return <div className='user-wrap'>
    <Card>
      <div className='user-item-wrap'>
        {props.user.map(item => {
          return <div className='user-item' key={item.label}>
            {item.label && <div className='user-label'>{item.label}：</div>}
            {item.href ? <a href={item.href}>{item.value}</a> : <div className='user-value'>{item.value}</div>}
          </div>
        })}
      </div>
    </Card>
  </div>
}