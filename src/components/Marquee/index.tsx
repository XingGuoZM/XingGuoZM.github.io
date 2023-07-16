import React, { useEffect, useRef, useState } from "react";
import useMarquee from "../../hooks/useMarquee";
import "./index.less";

const testList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Marquee() {
  const listRef = useRef();
  const wrapRef = useRef();
  const [data, setData] = useState([]);
  const { start, index, transition, transform } = useMarquee({
    data,
    listRef,
    wrapRef
  });
  useEffect(() => {
    setData(testList.concat(testList.slice(0, 4)));
  }, []);
  useEffect(() => {
    start({ delay: 3000, duration: 500 });
  }, [start]);
  return (
    <div className="marquee" ref={wrapRef}>
      <div ref={listRef} style={{ transform, transition }}>
        {[0, 1].map((domItem) => (
          <div className="marquee-item" key={domItem}>
            {data[domItem + index]}
          </div>
        ))}
      </div>
    </div>
  );
}
