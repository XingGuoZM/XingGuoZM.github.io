
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h1>图片</h1>\n<h3>图片基础知识</h3>\n<p>rgb、rgba</p>\n<p>常见图片的格式：jpeg、png、apng、webp</p>\n<p>base64和blob</p>\n<h3>各种格式图片特点</h3>\n<p>jpg：色彩丰富\npng:色彩较为简单，包含透明通道\nwebp：体积小</p>\n"}}></div>
  }
  