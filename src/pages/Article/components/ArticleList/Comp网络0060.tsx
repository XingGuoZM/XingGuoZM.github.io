
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<ul>\n<li>get和post区别</li>\n</ul>\n<pre><code>get表示读取一个资源，反复读取不应该对访问的数据有副作用（幂等）。幂等代表着非常有利于做缓存，可以对GET请求的数据做缓存，浏览器也是默认会对get请求做缓存的\n\npost表示创建一个资源，有副作用的、不幂等的，因此也不能缓存。\n</code></pre>\n<ul>\n<li>多个请求，返回数据共用一个面板（返回数据展示在同一个地方），先发起的后响应，如何解决</li>\n</ul>\n"}}></div>
  }
  