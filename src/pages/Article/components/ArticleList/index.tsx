import React, { ReactElement } from 'react';
import Comp常见手写算法0001 from './Comp常见手写算法0001'
import Comp如何写一个按钮组件0002 from './Comp如何写一个按钮组件0002'
import Compthis0003 from './Compthis0003'
import Comp事件循环0004 from './Comp事件循环0004'
import Comp作用域0005 from './Comp作用域0005'
import Comp原型链0006 from './Comp原型链0006'
import CompDNS和CDN0007 from './CompDNS和CDN0007'
import CompHTTP网络的发展0008 from './CompHTTP网络的发展0008'
import Comp网络模型0009 from './Comp网络模型0009'

  const CompMap: {[key: string]: ReactElement} = {
    '0001':<Comp常见手写算法0001/>,
  '0002':<Comp如何写一个按钮组件0002/>,
  '0003':<Compthis0003/>,
  '0004':<Comp事件循环0004/>,
  '0005':<Comp作用域0005/>,
  '0006':<Comp原型链0006/>,
  '0007':<CompDNS和CDN0007/>,
  '0008':<CompHTTP网络的发展0008/>,
  '0009':<Comp网络模型0009/>
  }
  
  export default ()=> {
    const id = location.search.split('=')[1]
    
    return (
      <div>
        {CompMap[id]}
      </div>
    );
  }
  