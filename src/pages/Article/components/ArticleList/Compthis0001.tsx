
  import React,{useEffect} from 'react';
 
  import 'highlight.js/styles/xcode.css';
  const hljs = require('highlight.js');

  export default () => {
    useEffect(()=>{
      document.querySelectorAll('code').forEach(el => {
        el.style.backgroundColor='#f8f8f8';
        hljs.highlightElement(el);
      });
    },[])
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>this</h1>
<p>执行上下文对象</p>
<p>this指向的4种情况</p>
<ol>
<li>普通函数调用</li>
<li>对象方法调用</li>
<li>new 构造函数</li>
<li>call、apply和bind</li>
</ol>
`}}></div>
  }
  