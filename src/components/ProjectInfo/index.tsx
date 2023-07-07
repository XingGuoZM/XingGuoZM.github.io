import React, { useRef } from "react";
// import useStageProgress from "../../hooks/useProgressStage";
import Progress from "../Progress";
import { DirectionEnum } from "../../constant";

import ProjectNode from './ProjectNode';
import "./index.less";
import { IProject } from "../../data";
interface IProps {
  data: IProject[]
}

export default function ProjectInfo({ data }: IProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const strokeList = new Array(data.length).fill("0.1rem");

  return (
    <div className="project-list-wrap">
      <div className="project-list" ref={scrollRef}>
        {data.map((item: IProject, index: number) => {
          return (
            <div className="project-item-wrap" key={item.projectName}>
              <Progress
                className="project-item-bar"
                barClassName="project-item-bar-inner"
                direction={DirectionEnum.Column}
                percent={100}
                strokeWidth={strokeList[index]}
              />
              <div className="project-item">
                <ProjectNode {...item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
