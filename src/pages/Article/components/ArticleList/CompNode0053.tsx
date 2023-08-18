
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<ul>\n<li>说下你对 Node.js 支持高并发的理解？</li>\n<li>说下 Node 文件查找的优先级以及 Require 方法的文件查找策略</li>\n<li>说一下进程和线程的区别？</li>\n<li>node 如何做错误监控？如何生成日志？日志等级如何划分？</li>\n<li>Node 如何和 MySQL 进行通信</li>\n<li>说一下 koa-body 的原理</li>\n<li>说一下 koa2 和 express 区别</li>\n<li>node 中间层怎样做的请求合并转发</li>\n<li>React SSR实现过程？原理是什么？有什么注意事项？</li>\n<li>Node性能如何进监控以及优化？</li>\n<li>node 如何进行跨域通信</li>\n<li>介绍 node 文件查找优先级</li>\n<li>npm2 和 npm3+有什么区别</li>\n<li>node 接口转发有无做什么优化？node 起服务如何保证稳定性，平缓降级，重启等</li>\n<li>使用过的 koa2 中间件，中间件的原理是什么？</li>\n<li>介绍 koa2，原理是什么？</li>\n<li>koa2 和 express 区别</li>\n<li>node 中间层怎样做的请求合并转发</li>\n<li>如何封装 node 中间件</li>\n</ul>\n"}}></div>
  }
  