
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h3>Date对象</h3>\n<ol>\n<li>Date构造函数参数问题\n当没有提供参数时，新创建的 Date 对象代表当前的日期和时间\n当提供一个参数时，时间戳（数字）、符合规范的日期的字符串、日期对象</li>\n</ol>\n<pre><code class=\"language-js\">new Date()\nnew Date(value) // 数值\nnew Date(dateString)// 字符串\nnew Date(dateObject) // 日期对象\n</code></pre>\n<ol start=\"2\">\n<li>Date产生的时间戳\n只能精确到秒，通过Date对象来获取时间戳的方式有</li>\n</ol>\n<pre><code class=\"language-js\">const date = new Date()\n// 第一种\ndate.getTime()\n// 第二种\nDate.now();\n</code></pre>\n<ol start=\"3\">\n<li>\n<p>UTC世界时间和本地时间问题，时区问题\n全球分为24个时区，每间隔一个小时分为一个时区。我们所处的时区是东八区，东增西减的原则，东边时间更快，西边时间更慢，所以东8区比0时区快8个小时，即0时区凌晨的时候，我们已经上午8点了。</p>\n</li>\n<li>\n<p>Date() 构造函数可以创建一个 Date 实例或返回代表当前时间的字符串。即new创建的时间对象都是当前时间（当前时区）</p>\n</li>\n</ol>\n<h3>在浏览器和node环境怎么获取更加精准的时间</h3>\n<p>浏览器window.performance,例如通过performance.now()可以返回一个精确到毫秒的 DOMHighResTimeStamp</p>\n<p>Node.js process 模块中有一个名为 hrtime.bigint() 的方法以毫微秒为单位返回当前高分辨率实时值作为 bigint。\n与 process.hrtime() 方法不同，它不支持额外的时间参数，因为差可以通过两个 bigint 的减法直接计算。</p>\n<p>Date.now() ≈ performance.timing.navigationStart + performance.now()</p>\n<h3>day.js</h3>\n"}}></div>
  }
  