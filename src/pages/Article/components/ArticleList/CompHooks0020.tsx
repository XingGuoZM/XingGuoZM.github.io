
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
<h3>来源</h3>
<p>为细粒度的代码复用，不和组件复用捆绑在一起。HOC和Render Props都是基于组件的组合方案，先把要复用的逻辑封装成组件，再利用组件复用机制实现逻辑复用。将函数当成最小的代码复用单元同时内置一些模式简化状态逻辑复用</p>
<h3>Hook不足</h3>
<ol>
<li>额外学习成本，函数组件和类组件的比较</li>
<li>写法限制，增加重构成本</li>
<li>破坏了PureComponent、React.memo浅比较的性能优化效果</li>
<li>闭包场景可能引用到旧的state、props值</li>
<li>内部实现上不直观，依赖一份可变的全局状态，不再那么pure</li>
<li>React.memo并不能完全替代ShouldComponentUpdate（拿不到state change，只针对props change）</li>
<li>useState API设计上不完美（初始化、可选链、闭包陷阱、引用类型、多个状态）</li>
</ol>
`}}></div>
  }
  