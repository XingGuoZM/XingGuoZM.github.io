
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<ul>\n<li>css实现一个扇形</li>\n<li>css实现一个三角形</li>\n<li>css实现一个水波纹效果</li>\n<li>动手实现一个左右固定100px，中间自适应的三列布局？(至少三种)</li>\n<li>屏幕占满和未占满的情况下，使 footer 固定在底部，尽量多种方法</li>\n<li>Css 实现多列等高布局，要求元素实际占用的高度以多列中较高的为准</li>\n</ul>\n"}}></div>
  }
  