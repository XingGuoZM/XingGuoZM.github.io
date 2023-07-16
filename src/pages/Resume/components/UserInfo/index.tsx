import React from 'react';
import { AvatarSvg } from '@/assets';
import { data } from '@/data';
import styles from './index.module.less';

export default function UserInfo() {
  return <div className={styles.wrap}>
    <div className={styles.avatarWrap}>
      <AvatarSvg className={styles.avatar} />
    </div>
    <div className={styles.item} >
      <div>{data.userInfo.value}</div>
    </div>
  </div>
}