

import React, { ReactElement, useCallback } from 'react';
import './index.less'

export enum CardTypeEnum {
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small',
}
interface IData {
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
          {children}
        </div>;
      case CardTypeEnum.Medium:

        return <div className='card-medium'>
          <div className='card-medium-left'>
            {data.filter((_, index) => index % 2 === 0).map(children)}
          </div>
          <div className='card-medium-right'>
            {data.filter((_, index) => index % 2 !== 0).map(children)}
          </div>
        </div>;
      case CardTypeEnum.Small:
        return <div>four</div>;
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