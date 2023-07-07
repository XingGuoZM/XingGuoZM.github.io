import React from 'react';
import Card, { CardTypeEnum } from '../Card';
import './index.less';

export default function ProjectList({ data }) {
  return <Card type={CardTypeEnum.Medium} data={data}>
    {
      (item) => {
        return <div className='project-list-cell'>
          <div className='project-list-cell-title'>{item.projectName}</div>
          <div className='project-list-cell-time'>{item.projectTime}</div>
          <div className='project-list-cell-time'>{item.projectRole}</div>
          <div className='project-list-cell-desc'>{item.projectDesc} </div>
        </div>
      }
    }
  </Card>
}