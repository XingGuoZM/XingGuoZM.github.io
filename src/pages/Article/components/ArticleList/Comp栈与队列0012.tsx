
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h3>栈和队列</h3>
<hr>
<ul>
<li>
<p>使用栈实现队列</p>
</li>
<li>
<p>判断括号是否是匹配（“(){()[{}]} ()({}) {()}[]{()} [{{[()]}}]”）</p>
</li>
</ul>
<pre><code class="language-js">const map = {
  '(': ')',
  '[': ']',
  '{': '}'
}

const isValid = (str) => {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const top = stack.length > 0 ? stack[stack.length - 1] : null
    if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      if (map[top] !== str[i]) {
        return false;
      } else {
        stack.pop();
      }
    } else if (map[str[i]]) {
      stack.push(str[i]);
    }
  }
  return stack.length === 0;
}

const str = '(){()[{}]} ()({}) {()}[]{()} [{{[()]}}]';
console.log(isValid(str))
</code></pre>
`}}></div>
  }
  