import React, { ReactElement } from 'react';
import Compjs发展历史0002 from './Compjs发展历史0002'
import Compthis0003 from './Compthis0003'
import Comp事件循环0004 from './Comp事件循环0004'
import Comp作用域0005 from './Comp作用域0005'
import Comp原型链0006 from './Comp原型链0006'
import Comppromise0007 from './Comppromise0007'
import Comp函数0008 from './Comp函数0008'
import Comp字符串0009 from './Comp字符串0009'
import Comp常见正则汇总0010 from './Comp常见正则汇总0010'
import Comp数组0011 from './Comp数组0011'
import Comp栈与队列0012 from './Comp栈与队列0012'
import Comp树0013 from './Comp树0013'
import Comp设计模式0014 from './Comp设计模式0014'
import Comp链表0015 from './Comp链表0015'
import CompNode提问0016 from './CompNode提问0016'
import Compkoa0017 from './Compkoa0017'
import CompHooks0018 from './CompHooks0018'
import CompReact发展历史0019 from './CompReact发展历史0019'
import CompReact提问0020 from './CompReact提问0020'
import CompReact理解0021 from './CompReact理解0021'
import Comp如何写一个按钮组件0022 from './Comp如何写一个按钮组件0022'
import Comp如何封装一个插槽0023 from './Comp如何封装一个插槽0023'
import Compts常用知识0024 from './Compts常用知识0024'
import Compts理解0025 from './Compts理解0025'
import Comp类型的发展历史0026 from './Comp类型的发展历史0026'
import Compdevserver工作原理0027 from './Compdevserver工作原理0027'
import Compwebpack工作原理0028 from './Compwebpack工作原理0028'
import Comp前端工程化发展历史0029 from './Comp前端工程化发展历史0029'
import Comp常用的plugin和loader0030 from './Comp常用的plugin和loader0030'
import Comp1px问题0031 from './Comp1px问题0031'
import Comphybridh5特点0032 from './Comphybridh5特点0032'
import Comp包体积优化0033 from './Comp包体积优化0033'
import Comp图片优化0034 from './Comp图片优化0034'
import Comp渲染优化0035 from './Comp渲染优化0035'
import Comp离线包优化0036 from './Comp离线包优化0036'
import Comp网络优化0037 from './Comp网络优化0037'
import CompDNS和CDN0038 from './CompDNS和CDN0038'
import CompHTTP网络的发展0039 from './CompHTTP网络的发展0039'
import Comp前端跨域0040 from './Comp前端跨域0040'
import Comp网络模型0041 from './Comp网络模型0041'
import CompCoding0042 from './CompCoding0042'
import CompJavascript0043 from './CompJavascript0043'
import CompReact0044 from './CompReact0044'
import CompTypescript0045 from './CompTypescript0045'
import CompVue0046 from './CompVue0046'
import CompWebpack0047 from './CompWebpack0047'
import Comp汇总0048 from './Comp汇总0048'
import Comp请求0049 from './Comp请求0049'
import Comp项目0050 from './Comp项目0050'

  const CompMap: {[key: string]: ReactElement} = {
    '0002':<Compjs发展历史0002/>,
  '0003':<Compthis0003/>,
  '0004':<Comp事件循环0004/>,
  '0005':<Comp作用域0005/>,
  '0006':<Comp原型链0006/>,
  '0007':<Comppromise0007/>,
  '0008':<Comp函数0008/>,
  '0009':<Comp字符串0009/>,
  '0010':<Comp常见正则汇总0010/>,
  '0011':<Comp数组0011/>,
  '0012':<Comp栈与队列0012/>,
  '0013':<Comp树0013/>,
  '0014':<Comp设计模式0014/>,
  '0015':<Comp链表0015/>,
  '0016':<CompNode提问0016/>,
  '0017':<Compkoa0017/>,
  '0018':<CompHooks0018/>,
  '0019':<CompReact发展历史0019/>,
  '0020':<CompReact提问0020/>,
  '0021':<CompReact理解0021/>,
  '0022':<Comp如何写一个按钮组件0022/>,
  '0023':<Comp如何封装一个插槽0023/>,
  '0024':<Compts常用知识0024/>,
  '0025':<Compts理解0025/>,
  '0026':<Comp类型的发展历史0026/>,
  '0027':<Compdevserver工作原理0027/>,
  '0028':<Compwebpack工作原理0028/>,
  '0029':<Comp前端工程化发展历史0029/>,
  '0030':<Comp常用的plugin和loader0030/>,
  '0031':<Comp1px问题0031/>,
  '0032':<Comphybridh5特点0032/>,
  '0033':<Comp包体积优化0033/>,
  '0034':<Comp图片优化0034/>,
  '0035':<Comp渲染优化0035/>,
  '0036':<Comp离线包优化0036/>,
  '0037':<Comp网络优化0037/>,
  '0038':<CompDNS和CDN0038/>,
  '0039':<CompHTTP网络的发展0039/>,
  '0040':<Comp前端跨域0040/>,
  '0041':<Comp网络模型0041/>,
  '0042':<CompCoding0042/>,
  '0043':<CompJavascript0043/>,
  '0044':<CompReact0044/>,
  '0045':<CompTypescript0045/>,
  '0046':<CompVue0046/>,
  '0047':<CompWebpack0047/>,
  '0048':<Comp汇总0048/>,
  '0049':<Comp请求0049/>,
  '0050':<Comp项目0050/>
  }
  
  export default ()=> {
    const id = location.search.split('=')[1]
    
    return (
      <div>
        {CompMap[id]}
      </div>
    );
  }
  