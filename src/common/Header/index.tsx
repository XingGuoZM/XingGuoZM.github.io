import React, { useEffect, ReactElement } from 'react';
import PageHeader from '@/components/PageHeader';
import SettingModal from "@/components/PromisifyModal/SettingModal";
import MoreIcon from '@/assets/more.svg';
import GobackIcon from '@/assets/goback.svg';
import Modal from "@/components/PromisifyModal";
import { data } from '@/data';
import { setBodyStyleProperty } from '@/utils';
import styles from './index.module.less';


interface MutableRefObject<T> {
  current: T;
}

interface IProps {
  scroller: MutableRefObject<ReactElement | null>;
  type: HeaderType;
}

export enum HeaderType {
  Resume = 'Resume',
  Blog = 'Blog',
  Article = 'Article',
  Library = 'Library',
}
export const HeaderTitleMap = {
  [HeaderType.Resume]: '我的简历',
  [HeaderType.Blog]: '我的博客',
  [HeaderType.Article]: '我的文章',
  [HeaderType.Library]: '我的组件库',
}

export default function Header({ scroller, type }: IProps) {
  // const [fixed, setFixed] = useState(false);
  const handleGoback = () => {
    window.location.href = `https://xingguozm.github.io?backurl=${window.location.href}`
  }
  const openSettingModal = () => {
    Modal.show(SettingModal, { data: data.theme });
  }
  useEffect(() => {
    const theme = localStorage.getItem('--theme-color');
    if (theme) {
      setBodyStyleProperty('--theme-color', theme);
      setBodyStyleProperty('color', theme);
    }
  }, [])
  // useEffect(() => {
  //   window.addEventListener('fullFixed', (e) => {
  //     setFixed(e.detail.fullFixed);
  //   })
  // }, [])
  return <PageHeader scroller={scroller} immersive={true}>
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