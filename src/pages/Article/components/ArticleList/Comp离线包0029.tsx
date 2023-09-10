
  import React,{useEffect} from 'react';
 
  import 'highlight.js/styles/xcode.css';
  const hljs = require('highlight.js');

  export default () => {
    useEffect(()=>{
      document.querySelectorAll('code').forEach(el => {
        el.style.backgroundColor='#f8f8f8';
        el.style.marginBottom='0.1rem';
        hljs.highlightElement(el);
      });
    },[])
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h1>离线包</h1>\n<h3>混合开发与离线包</h3>\n<p>离线包就是将html/js/css预先打包好提前下发到app本地，app加载网页的时候实际上是从本地加载，减少了网络请求。离线包技术适用于app内嵌h5页面，它主要是为了解决native+h5混合开发模式中加载h5页面的白屏问题。</p>\n<p>移动端混合开发通常涉及到两大类技术：原生native和web h5，原生技术指的是IOS（Objective C）和Android（java），其特点是开发效率低，每次开发完新功能需要重新打包并且依赖用户的更新，但是它的性能较高；web h5指的是html/css/js组成，它的特点是发布更新灵活、良好的跨平台，但是其性能较低，有些特性会受到限制。混合开发的意义就是为了吸取两者的优点，随着手机硬件的更新迭代，系统对于web特性的支持越来越好，h5的劣势在逐渐缩减。</p>\n<p>混合开发按照分类可以分为\nweb渲染的混合app，例如Codova,前身是PhoneGap,它提供了一系列设备相关的 API，通过这组 API，移动应用能够以 JavaScript 访问原生的设备功能（摄像头、麦克风等）。\n原生渲染的混合App，例如react-native，它供的组件是对原生 API 的暴露，虽然我们使用的是 JavaScript 语言编写的代码，但是实际上是调用了原生的 API 和原生的 UI 组件。\n小程序对于UI渲染和js执行环境做了隔离，基于前面两种方式之间。关于native和web之间通信有好几中方式，第一种是通过拦截url请求，第二种是通过注入MessageHandler。相关的库例如jsbridge、DSBridge</p>\n<h3>离线包技术原理</h3>\n<p>离线包技术主要分为2个部分，一部分是客户端的离线包容器，另一部分是线上的离线包平台。其中离线包容器的作用有两个，第一个是拦截资源请求，判断是否存在本地缓存，有则直接从本地返回；第二是资源的缓存，包括资源下载、资源缓存策略和增量更新策略。离线包平台的作用也有两个，第一是配置h5页面对应的离线资源、公共离线资源、CDN存放离线资源包，第二个是发布管理，包括实时发布、灰度能力和版本控制等。</p>\n<h3>离线包优缺点</h3>\n<p>离线包只是优化页面第一次加载速度，资源本身可以设置http的缓存策略可以避免重复下载。</p>\n"}}></div>
  }
  