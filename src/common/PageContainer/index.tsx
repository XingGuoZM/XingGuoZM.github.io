import React, { useEffect, ReactElement } from 'react';
import { viewport, PageType, setBodyStyleProperty, LocalStorageKey } from '@/utils';
import './index.less';

interface IProps {
  children: ReactElement | ReactElement[];
  type: PageType
}

const ClassNameMap = {
  [PageType.Resume]: 'resumeWrap',
  [PageType.Blog]: 'blogWrap',
  [PageType.Article]: 'articleWrap',
  [PageType.Library]: 'libraryWrap',
}
viewport();
export default function PageContainer({ children, type }: IProps) {

  useEffect(() => {
    const theme = localStorage.getItem(LocalStorageKey.ThemeColor);
    if (theme) {
      setBodyStyleProperty(LocalStorageKey.ThemeColor, theme);
      setBodyStyleProperty('color', theme);
    }
  }, [])
  return <div className={ClassNameMap[type]} id='J-Container'>
    <div className='bg' />
    <div className='content'>
      {children}
    </div>
  </div>
}
