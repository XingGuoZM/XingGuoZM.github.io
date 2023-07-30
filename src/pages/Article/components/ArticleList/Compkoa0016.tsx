
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<p>使用koa写一个http服务器</p>
<pre><code class="language-js">const Koa = require('koa');
const route = require('koa-route');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();
const home = serve(path.join(__dirname), '/public/');

const res = ctx => {
  ctx.response.body = '<h1>hello Koa</h1>';
}

app.use(home);
app.use(route.get('/', res));

app.listen(3000);
</code></pre>
<h3>koa与洋葱模型</h3>
`}}></div>
  }
  