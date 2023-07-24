import React, { ReactElement, useContext } from 'react';
import { ModalContext } from '@/components/PromisifyModal';
import { ArrowSvg } from '@/assets';
import './index.less';

interface IProps {
  title?: string;
  children: ReactElement;
  subTitle?: string;
  more?: string;
  moreClk?: () => void;
}

export default function Floor({ title, children, subTitle, more, moreClk }: IProps) {
  const { theme } = useContext(ModalContext);
  return <div className='floor'>
    {title && <div className='floor-head'>
      <div className='floor-title'>{title}</div>
      {subTitle && <div className='floor-subtitle'>{subTitle}</div>}
      {more && <div className='floor-more-wrap' onClick={moreClk}>
        <div className='floor-more'>{more}</div>
        <ArrowSvg className='floor-more-icon' fill={theme} />
      </div>}
    </div>}
    {children}
  </div>
}