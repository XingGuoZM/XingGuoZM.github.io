import React, { useRef, useEffect, ReactElement } from 'react';
import classnames from 'classnames';
import './index.less';

interface IProps {
  children: ReactElement;
  type: ButtonType;
  effect?: Boolean;
  onClick?: () => void;
}
export enum ButtonType {
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small',
}
const BtnTypeMap = {
  [ButtonType.Large]: 'large-btn',
  [ButtonType.Medium]: 'medium-btn',
  [ButtonType.Small]: 'small-btn',
}

export default function Button({ children, type = ButtonType.Medium, onClick, effect = true }: IProps) {
  const btnRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!effect) return;

    const dom = btnRef.current as HTMLDivElement;

    const handleStart = () => dom.style.transform = `scale(${0.9})`;
    const handleEnd = () => dom.style.transform = `scale(${1})`;

    dom.addEventListener('touchstart', handleStart)
    document.addEventListener('touchend', handleEnd)
    return () => {
      dom.removeEventListener('touchstart', handleStart);
      document.removeEventListener('touchend', handleEnd);
    }
  }, []);
  return <div
    className={classnames(['btn', BtnTypeMap[type]])}
    onClick={onClick}
    ref={btnRef}
  >
    {children}
  </div>
}