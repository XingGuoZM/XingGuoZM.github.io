

import React from 'react';
import './index.css'

export default function Card({ title, children }) {
  return <div className='card-wrap'>
    {title && <div className='card-title'>{title}</div>}
    <div className='card-content'>
      {children}
    </div>
  </div>
}