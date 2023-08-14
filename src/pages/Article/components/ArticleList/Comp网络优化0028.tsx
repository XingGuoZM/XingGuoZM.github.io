
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h1>网络优化</h1>\n<h3>缩短请求时间</h3>\n<ol>\n<li>减少DNS查询</li>\n<li>CND加速</li>\n<li>开启HTTP缓存</li>\n<li>DNS预解析/资源预加载</li>\n</ol>\n<h3>减少请求数量</h3>\n<ol>\n<li>请求合并</li>\n<li>按需加载</li>\n<li>重复请求处理</li>\n<li>合理缓存接口数据</li>\n</ol>\n<h3>减少请求体积</h3>\n<ol>\n<li>请求资源压缩</li>\n<li>HTTP压缩</li>\n<li>图片格式转换（webP等）</li>\n<li>合理的请求头的Cookie处理</li>\n</ol>\n"}}></div>
  }
  