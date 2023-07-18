
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>Hooks</h1>
<h2>历史</h2>
<p>mvc软件架构模式</p>
<p>Backbone</p>
<ul>
<li><a href="https://www.zhihu.com/question/19720745/answer/14315565">Backbone.js 的最佳应用场景有哪些？</a></li>
</ul>
<h3>React作用（解决了什么问题/产生什么影响/核心的几个版本）</h3>
<p>react提出了全新的组织代码的方式，使其更可预测，即页面组件化。并且加入了DOM diff，当DOM发生变化时，通过dom diff算法计算出变化点，以最小粒度更新。通过将用户界面拆分成更细粒度的包含逻辑代码段的组件描述来减少构建UI时发生的错误。</p>
<p>react核心版本16.8，全新的Fiber架构、加入Hook</p>
<h3>React特点（优缺点）</h3>
<p>react是一个组件化、单向数据流、支持函数式编程、基于Virtual DOM、专注视图层的UI框架，其优点是代码逻辑简单、性能出众、能和其他库一起使用，渲染到特定的环境。由于其特定的更新方式，非常容易造成重渲染，导致不需要更新的组件更新了</p>
<h3>应对后来的框架</h3>
<p>preact：能实现react的核心功能，体积比react小很多</p>
<p>vue：mvvm框架，能达到视图细粒度的更新</p>
<p>solid：去除Virtual DOM
svelet：去除Virtual DOM</p>
`}}></div>
  }
  