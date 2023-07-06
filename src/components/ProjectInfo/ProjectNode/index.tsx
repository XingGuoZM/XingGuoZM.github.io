import React from "react";
import { IProject } from '../../../data';
import "./index.css";

export default function ProjectNode({ projectName, projectTime, projectRole, desc, resultList }: IProject) {
  return (
    <div className="done">
      <div className="doneIcon" />
      <div className="doneContent">
        <div className='doneTitle'>
          <div className='projectName'>{projectName}</div>
          <div className='projectTime'>{projectTime}｜{projectRole}</div>
        </div>
        <div className="doneDesc">{desc}</div>
        {resultList?.map(item => <div className="doneResult" key={item}>{item}</div>)}
      </div>
    </div>
  );
}
