import React from "react";
import Arrow from '@/assets/arrow.svg';
import styles from "./index.module.less";

export default function Experience(props) {
  const { time, name, job } = props;

  return (
    <div className={styles.wrap}>
      <div className={styles.iconWrap}>
        <img className={styles.icon} src={Arrow} />
      </div>

      <div className={styles.time}>{time}</div>
      <div className={styles.name}>{name}</div>
      {job && <div className={styles.job}>{job}</div>}
    </div>
  );
}
