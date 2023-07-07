import { useEffect, useState, useRef } from "react";
/***
 * 请在移动端查看
 */
const docWidth = document.documentElement.clientWidth;
const docHeight = document.documentElement.clientHeight;

export default function useMobileDrag(props) {
  const { targetDomRef, initX, initY } = props;
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    if (!targetDomRef?.current) {
      return;
    }

    const target = targetDomRef.current;
    const { width, height } = target.getBoundingClientRect();
    const touchmove = (e) => {
      const { clientX, clientY } = e.targetTouches[0];
      if (clientX - touchStartX.current >= docWidth - width - initX) {
        setX(docWidth - width - initX);
      } else if (clientX - touchStartX.current <= -initX) {
        setX(-initX);
      } else {
        setX(clientX - touchStartX.current);
      }
      if (clientY - touchStartY.current >= docHeight - height - initY) {
        setY(docHeight - height - initY);
      } else if (clientY - touchStartY.current <= -initY) {
        setY(-initY);
      } else {
        setY(clientY - touchStartY.current);
      }
    };
    const touchend = () => {
      window.removeEventListener("touchmove", touchmove);
      window.removeEventListener("touchend", touchend);
    };
    const touchstart = (e) => {
      e.stopPropagation();
      e.preventDefault();
      const { top, left } = target?.getBoundingClientRect();
      const { clientX, clientY } = e.targetTouches[0];
      touchStartX.current = clientX - left + initX;
      touchStartY.current = clientY - top + initY;

      window.addEventListener("touchmove", touchmove);
      window.addEventListener("touchend", touchend);
    };
    target.addEventListener("touchstart", touchstart);
    return () => {
      target.removeEventListener("touchstart", touchstart);
    };
  }, [targetDomRef, initX, initY]);
  return { x, y };
}
