
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h1>离线包</h1>\n<p>离线包就是将html/js/css预先打包好提前下发到app本地，app加载网页的时候实际上是从本地加载，减少了网络请求。离线包技术适用于app内嵌h5页面。</p>\n<p>离线包的出现主要是为了解决native+h5混合开发模式中加载h5页面的白屏问题</p>\n<h3>参考</h3>\n<ul>\n<li><a href=\"https://juejin.cn/post/7119662876578545678\">货拉拉 Android H5离线包原理与实践</a></li>\n</ul>\n"}}></div>
  }
  