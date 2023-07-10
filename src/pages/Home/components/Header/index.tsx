import React from 'react';
import PageHeader from '@/components/PageHeader';
import SettingModal from "@/components/PromisifyModal/SettingModal";
import MoreIcon from '@/assets/more.svg';
import GobackIcon from '@/assets/goback.svg';
import Modal from "@/components/PromisifyModal";
import { data } from '@/data';
import './index.less';

export default function Header({ scroller }) {
  const openSettingModal = () => {
    Modal.show(SettingModal, { data: data.theme });
  }
  return <PageHeader scroller={scroller}>
    <div className='header'>
      <div className='header-goback'>
        <img className='header-goback-icon' src={GobackIcon} />
      </div>
      <div className='header-title'>{data.headTitle}</div>
      <div className='header-setting' onClick={() => openSettingModal()}>
        <img className='header-setting-icon' src={MoreIcon} />
      </div>
    </div>
  </PageHeader>
}