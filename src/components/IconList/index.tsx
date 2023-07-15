
import React from 'react';
import classnames from 'classnames';
import './index.less';
interface IProps {
  data: string[] | string;
  fill?: string;
  className?: string;
}

export default function IconList({ data = '', className = '', fill = '#fff' }: IProps) {

  if (Array.isArray(data) && data.length === 2) {
    return (
      <div className='icon-list-2'>
        {data?.map((Icon: string, index: number) => <Icon
          className={classnames({
            'small-icon-list-2': true,
            [className]: true,
          })} key={index} fill={fill} />)}
      </div>
    );
  }
  if (Array.isArray(data) && data.length === 3) {
    return (
      <div className='icon-list-3'>
        {data?.map((Icon: string, index: number) => <Icon
          key={index}
          className={
            classnames({
              ['small-icon-list-3']: true,
              ['first-small-icon-list-3']: index === 0, [className]: true
            })}
          fill={fill}
        />)}
      </div>
    );
  }
  const Icon = data[0];
  return <Icon className={classnames({ 'icon-list': true, [className]: true })} fill={fill} />
}