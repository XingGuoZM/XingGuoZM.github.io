import React from 'react';
import Modal from '@/components/PromisifyModal';
import "./index.less";

export default function TestModal() {
  const handleComfirm = () => {
    Modal.hide(TestModal);
  }
  return (
    <div className="test-modal">
      <div className="test-content">
        <div className='test-title'>测试弹窗</div>
        <div className='test-item'>
          test modal
        </div>
        <div className='test-btn-wrap'>
          <div className='test-btn' onClick={handleComfirm}>确定</div>
        </div>
      </div>
    </div>
  );
}
