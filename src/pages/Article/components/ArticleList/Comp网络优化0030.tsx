
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h1>网络优化</h1>\n<h3>网络请求过程</h3>\n<p>理解OSI七层网络模型，尤其是应用层、传输层和网络层</p>\n<p>HTTP</p>\n<p>DNS查询\n浏览器向域名服务器发起DNS查询请求，得到一个ip地址，第一次请求之后，这个ip地址会缓存一段时间，这对加速后面的DNS查询。通过主机名加载一个页面通常只需要一次DNS查询</p>\n<p>DNS劫持</p>\n<p>TCP握手\n浏览器与服务器之间通过三次握手建立连接，通过这个机制让两端尝试进行通信，可以在上层协议（如https）在发送数据之前，可以协商网络套接字连接的一些参数。</p>\n<p>3次握手和4次挥手</p>\n<p>TLS协商\n为了建立安全连接，TLS协商是另一种握手，它的作用是协商在通信过程中数据的加密方式，牺牲等待时间来换取安全的连接，保证数据不被第三方解密。</p>\n<p>对称加密和非对称加密</p>\n<p>发出请求，服务器处理数据，响应返回\n对于网站来说，第一个响应通常是一个html文件，发出请求到收到第一个html数据包的时间称为TTFB</p>\n<p>状态码\n响应头：缓存</p>\n<p>TCP慢启动和拥塞控制\n慢启动即第一个响应数据包的大小约为14kb，后面逐渐增加发送数据的数量（后面的数据包大小依次是前一个的2倍）直到达到网络的最大带宽。服务器通过TCP数据包发送数据时，客户端通过返回确认帧来确认传输，由于连接容量有限，服务器如果短时间发送大量包，那么有些包就会被丢弃，这些被丢弃的包就不会返回确认帧。服务器通过发送包和确认帧来确定发送速率。</p>\n<h3>缩短请求时间</h3>\n<p>DNS和CND，</p>\n<ol>\n<li>不走传统的DNS解析（运营商本地的DNS服务器），自己搭建基于 HTTP 协议的 DNS 服务器集群</li>\n<li>静态资源上CDN，加速下载</li>\n<li>DNS预解析/资源预加载\nHTTP缓存</li>\n<li>强缓存：通过HTTP请求头 cache-control字段的max-age和expires来控制失效时间</li>\n<li>协商缓存：Last-Modified/If-Modify-Since、Etag/If-None-Match\n当浏览器第一次向服务器请求资源时，服务器会在该资源的请求头中加上Last-Modified，表示该资源最新的修改时间。当浏览器再次请求该资源时，会在请求头带上If-Modify-Since，Last-Modify和If-Modify-Since是同一个时间。服务器收到If-Modify-Since和该资源的当前最新的修改时间对比，相等则返回304</li>\n</ol>\n<p>Etag/If-None-Match和Last-Modified/If-Modify-Since类似，浏览器第一次请求，服务器返回一个标识存到Etag中，后面浏览器再请求时，把它通过If-None-Match字段回传回去，改变了就重新返回，没有则返回304。Etag标识着资源在服务器的唯一性</p>\n<p>两者比较</p>\n<ul>\n<li>Last-Modified标注只能精确到秒级</li>\n<li></li>\n</ul>\n<h3>减少请求数量</h3>\n<ol>\n<li>请求合并</li>\n<li>按需加载</li>\n<li>重复请求处理</li>\n<li>合理缓存接口数据</li>\n</ol>\n<h3>减少请求体积</h3>\n<ol>\n<li>请求资源压缩</li>\n<li>HTTP压缩</li>\n<li>图片格式转换（webP等）</li>\n<li>合理的请求头的Cookie处理</li>\n</ol>\n"}}></div>
  }
  