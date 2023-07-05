import React, { useState, useMemo } from "react";
import classnames from "classnames";
import { navbarHeight, getRpx2px } from "../../utils";
import "./index.css";
import useEventListener from "../../hooks/useEventListener";

const backgroundColor = "#fff";

export default function HeaderBg ({ scroller }) {
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

  return (
    <div
      className={classnames("page-header-bg", "page-header-fixed")}
      style={{
        height: `${getRpx2px(headerNormalHeight)}px`,
        backgroundColor,
        opacity
      }}
    />
  );
}
