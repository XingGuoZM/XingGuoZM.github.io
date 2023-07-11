import React, { useRef } from "react";
import useStageProgress from "@/hooks/useProgressStage";
import Progress from "@/components/Progress";
import useElementScroll from "@/hooks/useElementScroll";
import ExperienceNode from './ExperienceNode';
import styles from "./index.module.less";

export default function Experience({ data }) {
  const { stageList } = data;
  // 节点间距
  const range = new Array(stageList.length).fill(5);
  // 节点间进度条粗细
  const stroke = new Array(stageList.length).fill(0.1);
  // 计算滚动距离
  const targetId = "4";
  const targetIndex = stageList.findIndex((item) => item.id === targetId);
  const left = range.slice(0, targetIndex).reduce((pre, cur) => pre + cur);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { percentList } = useStageProgress(data);

  useElementScroll({ scrollRef, left });

  return (
    <div className={styles.listWrap} ref={scrollRef}>
      <div className={styles.list}>
        {stageList.map((item, index) => {
          return (
            <div className={styles.item} key={item.id}>
              <Progress
                className={styles.bar}
                barClassName={styles.barInner}
                total={`${range[index]}rem`}
                percent={percentList[index]}
                strokeWidth={`${stroke[index]}rem`}
              />
              <ExperienceNode {...item} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
