
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h3>h5离线包的原理</h3>\n<h3>客户端根据什么拦截静态资源请求</h3>\n<h3>jsbridge的原理，这套方案的优缺点？安全漏洞？</h3>\n<h3>怎么判断webview是否已经加载完成</h3>\n"}}></div>
  }
  