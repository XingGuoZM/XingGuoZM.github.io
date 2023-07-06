import React, { useRef } from "react";
import useStageProgress from "../../hooks/useProgressStage";
import Progress from "../../components/Progress";
import useElementScroll from "../../hooks/useElementScroll";
import ExperienceNode from './ExperienceNode';
import "./index.css";
import { IStage } from "../../types";

export default function Experience({ data }) {
  const { stageList } = data;
  // 节点间距
  const range = new Array(stageList.length).fill(5);
  // 节点间进度条粗细
  const stroke = new Array(stageList.length).fill(0.1);
  // 计算滚动距离
  const targetId = "4";
  const targetIndex = stageList.findIndex((item: IStage) => item.id === targetId);
  const left = range.slice(0, targetIndex + 1).reduce((pre, cur) => pre + cur);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { percentList } = useStageProgress(data);

  const onComplete = () => {
    console.log("step progress scroll completed");
  };

  useElementScroll({ scrollRef, left, onComplete });

  return (
    <div className="experienceListWrap" ref={scrollRef}>
      <div className="experienceList">
        {stageList.map((item, index) => {
          return (
            <div className="experienceWrap" key={item.id}>
              <Progress
                className="experienceBar"
                barClassName="experienceBarInner"
                total={`${range[index]}rem`}
                percent={percentList[index]}
                strokeWidth={`${stroke[index]}rem`}
              />
              <ExperienceNode {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
