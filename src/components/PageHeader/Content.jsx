import React, { useMemo } from "react";
import classnames from "classnames";
import { navbarHeight, getRpx2px } from "../../utils";
import "./index.css";

export default function HeaderContent ({ children }) {
  const { statusBarHeight, navBarHeight } = navbarHeight;
  const headerNormalHeight = useMemo(() => statusBarHeight + navBarHeight, [
    navBarHeight,
    statusBarHeight
  ]);
  return (
    <div
      className={classnames({
        ["page-header-content-wrap"]: true,
        ["page-header-fixed"]: true
      })}
      style={{ height: `${getRpx2px(headerNormalHeight)}px` }}
    >
      <div className={["page-header-content"]}>{children}</div>
    </div>
  );
}
