import React, { ReactElement } from 'react';
import Comp0001 from './Comp0001'
import Compjs发展历史0002 from './Compjs发展历史0002'
import Compthis0003 from './Compthis0003'
import Comp事件循环0004 from './Comp事件循环0004'
import Comp作用域0005 from './Comp作用域0005'
import Comp原型链0006 from './Comp原型链0006'
import Comppromise0007 from './Comppromise0007'
import Comp函数0008 from './Comp函数0008'
import Comp字符串0009 from './Comp字符串0009'
import Comp数组0010 from './Comp数组0010'
import Comp栈与队列0011 from './Comp栈与队列0011'
import Comp树0012 from './Comp树0012'
import Comp设计模式0013 from './Comp设计模式0013'
import Comp链表0014 from './Comp链表0014'
import CompNode提问0015 from './CompNode提问0015'
import Compkoa0016 from './Compkoa0016'
import CompHooks0017 from './CompHooks0017'
import CompReact发展历史0018 from './CompReact发展历史0018'
import CompReact提问0019 from './CompReact提问0019'
import CompReact理解0020 from './CompReact理解0020'
import Comp如何写一个按钮组件0021 from './Comp如何写一个按钮组件0021'
import Comp如何封装一个插槽0022 from './Comp如何封装一个插槽0022'
import Compts常用知识0023 from './Compts常用知识0023'
import Compts理解0024 from './Compts理解0024'
import Comp类型的发展历史0025 from './Comp类型的发展历史0025'
import Compdevserver工作原理0026 from './Compdevserver工作原理0026'
import Compwebpack工作原理0027 from './Compwebpack工作原理0027'
import Comp前端工程化发展历史0028 from './Comp前端工程化发展历史0028'
import Comp常用的plugin和loader0029 from './Comp常用的plugin和loader0029'
import Comp1px问题0030 from './Comp1px问题0030'
import Comphybridh5特点0031 from './Comphybridh5特点0031'
import Comp包体积优化0032 from './Comp包体积优化0032'
import Comp图片优化0033 from './Comp图片优化0033'
import Comp渲染优化0034 from './Comp渲染优化0034'
import Comp离线包优化0035 from './Comp离线包优化0035'
import Comp网络优化0036 from './Comp网络优化0036'
import CompDNS和CDN0037 from './CompDNS和CDN0037'
import CompHTTP网络的发展0038 from './CompHTTP网络的发展0038'
import Comp前端跨域0039 from './Comp前端跨域0039'
import Comp网络模型0040 from './Comp网络模型0040'
import CompCoding0041 from './CompCoding0041'
import CompJavascript0042 from './CompJavascript0042'
import CompReact0043 from './CompReact0043'
import CompTypescript0044 from './CompTypescript0044'
import CompVue0045 from './CompVue0045'
import CompWebpack0046 from './CompWebpack0046'
import Comp汇总0047 from './Comp汇总0047'
import Comp请求0048 from './Comp请求0048'
import Comp项目0049 from './Comp项目0049'

  const CompMap: {[key: string]: ReactElement} = {
    '0001':<Comp0001/>,
  '0002':<Compjs发展历史0002/>,
  '0003':<Compthis0003/>,
  '0004':<Comp事件循环0004/>,
  '0005':<Comp作用域0005/>,
  '0006':<Comp原型链0006/>,
  '0007':<Comppromise0007/>,
  '0008':<Comp函数0008/>,
  '0009':<Comp字符串0009/>,
  '0010':<Comp数组0010/>,
  '0011':<Comp栈与队列0011/>,
  '0012':<Comp树0012/>,
  '0013':<Comp设计模式0013/>,
  '0014':<Comp链表0014/>,
  '0015':<CompNode提问0015/>,
  '0016':<Compkoa0016/>,
  '0017':<CompHooks0017/>,
  '0018':<CompReact发展历史0018/>,
  '0019':<CompReact提问0019/>,
  '0020':<CompReact理解0020/>,
  '0021':<Comp如何写一个按钮组件0021/>,
  '0022':<Comp如何封装一个插槽0022/>,
  '0023':<Compts常用知识0023/>,
  '0024':<Compts理解0024/>,
  '0025':<Comp类型的发展历史0025/>,
  '0026':<Compdevserver工作原理0026/>,
  '0027':<Compwebpack工作原理0027/>,
  '0028':<Comp前端工程化发展历史0028/>,
  '0029':<Comp常用的plugin和loader0029/>,
  '0030':<Comp1px问题0030/>,
  '0031':<Comphybridh5特点0031/>,
  '0032':<Comp包体积优化0032/>,
  '0033':<Comp图片优化0033/>,
  '0034':<Comp渲染优化0034/>,
  '0035':<Comp离线包优化0035/>,
  '0036':<Comp网络优化0036/>,
  '0037':<CompDNS和CDN0037/>,
  '0038':<CompHTTP网络的发展0038/>,
  '0039':<Comp前端跨域0039/>,
  '0040':<Comp网络模型0040/>,
  '0041':<CompCoding0041/>,
  '0042':<CompJavascript0042/>,
  '0043':<CompReact0043/>,
  '0044':<CompTypescript0044/>,
  '0045':<CompVue0045/>,
  '0046':<CompWebpack0046/>,
  '0047':<Comp汇总0047/>,
  '0048':<Comp请求0048/>,
  '0049':<Comp项目0049/>
  }
  
  export default ()=> {
    const id = location.search.split('=')[1]
    
    return (
      <div>
        {CompMap[id]}
      </div>
    );
  }
  