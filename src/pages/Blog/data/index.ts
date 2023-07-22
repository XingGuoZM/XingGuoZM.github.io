

import {
  ReactSvg,
  WebpackSvg,
  JavascriptSvg,
  IphoneSvg,
  AndroidSvg,
  CpuSvg,
  NetworkSvg,
  RenderSvg,
  AlgorithmSvg,
  InterviewSvg,
} from '@/assets';

export const IconMap = {
  ['网络']: NetworkSvg,
  ['Js基础']: JavascriptSvg,
  ['Js算法']: AlgorithmSvg,
  ['React']: ReactSvg,
  ['React组件封装']: ReactSvg,
  ['Webpack']: WebpackSvg,
  ['性能优化']: RenderSvg,
  ['面试题']: InterviewSvg,
  ['Typescript']: CpuSvg
}

export const data = {
  excellent: [
    { id: 'opt', title: '性能优化', desc: '', iconList: [RenderSvg, NetworkSvg, CpuSvg] },
    { id: 'react', title: 'React', desc: '', iconList: [ReactSvg] },
    { id: 'h5', title: 'Hybrid H5', desc: '', iconList: [IphoneSvg, AndroidSvg] },
    { id: 'webpack', title: 'Webpack', desc: '', iconList: [WebpackSvg] },
    { id: 'js', title: 'JavaScript', desc: '', iconList: [JavascriptSvg] }
  ],

  blogList: [{
    id: '1',
    tabTitle: 'js基础',
    tabData: [{
      id: '1',
      title: '原型链',
      subtitle: ['prototype', '__proto__'],
      desc: '构造函数和实例对象的连接的纽带，函数和对象的关系（横向），js中原型是继承的基础。每个对象（object）都有一个原型链对象（也叫隐式原型）',
      url: '/article?id=0004',
      Icon: JavascriptSvg
    }, {
      id: '2',
      title: '作用域',
      subtitle: ['变量提升', '暂时死区', '闭包'],
      desc: '作用域是变量/常量的访问规则，或者说是变量/常量的影响范围，通过指定作用域的类型来分配变量的访问权限，例如函数作用域只在函数代码块内生效，全局作用域在全局任何地方都能访问',
      url: '/article?id=0003',
      Icon: JavascriptSvg
    }, {
      id: '3',
      title: '事件循环',
      subtitle: ['promise', 'setTimeout', 'async...await'],
      url: '/article?id=0002',
      desc: '异步任务执行规则，先对异步任务进行分类，然后按照优先级执行。宏任务在下一次事件循环开始执行，微任务在本次事件循环执行完成',
      Icon: JavascriptSvg
    }, {
      id: '4',
      title: 'this与执行上下文',
      subtitle: ['执行上下文', '箭头函数表达式'],
      url: '/article?id=0001',
      desc: '执行上下文对象,this指向的4种情况1. 普通函数调用2. 对象方法调用3. new 构造函数4. call、apply和bind',
      Icon: JavascriptSvg
    }, {
      id: '5',
      title: 'js数据类型',
      subtitle: ['隐式转换', 'toString', 'valueOf'],
      desc: '静态语言：编译时变量的数据类型即可确定，使用之前必须声明数据类型，如c++、java动态语言：运行时确定数据类型的语言，变量使用之前不需要类型声明，变量的类型是被赋值的那个值的类型，如php、js、shell、python',
      Icon: JavascriptSvg
    }]
  }, {
    id: '2',
    tabTitle: 'react',
    tabData: [{
      id: '1',
      title: 'hook原理',
      subtitle: ['useEffect', 'useState'],
      url: '/article?id=0004',
      desc: '为什么会有Hooks？复用一个有状态的组件太麻烦不够方便，class组件给出的方案是render props和HOC',
      Icon: ReactSvg,
    }]
  }, {
    id: '3',
    tabTitle: '性能优化',

    desc: '',
    tabData: [{ id: '1', title: 'chrome渲染原理', subtitle: ['图片优化', '包体积', '渲染原理'], Icon: RenderSvg, }]
  }, {
    id: '4',
    tabTitle: 'webpack',
    tabData: [{ title: 'webpack原理', subtitle: ['打包原理', 'tapable'], Icon: WebpackSvg, }]
  }, {
    id: '5',
    tabTitle: 'hybrid h5',

    tabData: [{ id: '1', title: 'webview', subtitle: ['JsBridge'], Icon: IphoneSvg, }]
  }, {
    id: '6',
    tabTitle: 'http网络',

    tabData: [{
      id: '1',
      title: 'htt发展历程',
      subtitle: ['http 1.0', 'http 1.1', 'http2.0', 'https'],
      Icon: NetworkSvg,
    }]
  }, {
    id: '7',
    tabTitle: '常用算法',

    tabData: [{
      id: '1',
      title: '数组去重',
      subtitle: ['数组'],
      Icon: AlgorithmSvg,
    }, {
      id: '2',
      title: '二叉树遍历',
      subtitle: ['树'],
      Icon: AlgorithmSvg,
    }]
  }, {
    id: '8',
    tabTitle: '面试题',
    tabData: [{ id: '1', title: '面试题汇总', subtitle: ['项目'], Icon: InterviewSvg, }]
  }]
}
