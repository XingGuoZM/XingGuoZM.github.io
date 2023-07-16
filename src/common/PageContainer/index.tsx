import React, { useEffect, useContext, ReactElement } from 'react';
import { ModalContext } from '@/components/PromisifyModal';
import { viewport, setBodyStyleProperty } from '@/utils';
import { PageType, LocalStorageKey } from '@/constant';
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
  const { theme } = useContext(ModalContext);
  useEffect(() => {
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
