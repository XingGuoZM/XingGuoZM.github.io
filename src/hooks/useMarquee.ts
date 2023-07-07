import { useState, useRef, useCallback } from "react";

function useMarquee({ data, listRef, wrapRef }) {
  const [transform, setTransform] = useState("none");
  const [transition, setTransition] = useState("none");
  const durationRef = useRef();
  const delayRef = useRef();
  const countRef = useRef(0);

  const move = useCallback(
    (duration) => {
      let height = 0;
      const element = listRef.current?.children[0];
      height = element.offsetHeight;
      setTransform(`translateY(-${height}px)`);
      setTransition(`transform ${duration / 1000}s linear`);
    },
    [listRef]
  );
  const reset = useCallback(() => {
    countRef.current += 1;
    setTransform("none");
    setTransition("none");
  }, []);
  const start = useCallback(
    ({ delay, duration }) => {
      if (!listRef.current?.children[0] || data.length < 4) {
        return;
      }
      const viewHeight = wrapRef.current?.offsetHeight;
      const element = listRef.current?.children[0];
      const itemHeight = element.offsetHeight;
      const num = Math.floor(Number(viewHeight) / itemHeight) + 1;
      if (countRef.current >= data.length - num) {
        // return;
        countRef.current = 0;
      }
      window.clearTimeout(delayRef.current);
      delayRef.current = window.setTimeout(() => {
        move(duration);
        window.clearTimeout(durationRef.current);
        durationRef.current = window.setTimeout(reset, duration);
        start({ delay, duration });
      }, delay);
    },
    [data.length, listRef, wrapRef, move, reset]
  );
  return { start, index: countRef.current, transform, transition };
}

export default useMarquee;
