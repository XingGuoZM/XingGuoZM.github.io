
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>工程化题目汇总</h1>
<pre><code>说下webpack的loader和plugin的区别，都使用过哪些 loader 和 plugin
介绍下 webpack，并说下Webpack的构建流程
说下tree-shaking的原理
讲一下webpack原理，loader和plugin，你知道哪些模块化标准，说下cjs和esmodule的区别
Import 和 CommonJS 在 webpack 打包过程中有什么不同
说一下webpack中css-loader和 style-loader 的区别，file-loader 和 url-loader 的区别
脚手架具体都做了哪些事，webpack 具体做了什么配置，怎样优化的打包大小
介绍下 Webpack 的整个生命周期
webpack 离线缓存静态资源如何做用localStore
说一下 webpack 与 gulp 的区别（源码角度）
A、B 两个条件组件，如何做到 webpack 只打包条件为true的组件，false的组件不打包
webpack怎么处理内联css的
webpack如何做异步加载
Webpack里面的插件是怎么实现的
dev-server是怎么跑起来的
Webpack抽取公共文件是怎么配置的
import { Button } from 'antd'，打包的时候只打包 button，分模块加载，是怎么做到的
使用import时，webpack对node_modules里的依赖会做什么
前端怎么做单元测试
Webpack一般怎么组织CSS
webpack如何配sass，需要配哪些loader，配css需要哪些loader
如何配置把js、css、html单独打包成一个文件
webpack和gulp的优缺点
如何实现分模块打包（多入口）
Webpack打包时Hash码是怎么生成的？随机值存在一样的情况，如何避免？
Webpack做了什么？使用webpack构建时有无做一些自定义操作？
为什么用gulp打包node
Webpack为什么慢，如何进行优化
git pull -rebase 和 git pull 的区别是什么？
Webpack打包出来的体积太大，如何优化体积？
Webpack热更新的原理
一个活动项目里包含多个活动，Webpack 如何实现单独打包某个活动？
请说明JavaScript进行压缩、合并、打包实现的原理是什么？为什么需要压缩、合并、打包？分别列出一种常用工具或插件
请说出前端框架设计模式(MVVM 或 MVP 又或 MVC)的含义以及原理
开发环境热更新的优化方式
AMD和CMD有哪些区别？
你是怎么配置开发环境的？
如何实现webpack持久化缓存
webpack做过哪些优化，开发效率方面、打包策略方面等等

在webpack的构建过程中，compiler和compilation的作用是什么？
请问如何优化webpack的打包速度？
请讲讲在webpack中有哪些常见的loader和Plugin？
webpack和Turbopack有什么区别？
谈谈你对组件库的打包的理解
如何减少Webpack的打包体积？
如何提高webpack的构建速度？
webpack的构建流程是怎样的？
如何选择是使用webpack还是rollup？
webpack的loader和plugin的区别是什么？
你有自己写过loader（加载器）或插件吗？
说说你认为webpack的核心功能是什么？
webpack中的resolve.modules和resolve.alias有什么区别？
webpack如何解析代码路径的？
在什么情况下选择webpack？在什么情况下选择rollup？
webpack是如何处理模块化的？
webpack的核心思想是什么？
webpack和rollup有什么区别？
webpack有gulp有什么区别？
webpack有什么优劣势？
你有用过webpack吗？
</code></pre>
<h3>说下 webpack 的 loader 和 plugin 的区别，都使用过哪些 loader 和 plugin</h3>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/229">答案&amp;解析</a></p>
<p><br/></p>
<h3>介绍下 webpack，并说下 Webpack 的构建流程</h3>
<p>公司：头条、挖财</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/227">答案&amp;解析</a></p>
<p><br/></p>
<h3>说下 tree-shaking 的原理</h3>
<p>公司：头条</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/226">答案&amp;解析</a></p>
<p><br/></p>
<h3>讲一下 webpack 原理， loader 和 plugin，你知道哪些模块化标准，说下 cjs 和 esmodule 的区别</h3>
<p>公司：头条</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/216">答案&amp;解析</a></p>
<p><br/></p>
<h3>Import 和 CommonJS 在 webpack 打包过程中有什么不同</h3>
<p>公司：完美世界</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/360">答案&amp;解析</a></p>
<p><br/></p>
<h3>说一下 webpack 中 css-loader 和 style-loader 的区别，file-loader 和 url-loader 的区别</h3>
<p>公司：网易</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/349">答案&amp;解析</a></p>
<p><br/></p>
<h3>脚手架具体都做了哪些事，webpack 具体做了什么配置，怎样优化的打包大小</h3>
<p>公司：易车</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/340">答案&amp;解析</a></p>
<p><br/></p>
<h3>介绍下 Webpack 的整个生命周期</h3>
<p>公司：滴滴、挖财</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/339">答案&amp;解析</a></p>
<p><br/></p>
<h3>如何用localStoragewebpack 离线缓存静态资源？</h3>
<p>公司：滴滴</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/322">答案&amp;解析</a></p>
<p><br/></p>
<h3>说一下 webpack 与 gulp 的区别（源码角度）</h3>
<p>公司：自如</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/265">答案&amp;解析</a></p>
<p><br/></p>
<h3>A、B 两个条件组件，如何做到 webpack 只打包条件为 true 的组件，false 的组件不打包</h3>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/578">答案&amp;解析</a></p>
<p><br/></p>
<h3>webpack 怎么处理内联 css 的</h3>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/575">答案&amp;解析</a></p>
<p><br/></p>
<h3>webpack 如何做异步加载</h3>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/574">答案&amp;解析</a></p>
<p><br/></p>
<h3>Webpack 里面的插件是怎么实现的</h3>
<p>公司：阿里</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/543">答案&amp;解析</a></p>
<p><br/></p>
<h3>dev-server 是怎么跑起来的</h3>
<p>公司：阿里</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/542">答案&amp;解析</a></p>
<p><br/></p>
<h3>Webpack 抽取公共文件是怎么配置的</h3>
<p>公司：阿里</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/541">答案&amp;解析</a></p>
<p><br/></p>
<h3>import { Button } from 'antd'，打包的时候只打包 button，分模块加载，是怎么做到的</h3>
<p>公司：滴滴</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/517">答案&amp;解析</a></p>
<p><br/></p>
<h3>使用 import 时，webpack 对 node_modules 里的依赖会做什么</h3>
<p>公司：滴滴</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/516">答案&amp;解析</a></p>
<p><br/></p>
<h3>前端怎么做单元测试</h3>
<p>公司：挖财</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/466">答案&amp;解析</a></p>
<p><br/></p>
<h3>一般怎么组织 CSS（Webpack）</h3>
<p>公司：沪江</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/454">答案&amp;解析</a></p>
<p><br/></p>
<h3>webpack 如何配 sass，需要配哪些 loader，配 css 需要哪些 loader</h3>
<p>公司：饿了么</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/451">答案&amp;解析</a></p>
<p><br/></p>
<h3>如何配置把 js、css、html 单独打包成一个文件</h3>
<p>公司：饿了么</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/450">答案&amp;解析</a></p>
<p><br/></p>
<h3>webpack 和 gulp 的优缺点</h3>
<p>公司：兑吧</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/424">答案&amp;解析</a></p>
<p><br/></p>
<h3>如何实现分模块打包（多入口）</h3>
<p>公司：兑吧</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/422">答案&amp;解析</a></p>
<p><br/></p>
<h3>Webpack 打包时 Hash 码是怎么生成的？随机值存在一样的情况，如何避免？</h3>
<p>公司：微医</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/599">答案&amp;解析</a></p>
<p><br/></p>
<h3>Webpack 做了什么？使用 webpack 构建时有无做一些自定义操作？</h3>
<p>公司：微医</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/598">答案&amp;解析</a></p>
<p><br/></p>
<h3>为什么用 gulp 打包 node</h3>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/703">答案&amp;解析</a></p>
<p><br/></p>
<h3>Webpack 为什么慢，如何进行优化</h3>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/701">答案&amp;解析</a></p>
<p><br/></p>
<h3>git pull -rebase 和 git pull 的区别是什么？</h3>
<p>公司：会小二</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/679">答案&amp;解析</a></p>
<p><br/></p>
<h3>Webpack 打包出来的体积太大，如何优化体积？</h3>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/657">答案&amp;解析</a></p>
<p><br/></p>
<h3>Webpack 热更新的原理</h3>
<p>公司：酷狗</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/616">答案&amp;解析</a></p>
<p><br/></p>
<h3>一个活动项目里包含多个活动，Webpack 如何实现单独打包某个活动？</h3>
<p>公司：酷狗</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/614">答案&amp;解析</a></p>
<p><br/></p>
<h3>请说明 JavaScript 进行压缩、合并、打包实现的原理是什么？为什么需要压缩、合并、打包？分别列出一种常用工具或插件</h3>
<p>公司：玄武科技</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/834">答案&amp;解析</a></p>
<p><br/></p>
<h3>请说出前端框架设计模式(MVVM 或 MVP 又或 MVC)的含义以及原理</h3>
<p>公司：玄武科技</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/833">答案&amp;解析</a></p>
<p><br/></p>
<h3>开发环境热更新的优化方式</h3>
<p>公司：高思教育</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/823">答案&amp;解析</a></p>
<p><br/></p>
<h3>AMD 和 CMD 有哪些区别？</h3>
<p>公司：58</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/815">答案&amp;解析</a></p>
<p><br/></p>
<h3>你是怎么配置开发环境的？</h3>
<p>公司：58</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/813">答案&amp;解析</a></p>
<p><br/></p>
<h3>如何实现 webpack 持久化缓存</h3>
<p>公司：乘法云</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/807">答案&amp;解析</a></p>
<p><br/></p>
<h3>webpack 做过哪些优化，开发效率方面、打包策略方面等等</h3>
<p>公司：滴滴、快手、掌门一对一、高思教育</p>
<p>分类：工程化</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/25">答案&amp;解析</a></p>
<p><br/></p>
`}}></div>
  }
  