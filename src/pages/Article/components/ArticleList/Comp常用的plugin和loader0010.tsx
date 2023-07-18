
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>常用的loader和plugin</h1>
<h3>常用的loader</h3>
<ol>
<li>style-loader、css-loader、less-loader</li>
<li>babel-loader、ts-loader</li>
<li>url-loader</li>
</ol>
<h3>常用的plugin</h3>
<ol>
<li>CleanWebpackPlugin、htmlWebpackPlugin</li>
</ol>
`}}></div>
  }
  