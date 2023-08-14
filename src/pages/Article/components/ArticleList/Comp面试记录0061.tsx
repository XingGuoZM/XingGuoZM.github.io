
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<p>7.28</p>\n<ol>\n<li>你的性能优化怎么做的</li>\n<li>http缓存</li>\n<li>写过哪些react自定义hook？怎么做的？</li>\n<li>说一说useState？</li>\n<li>react-router了解吗？操作权限和页面权限怎么做？</li>\n<li>前端跨域问题？怎么解决？</li>\n<li>类组件和函数组件区别？优化</li>\n<li>说一说函数式编程？函数柯里化是什么？</li>\n<li></li>\n</ol>\n<p>8.3</p>\n<ol>\n<li>性能优化怎么做的，webpack tree-shaking，优化之后包体积、webpack热更新</li>\n<li>说一说es6 map和set、weakmap和weakset</li>\n<li>怎么解决跨域问题</li>\n<li>react渲染优化</li>\n<li>怎么渲染一颗树</li>\n<li>vue的好用的地方</li>\n<li>vue更新引用类型</li>\n</ol>\n"}}></div>
  }
  