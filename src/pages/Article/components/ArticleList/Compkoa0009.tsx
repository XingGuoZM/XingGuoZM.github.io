
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<p>使用koa写一个http服务器</p>\n<pre><code class=\"language-js\">const Koa = require('koa');\nconst route = require('koa-route');\nconst serve = require('koa-static');\nconst path = require('path');\n\nconst app = new Koa();\nconst home = serve(path.join(__dirname), '/public/');\n\nconst res = ctx => {\n  ctx.response.body = '<h1>hello Koa</h1>';\n}\n\napp.use(home);\napp.use(route.get('/', res));\n\napp.listen(3000);\n</code></pre>\n<h3>koa与洋葱模型</h3>\n"}}></div>
  }
  