
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
<li>写一个函数，去除字符串中的空格</li>
</ul>
<pre><code class="language-js">// 方法一
const replaceEmpty = (str) => {
  return str.replace(/ /g, '');
}
</code></pre>
<ul>
<li>写一个函数，在给定一个url字符串获取参数的方法</li>
</ul>
<pre><code class="language-js">const getUrlParams = (str) => {

  const paramArr = str.split('?')[1].split('&amp;');
  const obj = {};
  for (const item of paramArr) {
    const arr = item.split('=');
    if (!arr[1]) {
      obj[arr[0]] = true;
    } else {
      obj[arr[0]] = arr[1];
    }
  }
  return obj;
}

console.log(getUrlParams('https://baidu.com?a=1&amp;b=undefined&amp;c'))
</code></pre>
<ul>
<li>写一个函数，判断是否回文</li>
</ul>
<pre><code class="language-js">const isPalindrome = (str) => {
  let left = 0, right = str.length - 1;
  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('abd ba'))
</code></pre>
<ul>
<li>写一个函数，实现字符串的反转</li>
</ul>
<pre><code class="language-js">// 方法一
const strReverse1 = (str) => {
  return str.split('').reverse().join('');
}
// 方法二
const strReverse2 = (str) => {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
</code></pre>
<ul>
<li>写一个函数，实现两个大数相加</li>
</ul>
<pre><code class="language-js">const sum = (a, b) => {
  const len = Math.max(a.length, b.length);
  a = a.padStart(len, '0')
  b = b.padStart(len, '0')
  let curry = 0;
  let result = ''
  for (let i = len - 1; i >= 0; i--) {
    const sum = +a[i] + +b[i] + curry;

    result = sum % 9 + result;
    curry = Math.floor(sum / 9);
  }
  return curry ? curry + result : result;
}
//测试
console.log(sum('123456789099888','111111111111111111111111111111111111'));
</code></pre>
<ul>
<li>写一个函数，判断一个字符串是否为另一个字符串的子串</li>
</ul>
<pre><code class="language-js">// 方式一
const isSubStr1 = (str1, str2) => {
  const longStr = str1.length > str2.length ? str1 : str2;
  const shortStr = str1.length < str2.length ? str1 : str2;

  return longStr.indexOf(shortStr) > -1 ? true : false;
}
// 方式二
const isSubStr2 = (str1, str2) => {
  const longStr = str1.length > str2.length ? str1 : str2;
  const shortStr = str1.length < str2.length ? str1 : str2;

  for (let i = 0; i < longStr.length - shortStr.length; i++) {
    const s = longStr.slice(i, shortStr.length);
    if (s === shortStr) {
      return true;
    }
  }
  return false;
}
// 方式三
const isSubStr3 = (str1, str2) => {
  return str1.includes(str2) || str2.includes(str1);
}
</code></pre>
<ul>
<li>写一个函数，计算两个字符串的公共子串</li>
</ul>
<pre><code></code></pre>
<ul>
<li>写一个函数，实现字符串数字的格式化，例如100000->100,000</li>
</ul>
<pre><code class="language-js">// 方式一：正则
const formatNumStr = (numStr) => {
  return numStr.replace(/(?=\B(\d{3})+$)/g, ',')
}

console.log(formatNumStr('100000000'))
</code></pre>
<ul>
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
  