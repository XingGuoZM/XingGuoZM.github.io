import React, { ReactElement } from 'react';
import Compthis0001 from './Compthis0001'
import Comp事件循环0002 from './Comp事件循环0002'
import Comp作用域0003 from './Comp作用域0003'
import Comp原型链0004 from './Comp原型链0004'
import Comp常见手写算法0005 from './Comp常见手写算法0005'
import CompHooks0006 from './CompHooks0006'
import Comp如何写一个按钮组件0007 from './Comp如何写一个按钮组件0007'
import Compdevserver工作原理0008 from './Compdevserver工作原理0008'
import Compwebpack工作原理0009 from './Compwebpack工作原理0009'
import Comp常用的plugin和loader0010 from './Comp常用的plugin和loader0010'
import Comp渲染优化0011 from './Comp渲染优化0011'
import Comp网络优化0012 from './Comp网络优化0012'
import CompDNS和CDN0013 from './CompDNS和CDN0013'
import CompHTTP网络的发展0014 from './CompHTTP网络的发展0014'
import Comp网络模型0015 from './Comp网络模型0015'

  const CompMap: {[key: string]: ReactElement} = {
    '0001':<Compthis0001/>,
  '0002':<Comp事件循环0002/>,
  '0003':<Comp作用域0003/>,
  '0004':<Comp原型链0004/>,
  '0005':<Comp常见手写算法0005/>,
  '0006':<CompHooks0006/>,
  '0007':<Comp如何写一个按钮组件0007/>,
  '0008':<Compdevserver工作原理0008/>,
  '0009':<Compwebpack工作原理0009/>,
  '0010':<Comp常用的plugin和loader0010/>,
  '0011':<Comp渲染优化0011/>,
  '0012':<Comp网络优化0012/>,
  '0013':<CompDNS和CDN0013/>,
  '0014':<CompHTTP网络的发展0014/>,
  '0015':<Comp网络模型0015/>
  }
  
  export default ()=> {
    const id = location.search.split('=')[1]
    
    return (
      <div>
        {CompMap[id]}
      </div>
    );
  }
  