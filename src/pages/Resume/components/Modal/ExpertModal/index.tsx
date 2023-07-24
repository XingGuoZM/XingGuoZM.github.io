import React, { useMemo } from 'react';
import promiseModal from '@/components/PromisifyModal';
import Modal from '@/components/Modal/Modal';
import styles from "./index.module.less";

export default function ExpertModal({ title }) {

  const handleComfirm = () => {
    promiseModal.hide(ExpertModal);
  }
  return (
    <Modal>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <div className={styles.desc}>了解vue框架技术，有相关实践经验</div>
        <div className={styles.desc}>了解node.js和常用模块，</div>
      </div>
      <div className={styles.btnWrap}>
        <div className={styles.btn} onClick={handleComfirm}>确定</div>
      </div>
    </Modal>
  );
}
