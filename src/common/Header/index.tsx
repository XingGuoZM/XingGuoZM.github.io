import React, { useEffect, useRef } from 'react';
import PageHeader from '@/components/PageHeader';
import SettingModal from "@/components/PromisifyModal/SettingModal";
import MoreIcon from '@/assets/more.svg';
import GobackIcon from '@/assets/goback.svg';
import Modal from "@/components/PromisifyModal";
import { data } from '@/data';
import { PageType } from '@/utils';
import styles from './index.module.less';

interface IProps {
  type: PageType;
}
export const HeaderTitleMap = {
  [PageType.Resume]: '我的简历',
  [PageType.Blog]: '我的博客',
  [PageType.Article]: '我的文章',
  [PageType.Library]: '我的组件库',
}

export default function Header({ type }: IProps) {
  // const [fixed, setFixed] = useState(false);
  const handleGoback = () => {
    window.location.href = `https://xingguozm.github.io?backurl=${window.location.href}`
  }
  const openSettingModal = () => {
    Modal.show(SettingModal, { data: data.theme });
  }
  // useEffect(() => {
  //   window.addEventListener('fullFixed', (e) => {
  //     setFixed(e.detail.fullFixed);
  //   })
  // }, [])


  return <PageHeader immersive={true} scroller='#J-Container'>
    <div className={styles.header}>
      <div className={styles.goback} onClick={handleGoback}>
        <img className={styles.gobackIcon} src={GobackIcon} />
      </div>
      <div className={styles.title}>{HeaderTitleMap[type]}</div>
      <div className={styles.setting} onClick={openSettingModal}>
        <img className={styles.settingIcon} src={MoreIcon} />
      </div>
    </div>
  </PageHeader>
}