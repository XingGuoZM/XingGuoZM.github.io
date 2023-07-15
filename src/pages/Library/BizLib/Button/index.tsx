import React, { ReactNode, MouseEventHandler } from 'react';
import GenBtn from '../../GenLib/Button';
import classnames from 'classnames';
import './index.less';

interface IProps {
  children: ReactNode | string;
  onClick?: MouseEventHandler | undefined;
  className?: string;
  type: ButtonType;
}
export enum ButtonType {
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small',
}
const BtnTypeMap = {
  [ButtonType.Large]: 'large',
  [ButtonType.Medium]: 'medium',
  [ButtonType.Small]: 'small',
}

export default function Button({ children, type = ButtonType.Medium, onClick, className }: IProps) {

  return <GenBtn
    className={classnames([
      'biz-btn',
      `biz-btn-${BtnTypeMap[type]}`,
      className
    ])}
    onClick={onClick}
  >
    {children}
  </GenBtn>
}