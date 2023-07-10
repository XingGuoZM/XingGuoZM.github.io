import React, { useState } from 'react';
import checkedIcon from '../../../assets/check.svg';
import setBodyStyleProperty from '../../../utils/setBodyStyleProperty';
import "./index.less";
import Modal from '@/components/PromisifyModal';

export default function SettingModal({ data }) {
  const [theme, setTheme] = useState(localStorage.getItem('--theme-color'));
  const handleSetting = (item) => {
    setBodyStyleProperty('--theme-color', item);
    localStorage.setItem('--theme-color', item);
    setTheme(item);
  }
  const handleComfirm = () => {
    Modal.hide(SettingModal);
  }
  return (
    <div className="setting-modal">
      <div className="setting-content">
        <div className='setting-title'>设置</div>
        <div className='setting-item'>
          <div className="setting-label">主题换肤</div>
          <div className='setting-value'>
            {data.map(item => (
              <div
                className='setting-value-item'
                style={{ backgroundColor: item }}
                onClick={() => handleSetting(item)}
              >
                {item === theme && <img src={checkedIcon} className='setting-value-item-active' />}
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
