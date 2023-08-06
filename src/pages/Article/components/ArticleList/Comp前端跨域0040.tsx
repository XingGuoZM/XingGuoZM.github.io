
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h3>提问？</h3>
<ol>
<li>前端发送请求的方式
ajax（xmlhttprequest）、fetch、websocket</li>
</ol>
<p>fetch会发生跨域吗？</p>
<h3>是什么？为什么？</h3>
<p>跨域是指浏览器允许向服务器发送跨域请求，从而克服Ajax只能同源使用的限制。同源策略是一种约定，是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSRF等攻击。所谓同源是指&quot;协议+域名+端口&quot;三者相同。</p>
<p>同源策略限制以下几种行为：</p>
<p>Cookie、LocalStorage 和 IndexDB 无法读取
DOM和JS对象无法获得
AJAX 请求不能发送</p>
<h3>怎么办？</h3>
<ol>
<li>jsonp</li>
</ol>
<p>动态构建script标签，通过src向服务器发送请求，</p>
<ol start="2">
<li>
<p>跨域资源共享
Access-Control-Allow-Origin: *</p>
</li>
<li>
<p>nginx反向代理</p>
</li>
</ol>
<pre><code>#proxy服务器
server {
    listen       81;
    server_name  www.domain1.com;

    location / {
        proxy_pass   http://www.domain2.com:8080;  #反向代理
        proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名
        index  index.html index.htm;

        # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
        add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*
        add_header Access-Control-Allow-Credentials true;
    }
}
</code></pre>
<ol start="4">
<li></li>
</ol>
`}}></div>
  }
  