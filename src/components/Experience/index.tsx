import React, { useRef } from "react";
import useStageProgress from "../../hooks/useProgressStage";
import Progress from "../../components/Progress";
import useElementScroll from "../../hooks/useElementScroll";
import ExperienceNode from './ExperienceNode';
import "./index.css";
import { IStage } from "../../types";

const data = {
  amount: "300",
  stageList: [
    { id: "1", time: "2014.9", name: '江西财经大学 | 软件工程', status: "-1", threshold: "100" },
    { id: "2", time: "2018.6", name: '上海中电电子系统科技股份有限公司', job: 'web前端开发工程师', status: "-1", threshold: "200" },
    { id: "3", time: "2019.5", name: '武汉佰钧成信息技术有限公司', job: '前端开发工程师', status: "-1", threshold: "300" },
    { id: '4', time: '2023.4', threshold: '400' }
  ]
};


const { stageList } = data;
// 节点间距
const range = new Array(stageList.length).fill(5);
// 节点间进度条粗细
const stroke = new Array(stageList.length).fill(0.1);
// 计算滚动距离
const targetId = "4";
const targetIndex = stageList.findIndex((item: IStage) => item.id === targetId);
const left = range.slice(0, targetIndex + 1).reduce((pre, cur) => pre + cur);

export default function Experience() {
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
