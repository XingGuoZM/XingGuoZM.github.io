
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h3>提问？</h3>\n<ol>\n<li>前端发送请求的方式\najax（xmlhttprequest）、fetch、websocket</li>\n</ol>\n<p>fetch会发生跨域吗？</p>\n<h3>是什么？为什么？</h3>\n<p>跨域是指浏览器允许向服务器发送跨域请求，从而克服Ajax只能同源使用的限制。同源策略是一种约定，是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSRF等攻击。所谓同源是指&quot;协议+域名+端口&quot;三者相同。</p>\n<p>同源策略限制以下几种行为：</p>\n<p>Cookie、LocalStorage 和 IndexDB 无法读取\nDOM和JS对象无法获得\nAJAX 请求不能发送</p>\n<h3>怎么办？</h3>\n<ol>\n<li>jsonp</li>\n</ol>\n<p>动态构建script标签，通过src向服务器发送请求，</p>\n<ol start=\"2\">\n<li>\n<p>跨域资源共享\nAccess-Control-Allow-Origin: *</p>\n</li>\n<li>\n<p>nginx反向代理</p>\n</li>\n</ol>\n<pre><code>#proxy服务器\nserver {\n    listen       81;\n    server_name  www.domain1.com;\n\n    location / {\n        proxy_pass   http://www.domain2.com:8080;  #反向代理\n        proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名\n        index  index.html index.htm;\n\n        # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用\n        add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*\n        add_header Access-Control-Allow-Credentials true;\n    }\n}\n</code></pre>\n<ol start=\"4\">\n<li></li>\n</ol>\n"}}></div>
  }
  