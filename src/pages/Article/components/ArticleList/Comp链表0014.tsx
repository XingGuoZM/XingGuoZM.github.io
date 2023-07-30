
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h3>链表</h3>
<ul>
<li>用js实现一个链表，包括创建、增删改查操作</li>
</ul>
<pre><code class="language-js">
</code></pre>
<ul>
<li>写一个函数判断链表是否有环</li>
<li>写一个函数实现链表反转</li>
</ul>
`}}></div>
  }
  