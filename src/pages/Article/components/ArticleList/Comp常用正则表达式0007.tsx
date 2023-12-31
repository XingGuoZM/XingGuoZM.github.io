
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h1>常见正则汇总</h1>\n<pre><code class=\"language-js\">// 匹配手机号:现在虚拟号码的使用，所以第二位也不似以前的3|4|5|8的固定，所以此处是选择的3-9\nlet telReg = /^1[3-9][0-9]{9}$/\n// 匹配身份证\nlet IdCardReg = /^[1-9]\\d{5}(18|19|20)\\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$/\n// 匹配邮箱\nlet mailReg =  /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/\n\n// 匹配颜色\nlet colorReg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g\n\n// 匹配ip地址\n// 匹配html标签\n// 匹配中文\nlet chineseReg = /[\\u4e00-\\u9FFF]/g\n</code></pre>\n"}}></div>
  }
  