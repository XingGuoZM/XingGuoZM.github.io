import React, { useState } from 'react';
import checkedIcon from '@/assets/check.svg';
import { setBodyStyleProperty, LocalStorageKey } from '@/utils';
import promiseModal from '@/components/PromisifyModal';
import Modal from '../Modal';
import styles from "./index.module.less";

interface ITheme {
  id: string;
  value: string;
}
interface IProps {
  data: ITheme[];
}

export default function SettingModal({ data }: IProps) {
  const [theme, setTheme] = useState(localStorage.getItem(LocalStorageKey.ThemeColor));
  const handleSetting = (item: ITheme) => {
    if (item.id === 'white') {
      setBodyStyleProperty('color', '#000');
    } else {
      setBodyStyleProperty('color', item.value);
    }
    setBodyStyleProperty(LocalStorageKey.ThemeColor, item.value);
    localStorage.setItem(LocalStorageKey.ThemeColor, item.value);
    setTheme(item.value);
  }
  const handleComfirm = () => {
    promiseModal.hide(SettingModal);
  }
  return (
    <Modal>
      <div className={styles.title}>设置</div>
      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.label}>主题换肤</div>
          <div className={styles.value}>
            {data.map(item => (
              <div
                className={styles.valueItem}
                style={{ backgroundColor: item.value }}
                onClick={() => handleSetting(item)}
              >
                {item.value === theme && <img src={checkedIcon} className={styles.valueItemActive} />}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.btnWrap}>
        <div className={styles.btn} onClick={handleComfirm}>确定</div>
      </div>
    </Modal>
  );
}
