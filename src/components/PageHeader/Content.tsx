import React, { useMemo, useState, useEffect } from "react";
import classnames from "classnames";
import { navbarHeight, getRpx2px } from "../../utils";
import "./index.less";

export default function HeaderContent({ children, immersive }) {
  const [color, setColor] = useState('');
  const { statusBarHeight, navBarHeight } = navbarHeight;
  const height = useMemo(() => {
    if (immersive) return 0;
    return `${getRpx2px(statusBarHeight + navBarHeight)}px`
  }, [
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
        ["page-header-fixed"]: !immersive,
      })}
      style={{ height, color }}
    >
      <div className="page-header-content">{children}</div>
    </div>
  );
}
