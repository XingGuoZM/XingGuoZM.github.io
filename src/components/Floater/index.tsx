import React, { useRef } from "react";
import PromisifyModal from '@/components/PromisifyModal';
import FloaterModal from './FloaterModal';

export default function Floater() {
  const handleClk = () => {
    PromisifyModal.show(FloaterModal, {})
  }
  return (
    <div onClick={handleClk}>点击查看效果</div>
  );
}
