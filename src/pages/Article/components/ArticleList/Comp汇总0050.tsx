
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<p>7.28</p>
<ol>
<li>你的性能优化怎么做的</li>
<li>http缓存</li>
<li>写过哪些react自定义hook？怎么做的？</li>
<li>说一说useState？</li>
<li>react-router了解吗？操作权限和页面权限怎么做？</li>
<li>前端跨域问题？怎么解决？</li>
<li>类组件和函数组件区别？优化</li>
<li>说一说函数式编程？函数柯里化是什么？</li>
<li></li>
</ol>
<p>8.3</p>
<ol>
<li>性能优化怎么做的，webpack tree-shaking，优化之后包体积、webpack热更新</li>
<li>说一说es6 map和set、weakmap和weakset</li>
<li>怎么解决跨域问题</li>
<li>react渲染优化</li>
<li>怎么渲染一颗树</li>
<li>vue的好用的地方</li>
<li>vue更新引用类型</li>
</ol>
`}}></div>
  }
  