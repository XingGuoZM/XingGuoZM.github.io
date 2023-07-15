import React, { ReactNode } from 'react';
import "./index.less";
import classNames from 'classnames';

interface IProps {
  children: ReactNode;
}

export default function Modal({ children }: IProps) {

  return (
    <div className="modal">
      <div className='modal-bg' />
      <div className={classNames("modal-content", 'flipAnim')}>
        {children}
      </div>
    </div>
  );
}
