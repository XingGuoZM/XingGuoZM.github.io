
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>包体积优化</h1>
<h3>tree-shaking</h3>
<ol>
<li>/<em>#_<em>PURE</em>_</em>/标识无副作用的代码段</li>
</ol>
<h3>压缩</h3>
<ol>
<li>js压缩：terser-webpack-plugin</li>
<li>css压缩：css-minimizer-webpack-plugin</li>
</ol>
<h3>代码分割</h3>
<ol>
<li>入口配置</li>
<li>import函数或者require.ensure函数
<!-- 1. 公共包分离</li>
<li>模块懒加载 --></li>
</ol>
<h3>减小第三方包的引入</h3>
`}}></div>
  }
  