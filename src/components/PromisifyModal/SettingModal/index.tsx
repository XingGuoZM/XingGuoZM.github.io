import React, { useState } from 'react';
import checkedIcon from '../../../assets/check.svg';
import { setBodyStyleProperty } from '@/utils';
import "./index.less";
import Modal from '@/components/PromisifyModal';

export default function SettingModal({ data }) {
  const [theme, setTheme] = useState(localStorage.getItem('--theme-color'));
  const handleSetting = (item) => {
    if (item.id === 'white') {
      setBodyStyleProperty('color', '#000');
    } else {
      setBodyStyleProperty('color', item.value);
    }
    setBodyStyleProperty('--theme-color', item.value);
    localStorage.setItem('--theme-color', item.value);
    setTheme(item.value);
  }
  const handleComfirm = () => {
    Modal.hide(SettingModal);
  }
  return (
    <div className="setting-modal">
      <div className='setting-bg' />
      <div className="setting-content">
        <div className='setting-title'>设置</div>
        <div className='setting-item'>
          <div className="setting-label">主题换肤</div>
          <div className='setting-value'>
            {data.map(item => (
              <div
                className='setting-value-item'
                style={{ backgroundColor: item.value }}
                onClick={() => handleSetting(item)}
              >
                {item.value === theme && <img src={checkedIcon} className='setting-value-item-active' />}
              </div>
            ))}
          </div>
        </div>
        <div className='setting-btn-wrap'>
          <div className='setting-btn' onClick={handleComfirm}>确定</div>
        </div>
      </div>
    </div>
  );
}
