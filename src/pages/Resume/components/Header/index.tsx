import React, { useEffect, useState } from 'react';
import PageHeader from '@/components/PageHeader';
import SettingModal from "@/components/PromisifyModal/SettingModal";
import MoreIcon from '@/assets/more.svg';
import GobackIcon from '@/assets/goback.svg';
import Modal from "@/components/PromisifyModal";
import { data } from '@/data';
import styles from './index.module.less';

export default function Header({ scroller }) {
  const [fixed, setFixed] = useState(false);
  const handleGoback = () => {
    window.location.href = `https://xingguozm.github.io?backurl=${window.location.href}`
  }
  const openSettingModal = () => {
    Modal.show(SettingModal, { data: data.theme });
  }
  useEffect(() => {
    window.addEventListener('fullFixed', (e) => {
      setFixed(e.detail.fullFixed);
    })
  }, [])
  return <PageHeader scroller={scroller} immersive={true}>
    <div className={styles.header}>
      <div className={styles.goback} onClick={handleGoback}>
        <img className={styles.gobackIcon} src={GobackIcon} />
      </div>
      <div className={styles.title}>{data.headTitle}</div>
      <div className={styles.setting} onClick={openSettingModal}>
        <img className={styles.settingIcon} src={MoreIcon} />
      </div>
    </div>
  </PageHeader>
}