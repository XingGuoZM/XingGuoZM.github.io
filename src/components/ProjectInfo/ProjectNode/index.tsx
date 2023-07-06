import React from "react";
import { IProject } from '../../../data';
import "./index.less";

export default function ProjectNode({ projectName, projectTime, projectRole, situation, task, action, resultList }: IProject) {
  return (
    <div className="project">
      <div className="project-icon" />
      <div className="project-content">
        <div className='project-title'>
          <div className='project-name'>{projectName}</div>
          <div className='project-time'>{projectTime}｜{projectRole}</div>
        </div>
        <div className='project-desc'>{situation}</div>
        <div className='project-desc'>{task}</div>
        <div className='project-desc'>{action}</div>
        {resultList?.map(item => <div className="project-result" key={item}>{item}</div>)}
      </div>
    </div>
  );
}
