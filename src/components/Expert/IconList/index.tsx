
import React from 'react';
import classnames from 'classnames';
import './index.less';
interface IProps {
  data: string[] | string;
}

export default function IconList({ data = '' }: IProps) {

  if (Array.isArray(data) && data.length === 2) {
    return (
      <div className='expertIcon2'>
        {data?.map((icon: string) => <img className='expertSmallIcon2' src={icon} key={icon} />)}
      </div>
    );
  }
  if (Array.isArray(data) && data.length === 3) {
    return (
      <div className='expertIcon3'>
        {data?.map((icon: string, index: number) => <img key={icon} className={
          classnames({ ['expertSmallIcon3']: true, ['firstExpertSmallIcon3']: index === 0 })} src={icon} />)}
      </div>
    );
  }

  return <img className="expertIcon" src={data} />
}