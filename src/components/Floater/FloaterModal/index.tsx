import React, { useRef } from 'react';
import useMobileDrag from "../../../hooks/useMobileDrag";
import Modal from '../../PromisifyModal';
import "./index.less";

export default function FloaterModal() {
  const targetDomRef = useRef();
  const initX = 0;
  const initY = 0;
  const { x, y } = useMobileDrag({ targetDomRef, initX, initY });
  const handleComfirm = () => {
    Modal.hide(FloaterModal);
  }
  return (
    <div className="floater-modal">
      <div className="floater-content">
        <div className='floater-title'>测试悬浮球</div>
        <div className="floater-wrap">
          <div
            className="floater"
            ref={targetDomRef}
            style={{
              position: "absolute",
              top: `${initY}px`,
              left: `${initX}px`,
              transform: `translate(${x}px,${y}px)`
            }}
          />
        </div>
        <div className='floater-btn-wrap'>
          <div className='floater-btn' onClick={handleComfirm}>确定</div>
        </div>
      </div>
    </div>
  );
}
