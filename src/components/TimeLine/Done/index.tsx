import React from "react";
import { IStage } from "../../../types";
import "./index.css";

export default function Done({ projectName, projectTime, projectRole, desc, resultList }: IStage) {
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
