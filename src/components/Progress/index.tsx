import React, { useRef } from "react";
import classnames from "classnames";
import useProgressBehavior, { IProps } from "../../hooks/useProgressBehavior";
import "./index.less";

function Progress(props: IProps) {
  const { children, className, barClassName } = props;
  const bar = useRef<HTMLDivElement>(null);
  const { barStyle, style } = useProgressBehavior({
    ...props,
    target: bar.current
  });

  return (
    <div className={classnames("progress", className)} style={style}>
      <div
        className={classnames("progress-bar", barClassName)}
        ref={bar}
        style={barStyle}
      />
      {children}
    </div>
  );
}
export default Progress;
