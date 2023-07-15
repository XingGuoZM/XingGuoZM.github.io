import React from 'react';
import promiseModal from '@/components/PromisifyModal';
import Modal from '../Modal';
import styles from "./index.module.less";

export default function FloaterModal({ title }) {

  const handleComfirm = () => {
    promiseModal.hide(FloaterModal);
  }
  return (
    <Modal>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>

      </div>
      <div className={styles.btnWrap}>
        <div className={styles.btn} onClick={handleComfirm}>确定</div>
      </div>
    </Modal>
  );
}
