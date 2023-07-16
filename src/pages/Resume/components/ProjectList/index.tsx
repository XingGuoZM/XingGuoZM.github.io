import React, { useContext } from 'react';
import Card, { CardTypeEnum } from '@/components/Card';
import { ModalContext } from '@/components/PromisifyModal';
import { DateSvg, AvatarSvg } from '@/assets';
import styles from './index.module.less';

export default function ProjectList({ data }) {
  const { theme } = useContext(ModalContext);

  return <Card type={CardTypeEnum.Medium} data={data}>
    {
      (item) => {
        return <div className={styles.wrap}>
          <div className={styles.title}>{item.projectName}</div>
          <div className={styles.subTitleWrap}>
            <DateSvg className={styles.subTitleIcon} fill={theme} />
            <div className={styles.subTitle}>{item.projectTime}</div>
          </div>
          <div className={styles.subTitleWrap}>
            <AvatarSvg className={styles.subTitleIcon} fill={theme} />
            <div className={styles.subTitle}>{item.projectRole}</div>
          </div>
          <div className={styles.desc}>{item.projectDesc} </div>
        </div>
      }
    }
  </Card>
}