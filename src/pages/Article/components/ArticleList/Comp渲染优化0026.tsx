
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h1>渲染优化</h1>\n<p>html解析渲染过程</p>\n<pre><code>1. 解析HTML得到DOM树，解析CSS得到CSSOM树\n2. 将DOM树和CSSOM树结合得到渲染树（Render Tree）\n3. 布局（Layout）：根据生成的渲染树，进行布局得到节点的几何信息（位置、大小）\n4. 绘制（Painting）：根据渲染树及布局得到的几何信息，得到节点的绝对像素\n5. 展示（Display）：将像素发给GPU，GPU会将多个合成层合并为一个层，展示在页面上\n</code></pre>\n<h3>首屏直出渲染</h3>\n<ol>\n<li>首屏尽量是静态页面</li>\n<li>首屏服务端渲染</li>\n</ol>\n<h3>防止阻塞渲染</h3>\n<ol>\n<li>css优先加载和解析，js延迟加载</li>\n<li>script标签 defer和async</li>\n</ol>\n<h3>减少重绘和回流</h3>\n<ol>\n<li>使用transform来完成动画</li>\n<li>批量修改dom（fragment）</li>\n</ol>\n"}}></div>
  }
  