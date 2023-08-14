
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h1>常用的loader和plugin</h1>\n<h3>常用的loader</h3>\n<ol>\n<li>style-loader、css-loader、less-loader</li>\n<li>babel-loader、ts-loader</li>\n<li>url-loader</li>\n</ol>\n<h3>常用的plugin</h3>\n<ol>\n<li>CleanWebpackPlugin、htmlWebpackPlugin</li>\n</ol>\n"}}></div>
  }
  