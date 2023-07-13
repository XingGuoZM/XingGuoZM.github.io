import React from 'react';
import { AvatarSvg } from '@/assets';
import styles from './index.module.less';

export default function UserInfo({ data }) {

  return <div className={styles.wrap}>
    <div className={styles.avatarWrap}>
      {/* <img className={styles.avatar} src={AvatarIcon} /> */}
      <AvatarSvg className={styles.avatar} />
    </div>
    <div className={styles.item} >
      <div>{data.value}</div>
    </div>
  </div>
}