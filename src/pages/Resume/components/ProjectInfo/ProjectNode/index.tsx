import React, { useContext } from "react";
import { IProject } from '@/data';
import { ProjectSvg, DateSvg, AvatarSvg } from '@/assets';
import classnames from 'classnames';
import promiseModal from '@/components/PromisifyModal'
import styles from "./index.module.less";

export default function ProjectNode({ projectName, projectTime, projectRole, projectDetail }: IProject) {

  const { theme } = useContext(promiseModal.ModalContext);

  return (
    <div className={styles.project}>
      <div className={styles.projectIconWrap} >
        <ProjectSvg className={styles.projectIcon} />
      </div>
      <div className={styles.projectContent}>
        <div className={styles.titleWrap}>
          <div className={styles.title}>{projectName}</div>
          <div className={styles.subTitle}>
            <DateSvg className={styles.subTitleIcon} fill={theme} />
            <div className={styles.subTitleText}>{projectTime}</div>
            <div className={styles.subTitleText}>｜</div>
            <AvatarSvg className={styles.subTitleIcon} fill={theme} />
            <div className={styles.subTitleText}>{projectRole}</div>
          </div>
        </div>
        {projectDetail.map((item, index) => {
          return <div className={styles.projectDescWrap} key={item.id}>
            <div className={styles.projectDescIconWrap}>
              <item.Icon fill={theme} className={styles.projectDescIcon} />
            </div>
            <div className={classnames({
              [styles.projectDescLine]: index !== 3,
              [styles.projectDesc]: true
            })}>
              {Array.isArray(item.desc) ? item.desc.map(ele => <div key={ele}>{ele}</div>) : item.desc}
            </div>
          </div>
        })}
      </div>
    </div>
  );
}
