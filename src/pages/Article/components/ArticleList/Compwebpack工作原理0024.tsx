
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>webpack工作原理</h1>
<p>webpack是一个js模块打包工具，通过js模块之间导入导出的依赖关系，构建依赖网络、静态分析来打包合并。其基本原理：</p>
<pre><code>1. 获取参数，根据参数初始化编译器（compiler）
2. 根据entry配置找到入口文件
3. 编译，调用所有配置的loader对文件进行转化，递归，最终得到处理后的内容和他们的依赖关系
4. 根据配置输出路径和文件名，将内容写入文件
</code></pre>
<h3>工程化历史</h3>
<p>fis
browserify+Gulp（基本文件流操作）</p>
<h3>webpack作用（解决了什么问题/产生了什么影响/核心的几个版本迭代）</h3>
<p>webpack专注于js模块打包，</p>
<h3>webpack特点（独特之处和不足之处）</h3>
<p>webpack最核心的部分就是通过js模块之间依赖来打包目标文件，并且通过loader体系支持不同的模块，插件体系扩展额外功能。</p>
<p>webpack是基于前端模块化的并且js模块之间具有充分的依赖关系</p>
<h3>webpack如何应对新起的工具</h3>
<p>rollup
vite</p>
`}}></div>
  }
  