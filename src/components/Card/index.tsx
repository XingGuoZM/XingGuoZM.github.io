

import React, { Fragment, ReactElement, useCallback } from 'react';
import classnames from 'classnames';
import './index.less'

export enum CardTypeEnum {
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small',
  Tiny = 'Tiny',
}
interface IData {
  id: string;
  projectName: string;
  projectTime: string;
  projectRole: string;
  projectDesc: string;
  projectResult: [];
}

interface IProps {
  type: CardTypeEnum;
  children: ReactElement;
  data: IData[];
}
/**
 * 
 * @param param0 
 * type: Large 、medium、small
 */
export default function Card({ type, children, data }: IProps) {

  const renderCardByType = useCallback(() => {
    switch (type) {
      case CardTypeEnum.Large:
        return <div className="card-large">
          {data.map(item => <Fragment key={item.id}>{children(item)}</Fragment>)}
        </div>;
      case CardTypeEnum.Medium:

        return <div className='card-medium'>
          <div className='card-medium-left'>
            {data.filter((_, index) => index % 2 === 0).map((item) => <Fragment key={item.projectName}>{children(item)}</Fragment>)}
          </div>
          <div className='card-medium-right'>
            {data.filter((_, index) => index % 2 !== 0).map((item) => <Fragment key={item.projectName}>{children(item)}</Fragment>)}
          </div>
        </div>;
      case CardTypeEnum.Small:
        return <div className='card-small'>
          <div className='card-small-left'>
            {data.filter((_, index) => index % 3 === 0).map((item) => <Fragment key={item.id}>{children(item)}</Fragment>)}
          </div>
          <div className='card-small-center'>
            {data.filter((_, index) => index % 3 === 1).map((item) => <Fragment key={item.id}>{children(item)}</Fragment>)}
          </div>
          <div className='card-small-right'>
            {data.filter((_, index) => index % 3 === 2).map((item) => <Fragment key={item.id}>{children(item)}</Fragment>)}
          </div>
        </div>;
      case CardTypeEnum.Tiny:
        return <div className='card-tiny-wrap'>
          <div className='card-tiny-1'>
            {data.filter((_, index) => index % 4 === 0).map(item => <Fragment key={item.id}>{children(item)}</Fragment>)}
          </div>
          <div className='card-tiny-2'>
            {data.filter((_, index) => index % 4 === 1).map(item => <Fragment key={item.id}>{children(item)}</Fragment>)}
          </div>
          <div className='card-tiny-3'>
            {data.filter((_, index) => index % 4 === 2).map(item => <Fragment key={item.id}>{children(item)}</Fragment>)}
          </div>
          <div className='card-tiny-4'>
            {data.filter((_, index) => index % 4 === 3).map(item => <Fragment key={item.id}>{children(item)}</Fragment>)}
          </div>
        </div>
      default:
        return;
    }
  }, [children, data])

  return <div className='card-wrap'>
    <div className='card-content'>
      {renderCardByType()}
    </div>
  </div>
}