import { useRef, useEffect, MouseEvent } from "react";
import { getTargetElement } from '../utils';

interface IOption {
  capture?: Boolean;
  passive?: Boolean;
  once?: Boolean;
}
type IHandler = (arg: MouseEvent) => void;

const useEventListener = (
  eventName: string,
  handler: IHandler,
  element = document,
  options: IOption = {}
) => {
  const savedHandler = useRef<IHandler | undefined>();
  const { capture, passive, once } = options;

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // 需要使用的时候获取ref里的dom值
      const targetElement = getTargetElement(element, window);
      if (!targetElement?.addEventListener) return;

      const opts = { capture, passive, once };
      const eventListener = (event: MouseEvent) => {
        if (savedHandler.current) {
          savedHandler?.current(event);
        }
      }

      targetElement.addEventListener(eventName, eventListener, opts);

      return () => targetElement.removeEventListener(eventName, eventListener, opts);
    },
    [eventName, capture, once, passive]
  );
};

export default useEventListener;
