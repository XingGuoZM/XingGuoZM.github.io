import React, { useEffect, useState } from 'react';
import PageHeader from '@/components/PageHeader';
import SettingModal from "@/components/PromisifyModal/SettingModal";
import MoreIcon from '@/assets/more.svg';
import GobackIcon from '@/assets/goback.svg';
import Modal from "@/components/PromisifyModal";
import classnames from 'classnames';
import { data } from '@/data';
import './index.less';

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
      // console.log(e.detail.fullFixed)
      setFixed(e.detail.fullFixed);
    })
  }, [])
  return <PageHeader scroller={scroller} immersive={true}>
    <div className={classnames({ ['header']: true })}>
      <div className='header-goback' onClick={handleGoback}>
        <img className='header-goback-icon' src={GobackIcon} />
      </div>
      <div className='header-title'>{data.headTitle}</div>
      <div className='header-setting' onClick={openSettingModal}>
        <img className='header-setting-icon' src={MoreIcon} />
      </div>
    </div>
  </PageHeader>
}