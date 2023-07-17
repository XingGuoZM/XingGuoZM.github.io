import React, { useRef } from "react";
// import useStageProgress from "../../hooks/useProgressStage";
import Progress from "@/components/Progress";
import { DirectionEnum } from "@/constant";

import ProjectNode from './ProjectNode';
import styles from "./index.module.less";
import { IProject } from "@/data";
interface IProps {
  data: IProject[]
}

export default function ProjectInfo({ data }: IProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const strokeList = new Array(data.length).fill("0.1rem");

  return (
    <div className={styles.wrap}>
      <div className={styles.list} ref={scrollRef}>
        {data.map((item: IProject, index: number) => {
          return (
            <div className={styles.itemWrap} key={item.projectName}>
              <Progress
                className={styles.itemBar}
                barClassName={styles.itemBarInner}
                direction={DirectionEnum.Column}
                percent={0}
                strokeWidth={strokeList[index]}
              />
              <div className={styles.item}>
                <ProjectNode {...item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
