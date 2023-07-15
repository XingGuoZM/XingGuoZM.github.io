import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import Modal from "@/components/PromisifyModal";
import FloaterModal from "@/components/Modal/FloaterModal";
import { AvatarSvg } from '@/assets';
import styles from './index.module.less';

export default function Floater() {
  const [show, setShow] = useState(false);
  const theme = localStorage.getItem('--theme-color');
  const openModal = () => {
    Modal.show(FloaterModal, { title: '关于我' });
  }
  useEffect(() => {
    window.addEventListener('fullFixed', (e) => {
      setShow(e.detail.fullFixed)
    })
  }, []);
  return <div className={classnames({
    [styles.ball]: true,
    [styles.showBall]: show,
    [styles.hideBall]: !show,
  })} onClick={openModal}>
    <AvatarSvg className={styles.icon} fill={theme} />
    <div className={styles.title}>关于我</div>
  </div>
}