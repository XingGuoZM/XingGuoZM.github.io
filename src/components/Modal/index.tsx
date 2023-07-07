import React from 'react';
import PromisifyModal from '../PromisifyModal';
import TestModal from './TestModal';

export default function Modal() {
  const handleClk = () => {
    PromisifyModal.show(TestModal, {})
  }
  return <div onClick={handleClk}>打开弹窗</div>
}