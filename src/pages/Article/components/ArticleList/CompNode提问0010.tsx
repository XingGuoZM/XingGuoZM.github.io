
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<ol>\n<li>使用Node.js创建一个http server，监听端口3000，如果请求接口是/users且是post请求，则返回{&quot;status&quot;:200,&quot;message&quot;:&quot;Hello World!&quot;},否则返回{&quot;status&quot;:400,&quot;message&quot;:&quot;request error&quot;}；使用koa怎么实现？</li>\n</ol>\n<p>node实现</p>\n<pre><code class=\"language-js\">const http = require('http');\n\nconst server = http.createServer((req,res)=>{\n  if(req.method === 'POST' &amp;&amp; req.url === '/users'){\n    res.end(JSON.stringify({data:{&quot;status&quot;:200,&quot;message&quot;:&quot;Hello World!&quot;}}))\n  }else{\n    res.end(JSON.stringify({&quot;status&quot;:400,&quot;message&quot;:&quot;request error&quot;}))\n  }\n});\n\nserver.listen(3000);\n</code></pre>\n<p>koa实现</p>\n<pre><code></code></pre>\n"}}></div>
  }
  