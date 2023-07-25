import React, { ReactElement } from 'react';
import Compjs发展历史0001 from './Compjs发展历史0001'
import Compthis0002 from './Compthis0002'
import Comp事件循环0003 from './Comp事件循环0003'
import Comp作用域0004 from './Comp作用域0004'
import Comp原型链0005 from './Comp原型链0005'
import Comppromise0006 from './Comppromise0006'
import Comp函数0007 from './Comp函数0007'
import Comp字符串0008 from './Comp字符串0008'
import Comp数组0009 from './Comp数组0009'
import Comp栈与队列0010 from './Comp栈与队列0010'
import Comp树0011 from './Comp树0011'
import Comp设计模式0012 from './Comp设计模式0012'
import Comp链表0013 from './Comp链表0013'
import CompHooks0014 from './CompHooks0014'
import CompReact发展历史0015 from './CompReact发展历史0015'
import CompReact提问0016 from './CompReact提问0016'
import CompReact理解0017 from './CompReact理解0017'
import Comp如何写一个按钮组件0018 from './Comp如何写一个按钮组件0018'
import Comp如何封装一个插槽0019 from './Comp如何封装一个插槽0019'
import Compts常用知识0020 from './Compts常用知识0020'
import Compts理解0021 from './Compts理解0021'
import Comp类型的发展历史0022 from './Comp类型的发展历史0022'
import Compdevserver工作原理0023 from './Compdevserver工作原理0023'
import Compwebpack工作原理0024 from './Compwebpack工作原理0024'
import Comp前端工程化发展历史0025 from './Comp前端工程化发展历史0025'
import Comp常用的plugin和loader0026 from './Comp常用的plugin和loader0026'
import Comp1px问题0027 from './Comp1px问题0027'
import Comphybridh5特点0028 from './Comphybridh5特点0028'
import Comp包体积优化0029 from './Comp包体积优化0029'
import Comp图片优化0030 from './Comp图片优化0030'
import Comp渲染优化0031 from './Comp渲染优化0031'
import Comp离线包优化0032 from './Comp离线包优化0032'
import Comp网络优化0033 from './Comp网络优化0033'
import CompDNS和CDN0034 from './CompDNS和CDN0034'
import CompHTTP网络的发展0035 from './CompHTTP网络的发展0035'
import Comp网络模型0036 from './Comp网络模型0036'
import CompCoding0037 from './CompCoding0037'
import CompJavascript0038 from './CompJavascript0038'
import CompReact0039 from './CompReact0039'
import CompTypescript0040 from './CompTypescript0040'
import CompVue0041 from './CompVue0041'
import CompWebpack0042 from './CompWebpack0042'
import Comp请求0043 from './Comp请求0043'
import Comp项目0044 from './Comp项目0044'

  const CompMap: {[key: string]: ReactElement} = {
    '0001':<Compjs发展历史0001/>,
  '0002':<Compthis0002/>,
  '0003':<Comp事件循环0003/>,
  '0004':<Comp作用域0004/>,
  '0005':<Comp原型链0005/>,
  '0006':<Comppromise0006/>,
  '0007':<Comp函数0007/>,
  '0008':<Comp字符串0008/>,
  '0009':<Comp数组0009/>,
  '0010':<Comp栈与队列0010/>,
  '0011':<Comp树0011/>,
  '0012':<Comp设计模式0012/>,
  '0013':<Comp链表0013/>,
  '0014':<CompHooks0014/>,
  '0015':<CompReact发展历史0015/>,
  '0016':<CompReact提问0016/>,
  '0017':<CompReact理解0017/>,
  '0018':<Comp如何写一个按钮组件0018/>,
  '0019':<Comp如何封装一个插槽0019/>,
  '0020':<Compts常用知识0020/>,
  '0021':<Compts理解0021/>,
  '0022':<Comp类型的发展历史0022/>,
  '0023':<Compdevserver工作原理0023/>,
  '0024':<Compwebpack工作原理0024/>,
  '0025':<Comp前端工程化发展历史0025/>,
  '0026':<Comp常用的plugin和loader0026/>,
  '0027':<Comp1px问题0027/>,
  '0028':<Comphybridh5特点0028/>,
  '0029':<Comp包体积优化0029/>,
  '0030':<Comp图片优化0030/>,
  '0031':<Comp渲染优化0031/>,
  '0032':<Comp离线包优化0032/>,
  '0033':<Comp网络优化0033/>,
  '0034':<CompDNS和CDN0034/>,
  '0035':<CompHTTP网络的发展0035/>,
  '0036':<Comp网络模型0036/>,
  '0037':<CompCoding0037/>,
  '0038':<CompJavascript0038/>,
  '0039':<CompReact0039/>,
  '0040':<CompTypescript0040/>,
  '0041':<CompVue0041/>,
  '0042':<CompWebpack0042/>,
  '0043':<Comp请求0043/>,
  '0044':<Comp项目0044/>
  }
  
  export default ()=> {
    const id = location.search.split('=')[1]
    
    return (
      <div>
        {CompMap[id]}
      </div>
    );
  }
  