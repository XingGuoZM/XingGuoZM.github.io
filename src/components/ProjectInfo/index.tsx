import React, { useRef } from "react";
// import useStageProgress from "../../hooks/useProgressStage";
import Progress from "../Progress";
import { DirectionEnum } from "../../constant";

import ProjectNode from './ProjectNode';
import "./index.less";
import { IProject } from "../../data";
interface IProps {
  project: IProject[]
}

export default function ProjectInfo({ project }: IProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const strokeList = new Array(project.length).fill("10px");

  return (
    <div className="project-list-wrap">
      <div className="project-list" ref={scrollRef}>
        {project.map((item: IProject, index: number) => {
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
