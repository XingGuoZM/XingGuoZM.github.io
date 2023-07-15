import React, { useMemo } from 'react';
import promiseModal from '@/components/PromisifyModal';
import Modal from '../Modal';
import { formatMs } from '@/utils';
import styles from "./index.module.less";

export default function FloaterModal({ title, timeRef, minTime }) {
  console.log(timeRef.current, minTime)

  const time = useMemo(() => formatMs(timeRef.current + minTime), [timeRef, minTime]);
  const handleClick = () => {
    window.location.href = 'tel:18969176324';
  }
  const handleComfirm = () => {
    promiseModal.hide(FloaterModal);
  }
  return (
    <Modal>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <div className={styles.descWrap}>
          <div className={styles.desc}>你已经浏览我的简历</div>
          <div className={styles.descMain}>{time}</div>
          <div className={styles.desc}>打个电话聊聊吧！</div>
        </div>
        <div className={styles.tel} onClick={handleClick}>189 6917 6324</div>
      </div>
      <div className={styles.btnWrap}>
        <div className={styles.btn} onClick={handleComfirm}>确定</div>
      </div>
    </Modal>
  );
}
