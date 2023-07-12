
import React from 'react';
import classnames from 'classnames';
import './index.less';
interface IProps {
  data: string[] | string;
  className?: string;
}

export default function IconList({ data = '', className = '' }: IProps) {

  if (Array.isArray(data) && data.length === 2) {
    return (
      <div className='expertIcon2'>
        {data?.map((icon: string) => <img className={classnames({
          'expertSmallIcon2': true,
          [className]: true,
        })} src={icon} key={icon} />)}
      </div>
    );
  }
  if (Array.isArray(data) && data.length === 3) {
    return (
      <div className='expertIcon3'>
        {data?.map((icon: string, index: number) => <img key={icon} className={
          classnames({ ['expertSmallIcon3']: true, ['firstExpertSmallIcon3']: index === 0, [className]: true })} src={icon} />)}
      </div>
    );
  }

  return <img className={classnames({ 'expertIcon': true, [className]: true })} src={data} />
}