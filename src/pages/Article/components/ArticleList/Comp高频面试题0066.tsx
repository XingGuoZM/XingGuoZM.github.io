
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h3>js相关</h3>\n<ul>\n<li>事件循环，promise</li>\n<li>作用域，闭包</li>\n<li>引用类型，对象</li>\n</ul>\n<h3>css相关</h3>\n<ul>\n<li>position</li>\n<li>flex</li>\n</ul>\n<h3>react相关</h3>\n<ul>\n<li>setState</li>\n<li>hook</li>\n<li>fiber</li>\n<li>合成事件</li>\n<li>diff</li>\n</ul>\n<h3>hybrid h5</h3>\n<ul>\n<li>native和web通信</li>\n<li>jsbridge</li>\n<li>浏览器渲染过程</li>\n</ul>\n<h3>typescript</h3>\n<ul>\n<li>type和interface对比</li>\n<li>泛型</li>\n</ul>\n<h3>网络</h3>\n<ul>\n<li>http各个版本对比</li>\n<li>http缓存</li>\n<li>http握手过程</li>\n<li>https</li>\n<li>网络安全</li>\n</ul>\n<h3>webpack</h3>\n<ul>\n<li>loader和plugin区别</li>\n<li>webpack打包过程</li>\n<li></li>\n</ul>\n<h3>数据结构与算法</h3>\n<ul>\n<li>查找数组中第二大的项</li>\n<li>排序的时间复杂度</li>\n</ul>\n<h3>项目</h3>\n<ul>\n<li>如何做性能优化</li>\n<li>怎么排查问题，查错的过程</li>\n<li></li>\n</ul>\n"}}></div>
  }
  