
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h2>字符串</h2>
<ul>
<li>写一个方法去掉字符串中的空格</li>
<li>写一个函数，在给定一个url字符串获取参数的方法</li>
<li>写一个函数，判断是否回文</li>
<li>写一个函数，实现字符串的反转</li>
<li>写一个函数，实现两个大数相加</li>
<li>写一个函数，判断一个字符串是否为另一个字符串的子串</li>
<li>写一个函数，计算两个字符串的公共子串</li>
<li>写一个函数，实现颜色转换 'rgb(255, 255, 255)' -> '#FFFFFF' 的多种思路</li>
</ul>
<pre><code class="language-js">const rgb2hex=(rgb)=>{
  const rgbList = rgb.match(/\d+/g);
  const hex = (n) => {
    return (&quot;0&quot; + Number(n).toString(16)).slice(-2);
  }
  return rgbList.reduce((pre,cur)=>pre+hex(cur),'#').toUpperCase()
}

//测试
console.log(rgb2hex('rgb(255,255,255)'));
</code></pre>
<ul>
<li>写一个函数，实现颜色转换 '#FFFFFF' -> 'rgb(255, 255, 255)' 的多种思路</li>
</ul>
<pre><code class="language-js">const hex2rgb=(hex)=>{
  const ret = [];
  for(let i=1;i<hex.length;i+=2){
    const str = '0x'+String(hex[i])+String(hex[i+1]);
    ret.push(parseInt(str));
  }
  return 'rgb('+ret.join(',')+')';
}
//测试
console.log(hex2rgb('#000000'));
</code></pre>
<ul>
<li>实现normalize函数，能将输入的特定的字符串转化为特定的结构化数据，字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。示例一: 'abc' --> {value: 'abc'}。示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}</li>
</ul>
`}}></div>
  }
  