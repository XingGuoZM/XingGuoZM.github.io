
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h3>经验</h3>
<ol>
<li>熟练掌握Javascript，能脱离框架进行原生开发，熟悉Typescript</li>
<li>熟练使用React框架以及相关生态技术，能独立完成项目的搭建和项目部署</li>
<li>熟悉浏览器原理以及计算机网络相关技术，在性能优化方面有较多实践经验</li>
<li>对前端工程化/模块化有一定了解，熟悉webpack、rollup等打包工具及其日常开发配置，有过从0到1的独立搭建项目经验，并优化构建流程</li>
<li>了解vue框架技术，有相关实践经验</li>
<li>了解node.js和常用模块，</li>
</ol>
<h3>大流量下前端页面优化</h3>
<ol>
<li>服务器瘫痪，前端请求不到数据，对前端页面的容错容灾有更高的要求</li>
<li>大流量意味着各种终端都可能存在，高中低端机适配，兼容性的要求</li>
<li>服务器压力大，前端需要做一些措施,前端层面缓解服务器压力的方式有</li>
</ol>
<p>请求数量精简（合并）：同类型文件/请求合并，例如请求合并，js、css模块合并，图片雪碧图等方式，合并影响下载速率</p>
<p>请求大小精简（压缩）：各种资源的压缩，例如js、css、html等文件进行去空格、精简变量名、哈夫曼编码操作，图片可以转换格式和图片压缩算法。压缩影响代码可读性，影响线上问题定位，压缩算法局限性会造成某些平台无法使用，兼容</p>
<p>缓存，分流请求：http cache、localstorage、离线包等，缓存影响资源时效性</p>
<p>针对以上优化手段，有利有弊，需要对其进行更细粒度的差异化分解，然后对每个部分使用最优的方式进行处理</p>
<h3>组件封装</h3>
<ul>
<li>实现一个自由拖动组件</li>
<li>实现一个多弹窗管理组件</li>
<li>实现一个虚拟列表</li>
</ul>
<h3>常见面试题</h3>
<ol>
<li>重复提交</li>
<li>请求先后顺序</li>
<li>数据解析和页面缓存</li>
<li>路由懒加载</li>
<li>前端的存储方案</li>
<li>断网/弱网处理</li>
<li>白屏</li>
<li>组件封装</li>
<li>数据持久化</li>
<li>性能优化-图片处理</li>
</ol>
`}}></div>
  }
  