import React from "react";
import { IProject } from '@/data';
import classnames from 'classnames';
import styles from "./index.module.less";

export default function ProjectNode({ projectName, projectTime, projectRole, projectDetail }: IProject) {

  const theme = localStorage.getItem('--theme-color');

  return (
    <div className={styles.project}>
      <div className={styles.projectIcon} />
      <div className={styles.projectContent}>
        <div className={styles.projectTitle}>
          <div className={styles.projectName}>{projectName}</div>
          <div className={styles.projectTime}>{projectTime}｜{projectRole}</div>
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
