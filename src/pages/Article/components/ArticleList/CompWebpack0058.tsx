
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h1>工程化题目汇总</h1>\n<ul>\n<li>说下webpack的loader和plugin的区别，都使用过哪些 loader 和 plugin</li>\n<li>介绍下 webpack，并说下Webpack的构建流程</li>\n<li>说下tree-shaking的原理</li>\n<li>讲一下webpack原理，loader和plugin，你知道哪些模块化标准，说下cjs和esmodule的区别</li>\n<li>Import 和 CommonJS 在 webpack 打包过程中有什么不同</li>\n<li>说一下webpack中css-loader和 style-loader 的区别，file-loader 和 url-loader 的区别</li>\n<li>脚手架具体都做了哪些事，webpack 具体做了什么配置，怎样优化的打包大小</li>\n<li>介绍下 Webpack 的整个生命周期</li>\n<li>webpack 离线缓存静态资源如何做用localStore</li>\n<li>说一下 webpack 与 gulp 的区别（源码角度）</li>\n<li>A、B 两个条件组件，如何做到 webpack 只打包条件为true的组件，false的组件不打包</li>\n<li>webpack怎么处理内联css的</li>\n<li>webpack如何做异步加载</li>\n<li>Webpack里面的插件是怎么实现的</li>\n<li>dev-server是怎么跑起来的</li>\n<li>Webpack抽取公共文件是怎么配置的</li>\n<li>import { Button } from 'antd'，打包的时候只打包 button，分模块加载，是怎么做到的</li>\n<li>使用import时，webpack对node_modules里的依赖会做什么</li>\n<li>前端怎么做单元测试</li>\n<li>Webpack一般怎么组织CSS</li>\n<li>webpack如何配sass，需要配哪些loader，配css需要哪些loader</li>\n<li>如何配置把js、css、html单独打包成一个文件</li>\n<li>webpack和gulp的优缺点</li>\n<li>如何实现分模块打包（多入口）</li>\n<li>Webpack打包时Hash码是怎么生成的？随机值存在一样的情况，如何避免？</li>\n<li>Webpack做了什么？使用webpack构建时有无做一些自定义操作？</li>\n<li>为什么用gulp打包node</li>\n<li>Webpack为什么慢，如何进行优化</li>\n<li>git pull -rebase 和 git pull 的区别是什么？</li>\n<li>Webpack打包出来的体积太大，如何优化体积？</li>\n<li>Webpack热更新的原理</li>\n<li>一个活动项目里包含多个活动，Webpack 如何实现单独打包某个活动？</li>\n<li>请说明JavaScript进行压缩、合并、打包实现的原理是什么？为什么需要压缩、合并、打包？分别列出一种常用工具或插件</li>\n<li>请说出前端框架设计模式(MVVM 或 MVP 又或 MVC)的含义以及原理</li>\n<li>开发环境热更新的优化方式</li>\n<li>AMD和CMD有哪些区别？</li>\n<li>你是怎么配置开发环境的？</li>\n<li>如何实现webpack持久化缓存</li>\n<li>webpack做过哪些优化，开发效率方面、打包策略方面等等</li>\n<li>在webpack的构建过程中，compiler和compilation的作用是什么？</li>\n<li>请问如何优化webpack的打包速度？</li>\n<li>请讲讲在webpack中有哪些常见的loader和Plugin？</li>\n<li>webpack和Turbopack有什么区别？</li>\n<li>谈谈你对组件库的打包的理解</li>\n<li>如何减少Webpack的打包体积？</li>\n<li>如何提高webpack的构建速度？</li>\n<li>webpack的构建流程是怎样的？</li>\n<li>如何选择是使用webpack还是rollup？</li>\n<li>webpack的loader和plugin的区别是什么？</li>\n<li>你有自己写过loader（加载器）或插件吗？</li>\n<li>说说你认为webpack的核心功能是什么？</li>\n<li>webpack中的resolve.modules和resolve.alias有什么区别？</li>\n<li>webpack如何解析代码路径的？</li>\n<li>在什么情况下选择webpack？在什么情况下选择rollup？</li>\n<li>webpack是如何处理模块化的？</li>\n<li>webpack的核心思想是什么？</li>\n<li>webpack和rollup有什么区别？</li>\n<li>webpack有gulp有什么区别？</li>\n<li>webpack有什么优劣势？</li>\n<li>你有用过webpack吗？</li>\n</ul>\n"}}></div>
  }
  