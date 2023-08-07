
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>常见正则汇总</h1>
<pre><code class="language-js">// 验证手机号:现在虚拟号码的使用，所以第二位也不似以前的3|4|5|8的固定，所以此处是选择的3-9
let telReg = /^1[3-9][0-9]{9}$/

// 验证邮箱
let mailReg =  /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/
</code></pre>
`}}></div>
  }
  