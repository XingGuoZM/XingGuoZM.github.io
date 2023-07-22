
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
<ul>
<li><a href="#%E8%AF%B4%E4%B8%8B-webpack-%E7%9A%84-loader-%E5%92%8C-plugin-%E7%9A%84%E5%8C%BA%E5%88%AB%E9%83%BD%E4%BD%BF%E7%94%A8%E8%BF%87%E5%93%AA%E4%BA%9B-loader-%E5%92%8C-plugin">说下 webpack 的 loader 和 plugin 的区别，都使用过哪些 loader 和 plugin</a></li>
<li><a href="#%E4%BB%8B%E7%BB%8D%E4%B8%8B-webpack%E5%B9%B6%E8%AF%B4%E4%B8%8B-webpack-%E7%9A%84%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B">介绍下 webpack，并说下 Webpack 的构建流程</a></li>
<li><a href="#%E8%AF%B4%E4%B8%8B-tree-shaking-%E7%9A%84%E5%8E%9F%E7%90%86">说下 tree-shaking 的原理</a></li>
<li><a href="#%E8%AE%B2%E4%B8%80%E4%B8%8B-webpack-%E5%8E%9F%E7%90%86-loader-%E5%92%8C-plugin%E4%BD%A0%E7%9F%A5%E9%81%93%E5%93%AA%E4%BA%9B%E6%A8%A1%E5%9D%97%E5%8C%96%E6%A0%87%E5%87%86%E8%AF%B4%E4%B8%8B-cjs-%E5%92%8C-esmodule-%E7%9A%84%E5%8C%BA%E5%88%AB">讲一下 webpack 原理， loader 和 plugin，你知道哪些模块化标准，说下 cjs 和 esmodule 的区别</a></li>
<li><a href="#import-%E5%92%8C-commonjs-%E5%9C%A8-webpack-%E6%89%93%E5%8C%85%E8%BF%87%E7%A8%8B%E4%B8%AD%E6%9C%89%E4%BB%80%E4%B9%88%E4%B8%8D%E5%90%8C">Import 和 CommonJS 在 webpack 打包过程中有什么不同</a></li>
<li><a href="#%E8%AF%B4%E4%B8%80%E4%B8%8B-webpack-%E4%B8%AD-css-loader-%E5%92%8C-style-loader-%E7%9A%84%E5%8C%BA%E5%88%ABfile-loader-%E5%92%8C-url-loader-%E7%9A%84%E5%8C%BA%E5%88%AB">说一下 webpack 中 css-loader 和 style-loader 的区别，file-loader 和 url-loader 的区别</a></li>
<li><a href="#%E8%84%9A%E6%89%8B%E6%9E%B6%E5%85%B7%E4%BD%93%E9%83%BD%E5%81%9A%E4%BA%86%E5%93%AA%E4%BA%9B%E4%BA%8Bwebpack-%E5%85%B7%E4%BD%93%E5%81%9A%E4%BA%86%E4%BB%80%E4%B9%88%E9%85%8D%E7%BD%AE%E6%80%8E%E6%A0%B7%E4%BC%98%E5%8C%96%E7%9A%84%E6%89%93%E5%8C%85%E5%A4%A7%E5%B0%8F">脚手架具体都做了哪些事，webpack 具体做了什么配置，怎样优化的打包大小</a></li>
<li><a href="#%E4%BB%8B%E7%BB%8D%E4%B8%8B-webpack-%E7%9A%84%E6%95%B4%E4%B8%AA%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">介绍下 Webpack 的整个生命周期</a></li>
<li><a href="#webpack-%E7%A6%BB%E7%BA%BF%E7%BC%93%E5%AD%98%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E5%A6%82%E4%BD%95%E5%81%9A%E7%94%A8-localstore">webpack 离线缓存静态资源如何做用 localStore</a></li>
<li><a href="#%E8%AF%B4%E4%B8%80%E4%B8%8B-webpack-%E4%B8%8E-gulp-%E7%9A%84%E5%8C%BA%E5%88%AB%E6%BA%90%E7%A0%81%E8%A7%92%E5%BA%A6">说一下 webpack 与 gulp 的区别（源码角度）</a></li>
<li><a href="#ab-%E4%B8%A4%E4%B8%AA%E6%9D%A1%E4%BB%B6%E7%BB%84%E4%BB%B6%E5%A6%82%E4%BD%95%E5%81%9A%E5%88%B0-webpack-%E5%8F%AA%E6%89%93%E5%8C%85%E6%9D%A1%E4%BB%B6%E4%B8%BA-true-%E7%9A%84%E7%BB%84%E4%BB%B6false-%E7%9A%84%E7%BB%84%E4%BB%B6%E4%B8%8D%E6%89%93%E5%8C%85">A、B 两个条件组件，如何做到 webpack 只打包条件为 true 的组件，false 的组件不打包</a></li>
<li><a href="#webpack-%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E5%86%85%E8%81%94-css-%E7%9A%84">webpack 怎么处理内联 css 的</a></li>
<li><a href="#webpack-%E5%A6%82%E4%BD%95%E5%81%9A%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD">webpack 如何做异步加载</a></li>
<li><a href="#webpack-%E9%87%8C%E9%9D%A2%E7%9A%84%E6%8F%92%E4%BB%B6%E6%97%B6%E6%80%8E%E4%B9%88%E5%AE%9E%E7%8E%B0%E7%9A%84">Webpack 里面的插件是怎么实现的</a></li>
<li><a href="#dev-server-%E6%98%AF%E6%80%8E%E4%B9%88%E8%B7%91%E8%B5%B7%E6%9D%A5%E7%9A%84">dev-server 是怎么跑起来的</a></li>
<li><a href="#webpack-%E6%8A%BD%E5%8F%96%E5%85%AC%E5%85%B1%E6%96%87%E4%BB%B6%E6%98%AF%E6%80%8E%E4%B9%88%E9%85%8D%E7%BD%AE%E7%9A%84">Webpack 抽取公共文件是怎么配置的</a></li>
<li><a href="#import--button--from-antd%E6%89%93%E5%8C%85%E7%9A%84%E6%97%B6%E5%80%99%E5%8F%AA%E6%89%93%E5%8C%85-button%E5%88%86%E6%A8%A1%E5%9D%97%E5%8A%A0%E8%BD%BD%E6%98%AF%E6%80%8E%E4%B9%88%E5%81%9A%E5%88%B0%E7%9A%84">import { Button } from 'antd'，打包的时候只打包 button，分模块加载，是怎么做到的</a></li>
<li><a href="#%E4%BD%BF%E7%94%A8-import-%E6%97%B6webpack-%E5%AF%B9-node_modules-%E9%87%8C%E7%9A%84%E4%BE%9D%E8%B5%96%E4%BC%9A%E5%81%9A%E4%BB%80%E4%B9%88">使用 import 时，webpack 对 node_modules 里的依赖会做什么</a></li>
<li><a href="#%E5%89%8D%E7%AB%AF%E6%80%8E%E4%B9%88%E5%81%9A%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95">前端怎么做单元测试</a></li>
<li><a href="#%E4%B8%80%E8%88%AC%E6%80%8E%E4%B9%88%E7%BB%84%E7%BB%87-csswebpack">一般怎么组织 CSS（Webpack）</a></li>
<li><a href="#webpack-%E5%A6%82%E4%BD%95%E9%85%8D-sass%E9%9C%80%E8%A6%81%E9%85%8D%E5%93%AA%E4%BA%9B-loader%E9%85%8D-css-%E9%9C%80%E8%A6%81%E5%93%AA%E4%BA%9B-loader">webpack 如何配 sass，需要配哪些 loader，配 css 需要哪些 loader</a></li>
<li><a href="#%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE%E6%8A%8A-jscsshtml-%E5%8D%95%E7%8B%AC%E6%89%93%E5%8C%85%E6%88%90%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6">如何配置把 js、css、html 单独打包成一个文件</a></li>
<li><a href="#webpack-%E5%92%8C-gulp-%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9">webpack 和 gulp 的优缺点</a></li>
<li><a href="#%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%88%86%E6%A8%A1%E5%9D%97%E6%89%93%E5%8C%85%E5%A4%9A%E5%85%A5%E5%8F%A3">如何实现分模块打包（多入口）</a></li>
<li><a href="#webpack-%E6%89%93%E5%8C%85%E6%97%B6-hash-%E7%A0%81%E6%98%AF%E6%80%8E%E4%B9%88%E7%94%9F%E6%88%90%E7%9A%84%E9%9A%8F%E6%9C%BA%E5%80%BC%E5%AD%98%E5%9C%A8%E4%B8%80%E6%A0%B7%E7%9A%84%E6%83%85%E5%86%B5%E5%A6%82%E4%BD%95%E9%81%BF%E5%85%8D">Webpack 打包时 Hash 码是怎么生成的？随机值存在一样的情况，如何避免？</a></li>
<li><a href="#webpack-%E5%81%9A%E4%BA%86%E4%BB%80%E4%B9%88%E4%BD%BF%E7%94%A8-webpack-%E6%9E%84%E5%BB%BA%E6%97%B6%E6%9C%89%E6%97%A0%E5%81%9A%E4%B8%80%E4%BA%9B%E8%87%AA%E5%AE%9A%E4%B9%89%E6%93%8D%E4%BD%9C">Webpack 做了什么？使用 webpack 构建时有无做一些自定义操作？</a></li>
<li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E7%94%A8-gulp-%E6%89%93%E5%8C%85-node">为什么用 gulp 打包 node</a></li>
<li><a href="#webpack-%E4%B8%BA%E4%BB%80%E4%B9%88%E6%85%A2%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E4%BC%98%E5%8C%96">Webpack 为什么慢，如何进行优化</a></li>
<li><a href="#git-pull--rebase-%E5%92%8C-git-pull-%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88">git pull -rebase 和 git pull 的区别是什么？</a></li>
<li><a href="#webpack-%E6%89%93%E5%8C%85%E5%87%BA%E6%9D%A5%E7%9A%84%E4%BD%93%E7%A7%AF%E5%A4%AA%E5%A4%A7%E5%A6%82%E4%BD%95%E4%BC%98%E5%8C%96%E4%BD%93%E7%A7%AF">Webpack 打包出来的体积太大，如何优化体积？</a></li>
<li><a href="#webpack-%E7%83%AD%E6%9B%B4%E6%96%B0%E7%9A%84%E5%8E%9F%E7%90%86">Webpack 热更新的原理</a></li>
<li><a href="#%E4%B8%80%E4%B8%AA%E6%B4%BB%E5%8A%A8%E9%A1%B9%E7%9B%AE%E9%87%8C%E5%8C%85%E5%90%AB%E5%A4%9A%E4%B8%AA%E6%B4%BB%E5%8A%A8webpack-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8D%95%E7%8B%AC%E6%89%93%E5%8C%85%E6%9F%90%E4%B8%AA%E6%B4%BB%E5%8A%A8">一个活动项目里包含多个活动，Webpack 如何实现单独打包某个活动？</a></li>
<li><a href="#%E8%AF%B7%E8%AF%B4%E6%98%8E-javascript-%E8%BF%9B%E8%A1%8C%E5%8E%8B%E7%BC%A9%E5%90%88%E5%B9%B6%E6%89%93%E5%8C%85%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E5%8E%8B%E7%BC%A9%E5%90%88%E5%B9%B6%E6%89%93%E5%8C%85%E5%88%86%E5%88%AB%E5%88%97%E5%87%BA%E4%B8%80%E7%A7%8D%E5%B8%B8%E7%94%A8%E5%B7%A5%E5%85%B7%E6%88%96%E6%8F%92%E4%BB%B6">请说明 JavaScript 进行压缩、合并、打包实现的原理是什么？为什么需要压缩、合并、打包？分别列出一种常用工具或插件</a></li>
<li><a href="#%E8%AF%B7%E8%AF%B4%E5%87%BA%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8Fmvvm-%E6%88%96-mvp-%E5%8F%88%E6%88%96-mvc%E7%9A%84%E5%90%AB%E4%B9%89%E4%BB%A5%E5%8F%8A%E5%8E%9F%E7%90%86">请说出前端框架设计模式(MVVM 或 MVP 又或 MVC)的含义以及原理</a></li>
<li><a href="#%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E7%83%AD%E6%9B%B4%E6%96%B0%E7%9A%84%E4%BC%98%E5%8C%96%E6%96%B9%E5%BC%8F">开发环境热更新的优化方式</a></li>
<li><a href="#amd-%E5%92%8C-cmd-%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8C%BA%E5%88%AB">AMD 和 CMD 有哪些区别？</a></li>
<li><a href="#%E4%BD%A0%E6%98%AF%E6%80%8E%E4%B9%88%E9%85%8D%E7%BD%AE%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E7%9A%84">你是怎么配置开发环境的？</a></li>
<li><a href="#%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0-webpack-%E6%8C%81%E4%B9%85%E5%8C%96%E7%BC%93%E5%AD%98">如何实现 webpack 持久化缓存</a></li>
<li><a href="#webpack-%E5%81%9A%E8%BF%87%E5%93%AA%E4%BA%9B%E4%BC%98%E5%8C%96%E5%BC%80%E5%8F%91%E6%95%88%E7%8E%87%E6%96%B9%E9%9D%A2%E6%89%93%E5%8C%85%E7%AD%96%E7%95%A5%E6%96%B9%E9%9D%A2%E7%AD%89%E7%AD%89">webpack 做过哪些优化，开发效率方面、打包策略方面等等</a></li>
</ul>
<h3>说下 webpack 的 loader 和 plugin 的区别，都使用过哪些 loader 和 plugin</h3>
<p>公司：阿里、滴滴、挖财</p>
<p>分类：工程化</p>
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
  