import React, { useState, useMemo, useEffect } from "react";
import { navbarHeight, getRpx2px } from "@/utils";
import useEventListener from "@/hooks/useEventListener";
import classnames from "classnames";
import "./index.less";

export default function HeaderBg({ scroller, children, immersive }) {
  const [fullFixed, setFullFixed] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const { statusBarHeight, navBarHeight } = navbarHeight;
  const height = useMemo(() => {
    if (opacity === 0) {
      return 0;
    }
    return `${getRpx2px(statusBarHeight + navBarHeight)}px`
  }, [
    opacity,
    immersive,
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
      className={classnames({ ["page-header-bg"]: true, ["page-header-fixed"]: immersive })}
      style={{ height, opacity }}
    >{children}</div>
  );
}
