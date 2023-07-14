import React, { ReactElement } from 'react';
import './index.less';

interface IProps {
  title?: string;
  children: ReactElement;
}

export default function Floor({ title, children }: IProps) {
  return <div className='floor'>
    {title && <div className='floor-title'>{title}</div>}
    {children}
  </div>
}