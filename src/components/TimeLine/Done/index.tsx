import React from "react";
import { IStage } from "../../../types";
import "./index.css";

export default function Done({ title, desc, resultList }: IStage) {
  return (
    <div className="done">
      <div className="doneIcon" />
      <div className="doneContent">
        <div className='doneTitle'>{title}</div>
        <div className="doneDesc">{desc}</div>
        <div className='doneResultWrap'>
          {resultList?.map(item => <div className="doneResult">{item}</div>)}
        </div>
      </div>
    </div>
  );
}
