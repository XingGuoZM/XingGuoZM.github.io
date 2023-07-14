import React, { useRef, ReactElement, useEffect } from 'react';
import Modal from '@/components/PromisifyModal';
import Header from '@/common/Header';
import PageContainer from '@/common/PageContainer';
import { PageType } from '@/utils';

interface IProps {
  children: ReactElement | ReactElement[];
  type: PageType
}
export default function PageWithHeader({ children, type }: IProps) {

  return <Modal.Provider>
    <PageContainer type={type}>
      <Header type={type} />
      {children}
    </PageContainer>
  </Modal.Provider>
}