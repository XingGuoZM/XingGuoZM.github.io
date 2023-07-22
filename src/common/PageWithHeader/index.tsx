import React, { useState, ReactElement, useEffect } from 'react';
import Modal from '@/components/PromisifyModal';
import Header from '@/common/Header';
import PageContainer from '@/common/PageContainer';
import { PageType } from '@/constant';
import { getRootStyleProperty } from '@/utils';

interface IProps {
  children: ReactElement | ReactElement[];
  type: PageType
}
export default function PageWithHeader({ children, type }: IProps) {
  const [theme, setTheme] = useState(getRootStyleProperty('--theme-color'));
  return <Modal.Provider value={{ theme, setTheme }}>
    <PageContainer type={type}>
      <Header type={type} />
      {children}
    </PageContainer>
  </Modal.Provider>
}