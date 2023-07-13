import React, { ReactElement } from 'react';
import Compthis0001 from './Compthis0001'
import Comp事件循环0002 from './Comp事件循环0002'
import Comp作用域0003 from './Comp作用域0003'
import Comp原型链0004 from './Comp原型链0004'
import CompDNS和CDN0005 from './CompDNS和CDN0005'
import CompHTTP网络的发展0006 from './CompHTTP网络的发展0006'
import Comp网络模型0007 from './Comp网络模型0007'

  const CompMap: {[key: string]: ReactElement} = {
    '0001':<Compthis0001/>,
  '0002':<Comp事件循环0002/>,
  '0003':<Comp作用域0003/>,
  '0004':<Comp原型链0004/>,
  '0005':<CompDNS和CDN0005/>,
  '0006':<CompHTTP网络的发展0006/>,
  '0007':<Comp网络模型0007/>
  }
  
  export default ()=> {
    const id = location.search.split('=')[1]
    
    return (
      <div>
        {CompMap[id]}
      </div>
    );
  }
  