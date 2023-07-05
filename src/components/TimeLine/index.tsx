import React, {
  createRef,
  RefObject,
  useEffect,
  useRef,
  useState
} from "react";
import useStageProgress from "../../hooks/useProgressStage";
import Progress from "../../components/Progress";
import { DirectionEnum } from "../../constant";

import Done from './Done';
import "./index.css";

export default function StepProgressDemo({ project }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { stageList } = project;
  const { percentList } = useStageProgress(project);
  const strokeList = new Array(stageList.length).fill("10px");

  return (
    <div className="timeLineDemo">
      <div className="timeLineListWrap" ref={scrollRef}>
        <div className="timeLineList">
          {stageList.map((item, index) => {
            return (
              <div className="timeLineItemWrap" key={item.projectName}>
                <Progress
                  className="timeLineItemBar"
                  barClassName="timeLineItemBarInner"
                  direction={DirectionEnum.Column}
                  percent={percentList[index]}
                  strokeWidth={strokeList[index]}
                />
                <div className="timeLineItem">
                  <Done {...item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
