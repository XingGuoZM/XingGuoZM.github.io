
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<p>动态语言在程序运行的时候才知道变量的类型，在代码运行期间可能会发生与类型相关的错误，为了尽可能的避免这样的问题发生，于是有了Typescript。</p>\n<p>ts优点</p>\n<ol>\n<li>代码的规范约束：主要在于约束，能更准确的表达出写代码人的意图</li>\n<li>代码可阅读性：一般来说命名+输入输出的类型定义可以大致猜测出某段代码的用途，我们都知道js类型隐式转换非常恶心，如果加上类型约束，那么阅读门槛将会降低一个档次。</li>\n</ol>\n"}}></div>
  }
  