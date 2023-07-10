import React, { useState, useMemo, useEffect } from "react";
import classnames from "classnames";
import { navbarHeight, getRpx2px, isMobile } from "../../utils";
import "./index.less";
import useEventListener from "../../hooks/useEventListener";

export default function HeaderBg ({ scroller, children }) {
  const [fullFixed, setFullFixed] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const { statusBarHeight, navBarHeight } = navbarHeight;
  const headerNormalHeight = useMemo(() => statusBarHeight + navBarHeight, [
    navBarHeight,
    statusBarHeight
  ]);
  useEventListener("scroll", () => {
    const scrollTop =
      scroller.current.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop / 50 >= 1) {
      setOpacity(1);
      setFullFixed(true);
    } else {
      setOpacity(scrollTop / 50);
      setFullFixed(false);
    }
  }, scroller);
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('fullFixed', { detail: { fullFixed } }))
  }, [fullFixed])

  return (
    <div
      className={classnames("page-header-bg", "page-header-fixed")}
      style={{
        height: `${getRpx2px(headerNormalHeight)}px`,
        opacity
      }}
    >{children}</div>
  );
}
