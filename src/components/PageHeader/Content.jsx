import React, { useMemo, useState, useEffect } from "react";
import classnames from "classnames";
import { navbarHeight, getRpx2px } from "../../utils";
import "./index.less";

export default function HeaderContent ({ children }) {
  const [color, setColor] = useState('');
  const { statusBarHeight, navBarHeight } = navbarHeight;
  const headerNormalHeight = useMemo(() => statusBarHeight + navBarHeight, [
    navBarHeight,
    statusBarHeight
  ]);
  useEffect(() => {
    window.addEventListener('fullFixed', (e) => {
      if (e.detail?.fullFixed) {
        setColor('#fff')
      } else {
        setColor('#000');
      }
    })
  }, []);

  return (
    <div
      className={classnames({
        ["page-header-content-wrap"]: true,
        ["page-header-fixed"]: true
      })}
      style={{ height: `${getRpx2px(headerNormalHeight)}px`, color }}
    >
      <div className={["page-header-content"]}>{children}</div>
    </div>
  );
}
