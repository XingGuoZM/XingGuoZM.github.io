import React, { ReactElement } from 'react';
import Compjs发展历史0002 from './Compjs发展历史0002'
import Compthis0003 from './Compthis0003'
import Comp事件循环0004 from './Comp事件循环0004'
import Comp作用域0005 from './Comp作用域0005'
import Comp原型链0006 from './Comp原型链0006'
import Comppromise0007 from './Comppromise0007'
import Comp函数0009 from './Comp函数0009'
import Comp场景题0010 from './Comp场景题0010'
import Comp字符串0011 from './Comp字符串0011'
import Comp常见正则汇总0012 from './Comp常见正则汇总0012'
import Comp数组0013 from './Comp数组0013'
import Comp栈与队列0014 from './Comp栈与队列0014'
import Comp树0015 from './Comp树0015'
import Comp设计模式0016 from './Comp设计模式0016'
import Comp链表0017 from './Comp链表0017'
import CompNode提问0018 from './CompNode提问0018'
import Compkoa0019 from './Compkoa0019'
import CompHooks0020 from './CompHooks0020'
import CompReact发展历史0021 from './CompReact发展历史0021'
import CompReact理解0022 from './CompReact理解0022'
import Comp如何写一个按钮组件0023 from './Comp如何写一个按钮组件0023'
import Comp如何封装一个插槽0024 from './Comp如何封装一个插槽0024'
import Compts常用知识0025 from './Compts常用知识0025'
import Compts理解0026 from './Compts理解0026'
import Comp类型的发展历史0027 from './Comp类型的发展历史0027'
import Compdevserver工作原理0028 from './Compdevserver工作原理0028'
import Compwebpack工作原理0029 from './Compwebpack工作原理0029'
import Comp前端工程化发展历史0030 from './Comp前端工程化发展历史0030'
import Comp常用的plugin和loader0031 from './Comp常用的plugin和loader0031'
import Comp1px问题0032 from './Comp1px问题0032'
import Comphybridh5特点0033 from './Comphybridh5特点0033'
import Comp包体积优化0034 from './Comp包体积优化0034'
import Comp图片优化0035 from './Comp图片优化0035'
import Comp渲染优化0036 from './Comp渲染优化0036'
import Comp离线包优化0037 from './Comp离线包优化0037'
import Comp网络优化0038 from './Comp网络优化0038'
import CompDNS和CDN0039 from './CompDNS和CDN0039'
import CompHTTP网络的发展0040 from './CompHTTP网络的发展0040'
import Comp前端跨域0041 from './Comp前端跨域0041'
import Comp网络模型0042 from './Comp网络模型0042'
import CompCoding0043 from './CompCoding0043'
import CompJavascript0044 from './CompJavascript0044'
import CompReact0045 from './CompReact0045'
import CompTypescript0046 from './CompTypescript0046'
import CompVue0047 from './CompVue0047'
import CompWebpack0048 from './CompWebpack0048'
import Comphr面试题0049 from './Comphr面试题0049'
import Comp汇总0050 from './Comp汇总0050'
import Comp请求0051 from './Comp请求0051'
import Comp项目0052 from './Comp项目0052'

  const CompMap: {[key: string]: ReactElement} = {
    '0002':<Compjs发展历史0002/>,
  '0003':<Compthis0003/>,
  '0004':<Comp事件循环0004/>,
  '0005':<Comp作用域0005/>,
  '0006':<Comp原型链0006/>,
  '0007':<Comppromise0007/>,
  '0009':<Comp函数0009/>,
  '0010':<Comp场景题0010/>,
  '0011':<Comp字符串0011/>,
  '0012':<Comp常见正则汇总0012/>,
  '0013':<Comp数组0013/>,
  '0014':<Comp栈与队列0014/>,
  '0015':<Comp树0015/>,
  '0016':<Comp设计模式0016/>,
  '0017':<Comp链表0017/>,
  '0018':<CompNode提问0018/>,
  '0019':<Compkoa0019/>,
  '0020':<CompHooks0020/>,
  '0021':<CompReact发展历史0021/>,
  '0022':<CompReact理解0022/>,
  '0023':<Comp如何写一个按钮组件0023/>,
  '0024':<Comp如何封装一个插槽0024/>,
  '0025':<Compts常用知识0025/>,
  '0026':<Compts理解0026/>,
  '0027':<Comp类型的发展历史0027/>,
  '0028':<Compdevserver工作原理0028/>,
  '0029':<Compwebpack工作原理0029/>,
  '0030':<Comp前端工程化发展历史0030/>,
  '0031':<Comp常用的plugin和loader0031/>,
  '0032':<Comp1px问题0032/>,
  '0033':<Comphybridh5特点0033/>,
  '0034':<Comp包体积优化0034/>,
  '0035':<Comp图片优化0035/>,
  '0036':<Comp渲染优化0036/>,
  '0037':<Comp离线包优化0037/>,
  '0038':<Comp网络优化0038/>,
  '0039':<CompDNS和CDN0039/>,
  '0040':<CompHTTP网络的发展0040/>,
  '0041':<Comp前端跨域0041/>,
  '0042':<Comp网络模型0042/>,
  '0043':<CompCoding0043/>,
  '0044':<CompJavascript0044/>,
  '0045':<CompReact0045/>,
  '0046':<CompTypescript0046/>,
  '0047':<CompVue0047/>,
  '0048':<CompWebpack0048/>,
  '0049':<Comphr面试题0049/>,
  '0050':<Comp汇总0050/>,
  '0051':<Comp请求0051/>,
  '0052':<Comp项目0052/>
  }
  
  export default ()=> {
    const id = location.search.split('=')[1]
    
    return (
      <div>
        {CompMap[id]}
      </div>
    );
  }
  