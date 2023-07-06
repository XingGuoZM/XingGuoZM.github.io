import React from "react";
import { IStage } from "../../../types";
import "./index.less";

export default function Experience(props: IStage) {
  const { time, name, job } = props;

  return (
    <div className="experience-wrap">
      <div className='experience-dot' />
      <div className="experience-time">{time}</div>
      <div className='experience-name'>{name}</div>
      {job && <div className='experience-job'>{job}</div>}
    </div>
  );
}
