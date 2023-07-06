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
    <div className="projectInfo">
      <div ref={scrollRef}>
        <div className="projectList">
          {project.map((item: IProject, index: number) => {
            return (
              <div className="projectItemWrap" key={item.projectName}>
                <Progress
                  className="projectItemBar"
                  barClassName="projectItemBarInner"
                  direction={DirectionEnum.Column}
                  percent={100}
                  strokeWidth={strokeList[index]}
                />
                <div className="projectItem">
                  <ProjectNode {...item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
