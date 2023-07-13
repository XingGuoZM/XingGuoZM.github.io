import React from "react";
import { IProject } from '@/data';
import classnames from 'classnames';
import styles from "./index.module.less";

const iconFillColor = localStorage.getItem('--theme-color');

export default function ProjectNode({ projectName, projectTime, projectRole, projectDetail }: IProject) {

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
              <item.Icon fill={iconFillColor} className={styles.projectDescIcon} />
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
