import React from "react";
import { IStage } from "../../../types";
import "./index.css";

export default function Pending(props: IStage) {
  const { time, name, job } = props;

  return (
    <div className="pendingStep">
      <div className='pendingStepDot' />
      <div className="pendingStepImage">{time}</div>
      <div className='pendingStepDesc'>{name}</div>
      {job && <div className='pendingStepJob'>{job}</div>}
    </div>
  );
}
