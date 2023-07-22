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
import Comp如何写一个按钮组件0017 from './Comp如何写一个按钮组件0017'
import Comp组件封装总结0018 from './Comp组件封装总结0018'
import Compts发展历史0019 from './Compts发展历史0019'
import Compts常用知识0020 from './Compts常用知识0020'
import Compdevserver工作原理0021 from './Compdevserver工作原理0021'
import Compwebpack工作原理0022 from './Compwebpack工作原理0022'
import Comp前端工程化发展历史0023 from './Comp前端工程化发展历史0023'
import Comp常用的plugin和loader0024 from './Comp常用的plugin和loader0024'
import Comp1px问题0025 from './Comp1px问题0025'
import Comphybridh5特点0026 from './Comphybridh5特点0026'
import Comp包体积优化0027 from './Comp包体积优化0027'
import Comp图片优化0028 from './Comp图片优化0028'
import Comp渲染优化0029 from './Comp渲染优化0029'
import Comp离线包优化0030 from './Comp离线包优化0030'
import Comp网络优化0031 from './Comp网络优化0031'
import CompDNS和CDN0032 from './CompDNS和CDN0032'
import CompHTTP网络的发展0033 from './CompHTTP网络的发展0033'
import Comp网络模型0034 from './Comp网络模型0034'
import CompCoding0035 from './CompCoding0035'
import CompJavascript0036 from './CompJavascript0036'
import CompReact0037 from './CompReact0037'
import CompTypescript0038 from './CompTypescript0038'
import CompVue0039 from './CompVue0039'
import CompWebpack0040 from './CompWebpack0040'
import Comp请求0041 from './Comp请求0041'
import Comp项目0042 from './Comp项目0042'

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
  '0017':<Comp如何写一个按钮组件0017/>,
  '0018':<Comp组件封装总结0018/>,
  '0019':<Compts发展历史0019/>,
  '0020':<Compts常用知识0020/>,
  '0021':<Compdevserver工作原理0021/>,
  '0022':<Compwebpack工作原理0022/>,
  '0023':<Comp前端工程化发展历史0023/>,
  '0024':<Comp常用的plugin和loader0024/>,
  '0025':<Comp1px问题0025/>,
  '0026':<Comphybridh5特点0026/>,
  '0027':<Comp包体积优化0027/>,
  '0028':<Comp图片优化0028/>,
  '0029':<Comp渲染优化0029/>,
  '0030':<Comp离线包优化0030/>,
  '0031':<Comp网络优化0031/>,
  '0032':<CompDNS和CDN0032/>,
  '0033':<CompHTTP网络的发展0033/>,
  '0034':<Comp网络模型0034/>,
  '0035':<CompCoding0035/>,
  '0036':<CompJavascript0036/>,
  '0037':<CompReact0037/>,
  '0038':<CompTypescript0038/>,
  '0039':<CompVue0039/>,
  '0040':<CompWebpack0040/>,
  '0041':<Comp请求0041/>,
  '0042':<Comp项目0042/>
  }
  
  export default ()=> {
    const id = location.search.split('=')[1]
    
    return (
      <div>
        {CompMap[id]}
      </div>
    );
  }
  