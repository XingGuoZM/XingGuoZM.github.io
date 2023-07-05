import { useRef, useEffect } from "react";
import { getTargetElement } from '../utils/getTargetElement';

const useEventListener = (
  eventName: string,
  handler: () => {},
  element = document,
  options = {}
) => {
  const savedHandler = useRef();
  const { capture, passive, once } = options;

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // 需要使用的时候获取ref里的dom值
      const targetElement = getTargetElement(element.current, window);
      if (!targetElement?.addEventListener) return;

      const opts = { capture, passive, once };
      const eventListener = (event) => savedHandler?.current(event);

      targetElement.addEventListener(eventName, eventListener, opts);

      return () => targetElement.removeEventListener(eventName, eventListener, opts);
    },
    [eventName, capture, once, passive],
    element,
  );
};

export default useEventListener;
