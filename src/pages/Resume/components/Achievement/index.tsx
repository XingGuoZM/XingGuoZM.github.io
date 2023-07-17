
import React, { useContext } from 'react'
import Card, { CardTypeEnum } from '@/components/Card';
import { data } from '@/data';
import { BlogSvg, GithubSvg, LibrarySvg, DemonstrationSvg } from '@/assets';
import { ModalContext } from '@/components/PromisifyModal';
import styles from './index.module.less';

export default function Achievement() {
  const { theme } = useContext(ModalContext);
  const handleClick = (url: string) => {
    if (url) {
      window.location.href = url;
    }
  }
  const IconMap = {
    blog: BlogSvg,
    github: GithubSvg,
    library: LibrarySvg,
    demonstration: DemonstrationSvg,

  }
  return <div className={styles.wrap}>
    <Card type={CardTypeEnum.Tiny} data={data.achievement}>
      {(item) => <div className={styles.tiny} onClick={() => handleClick(item.url)}>
        <div className={styles.iconWrap}>
          {IconMap[item.id] && IconMap[item.id]({ className: styles.icon, fill: theme })}
        </div>

        <div className={styles.title}>
          {item.title}
        </div>
        {item.subTitle && <div className={styles.subTitle}>{item.subTitle}</div>}
      </div>}
    </Card>
  </div>
}