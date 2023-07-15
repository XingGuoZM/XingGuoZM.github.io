import React, { ReactElement } from 'react';
import Comp如何写一个按钮组件0001 from './Comp如何写一个按钮组件0001'
import Compthis0002 from './Compthis0002'
import Comp事件循环0003 from './Comp事件循环0003'
import Comp作用域0004 from './Comp作用域0004'
import Comp原型链0005 from './Comp原型链0005'
import CompDNS和CDN0006 from './CompDNS和CDN0006'
import CompHTTP网络的发展0007 from './CompHTTP网络的发展0007'
import Comp网络模型0008 from './Comp网络模型0008'

  const CompMap: {[key: string]: ReactElement} = {
    '0001':<Comp如何写一个按钮组件0001/>,
  '0002':<Compthis0002/>,
  '0003':<Comp事件循环0003/>,
  '0004':<Comp作用域0004/>,
  '0005':<Comp原型链0005/>,
  '0006':<CompDNS和CDN0006/>,
  '0007':<CompHTTP网络的发展0007/>,
  '0008':<Comp网络模型0008/>
  }
  
  export default ()=> {
    const id = location.search.split('=')[1]
    
    return (
      <div>
        {CompMap[id]}
      </div>
    );
  }
  